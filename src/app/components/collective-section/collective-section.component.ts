import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DirectorioService } from '../../services/directorio.service';


@Component({
  selector: 'app-collective-section',
  imports: [],
  templateUrl: './collective-section.component.html',
  styleUrl: './collective-section.component.css',
})
export class CollectiveSectionComponent {

  private readonly directorio = inject(DirectorioService);
  private readonly router = inject(Router);

  readonly colectivos = this.directorio.colectivos;

  navigateToCollective(id: string): void {
    this.router.navigate(['/recursos'], {
      queryParams: { colectivo: id }
    });
  }

}
