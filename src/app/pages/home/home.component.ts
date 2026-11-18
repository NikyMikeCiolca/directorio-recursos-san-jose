import { Component } from '@angular/core';

import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AreaGridComponent, } from '../../components/area-grid/area-grid.component';
import { CollectiveSectionComponent } from '../../components/collective-section/collective-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, AreaGridComponent, CollectiveSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
