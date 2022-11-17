export default {
  global: {
    componenteFormativo:
      'Caracterización del potencial energético aprovechable',
    descripcionCurso:
      'En este componente se tratarán los instrumentos de medición energética más comunes, con los cuales se pueden medir las variables para controlar los procesos y determinar el potencial energético. Posteriormente se indicarán las herramientas para la evaluación del potencial de la energía fotovoltaica y la energía eólica en Colombia. Finalmente se mostrarán los principios básicos para el dimensionamiento de un sistema solar fotovoltaico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Instrumentos de medición energética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Medición de presión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Medición de temperatura',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Medición de nivel',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Medición de radiación solar (piranómetros)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Medición de velocidad y dirección del viento',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Características generales de los instrumentos de medición',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Calibración de los instrumentos de medición',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Potencial de los sistemas energéticos renovables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Potencial energético de la energía solar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Potencial energético de la energía eólica',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Reducción de huella de carbono y energías renovables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Dimensionamiento de un sistema de generación con fuentes renovables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipologías y equipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Cálculo de la carga instalada y demanda de energía eléctrica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sombreamiento, inclinación y orientación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Ejemplo de Dimensionamiento',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Diseño por Simulación',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. Medidores de presión tipo mecánico',
      referencia:
        'Galán, L. (2020). Cómo funciona un manómetro. Medida de la presión relativa. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4dXwxFJPTg8',
    },
    {
      tema: '1.2. Termómetros de principio resistivo.',
      referencia:
        'WIKA Group (2019). ¿Cómo funciona una termorresistencia? [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dQJpTusWJHA ',
    },
    {
      tema: '1.2. Termopares.',
      referencia:
        'WIKA Group (2019). ¿Cómo funciona un termopar? [Video] YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1wwAQNECC9A',
    },
    {
      tema: '1.2. Termómetros por radiación infrarroja.',
      referencia:
        'Ciencia UNAM. (2020).  Así funcionan los termómetros infrarrojos. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y-Ezb8Q5UW0',
    },
    {
      tema: '1.3. Medición continua de nivel con instrumentos tipo Flotador.',
      referencia:
        'WIKA Group (2019). WIKA - Medición de nivel con sensor de flotador de cadena Reed. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ujPcgh1JDLc',
    },
    {
      tema: '1.3. Medición continua de nivel con indicadores tipo mirilla.',
      referencia:
        'WIKA Group (201927). WIKA - Indicador de nivel con mirilla. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zlaTXjhaISg',
    },
    {
      tema: '1.3. Medición continua de nivel por presión hidrostática.',
      referencia:
        'WIKA Group (2019). WIKA - Medición hidrostática de nivel con sensor de presión. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YaSW_SIhe4E',
    },
    {
      tema: '1.3. Medición continua de nivel con instrumentos sin contacto.',
      referencia:
        'VEGA Grieshaber KG (2020). ¿Radar vs ultrasonido - cual es la diferencia entre los dos principios de medición? [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Rq_EPoKHmgo',
    },
    {
      tema: '1.7. Calibración de los instrumentos de medición.',
      referencia:
        'Testo Argentina (2021). Certificados de calibración de equipos patrones.',
      tipo: 'Archivo ejemplo certificado de calibración testo argentina.',
      link:
        'https://www.testo.com/es-AR/Certificados+de+calibraci%C3%B3n+de+equipos+patrones/certpat',
    },
    {
      tema: '2.1. Potencial Energético de la Energía solar.',
      referencia:
        'IDEAM. (2016). Atlas de radiación solar, ultravioleta, y ozono de Colombia. Aspectos Teóricos. ',
      tipo: 'Documento de consulta.',
      link: 'http://atlas.ideam.gov.co/basefiles/5.Aspectos-teoricos.pdf',
    },
    {
      tema: '2.2. Potencial Energético de la Energía Eólica.',
      referencia:
        'IDEAM, UPME. (2006). 	Atlas de viento y energía eólica de Colombia.',
      tipo: 'Documento de consulta.',
      link: 'https://bdigital.upme.gov.co/handle/001/22',
    },
    {
      tema: '3.1. Tipología y equipos. Sistemas autónomos.',
      referencia:
        'CIAE (s,f). ¿Cuáles son los Componentes de Sistemas Fotovoltaicos Autónomos? [Video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9FYhr60VFaU',
    },
    {
      tema: '3.1. Tipología y equipos. Sistemas conectados a la red.',
      referencia:
        'Novum Solar (2019). Sistema Fotovoltaico Conectado a Red - On Grid. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8EiwNy0vVFI',
    },
  ],
  glosario: [
    {
      termino: 'Huella de carbono',
      significado:
        'es el total de emisiones de gases de efecto invernadero causados por un individuo, organización, lugar o producto, expresado en toneladas de dióxido de carbono equivalente.',
    },
    {
      termino: 'Plan Energético Nacional',
      significado:
        'documento elaborado por la Unidad de Planeación Minero-Energética donde se presentan algunas ideas sobre el desarrollo futuro del sector energético colombiano y sirven de base para los planes nacionales de expansión y transformación energética.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bayod Rújula, Á. A. (2009). Energías renovables: sistemas fotovoltaicos. Prensas de la Universidad de Zaragoza.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/41940',
    },
    {
      referencia:
        'Creus Sole, A. (2008). Instrumentación industrial (7a. ed.). Marcombo.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45913',
    },
    {
      referencia:
        'Empresa de Energía de Boyacá - EBSA. (2019). Consumo de Electrodomésticos.',
      link: 'https://www.ebsa.com.co/consumo-de-electrodomesticos/',
    },
    {
      referencia:
        'García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600',
    },
    {
      referencia:
        'IDEAM, UPME. (2006). 	Atlas de viento y energía eólica de Colombia. ',
      link: 'https://bdigital.upme.gov.co/handle/001/22',
    },
    {
      referencia:
        'IDEAM, UPME. (2017). Atlas de radiación solar, ultravioleta y ozono de Colombia. ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023775/RADIACION.pdf',
    },
    {
      referencia:
        'Rojano Ramos, S. (2012). Instrumentación y control en instalaciones de procesos, energía y servicios auxiliares (MF0047_2). IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42688',
    },
    {
      referencia:
        'UPME. (2015). Integración de las energías renovables no convencionales en Colombia.',
      link:
        'http://www.upme.gov.co/Estudios/2015/Integracion_Energias_Renovables/INTEGRACION_ENERGIAS_RENOVANLES_WEB.pdf',
    },
    {
      referencia: 'UPME. (2020). Plan Energético Nacional 2020-2050',
      link: 'https://www1.upme.gov.co/DemandayEficiencia/Paginas/PEN.aspx',
    },
    {
      referencia: 'WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos?',
      link:
        'https://www.bloginstrumentacion.com/instrumentacion/construccin-funcionamiento-de-manmetros-mecnicos',
    },
    {
      referencia: 'WIKA. (2021). ¿Qué es un transmisor de presión?.',
      link:
        'https://www.bloginstrumentacion.com/knowhow/qu-es-un-transmisor-de-presin/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Marlon Augusto Villamizar Morales',
        cargo: 'Experto técnico',
        centro: '<em>Global Green Growth Institute (GGGI)</em>',
      },
      {
        nombre: 'Carolina Arias',
        cargo: 'Diseñador instruccional',
        centro: 'Bogotá',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación ortografía',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
