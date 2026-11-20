import {
  DestroyRef,
  Signal,
  computed,
  inject,
  linkedSignal,
  signal
} from '@angular/core';

/** Elementos por página / por tanda de carga. */
export const PAGE_SIZE = 6;

/** Por debajo de este ancho se usa paginación clásica; por encima, carga al hacer scroll. */
const COMPACT_QUERY = '(max-width: 768px)';

/** Lo mínimo que necesitan los controles de paginación. */
export interface PagerControls {
  readonly compact: Signal<boolean>;
  readonly total: Signal<number>;
  readonly visibleCount: Signal<number>;
  readonly totalPages: Signal<number>;
  readonly currentPage: Signal<number>;
  readonly hasMore: Signal<boolean>;
  loadMore(): void;
  goTo(page: number): void;
}

export interface Pager<T> extends PagerControls {
  readonly visible: Signal<readonly T[]>;
  /** Hace visible el elemento en la posición `index` (página o tanda que lo contiene). */
  reveal(index: number): void;
}

/**
 * Pagina una lista reactiva.
 *  - Pantallas anchas: acumula tandas (scroll infinito).
 *  - Pantallas estrechas: una página cada vez.
 * Al cambiar la lista (filtros, búsqueda) vuelve solo a la primera página.
 * Debe llamarse en contexto de inyección (campo de la clase del componente).
 */
export function createPager<T>(
  items: Signal<readonly T[]>,
  pageSize: number = PAGE_SIZE
): Pager<T> {
  const destroyRef = inject(DestroyRef);

  const mql =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(COMPACT_QUERY)
      : null;

  const compact = signal(mql?.matches ?? false);

  if (mql) {
    const onChange = (event: MediaQueryListEvent) => compact.set(event.matches);
    mql.addEventListener('change', onChange);
    destroyRef.onDestroy(() => mql.removeEventListener('change', onChange));
  }

  const total = computed(() => items().length);
  const totalPages = computed(() => Math.max(1, Math.ceil(total() / pageSize)));

  // Se reinician a 1 cuando cambia la lista de origen.
  const page = linkedSignal<readonly T[], number>({
    source: items,
    computation: () => 1
  });
  const batches = linkedSignal<readonly T[], number>({
    source: items,
    computation: () => 1
  });

  const currentPage = computed(() => Math.min(page(), totalPages()));

  const visible = computed<readonly T[]>(() =>
    compact()
      ? items().slice((currentPage() - 1) * pageSize, currentPage() * pageSize)
      : items().slice(0, batches() * pageSize)
  );

  const visibleCount = computed(() => visible().length);
  const hasMore = computed(() => !compact() && visibleCount() < total());

  return {
    compact,
    total,
    visibleCount,
    totalPages,
    currentPage,
    visible,
    hasMore,
    loadMore: () => {
      if (hasMore()) {
        batches.update(n => n + 1);
      }
    },
    reveal: (index: number) => {
      if (index < 0) {
        return;
      }
      const needed = Math.floor(index / pageSize) + 1;
      if (compact()) {
        page.set(needed);
      } else {
        batches.update(n => Math.max(n, needed));
      }
    },
    goTo: (target: number) => {
      page.set(Math.min(Math.max(1, Math.trunc(target)), totalPages()));
    }
  };
}

/**
 * Tras cambiar de página: lleva la vista al inicio de la lista y mueve el foco
 * allí (necesario para teclado y lectores de pantalla, que de otro modo se
 * quedarían en el botón pulsado, ahora con contenido distinto).
 */
export function focusAnchor(anchor: HTMLElement | undefined): void {
  if (!anchor) {
    return;
  }
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  anchor.focus({ preventScroll: true });
  anchor.scrollIntoView({
    block: 'start',
    behavior: reduceMotion ? 'auto' : 'smooth'
  });
}
