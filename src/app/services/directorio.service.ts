
import { Injectable, computed, signal } from '@angular/core';

import {
  ENTIDADES,
  SERVICIOS,
  CATEGORIAS,
  COLECTIVOS
} from '../data/directorio.data';

import {
  Entidad,
  Servicio,
  Categoria,
  Colectivo
} from '../models/directorio.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  // Datos principales
  readonly entidades = signal<Entidad[]>(ENTIDADES);

  readonly servicios = signal<Servicio[]>(SERVICIOS);

  readonly categorias = signal<Categoria[]>(CATEGORIAS);

  readonly colectivos = signal<Colectivo[]>(COLECTIVOS);

  // Obtener entidades con sus servicios no es necesario
  // almacenarlo: podemos calcularlo cuando lo necesitemos.

  getEntidad(id: string): Entidad | undefined {
    return this.entidades().find(
      entidad => entidad.id === id
    );
  }

  getServicio(id: string): Servicio | undefined {
    return this.servicios().find(
      servicio => servicio.id === id
    );
  }

  getServiciosPorCategoria(id: string): Servicio[] {
    return this.servicios().filter(
      servicio => servicio.categoriaIds.includes(id)
    );
  }

  getServiciosPorColectivo(id: string): Servicio[] {
    return this.servicios().filter(
      servicio => servicio.colectivoIds.includes(id)
    );
  }

  getServiciosPorEntidad(id: string): Servicio[] {
    return this.servicios().filter(
      servicio => servicio.entidadId === id
    );
  }

  getCategoria(id: string): Categoria | undefined {
    return this.categorias().find(
      categoria => categoria.id === id
    );
  }

  getColectivo(id: string): Colectivo | undefined {
    return this.colectivos().find(
      colectivo => colectivo.id === id
    );
  }
}
