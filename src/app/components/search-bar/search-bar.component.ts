import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {

  readonly placeholder = input(
    '¿Qué recurso estás buscando?'
  );

  readonly searched = output<string>();

  readonly term = signal('');

  onSearch(): void {
    this.searched.emit(this.term().trim());
  }

}
