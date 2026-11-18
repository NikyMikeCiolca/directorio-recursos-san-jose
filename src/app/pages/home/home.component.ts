import { Component } from '@angular/core';

import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CategoryGridComponent } from '../../components/category-grid/category-grid.component';
import { CollectiveSectionComponent } from '../../components/collective-section/collective-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, CategoryGridComponent, CollectiveSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
