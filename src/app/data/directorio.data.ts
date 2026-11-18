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
        descripcion: 'Fundación Adunare. En el barrio gestiona el Centro Sociolaboral San José, integrado en la red municipal de centros sociolaborales de Zaragoza Dinámica.',
        web: 'https://www.adunare.org',
        telefono: '976 410 570 · 976 385 202',
        email: 'cslsanjose@adunare.org',
        direccion: 'Avenida Cesáreo Alierta, 76-78, 50008 Zaragoza (Centro Sociolaboral San José)'
    },
    {
        id: 'ent-sercade',
        nombre: 'SERCADE',
        descripcion: 'Servicio Capuchino para el Desarrollo y la Solidaridad. En la zona gestiona el Centro Social San Antonio: comedor social, ropero, atención a familias en dificultad, atención sanitaria y dinamización comunitaria.',
        web: 'https://www.sercade.org',
        telefono: '976 371 628',
        direccion: 'C/ Fray Julián Garcés, 1, 50006 Zaragoza (Centro Social San Antonio)'
    },
    {
        id: 'ent-amasol',
        nombre: 'AMASOL',
        descripcion: 'Fundación AMASOL (Asociación de Madres Solas). Apoyo a familias monomarentales, monoparentales y reconstituidas.',
        web: 'https://www.amasol.es',
        telefono: '976 439 714',
        email: 'amasol@amasol.es',
        direccion: 'Paseo Tierno Galván, 8, local 4 (Torrero), Zaragoza'
    },
    {
        id: 'ent-pandora',
        nombre: 'PANDORA',
        descripcion: 'Asociación de Tiempo Libre Pandora. Ocio y tiempo libre, apoyo escolar y atención a familias para la infancia del barrio San José. Gestiona el Centro Municipal de Tiempo Libre San José-Pandora.',
        telefono: '976 275 071',
        direccion: 'Terrazas de Cuellar, 2, local 11, 50007 Zaragoza'
    },
    {
        id: 'ent-cs-san-jose',
        nombre: 'CS SAN JOSÉ',
        descripcion: 'Centros de salud del barrio San José (San José Norte, San José Centro y San José Sur - Canal Imperial), del Sector Sanitario Zaragoza II.',
        web: 'https://www.aragon.es/-/sector-sanitario-de-zaragoza-ii'
    },
    {
        id: 'ent-kairos',
        nombre: 'KAIRÓS',
        descripcion: 'Kairós, Sociedad Cooperativa de Iniciativa Social. Trabaja en discapacidad, inclusión, empleo e infancia y familia.',
        web: 'https://kairos.coop/',
        telefono: '976 279 175',
        email: 'info@kairos.coop',
        direccion: 'C/ El Globo, 14, local, 50015 Zaragoza'
    },
    {
        id: 'ent-inaem',
        nombre: 'INAEM',
        descripcion: 'Instituto Aragonés de Empleo. Servicio público de empleo del Gobierno de Aragón (información de ámbito general, no específica del barrio).',
        web: 'https://inaem.aragon.es/',
        telefono: '901 501 000',
        email: 'inaem@aragon.es'
    },
    {
        id: 'ent-cmss-harinera',
        nombre: 'CMSS HARINERA',
        descripcion: 'Centro Municipal de Servicios Sociales San José (Harinera). Primer punto de acceso al sistema de servicios sociales. Atención con cita previa: 900 700 107.',
        web: 'https://zaragoza.es/sede/servicio/equipamiento/772',
        telefono: '976 726 064',
        direccion: 'Jardín Sergio Algora / Avda. San José, 201-203 (Harinera, 3.ª planta), 50007 Zaragoza'
    },
    {
        id: 'ent-accem',
        nombre: 'ACCEM',
        descripcion: 'Accem. Entidad de acogida e integración de personas migrantes y refugiadas; en Zaragoza desarrolla el programa de acogida e integración para solicitantes y beneficiarios de protección internacional.',
        web: 'https://www.accem.es'
    },
    {
        id: 'ent-caritas',
        nombre: 'CARITAS',
        descripcion: 'Cáritas Diocesana de Zaragoza. Acción social de la Iglesia: atención a personas y familias en situación de necesidad.',
        web: 'https://www.caritas-zaragoza.org/',
        telefono: '976 294 730',
        email: 'centro@caritas-zaragoza.es',
        direccion: 'Pº Echegaray y Caballero, 100, 50001 Zaragoza'
    },
    {
        id: 'ent-patronato',
        nombre: 'PATRONATO',
        descripcion: 'Patronato Ntra. Sra. de los Dolores (Patronato NSD). Entidad sin ánimo de lucro en el barrio de San José desde 1974: infancia, juventud, familias, formación, banco de alimentos y ropero.',
        web: 'https://patronatolosdolores.es/',
        telefono: '976 49 97 03',
        email: 'patronato@albadanet.com',
        direccion: 'C/ Privilegio de la Unión, 39, 50013 Zaragoza'
    },
    {
        id: 'ent-ymca',
        nombre: 'YMCA',
        descripcion: 'YMCA. Intervención social con infancia, juventud y familias; centro en la Avenida San José, 209.',
        web: 'https://www.ymca.es/',
        telefono: '976 207 594',
        email: 'sanjose@ymca.es',
        direccion: 'Avda. San José, 209, 50007 Zaragoza'
    },
    {
        id: 'ent-adubir',
        nombre: 'ADUBIR',
        descripcion: 'Servicio de Infancia y Familia ADUBIR, de la asociación Elkarbanatuz, en el barrio de San José.',
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
        id: 'cat-ayudas',
        nombre: 'Gestión de ayudas económicas',
        descripcion: 'Información y tramitación de ayudas y prestaciones económicas.'
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
        id: 'cat-necesidades-basicas',
        nombre: 'Cobertura de las necesidades básicas',
        descripcion: 'Apoyo para cubrir necesidades básicas como alimentación o higiene.'
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
        nombre: 'Personas sin hogar (PSH)',
        descripcion: 'Personas sin hogar (PSH).'
    }
];

