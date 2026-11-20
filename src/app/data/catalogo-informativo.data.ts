export interface InformacionCatalogo {
    descripcion: string;
    ambito: string;
    fuente: string;
    referencia: string;
    url: string;
    icono: string;
}

export const INFORMACION_CATEGORIAS: Record<string, InformacionCatalogo> = {
    'cat-formacion': {
        descripcion: 'Reúne recursos de formación: cursos, talleres y acciones orientadas a adquirir o mejorar competencias personales y profesionales.',
        ambito: 'Formación y cualificación',
        fuente: 'Ley Orgánica 3/2022, de ordenación e integración de la Formación Profesional.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/lo/2022/03/31/3/con',
        icono: 'bi-mortarboard'
    },
    'cat-empleo': {
        descripcion: 'Comprende recursos de orientación profesional, asesoramiento, formación, intermediación laboral y apoyo a la inserción en el mercado de trabajo.',
        ambito: 'Orientación e inserción laboral',
        fuente: 'Ley 3/2023, de 28 de febrero, de Empleo.',
        referencia: 'Artículo 56 y siguientes',
        url: 'https://www.boe.es/eli/es/l/2023/02/28/3/con',
        icono: 'bi-briefcase'
    },
    'cat-educacion': {
        descripcion: 'Agrupa recursos de apoyo educativo, refuerzo escolar y acompañamiento en el ámbito académico.',
        ambito: 'Apoyo educativo',
        fuente: 'Ley Orgánica 2/2006, de 3 de mayo, de Educación.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/lo/2006/05/03/2/con',
        icono: 'bi-book'
    },
    'cat-sociosanitario': {
        descripcion: 'Reúne recursos que combinan la atención sanitaria con el apoyo social, dirigidos a personas que requieren ambos tipos de cuidados.',
        ambito: 'Atención sanitaria y social coordinada',
        fuente: 'Ley 16/2003, de 28 de mayo, de cohesión y calidad del Sistema Nacional de Salud.',
        referencia: 'Artículo 14',
        url: 'https://www.boe.es/eli/es/l/2003/05/28/16/con',
        icono: 'bi-hospital'
    },
    'cat-salud': {
        descripcion: 'Agrupa recursos vinculados a la promoción de la salud, la prevención de enfermedades y los hábitos de autocuidado, incluyendo actuaciones que favorecen el bienestar.',
        ambito: 'Promoción y protección de la salud',
        fuente: 'Ley 33/2011, de 4 de octubre, General de Salud Pública.',
        referencia: 'Artículos 16 y 27',
        url: 'https://www.boe.es/eli/es/l/2011/10/04/33/con',
        icono: 'bi-heart-pulse'
    },
    'cat-ocio': {
        descripcion: 'Incluye actividades de ocio, tiempo libre y deporte que favorecen la socialización, el desarrollo personal y la vida saludable.',
        ambito: 'Ocio, tiempo libre y deporte',
        fuente: 'Ley 39/2022, de 30 de diciembre, del Deporte.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/l/2022/12/30/39/con',
        icono: 'bi-bicycle'
    },
    'cat-vivienda': {
        descripcion: 'Agrupa recursos relacionados con el acceso a una vivienda y las soluciones de alojamiento. Incluye información sobre situaciones de vulnerabilidad residencial y alternativas habitacionales.',
        ambito: 'Acceso a vivienda y alojamiento',
        fuente: 'Ley 12/2023, de 24 de mayo, por el derecho a la vivienda.',
        referencia: 'Artículos 2 y 14',
        url: 'https://www.boe.es/eli/es/l/2023/05/24/12/con',
        icono: 'bi-house-door'
    },
    'cat-accesibilidad-digital': {
        descripcion: 'Reúne recursos de apoyo para utilizar herramientas digitales y realizar trámites en línea, reduciendo la brecha digital.',
        ambito: 'Acceso y uso de herramientas digitales',
        fuente: 'Real Decreto 1112/2018, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/rd/2018/09/07/1112/con',
        icono: 'bi-laptop'
    },
    'cat-participacion': {
        descripcion: 'Agrupa recursos que facilitan la participación de las personas en la vida comunitaria y en las decisiones que afectan al barrio.',
        ambito: 'Participación comunitaria',
        fuente: 'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local.',
        referencia: 'Artículo 69',
        url: 'https://www.boe.es/eli/es/l/1985/04/02/7/con',
        icono: 'bi-megaphone'
    },
    'cat-voluntariado': {
        descripcion: 'Reúne oportunidades para colaborar como persona voluntaria en programas y actividades de entidades sociales.',
        ambito: 'Voluntariado y acción solidaria',
        fuente: 'Ley 45/2015, de 14 de octubre, de Voluntariado.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/l/2015/10/14/45/con',
        icono: 'bi-hand-thumbs-up'
    },
    'cat-ivos': {
        descripcion: 'Servicio social general, de acceso gratuito, que informa sobre derechos y recursos, valora la situación de la persona o del hogar y la orienta hacia las prestaciones y servicios que le corresponden.',
        ambito: 'Puerta de entrada al sistema de servicios sociales',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículo 35',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-info-circle'
    },
    'cat-urgencias': {
        descripcion: 'Comprende recursos de respuesta ante situaciones sociales urgentes que requieren una intervención inmediata.',
        ambito: 'Atención social de urgencia',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículos 10, 35 y 36',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-exclamation-triangle'
    },
    'cat-prestaciones': {
        descripcion: 'Agrupa servicios de apoyo que se prestan en el domicilio de la persona, favoreciendo su autonomía y su permanencia en el entorno habitual.',
        ambito: 'Atención en el domicilio',
        fuente: 'Ley 39/2006, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia.',
        referencia: 'Artículos 15 y 23',
        url: 'https://www.boe.es/eli/es/l/2006/12/14/39/con',
        icono: 'bi-house-heart'
    },
    'cat-apoyo-familias': {
        descripcion: 'Reúne recursos de apoyo a las familias: orientación, acompañamiento y actuaciones preventivas.',
        ambito: 'Apoyo y acompañamiento familiar',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículos 10 y 36',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-people'
    },
    'cat-desproteccion-infantil': {
        descripcion: 'Comprende recursos de detección y valoración de situaciones de riesgo o desprotección de niños, niñas y adolescentes.',
        ambito: 'Protección de menores',
        fuente: 'Ley Orgánica 1/1996, de Protección Jurídica del Menor.',
        referencia: 'Artículos 1 y 2',
        url: 'https://www.boe.es/eli/es/lo/1996/01/15/1',
        icono: 'bi-shield-check'
    },
    'cat-violencia-genero': {
        descripcion: 'Reúne recursos de información, atención y acompañamiento a mujeres que sufren violencia de género.',
        ambito: 'Protección integral frente a la violencia de género',
        fuente: 'Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/lo/2004/12/28/1/con',
        icono: 'bi-shield-exclamation'
    },
    'cat-necesidades-basicas': {
        descripcion: 'Reúne recursos relacionados con la cobertura de necesidades básicas como la alimentación o la higiene, la gestión de ayudas económicas y la atención de situaciones de necesidad social.',
        ambito: 'Necesidades básicas y atención social',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículos 10, 35 y 36',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-basket2'
    }
};

