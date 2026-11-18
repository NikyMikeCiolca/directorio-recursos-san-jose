import { Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { RecursosComponent } from '../app/pages/recursos/recursos.component';
import { NotFoundComponent } from '../app/pages/not-found/not-found.component';
import { DetalleServicioComponent } from '../app/pages/detalle-servicio/detalle-servicio.component';

import { AreasComponent } from './pages/areas/areas.component';
import { ColectivosComponent } from '../app/pages/colectivos/colectivos.component';
import { ComoUsarComponent } from '../app/pages/como-usar/como-usar.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        title: 'Inicio | Directorio Social'
    },

    {
        path: 'recursos',
        component: RecursosComponent,
        title: 'Recursos | Directorio Social'
    },

    {
        path: 'areas',
        component: AreasComponent,
        title: 'Áreas | Directorio Social'
    },

    {
        path: 'colectivos',
        component: ColectivosComponent,
        title: 'Colectivos | Directorio Social'
    },

    {
        path: 'recursos/:id',
        component: DetalleServicioComponent,
        title: 'Detalle del recurso'
    },

    {
        path: 'como-usar-la-web',
        component: ComoUsarComponent,
        title: 'Cómo usar la web | Directorio Social'
    },

    {
        path: '**',
        component: NotFoundComponent,
        title: 'Página no encontrada | Directorio Social'
    }

];