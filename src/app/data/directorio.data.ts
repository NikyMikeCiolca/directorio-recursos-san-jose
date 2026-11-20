import {
    Entidad,
    Servicio,
    Categoria,
    Colectivo
} from '../models/directorio.model';

// Datos generados a partir de MAPEO_SAN_JOSÉ.xlsx (mapeo de recursos del barrio San José).
// Contactos y enlaces recogidos de fuentes oficiales o de la propia entidad; revisar periódicamente.

export const ENTIDADES: Entidad[] = [
    {
        id: 'ent-adunare',
        nombre: 'ADUNARE',
        web: 'https://adunare.org/',
        telefono: '976 410 570 · 976 385 202',
        email: 'cslsanjose@adunare.org',
        direccion: 'Avenida Cesáreo Alierta, 76-78, 50008 Zaragoza (Centro Sociolaboral San José)'
    },
    {
        id: 'ent-sercade',
        nombre: 'SERCADE',
        web: 'https://www.sercade.org',
        telefono: '976 371 628',
        direccion: 'C/ Fray Julián Garas, 1, duplicado, 50006 Zaragoza (Centro Social San Antonio)'
    },
    {
        id: 'ent-amasol',
        nombre: 'AMASOL',
        web: 'https://www.amasol.es',
        telefono: '976 439 714',
        email: 'amasol@amasol.es',
        direccion: 'Paseo Tierno Galván, 8, local 4 (Torrero), Zaragoza'
    },
    {
        id: 'ent-pandora',
        nombre: 'PANDORA',
        telefono: '976 275 071',
        direccion: 'Terrazas de Cuellar, 2, local 11, 50007 Zaragoza'
    },
    {
        id: 'ent-cs-san-jose',
        nombre: 'Centro de Salud de San José',
        web: 'https://www.aragon.es/-/sector-sanitario-de-zaragoza-ii'
    },
    {
        id: 'ent-kairos',
        nombre: 'KAIRÓS',
        web: 'https://kairos.coop/',
        telefono: '976 279 175',
        email: 'info@kairos.coop',
        direccion: 'C/ El Globo, 14, local, 50015 Zaragoza'
    },
    {
        id: 'ent-inaem',
        nombre: 'INAEM',
        web: 'https://inaem.aragon.es/',
        telefono: '901 501 000',
        email: 'inaem@aragon.es'
    },
    {
        id: 'ent-cmss-harinera',
        nombre: 'Centro Municipal de Servicios Sociales de San José',
        web: 'https://zaragoza.es/sede/servicio/equipamiento/772',
        telefono: '976 726 064',
        direccion: 'Jardín Sergio Algora / Avda. San José, 201-203 (Harinera, 3.ª planta), 50007 Zaragoza'
    },
    {
        id: 'ent-accem',
        nombre: 'ACCEM',
        web: 'https://www.accem.es'
    },
    {
        id: 'ent-caritas',
        nombre: 'CARITAS',
        web: 'https://www.caritas-zaragoza.org/',
        telefono: '976 294 730',
        email: 'centro@caritas-zaragoza.es',
        direccion: 'Pº Echegaray y Caballero, 100, 50001 Zaragoza'
    },
    {
        id: 'ent-patronato',
        nombre: 'PATRONATO',
        web: 'https://patronatolosdolores.es/',
        telefono: '976 49 97 03',
        email: 'patronato@albadanet.com',
        direccion: 'C/ Privilegio de la Unión, 39, 50013 Zaragoza'
    },
    {
        id: 'ent-ymca',
        nombre: 'YMCA',
        web: 'https://www.ymca.es/',
        telefono: '976 207 594',
        email: 'sanjose@ymca.es',
        direccion: 'Avda. San José, 209, 50007 Zaragoza'
    },
    {
        id: 'ent-adubir',
        nombre: 'ADUBIR',
        web: 'https://elkarbanatuz.org/',
        telefono: '876 167 812',
        direccion: 'C/ Puente Virrey, 18, 50008 Zaragoza'
    }
];

