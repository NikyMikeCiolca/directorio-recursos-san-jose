import { Component, input, output } from '@angular/core';

import {
  Categoria,
  Colectivo
} from '../../models/directorio.model';

@Component({
  selector: 'app-resource-filters',
  imports: [],
  templateUrl: './resource-filters.component.html',
  styleUrl: './resource-filters.component.css',
})
export class ResourceFiltersComponent {

  readonly categorias = input.required<Categoria[]>();

  readonly colectivos = input.required<Colectivo[]>();

  readonly selectedCategory = input('');

  readonly selectedCollective = input('');

  readonly categoryChange = output<string>();

  readonly collectiveChange = output<string>();

  readonly clear = output<void>();

}
