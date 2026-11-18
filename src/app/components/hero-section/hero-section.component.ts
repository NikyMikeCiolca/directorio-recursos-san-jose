import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-hero-section',
  imports: [SearchBarComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {

  private readonly router = inject(Router);

  searchResources(term: string): void {
    this.router.navigate(['/recursos'], {
      queryParams: term ? { q: term } : {}
    });
  }

}
