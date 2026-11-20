import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DirectorioService } from '../../services/directorio.service';

import { ResourceCardComponent } from '../../components/resource-card/resource-card.component';
import { ResourceFiltersComponent } from '../../components/resource-filters/resource-filters.component';
import { createPager } from '../../shared/pagination/pager';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

/** Minúsculas y sin tildes, para que «formacion» encuentre «formación». */
function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

@Component({
  selector: 'app-recursos',
  imports: [ResourceCardComponent, ResourceFiltersComponent, PaginationComponent],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css',
})
export class RecursosComponent {

  private readonly directorio = inject(DirectorioService);
  private readonly route = inject(ActivatedRoute);

  readonly searchTerm = signal(
    this.route.snapshot.queryParamMap.get('q') ?? ''
  );

  readonly selectedCategory = signal(
    this.route.snapshot.queryParamMap.get('categoria') ?? ''
  );

  readonly selectedCollective = signal(
    this.route.snapshot.queryParamMap.get('colectivo') ?? ''
  );

  readonly categorias = this.directorio.categorias;

  readonly colectivos = this.directorio.colectivos;

  readonly filteredResources = computed(() => {

    const term = normalizar(this.searchTerm());

    const category = this.selectedCategory();

    const collective = this.selectedCollective();

    return this.directorio.servicios().filter(servicio => {

      const entidad = this.directorio.getEntidad(servicio.entidadId);

      const matchesText = !term || [
        servicio.nombre,
        servicio.descripcion ?? '',
        entidad?.nombre ?? '',
        ...servicio.categoriaIds.map(id => this.directorio.getCategoria(id)?.nombre ?? ''),
        ...servicio.colectivoIds.map(id => this.directorio.getColectivo(id)?.nombre ?? '')
      ].some(value => normalizar(value).includes(term));

      const matchesCategory =
        !category || servicio.categoriaIds.includes(category);

      const matchesCollective =
        !collective || servicio.colectivoIds.includes(collective);

      return matchesText && matchesCategory && matchesCollective;

    });

  });

  /** Paginación: scroll infinito en pantallas anchas, páginas en móvil. */
  readonly pager = createPager(this.filteredResources);

  onSearch(term: string): void {
    this.searchTerm.set(term);
  }

  onCategoryChange(id: string): void {
    this.selectedCategory.set(id);
  }

  onCollectiveChange(id: string): void {
    this.selectedCollective.set(id);
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('');
    this.selectedCollective.set('');
  }

}