export const CATEGORIAS: Categoria[] = [
    {
        id: 'cat-formacion',
        nombre: 'Formación',
        descripcion: 'Cursos, talleres y acciones formativas.'
    },
    {
        id: 'cat-empleo',
        nombre: 'Empleo',
        descripcion: 'Orientación, intermediación e inserción laboral.'
    },
    {
        id: 'cat-educacion',
        nombre: 'Educación',
        descripcion: 'Apoyo educativo, refuerzo escolar y acompañamiento académico.'
    },
    {
        id: 'cat-sociosanitario',
        nombre: 'Sociosanitario',
        descripcion: 'Atención que combina cuidados sanitarios y apoyo social.'
    },
    {
        id: 'cat-salud',
        nombre: 'Salud (autocuidado)',
        descripcion: 'Promoción de la salud y hábitos de autocuidado.'
    },
    {
        id: 'cat-ocio',
        nombre: 'Ocio, Tiempo Libre, deporte',
        descripcion: 'Actividades de ocio, tiempo libre y deporte.'
    },
    {
        id: 'cat-vivienda',
        nombre: 'Vivienda',
        descripcion: 'Información y apoyo en el acceso y mantenimiento de la vivienda.'
    },
    {
        id: 'cat-accesibilidad-digital',
        nombre: 'Accesibilidad digital',
        descripcion: 'Apoyo para el uso de herramientas y trámites digitales.'
    },
    {
        id: 'cat-participacion',
        nombre: 'Participación ciudadana',
        descripcion: 'Espacios para participar en la vida comunitaria del barrio.'
    },
    {
        id: 'cat-voluntariado',
        nombre: 'Voluntariado',
        descripcion: 'Oportunidades para colaborar como persona voluntaria.'
    },
    {
        id: 'cat-ivos',
        nombre: 'Información, valoración y orientación social',
        descripcion: 'Servicio social general que informa sobre derechos y recursos, valora la situación de la persona o del hogar y la orienta hacia las prestaciones y servicios que le corresponden.'
    },
    {
        id: 'cat-urgencias',
        nombre: 'Atención a urgencias sociales',
        descripcion: 'Respuesta ante situaciones sociales urgentes.'
    },
    {
        id: 'cat-prestaciones',
        nombre: 'Prestaciones domiciliarias',
        descripcion: 'Servicios de apoyo que se prestan en el domicilio.'
    },
    {
        id: 'cat-apoyo-familias',
        nombre: 'Apoyo a las familias',
        descripcion: 'Orientación y acompañamiento a unidades familiares.'
    },
    {
        id: 'cat-desproteccion-infantil',
        nombre: 'Detección y valoración de desprotección infantil',
        descripcion: 'Detección y valoración de situaciones de riesgo o desprotección de menores.'
    },
    {
        id: 'cat-violencia-genero',
        nombre: 'Violencia de género',
        descripcion: 'Información, atención y acompañamiento a mujeres que sufren violencia de género.'
    },
    {
        id: 'cat-necesidades-basicas',
        nombre: 'Cobertura de las necesidades básicas',
        descripcion: 'Apoyo para cubrir necesidades básicas como alimentación o higiene, incluida la gestión de ayudas económicas.'
    }
];

export const COLECTIVOS: Colectivo[] = [
    {
        id: 'col-infancia',
        nombre: 'Infancia',
        descripcion: 'Niños y niñas.'
    },
    {
        id: 'col-juventud',
        nombre: 'Juventud',
        descripcion: 'Personas jóvenes.'
    },
    {
        id: 'col-poblacion-general',
        nombre: 'Población general',
        descripcion: 'Recursos abiertos a toda la población.'
    },
    {
        id: 'col-mayores',
        nombre: 'Mayores (+65)',
        descripcion: 'Personas mayores de 65 años.'
    },
    {
        id: 'col-mujeres',
        nombre: 'Mujeres',
        descripcion: 'Recursos dirigidos a mujeres.'
    },
    {
        id: 'col-familias',
        nombre: 'Familias',
        descripcion: 'Unidades familiares.'
    },
    {
        id: 'col-migrantes',
        nombre: 'Migrantes',
        descripcion: 'Personas migrantes.'
    },
    {
        id: 'col-discapacidad',
        nombre: 'Discapacidad',
        descripcion: 'Personas con discapacidad.'
    },
    {
        id: 'col-psh',
        nombre: 'Personas sin hogar',
        descripcion: 'Personas sin hogar.'
    }
];

