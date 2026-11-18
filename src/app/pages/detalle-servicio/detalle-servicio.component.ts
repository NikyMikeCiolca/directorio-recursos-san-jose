import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { DirectorioService } from '../../services/directorio.service';

@Component({
  selector: 'app-detalle-servicio',
  imports: [RouterLink],
  templateUrl: './detalle-servicio.component.html',
  styleUrl: './detalle-servicio.component.css',
})
export class DetalleServicioComponent {

  private readonly route = inject(ActivatedRoute);

  private readonly directorio = inject(DirectorioService);

  readonly servicio = computed(() =>
    this.directorio.getServicio(
      this.route.snapshot.paramMap.get('id') ?? ''
    )
  );

  readonly entidad = computed(() => {
    const servicio = this.servicio();

    return servicio
      ? this.directorio.getEntidad(servicio.entidadId)
      : undefined;
  });

  readonly categorias = computed(() =>
    (this.servicio()?.categoriaIds ?? [])
      .map(id => this.directorio.getCategoria(id))
      .filter(item => item !== undefined)
  );

  readonly colectivos = computed(() =>
    (this.servicio()?.colectivoIds ?? [])
      .map(id => this.directorio.getColectivo(id))
      .filter(item => item !== undefined)
  );

}