export const INFORMACION_COLECTIVOS: Record<string, InformacionCatalogo> = {
    'col-infancia': {
        descripcion: 'Comprende a niños y niñas. La normativa establece que su interés superior debe considerarse primordial en las decisiones y actuaciones que les afecten.',
        ambito: 'Protección de derechos y atención a la infancia',
        fuente: 'Ley Orgánica 1/1996, de 15 de enero, de Protección Jurídica del Menor.',
        referencia: 'Artículos 1 y 2',
        url: 'https://www.boe.es/eli/es/lo/1996/01/15/1',
        icono: 'bi-person-hearts'
    },
    'col-juventud': {
        descripcion: 'Agrupa recursos dirigidos a personas jóvenes en ámbitos como la formación, el empleo, el ocio y la participación.',
        ambito: 'Apoyo y participación juvenil',
        fuente: 'Constitución Española.',
        referencia: 'Artículo 48',
        url: 'https://www.boe.es/eli/es/c/1978/12/27/(1)/con',
        icono: 'bi-lightning'
    },
    'col-poblacion-general': {
        descripcion: 'Incluye recursos abiertos al conjunto de la población, sin que se requiera pertenecer a un colectivo específico.',
        ambito: 'Atención social a toda la población',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículos 10 y 36',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-people'
    },
    'col-mayores': {
        descripcion: 'Personas mayores de 65 años que pueden acceder a recursos de atención social, promoción de la autonomía y apoyos cuando concurren situaciones de dependencia o necesidades de atención.',
        ambito: 'Autonomía personal y atención social',
        fuente: 'Ley 39/2006, de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia.',
        referencia: 'Artículos 2 y 26',
        url: 'https://www.boe.es/eli/es/l/2006/12/14/39/con',
        icono: 'bi-person-walking'
    },
    'col-mujeres': {
        descripcion: 'Agrupa recursos dirigidos a mujeres en distintos ámbitos de atención. La normativa contempla la igualdad de trato y oportunidades y la actuación de los poderes públicos frente a la discriminación y la violencia.',
        ambito: 'Igualdad y atención social',
        fuente: 'Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres.',
        referencia: 'Artículo 14',
        url: 'https://www.boe.es/eli/es/lo/2007/03/22/3',
        icono: 'bi-person'
    },
    'col-familias': {
        descripcion: 'Incluye unidades familiares y de convivencia que pueden necesitar información, orientación, acompañamiento o prestaciones de los servicios sociales en función de su situación.',
        ambito: 'Atención familiar y convivencia',
        fuente: 'Ley 5/2009, de Servicios Sociales de Aragón.',
        referencia: 'Artículos 10 y 36',
        url: 'https://www.boe.es/eli/es-ar/l/2009/06/30/5',
        icono: 'bi-people-fill'
    },
    'col-migrantes': {
        descripcion: 'Comprende a personas migrantes que pueden necesitar información, orientación y apoyo para su acogida e inclusión social.',
        ambito: 'Acogida e inclusión social',
        fuente: 'Ley Orgánica 4/2000, sobre derechos y libertades de los extranjeros en España y su integración social.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/lo/2000/01/11/4/con',
        icono: 'bi-globe-europe-africa'
    },
    'col-discapacidad': {
        descripcion: 'Agrupa recursos dirigidos a personas con discapacidad, orientados a garantizar la igualdad de oportunidades, la accesibilidad y la vida independiente.',
        ambito: 'Igualdad de oportunidades y accesibilidad',
        fuente: 'Real Decreto Legislativo 1/2013, Ley General de derechos de las personas con discapacidad y de su inclusión social.',
        referencia: 'Consultar el texto completo',
        url: 'https://www.boe.es/eli/es/rdlg/2013/11/29/1/con',
        icono: 'bi-person-wheelchair'
    },
    'col-psh': {
        descripcion: 'Comprende a las personas en situación de sinhogarismo. La legislación de vivienda contempla medidas específicas para facilitar el acceso a soluciones habitacionales adecuadas y favorecer su inclusión social.',
        ambito: 'Atención residencial e inclusión social',
        fuente: 'Ley 12/2023, de 24 de mayo, por el derecho a la vivienda.',
        referencia: 'Artículo 14',
        url: 'https://www.boe.es/eli/es/l/2023/05/24/12/con',
        icono: 'bi-house-exclamation'
    }
};