export const SERVICIOS: Servicio[] = [
    {
        id: 'srv-001',
        entidadId: 'ent-adunare',
        nombre: 'ADUNARE',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-mujeres', 'col-familias'],
        url: 'https://adunare.org/'
    },
    {
        id: 'srv-002',
        entidadId: 'ent-sercade',
        nombre: 'SERCADE',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-salud', 'cat-ocio', 'cat-vivienda', 'cat-accesibilidad-digital', 'cat-voluntariado', 'cat-ivos'],
        colectivoIds: ['col-juventud', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-psh'],
        url: 'https://www.zaragoza.es/sede/servicio/equipamiento/20077'
    },
    {
        id: 'srv-003',
        entidadId: 'ent-amasol',
        nombre: 'AMASOL',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion', 'cat-vivienda'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-mujeres', 'col-familias'],
        url: 'https://www.amasol.es'
    },
    {
        id: 'srv-004',
        entidadId: 'ent-pandora',
        nombre: 'PANDORA',
        categoriaIds: ['cat-educacion', 'cat-ocio', 'cat-apoyo-familias', 'cat-desproteccion-infantil'],
        colectivoIds: ['col-infancia'],
        url: 'https://zaragoza.es/sede/servicio/equipamiento/2141'
    },
    {
        id: 'srv-005',
        entidadId: 'ent-cs-san-jose',
        nombre: 'Centro de Salud de San José',
        categoriaIds: ['cat-sociosanitario', 'cat-salud'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-discapacidad', 'col-psh'],
        url: 'https://atencioncomunitaria.aragon.es/wp-content/uploads/2025/11/CS-San-Jose-Norte-y-CS-San-Jose-Centro-2025.pdf'
    },
    {
        id: 'srv-006',
        entidadId: 'ent-kairos',
        nombre: 'KAIRÓS',
        categoriaIds: ['cat-formacion', 'cat-ocio', 'cat-participacion'],
        colectivoIds: ['col-discapacidad'],
        url: 'https://kairos.coop/'
    },
    {
        id: 'srv-007',
        entidadId: 'ent-inaem',
        nombre: 'INAEM',
        categoriaIds: ['cat-formacion', 'cat-empleo'],
        colectivoIds: ['col-juventud', 'col-poblacion-general', 'col-mujeres', 'col-migrantes', 'col-discapacidad', 'col-psh'],
        url: 'https://inaem.aragon.es/'
    },
    {
        id: 'srv-008',
        entidadId: 'ent-cmss-harinera',
        nombre: 'Centro Municipal de Servicios Sociales de San José',
        categoriaIds: ['cat-ivos', 'cat-urgencias', 'cat-prestaciones', 'cat-apoyo-familias', 'cat-desproteccion-infantil', 'cat-necesidades-basicas'],
        colectivoIds: ['col-poblacion-general'],
        url: 'https://zaragoza.es/sede/servicio/equipamiento/772'
    },
    {
        id: 'srv-009',
        entidadId: 'ent-accem',
        nombre: 'ACCEM',
        categoriaIds: [],
        colectivoIds: [],
        url: 'https://www.accem.es'
    },
    {
        id: 'srv-010',
        entidadId: 'ent-caritas',
        nombre: 'CARITAS',
        categoriaIds: ['cat-empleo', 'cat-participacion', 'cat-voluntariado'],
        colectivoIds: ['col-juventud', 'col-poblacion-general', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-psh'],
        url: 'https://www.caritas-zaragoza.org/'
    },
    {
        id: 'srv-011',
        entidadId: 'ent-patronato',
        nombre: 'PATRONATO',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-ocio', 'cat-voluntariado', 'cat-ivos', 'cat-urgencias', 'cat-apoyo-familias', 'cat-necesidades-basicas'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-familias', 'col-migrantes'],
        url: 'https://patronatolosdolores.es/'
    },
    {
        id: 'srv-012',
        entidadId: 'ent-ymca',
        nombre: 'YMCA',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion', 'cat-ocio', 'cat-voluntariado', 'cat-apoyo-familias'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-familias'],
        url: 'https://www.ymca.es/'
    },
    {
        id: 'srv-013',
        entidadId: 'ent-adubir',
        nombre: 'ADUBIR',
        categoriaIds: ['cat-empleo', 'cat-educacion', 'cat-ocio', 'cat-accesibilidad-digital', 'cat-participacion', 'cat-voluntariado', 'cat-ivos', 'cat-apoyo-familias', 'cat-desproteccion-infantil', 'cat-necesidades-basicas'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-familias', 'col-migrantes'],
        url: 'https://elkarbanatuz.org/contacto/'
    }
];
