import { Component, computed, input } from '@angular/core';

import { InViewDirective } from '../../shared/pagination/in-view.directive';
import { PagerControls, focusAnchor } from '../pagination/pager';

interface PageItem {
  key: string;
  page: number | null; // null = puntos suspensivos
}

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',

  
})
export class PaginationComponent {

  readonly pager = input.required<PagerControls>();

  /** Sustantivo en plural para los textos: "recursos", "áreas"... */
  readonly noun = input('resultados');

  /** Elemento al que llevar el foco al cambiar de página. */
  readonly anchor = input<HTMLElement | undefined>(undefined);

  readonly pages = computed<PageItem[]>(() => {
    const { totalPages, currentPage } = this.pager();
    const last = totalPages();
    const current = currentPage();

    if (last <= 7) {
      return Array.from({ length: last }, (_, i) => ({ key: `p${i + 1}`, page: i + 1 }));
    }

    const wanted = new Set([1, last, current - 1, current, current + 1]);
    const numbers = [...wanted].filter(n => n >= 1 && n <= last).sort((a, b) => a - b);

    const items: PageItem[] = [];
    numbers.forEach((n, i) => {
      if (i > 0 && n - numbers[i - 1] > 1) {
        items.push({ key: `gap${n}`, page: null });
      }
      items.push({ key: `p${n}`, page: n });
    });
    return items;
  });

  goTo(page: number | null): void {
    const pager = this.pager();
    if (page === null || page === pager.currentPage()) {
      return;
    }
    pager.goTo(page);
    // Esperar a que se pinte la nueva página antes de mover el foco.
    setTimeout(() => focusAnchor(this.anchor()));
  }

}
