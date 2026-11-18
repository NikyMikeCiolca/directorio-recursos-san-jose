import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DirectorioService } from '../../services/directorio.service';
import { INFORMACION_CATEGORIAS } from '../../data/catalogo-informativo.data';
import { createPager } from '../../shared/pagination/pager';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-areas',
  imports: [RouterLink, PaginationComponent],
  templateUrl: './areas.component.html',
  styleUrl: '../../shared/catalogo.component.css',
})
export class AreasComponent {

  private readonly directorioService = inject(DirectorioService);

  readonly categorias = this.directorioService.categorias;

  readonly informacion = INFORMACION_CATEGORIAS;

  readonly categoriasConInfo = computed(() =>
    this.categorias().map(categoria => ({
      ...categoria,
      info: this.informacion[categoria.id],
      servicios: this.directorioService.getServiciosPorCategoria(categoria.id)
    }))
  );

  readonly pager = createPager(this.categoriasConInfo);

}
