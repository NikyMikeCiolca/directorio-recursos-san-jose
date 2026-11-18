import { Component, inject, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DirectorioService } from '../../services/directorio.service';

@Component({
  selector: 'app-category-grid',
  imports: [RouterLink],
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.css',
})
export class CategoryGridComponent {

  private readonly directorio = inject(DirectorioService);
  private readonly router = inject(Router);

  readonly categorias = computed(() => this.directorio.categorias().slice(0, 6));

  navigateToCategory(id: string): void {
    this.router.navigate(['/recursos'], {
      queryParams: { categoria: id }
    });
  }

}
