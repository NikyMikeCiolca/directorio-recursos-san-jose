import { Directive, ElementRef, OnDestroy, inject, output } from '@angular/core';

/**
 * Emite `inView` cuando el elemento entra en el área visible (con un margen
 * para cargar antes de llegar al final). Mientras siga visible tras cada
 * emisión se vuelve a observar, de forma que pantallas muy altas continúan
 * cargando hasta llenarse; el elemento desaparece cuando ya no queda nada
 * por cargar y la propia directiva se destruye.
 */
@Directive({
    selector: '[appInView]'
})
export class InViewDirective implements OnDestroy {

    readonly inView = output<void>();

    private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    private observer: IntersectionObserver | null = null;
    private retry: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        if (typeof IntersectionObserver === 'undefined') {
            return; // Sin soporte: queda el botón "Cargar más".
        }

        this.observer = new IntersectionObserver(
            entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    this.observer?.unobserve(this.element);
                    this.inView.emit();
                    this.retry = setTimeout(() => this.observer?.observe(this.element), 250);
                }
            },
            { rootMargin: '300px 0px' }
        );

        this.observer.observe(this.element);
    }

    ngOnDestroy(): void {
        if (this.retry) {
            clearTimeout(this.retry);
        }
        this.observer?.disconnect();
        this.observer = null;
    }
}
