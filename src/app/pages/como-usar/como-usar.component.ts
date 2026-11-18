import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Paso {
  titulo: string;
  texto: string;
  detalle?: string;
}

@Component({
  selector: 'app-como-usar',
  imports: [RouterLink],
  templateUrl: './como-usar.component.html',
  styleUrl: './como-usar.component.css',
})
export class ComoUsarComponent {
  readonly pasos: Paso[] = [
    {
      titulo: 'Entra en Inicio y decide cómo buscar',
      texto: 'Si ya sabes lo que necesitas, escríbelo en el buscador. Si no, elige un área o un colectivo de la portada.',
      detalle: 'Por ejemplo: «empleo», «vivienda» o el nombre de una entidad.'
    },
    {
      titulo: 'Ajusta los filtros en Recursos',
      texto: 'En la página Recursos puedes combinar el buscador con los filtros de Área (de qué se ocupa el recurso) y Colectivo (a quién se dirige).',
      detalle: 'Si no te convence el resultado, pulsa «Limpiar» para empezar de nuevo.'
    },
    {
      titulo: 'Revisa los resultados',
      texto: 'En ordenador, al bajar por la lista se cargan más recursos solos; también puedes pulsar «Cargar más». En el móvil los resultados se organizan por páginas, con botones Anterior y Siguiente.'
    },
    {
      titulo: 'Abre el recurso que te interese',
      texto: 'Pulsa «Consultar recurso» para ver su ficha: descripción, áreas, destinatarios y datos de contacto de la entidad.'
    },
    {
      titulo: 'Confirma los detalles con la entidad',
      texto: 'Desde la ficha puedes entrar en la web de la entidad. La información del directorio es orientativa: confirma siempre horarios, requisitos y condiciones directamente con ella.'
    }
  ];

  readonly secciones = [
    {
      nombre: 'Inicio',
      ruta: '/',
      texto: 'Buscador y accesos rápidos por áreas y colectivos.'
    },
    {
      nombre: 'Recursos',
      ruta: '/recursos',
      texto: 'Lista completa con buscador y filtros.'
    },
    {
      nombre: 'Áreas',
      ruta: '/areas',
      texto: 'Explica de qué se ocupa cada ámbito y qué recursos incluye.'
    },
    {
      nombre: 'Colectivos',
      ruta: '/colectivos',
      texto: 'Explica a qué grupos de población se dirige cada recurso.'
    }
  ];

}
