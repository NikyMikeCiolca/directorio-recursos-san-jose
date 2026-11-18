import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DirectorioService } from '../../services/directorio.service';
import { INFORMACION_COLECTIVOS } from '../../data/catalogo-informativo.data';
import { createPager } from '../../shared/pagination/pager';
import { PaginationComponent } from '../../shared/pagination/pagination.component';


@Component({
  selector: 'app-colectivos',
  imports: [RouterLink, PaginationComponent],
  templateUrl: './colectivos.component.html',
  styleUrl: '../../shared/catalogo.component.css',
})
export class ColectivosComponent {

  private readonly directorioService = inject(DirectorioService);

  readonly colectivos = this.directorioService.colectivos;

  readonly informacion = INFORMACION_COLECTIVOS;

  readonly colectivosConInfo = computed(() =>
    this.colectivos().map(colectivo => ({
      ...colectivo,
      info: this.informacion[colectivo.id],
      servicios: this.directorioService.getServiciosPorColectivo(colectivo.id)
    }))
  );

  readonly pager = createPager(this.colectivosConInfo);

}
