import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Servicio } from '../../models/directorio.model'
import { DirectorioService } from '../../services/directorio.service';

@Component({
  selector: 'app-resource-card',
  imports: [RouterLink],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.css',
})
export class ResourceCardComponent {

  readonly resource = input.required<Servicio>();

  private readonly directorio = inject(DirectorioService);

  readonly entidad = computed(() =>
    this.directorio.getEntidad(this.resource().entidadId)
  );

  readonly categorias = computed(() =>
    this.resource().categoriaIds
      .map(id => this.directorio.getCategoria(id))
      .filter(categoria => categoria !== undefined)
  );

  readonly colectivos = computed(() =>
    this.resource().colectivoIds
      .map(id => this.directorio.getColectivo(id))
      .filter(colectivo => colectivo !== undefined)
  );

}