export const SERVICIOS: Servicio[] = [
    {
        id: 'srv-001',
        entidadId: 'ent-adunare',
        nombre: 'Recursos de ADUNARE',
        descripcion: 'Recursos que ofrece en el barrio: formación, empleo y educación. Dirigidos a: infancia, juventud, población general, mujeres y familias.',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-mujeres', 'col-familias'],
        url: 'https://web.zaragozadinamica.es/empleabilidad/integracion/red-de-centros/csl-san-jose/'
    },
    {
        id: 'srv-002',
        entidadId: 'ent-sercade',
        nombre: 'Recursos de SERCADE',
        descripcion: 'Recursos que ofrece en el barrio: formación, empleo, salud (autocuidado), ocio, tiempo libre, deporte, vivienda, accesibilidad digital, voluntariado y información, valoración y orientación social. Dirigidos a: juventud, mayores (+65), mujeres, familias, migrantes y personas sin hogar (PSH).',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-salud', 'cat-ocio', 'cat-vivienda', 'cat-accesibilidad-digital', 'cat-voluntariado', 'cat-ivos'],
        colectivoIds: ['col-juventud', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-psh'],
        url: 'https://www.zaragoza.es/sede/servicio/equipamiento/20077'
    },
    {
        id: 'srv-003',
        entidadId: 'ent-amasol',
        nombre: 'Recursos de AMASOL',
        descripcion: 'Recursos que ofrece en el barrio: formación, empleo, educación y vivienda. Dirigidos a: infancia, juventud, mujeres y familias.',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion', 'cat-vivienda'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-mujeres', 'col-familias'],
        url: 'https://www.amasol.es'
    },
    {
        id: 'srv-004',
        entidadId: 'ent-pandora',
        nombre: 'Recursos de PANDORA',
        descripcion: 'Recursos que ofrece en el barrio: educación, ocio, tiempo libre, deporte, apoyo a las familias y detección y valoración de desprotección infantil. Dirigidos a: infancia.',
        categoriaIds: ['cat-educacion', 'cat-ocio', 'cat-apoyo-familias', 'cat-desproteccion-infantil'],
        colectivoIds: ['col-infancia'],
        url: 'https://zaragoza.es/sede/servicio/equipamiento/2141'
    },
    {
        id: 'srv-005',
        entidadId: 'ent-cs-san-jose',
        nombre: 'Recursos de CS SAN JOSÉ',
        descripcion: 'Recursos que ofrece en el barrio: sociosanitario y salud (autocuidado). Dirigidos a: infancia, juventud, población general, mayores (+65), mujeres, familias, migrantes, discapacidad y personas sin hogar (PSH).',
        categoriaIds: ['cat-sociosanitario', 'cat-salud'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-discapacidad', 'col-psh'],
        url: 'https://atencioncomunitaria.aragon.es/wp-content/uploads/2025/11/CS-San-Jose-Norte-y-CS-San-Jose-Centro-2025.pdf'
    },
    {
        id: 'srv-006',
        entidadId: 'ent-kairos',
        nombre: 'Recursos de KAIRÓS',
        descripcion: 'Recursos que ofrece en el barrio: formación, ocio, tiempo libre, deporte y participación ciudadana. Dirigidos a: discapacidad.',
        categoriaIds: ['cat-formacion', 'cat-ocio', 'cat-participacion'],
        colectivoIds: ['col-discapacidad'],
        url: 'https://kairos.coop/'
    },
    {
        id: 'srv-007',
        entidadId: 'ent-inaem',
        nombre: 'Recursos de INAEM',
        descripcion: 'Recursos que ofrece en el barrio: formación y empleo. Dirigidos a: juventud, población general, mujeres, migrantes, discapacidad y personas sin hogar (PSH).',
        categoriaIds: ['cat-formacion', 'cat-empleo'],
        colectivoIds: ['col-juventud', 'col-poblacion-general', 'col-mujeres', 'col-migrantes', 'col-discapacidad', 'col-psh'],
        url: 'https://inaem.aragon.es/'
    },
    {
        id: 'srv-008',
        entidadId: 'ent-cmss-harinera',
        nombre: 'Recursos de CMSS HARINERA',
        descripcion: 'Recursos que ofrece en el barrio: información, valoración y orientación social, atención a urgencias sociales, gestión de ayudas económicas, prestaciones domiciliarias, apoyo a las familias y detección y valoración de desprotección infantil. Dirigidos a: población general.',
        categoriaIds: ['cat-ivos', 'cat-urgencias', 'cat-ayudas', 'cat-prestaciones', 'cat-apoyo-familias', 'cat-desproteccion-infantil'],
        colectivoIds: ['col-poblacion-general'],
        url: 'https://zaragoza.es/sede/servicio/equipamiento/772'
    },
    {
        id: 'srv-009',
        entidadId: 'ent-accem',
        nombre: 'Recursos de ACCEM',
        descripcion: 'Accem. Entidad de acogida e integración de personas migrantes y refugiadas; en Zaragoza desarrolla el programa de acogida e integración para solicitantes y beneficiarios de protección internacional.',
        categoriaIds: [],
        colectivoIds: [],
        url: 'https://www.accem.es'
    },
    {
        id: 'srv-010',
        entidadId: 'ent-caritas',
        nombre: 'Recursos de CARITAS',
        descripcion: 'Recursos que ofrece en el barrio: empleo, participación ciudadana y voluntariado. Dirigidos a: juventud, población general, mayores (+65), mujeres, familias, migrantes y personas sin hogar (PSH).',
        categoriaIds: ['cat-empleo', 'cat-participacion', 'cat-voluntariado'],
        colectivoIds: ['col-juventud', 'col-poblacion-general', 'col-mayores', 'col-mujeres', 'col-familias', 'col-migrantes', 'col-psh'],
        url: 'https://www.caritas-zaragoza.org/'
    },
    {
        id: 'srv-011',
        entidadId: 'ent-patronato',
        nombre: 'Recursos de PATRONATO',
        descripcion: 'Recursos que ofrece en el barrio: formación, empleo, ocio, tiempo libre, deporte, voluntariado, información, valoración y orientación social, atención a urgencias sociales, apoyo a las familias y cobertura de las necesidades básicas. Dirigidos a: infancia, juventud, población general, familias y migrantes.',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-ocio', 'cat-voluntariado', 'cat-ivos', 'cat-urgencias', 'cat-apoyo-familias', 'cat-necesidades-basicas'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-familias', 'col-migrantes'],
        url: 'https://patronatolosdolores.es/'
    },
    {
        id: 'srv-012',
        entidadId: 'ent-ymca',
        nombre: 'Recursos de YMCA',
        descripcion: 'Recursos que ofrece en el barrio: formación, empleo, educación, ocio, tiempo libre, deporte, voluntariado y apoyo a las familias. Dirigidos a: infancia, juventud y familias.',
        categoriaIds: ['cat-formacion', 'cat-empleo', 'cat-educacion', 'cat-ocio', 'cat-voluntariado', 'cat-apoyo-familias'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-familias'],
        url: 'https://www.ymca.es/'
    },
    {
        id: 'srv-013',
        entidadId: 'ent-adubir',
        nombre: 'Recursos de ADUBIR',
        descripcion: 'Recursos que ofrece en el barrio: empleo, educación, ocio, tiempo libre, deporte, accesibilidad digital, participación ciudadana, voluntariado, información, valoración y orientación social, gestión de ayudas económicas, apoyo a las familias y detección y valoración de desprotección infantil. Dirigidos a: infancia, juventud, población general, familias y migrantes.',
        categoriaIds: ['cat-empleo', 'cat-educacion', 'cat-ocio', 'cat-accesibilidad-digital', 'cat-participacion', 'cat-voluntariado', 'cat-ivos', 'cat-ayudas', 'cat-apoyo-familias', 'cat-desproteccion-infantil'],
        colectivoIds: ['col-infancia', 'col-juventud', 'col-poblacion-general', 'col-familias', 'col-migrantes'],
        url: 'https://elkarbanatuz.org/contacto/'
    }
];
