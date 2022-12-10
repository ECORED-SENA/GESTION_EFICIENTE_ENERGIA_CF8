<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones(data-aos="fade-down")
      .titulo-principal__numero
        span 3
      h1 Dimensionamiento de un sistema de generación con fuentes renovables
    span.text-bold(data-aos="fade-down-right") El dimensionamiento de un sistema de generación de energía con fuentes renovables 
    span(data-aos="fade-down-right") implica inicialmente la evaluación del potencial energético en el lugar de la instalación. Generalmente para el caso de la energía solar y la energía eólica, se utilizan los recursos mostrados en el anterior capítulo como los mapas y las bases de datos de información climatológica. 
    .row.justify-content-center.mt-4
      .col-lg-6.col-md-12.fondo-1.mb-4.mb-lg-0(data-aos="fade-down-right")
        img.px-5.py-4(src='@/assets/curso/tema3/figura1.svg')
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        p.fondo-28.p-4 Una vez se ha detectado el potencial para la generación de energía con fuentes renovables se procede a realizar un análisis más detallado con visitas al sitio y si es posible se realizan mediciones locales, fotografías aéreas y satelitales, levantamientos topográficos, identificación de obstáculos, medios de transporte, entre otros. Una vez sea recopilada esta información, se realiza un proceso llamado diseño en el cual se obtiene generalmente como salida la cantidad de energía generada y los componentes necesarios para la instalación.
        p Las fases para el dimensionamiento de un sistema de generación con energía renovable varían en su complejidad y tiempo de desarrollo dependiendo de la magnitud de la energía que se pretende generar. 
    p.mt-5(data-aos="fade-down-right") En este sentido el proceso de dimensionamiento de energía eléctrica para un hogar residencial puede ser en algunos aspectos diferentes a un sistema de generación para el sistema interconectado nacional.
    p(data-aos="fade-down-right") En este capítulo se mostrarán de manera general los pasos para el dimensionamiento de uno de los sistemas de generación con energía renovable con mayor crecimiento en el país: los sistemas fotovoltaicos.
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 3.1 Tipologías y equipos
    p(data-aos="fade-down-right") Conocer las tipologías y equipos relacionados con el potencial energético.
    p(data-aos="fade-down-right") Actualmente existen diversas configuraciones para los sistemas fotovoltaicos. Sin embargo, son tres (3) las tipologías más utilizadas y cada una de ellas se usa dependiendo de las necesidades del usuario final o del objetivo del proyecto. Las tipologías más comunes que podremos encontrar son las siguientes:
    .row.justify-content-center.my-4.fondo-29.align-items-center.px-4
      .col-lg-1.col-md-3.col-sm-4.col-5.mb-4.mb-md-0(data-aos="fade-down-right")
        img.mt-4.mt-md-0(src='@/assets/curso/tema3/figura2.svg')
      .col-lg-11.col-md-9.col-sm-12.py-4(data-aos="fade-down-left")
        h5.mb-1 Sistemas autónomos:
        p Los sistemas fotovoltaicos autónomos están diseñados para cubrir completamente la demanda de electricidad de un lugar durante todo el tiempo, sin necesidad de utilizar una conexión a la red de electricidad convencional suministrada por los comercializadores de energía.
        p.mb-0 Este tipo de sistemas se utiliza principalmente en zonas apartadas o Zonas No Interconectadas (ZNI) donde no existe la posibilidad de tener suministro de electricidad de las redes de energía convencionales. 
    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-12(data-aos="fade-down-right")
        p También se utilizan en zonas rurales o urbanas donde a pesar de contar con el suministro de la red convencional, la calidad del servicio no es buena debido a cortes inesperados o variaciones perjudiciales de voltaje y el usuario desea tener su propia fuente de electricidad. Otras aplicaciones de los sistemas autónomos son la alimentación de torres de telecomunicaciones en lugares de difícil acceso, bombeo de agua para fincas agrícolas, señalización en vías y carreteras, alumbrado público, entre otras. Este tipo de instalaciones no están tan generalizadas debido al alto coste de las baterías (aproximadamente el 50% del costo del proyecto completo) y su recambio en aproximadamente 4 o 5 años de uso, lo cual hace que el retorno de la inversión se dé en muchos años.
      .col-xl-6.col-lg-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen1.png')
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        span.text-bold.mb-0.ps-0.ms-0.fuente18 A. Sistemas autónomos: 
        span.fuente18 con el fin de completar la temática anterior, se invita a explorar la siguiente didáctica.
    SlyderF(data-aos="fade-down-right").mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Subsistema de generación: 
          p.text-center Compuesto por los paneles solares y los elementos de instalación y sujeción.

      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Subsistema de regulación:
          p.text-center Permite la correcta interacción y gestión de carga y entrega de energía entre los paneles solares y el sistema de acumulación. El componente principal se llama regulador de carga.

      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Subsistema de acumulación:
          p.text-center Se compone de las baterías que almacenan la energía y la entregan a la carga en los momentos en que no hay radiación disponible.

      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Inversor:
          p.text-center Dispositivo electrónico que se encarga de transformar a corriente alterna el voltaje que se generan en los paneles y entregan las baterías en corriente continua, para alimentar las cargas a 110 VAC o 220 VAC.

      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Cargas en corriente continua:
          p.text-center En ocasiones es conveniente reemplazar algunos de los equipos diseñados para funcionar con corriente alterna, por equipos que funcionan con corriente continua. El ejemplo más común es el reemplazo de las luminarias en AC por luminarias que funcionan con corriente continua. También existen en el mercado algunos electrodomésticos que pueden funcionar de esta manera.

      .tarjeta-avatar.sizetarjeta
        img.p-4.p-sm-2(src='@/assets/curso/tema3/figura3.svg')
        .tarjeta.fondo-29.px-4.py-5
          h4.text-center.mt-1.mt-sm-3 Cargas en corriente alterna:
          p.text-center Se refiere a todas las cargas que normalmente se utilizan en una vivienda, oficina y en general las que tienen como voltaje de alimentación 110 VAC o 220 VAC para el caso de Colombia.
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        p.mb-5 Para observar más detalles del funcionamiento y componentes de los sistemas fotovoltaicos autónomos, se recomienda ver el siguiente video.
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-5.col-sm-2.col-lg-1.mb-4.mb-sm-0
              img(src="@/assets/curso/tema1/figura1.svg")
            .col-sm-10.col-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0 ¿Cuáles son los componentes de sistemas fotovoltaicos autónomos? 
                  p Para observar más detalles del funcionamiento y componentes de los sistemas fotovoltaicos autónomos, se recomienda ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=9FYhr60VFaU')" target="_blank")
                    span Ver video
                    i.fas.fa-link     
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        span.text-bold.mb-0.ps-0.ms-0.fuente18 B. Sistemas conectados a la red: 
        span.fuente18 revisa la información correspondiente a los sistemas conectados a la red.
    p.my-4(data-aos="fade-down-right") Los sistemas fotovoltaicos conectados a la red o a la línea eléctrica convencional, son un tipo de instalación en donde intervienen básicamente cuatro subsistemas:
    .row.ampliar.px-5.fondo-30
      .col-12
        .row.justify-content-center.mb-4
          .col-lg-5.col-md-12(data-aos="fade-down-right")
            p #[b Subsistema de generación:] compuesto por los paneles solares y los elementos de instalación y sujeción.
            p #[b Inversor:] dispositivo electrónico que se encarga de transformar a corriente alterna el voltaje que en corriente continua se generan en los paneles, para alimentar las cargas a 110 VAC o 220 VAC y también inyectar la energía sobrante a la red convencional. Adicionalmente, el sistema inversor se encarga de gestionar el flujo de energía que viene desde los paneles y el flujo de energía que viene desde la red eléctrica convencional. 
          .col-lg-5.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-left")
            img(src='@/assets/curso/tema3/imagen2.png')
          .col-lg-10.col-md-12(data-aos="fade-down-right")
            span.text-bold Línea eléctrica convencional: 
            span corresponde a la acometida eléctrica de la red de distribución propiedad de los operadores de red y que suministra la electricidad de forma convencional a los usuarios a través de un comercializador de energía. Es importante mencionar que para este tipo de sistemas fotovoltaicos es imprescindible que exista la línea eléctrica convencional, ya que el funcionamiento del sistema completo se debe sincronizar todo el tiempo con la frecuencia y el voltaje de dicha red. 
            p En los momentos donde no haya servicio de electricidad de la red convencional, el sistema fotovoltaico se desconecta y no genera electricidad. Por lo tanto, no se debe considerar como un sistema de respaldo. Si se desea tener la posibilidad de funcionar como respaldo y a la vez conectado a la red, se debe instalar un sistema hibrido con baterías como se explicará más adelante.
            span.text-bold Subsistema de medición: 
            span se compone de un medidor de energía denominado como bidireccional. Internamente el medidor funciona como uno convencional, sin embargo, a diferencia de este, tiene la capacidad de medir y discriminar la cantidad de energía que viene de la red convencional y la cantidad de energía que viene desde el sistema fotovoltaico, con el fin de determinar al final del mes (o en cualquier momento) cuánta energía que viene de la red convencional debe facturar el comercializador de energía al usuario.
          p.text-bold.text-center.mt-3(data-aos="fade-down-right") En la operación de los sistemas conectados a la red, ocurren las siguientes situaciones durante todo un día normal de funcionamiento:
        .row.justify-content-center
          .col-lg-5.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
            img(src='@/assets/curso/tema3/imagen3.png')
          .col-lg-5.col-md-12(data-aos="fade-down-left")
            span.text-bold Autoconsumo: 
            span cuando el sistema solar fotovoltaico se diseña para cubrir totalmente la demanda de electricidad del lugar y existe durante el día valores de radiación aceptables o altos, toda la energía que consume la vivienda (o lugar de diseño) proviene de los paneles solares y el flujo de energía que viene de la red convencional es cero. Es decir, no se consume energía de la red convencional y el medidor de facturación del comercializador por concepto de consumo estará en cero. Es precisamente en estos casos donde se ahorra dinero por concepto de pago por la factura de energía del comercializador.
          .col-lg-10.col-md-12.mt-4(data-aos="fade-down-right")
            span.text-bold Consumo mixto: 
            span cuando el sistema solar fotovoltaico está diseñado para cubrir sólo parte de la demanda del lugar de instalación o cuando a pesar de que el sistema esté diseñado para cubrir toda la demanda del lugar, pero existen en ese momento valores bajos de radiación y el sistema no pueda entregar toda su capacidad, se requiere que la parte restante sea asumida por la red convencional. Es decir, en esos casos la energía que alimenta la vivienda o lugar de instalación proviene de dos fuentes: el sistema fotovoltaico y la red convencional. El medidor de facturación registrará sólo la energía que proviene de la red.
        .row.justify-content-center.mt-4.mb-5
          .col-lg-5.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
            span.text-bold Consumo convencional: 
            span en las horas donde la radiación solar es muy baja o cero (como por ejemplo en la noche), el sistema fotovoltaico no generará energía, por lo tanto, toda la energía que atiende la demanda del consumo de la vivienda o el lugar de instalación proviene de la red convencional. En este caso el medidor de facturación registrará el consumo total del lugar de la instalación.
            br
            br
            span.text-bold Inyección a red: 
            span en los momentos donde la demanda de energía del usuario es muy baja y los valores de radiación solar son aceptables o altos, el sistema fotovoltaico generará energía a su capacidad nominal, se presenta una situación denominada excedente de energía, lo cual quiere decir que la energía generada por el sistema fotovoltaico excede las necesidades de la vivienda o lugar de instalación. Este tipo de situaciones ocurre por ejemplo cuando la familia de una vivienda sale de vacaciones, o en fines de semana cuando la vivienda se encuentra sin habitantes. 
          .col-lg-5.col-md-12(data-aos="fade-down-left")
            img(src='@/assets/curso/tema3/imagen4.png')
          .col-lg-10.col-md-12.mt-4(data-aos="fade-down-right")
            p Otro ejemplo son los edificios de oficinas donde los fines de semana están con una ocupación muy baja, debido a que son días no laborales. Como la energía tiene que fluir de alguna manera, estos excedentes se “inyectan” a la red convencional. En esos momentos el medidor de facturación registrará un consumo de cero, pero también registrará estos excedentes provenientes del lugar. El usuario podrá obtener el beneficio de recibir un abono por parte de la comercializadora de energía quien le reconocerá una tarifa al usuario por la energía inyectada a la red. En Colombia este tipo de transacciones está regulada mediante la resolución CREG 030 de 2018 donde se establecen los parámetros para las actividades de autogeneración a pequeña escala y de generación distribuida en el Sistema Interconectado Nacional.
            p Es precisamente esta capacidad de inyección a la red la que se aprovecha por parte de los dueños de los grandes parques solares para instalar gran cantidad de potencia en tecnología fotovoltaica con el fin de vender energía con precios más económicos, y con bajas emisiones de gases de efecto invernadero.
          p(data-aos="fade-down-right") Para observar más detalles del funcionamiento y componentes de los sistemas fotovoltaicos conectados a la red, se recomienda ver el siguiente video:
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col-sm-10.col-12
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0 Sistema fotovoltaico conectado a red - <em>On Grid</em>
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=8EiwNy0vVFI')" target="_blank")
                    span Ver video
                    i.fas.fa-link 
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        h4.mb-0.ps-0.ms-0 C. Sistemas híbridos:
    p(data-aos="fade-down-right") Los sistemas fotovoltaicos híbridos son los que cuentan con dos o más fuentes energéticas. Un ejemplo de esto puede ser un sistema de generación de electricidad donde utiliza un sistema fotovoltaico, un sistema de generación eólica y un generador o planta eléctrica Diesel. Estas fuentes pueden trabajar simultáneamente o servir de respaldo en caso de fallo de la fuente principal. Este tipo de sistemas se utiliza en su mayoría para las torres de telecomunicaciones que están instaladas en montaña y sitios alejados y de difícil acceso, por lo tanto, se requiere de un grado de confiabilidad alta para su funcionamiento. Una de las características importantes de estos sistemas es que se pueden complementar con sistemas de baterías que pueden funcionar de forma aislada sin importar si existe o no una fuente de sincronismo.
    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 3.2 Cálculo de la carga instalada y demanda de energía eléctrica
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema3/imagen5.png')
      .col-lg-6.col-md-12.fondo-19.px-4.pt-5(data-aos="fade-down-left")
        p El cálculo de la carga instalada y la demanda de energía eléctrica son requeridos como punto de partida para el diseño de un sistema fotovoltaico, especialmente para los sistemas autónomos donde la cantidad de paneles, inversores, baterías y demás están determinados por la demanda energética del lugar de instalación. Para entender las bases del concepto de carga instalada y demanda de energía eléctrica se recomienda repasar el tema carga y demanda eléctrica del módulo requisitos de producto. Existen dos métodos para obtener la demanda de energía eléctrica de un lugar:
    .row.ampliar.px-5.fondo-31
      .col-12
        //- titulo con figura
        .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
          .col-sm-1.col-2
            img.flecha(src='@/assets/curso/tema1/triangulo.svg')
          .col-sm-11.col-10.correr-izq
            h4.mb-0.ps-0.ms-0 A. Demanda calculada: 
        p(data-aos="fade-down-right") Se denomina calculada porque resulta del cálculo del consumo de electricidad para cada uno de los equipos eléctricos descritos en el cuadro de cargas del lugar. La energía eléctrica se obtiene de la multiplicación de la potencia en vatios (W) de cada equipo por las horas al día de funcionamiento, obteniendo el valor en vatios-hora (Wh) que posteriormente se pueden convertir en unidades de kilovatio-hora (kWh).
        .row.justify-content-center.mt-5
          .col-lg-10.col-md-12.fondo-blanco.redondearpuntas.sombras.p-4(data-aos="fade-down-right")
            p.mb-4 A continuación, se muestra un ejemplo de la demanda de energía eléctrica calculada para una vivienda. La potencia de cada equipo eléctrico se puede obtener observando la placa de datos que viene en cada uno de ellos, también en el manual de servicio del equipo o se puede estimar de acuerdo a otras referencias como la mostrada en el siguiente enlace de la Empresa de Energía de Boyacá - EBSA (2019): 
              a.mb-4(:href="('https://www.ebsa.com.co/consumo-de-electrodomesticos/')" target="_blank")
              span.colorlink https://www.ebsa.com.co/consumo-de-electrodomesticos/
            .tabla-a.color-acento-contenido.mb-4 
              table
                thead
                  tr
                    th.text-center.anchocol No.
                    th Descripción
                    th.anchocol1.desbordamiento Cantidad
                    th Potencia individual [W]
                    th Horas encendido al día [h]
                    th Energía diaria [Wh]
                tbody
                  tr
                    td.text-center 1
                    td Nevera
                    td.text-center 1
                    td.text-center 300
                    td.text-center 12
                    td.text-center 3.600
                  tr
                    td.text-center 2
                    td Bombillo LED 10W
                    td.text-center 5
                    td.text-center 10
                    td.text-center 8
                    td.text-center 400
                  tr
                    td.text-center 3
                    td Televisor
                    td.text-center 2
                    td.text-center 80
                    td.text-center 5
                    td.text-center 800
                  tr
                    td.text-center 4
                    td Computador de escritorio
                    td.text-center 2
                    td.text-center 250
                    td.text-center 4
                    td.text-center 2.000
                  tr
                    <td colspan="5">Consumo diario total de energía eléctrica [Wh]</td>
                    td.text-center 6.800
                  tr
                    <td colspan="5">Consumo diario total de energía eléctrica en kWh [kWh]</td>
                    td.text-center 6,8
            p.mb-4 De lo anterior se concluye que el consumo diario para este caso es de 6,8 kWh-día, y asumiendo que se consume lo mismo durante los treinta (30) días del mes, el consumo mensual es de 204 kWh-mes.
        //- titulo con figura
        .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
          .col-sm-1.col-2
            img.flecha(src='@/assets/curso/tema1/triangulo.svg')
          .col-sm-11.col-10.correr-izq
            h4.mb-0.ps-0.ms-0 B. Demanda medida:
        p.my-4(data-aos="fade-down-right") El método de la demanda calculada es utilizado normalmente en aplicaciones muy sencillas. En aplicaciones más complejas donde la elaboración de un cuadro de cargas y un cuadro de cálculo resulta compleja de obtener debido a la gran cantidad de equipos conectados en las instalaciones del usuario interesado en instalar un sistema fotovoltaico, se prefiere utilizar medidores de energía que tengan la capacidad de medir y registrar en una memoria interna los valores de energía eléctrica en cada minuto u hora del día. Normalmente estos medidores se instalan en la acometida eléctrica de entrada y la instalación debe ser lo suficientemente segura para garantizar la seguridad de las personas y de los equipos instalados. Existen medidores con diferentes tecnologías desde los más avanzados llamados analizadores de red hasta los más sencillos medidores monofásicos.
        p En las siguientes imágenes se muestran algunos medidores y la visualización de la curva de consumo energético que se obtiene como resultado: 
        .col-12.fondo-blanco.redondearpuntas.sombras.p-5.my-5(data-aos="fade-down-right")
          .row.justify-content-center
            .col-lg-4.col-md-12
              .row.justify-content-center
                .col-12.px-lg-5
                  p.text-center Analizador portátil avanzado de redes eléctrica marca Fluke
                .col-12.p-5
                  img(src='@/assets/curso/tema3/imagen6.png')
            .col-lg-4.col-md-12
              .row.justify-content-center
                .col-12.px-lg-5
                  p.text-center Medidor de energía con registro de datos marca Socomec
                .col-12.px-lg-5.pt-lg-5
                  img.px-5.mb-4.mb-lg-0(src='@/assets/curso/tema3/imagen7.png')
            .col-lg-4.col-md-12
              .row.justify-content-center
                .col-12.px-lg-5
                  p.text-center Ejemplo de curva de demanda diaria obtenida por medidor de energía con registro de datos
                .col-12.p-5
                  img.m-auto(src='@/assets/curso/tema3/imagen8.png')
    separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 3.3 Sombreamiento, inclinación y orientación
    p Para complementar la temática se invita a explorar la siguiente didáctica. 
    p.mb-5(data-aos="fade-down-right") Para el análisis de los sistemas fotovoltaicos, existen pérdidas de energía asociadas a la instalación de los paneles y a los obstáculos presentes alrededor de la instalación. En general existen dos tipos de pérdidas asociadas al lugar de la instalación:
    .row.justify-content-center.fondo-1.py-4
      .col-lg-4.col-md-6.col-sm-7.col-8.mb-4.mb-lg-0(data-aos="fade-down-right")
        img.m-auto(src='@/assets/curso/tema3/figura4.svg')
      .col-lg-8.col-md-12.px-4.px-lg-0(data-aos="fade-down-left")
        h5 Pérdidas por sombreamiento
        p El cálculo de los sombreamientos es muy importante para cuantificar las pérdidas que se pueden tener por este efecto en una instalación. La presencia de sombras, tendrá como consecuencia la disminución de la producción de electricidad. Por lo tanto, para el diseño de los sistemas fotovoltaicos se deben implementar configuraciones de instalación de los paneles solares de tal forma que se evite la influencia de las sombras. 
        p El sombreamiento puede ser causado por: edificios, montañas, otros paneles, etc. Para identificar los efectos del sombreamiento producidos por los movimientos del sol y los elementos, se utilizan herramientas como los diagramas estereográficos, los cuales permiten calcular si se va a tener sombras en la instalación, una vez sean conocidos el acimut y la altura del edificio u obstáculo. Normalmente este tipo de pérdidas se calculan vía <em>software</em> o se utilizan tablas específicas para cada país donde se presentan unos factores de pérdidas que se deben aplicar.
    .row.justify-content-center.fondo-19.py-4.my-5
      .col-lg-8.col-md-12.px-4.order-last.order-lg-first(data-aos="fade-down-left")
        h5 Pérdidas por inclinación y orientación
        p Para obtener el mayor rendimiento energético del panel solar, se debe tener en cuenta la inclinación y la orientación del panel o del arreglo de paneles solares a instalar y dependiendo del país y la zona donde se van a instalar los paneles, las condiciones son diferentes. Otro punto a tener en cuenta es que, si por ejemplo se quiere aprovechar el tejado de una vivienda o de una industria para la instalación, este tejado ya tiene una inclinación que no se puede cambiar. Por lo tanto, en el momento de diseñar el sistema fotovoltaico, se tendrán en cuenta este tipo de detalles para analizar la producción final de electricidad.
        p Para el caso de Colombia, al estar ubicados cerca de la línea ecuatorial y al no existir estaciones como en otros países, se tiene una gran ventaja porque las condiciones ambientales son muy parecidas durante todo el año. Debido a lo anterior, la orientación óptima para Colombia es instalar los paneles solares hacia el sur geográfico del lugar de instalación. Adicionalmente, la inclinación ideal de los paneles solares en Colombia está entre 10° y 15° con respecto a la línea paralela al suelo. Lo anterior para garantizar que con esa misma inclinación, el panel solar pueda limpiarse de manera fácil.
        p En la siguiente imagen se puede observar la orientación de los paneles hacia el sur y el concepto gráfico del grado de inclinación.
        p En muchas ocasiones no será posible que la instalación de los paneles solares cumpla con la orientación ni la inclinación más adecuada porque normalmente los paneles solares se instalan sobre superficies o tejados ya construidos y existen cantidad de obstáculos que no permiten obtener los parámetros óptimos. 
        p Como consecuencia, la producción de electricidad bajará dependiendo de qué tan alejado estaremos de esos valores óptimos. 
        p Aunque es posible calcular manualmente las pérdidas por orientación e inclinación de los paneles solares en una instalación, normalmente se recurre a herramientas de simulación que permiten observar la producción de electricidad variando la posición de los paneles.
 

      .col-lg-4.col-md-6.col-sm-7.col-8.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-down-right")
        img(src='@/assets/curso/tema3/figura5.svg')
        img.mt-4(src='@/assets/curso/tema3/imagen16.jpg')
        p.mt-3 Orientación de los paneles hacia el sur y el concepto gráfico del grado de inclinación.
    separador
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 3.4 Ejemplo de dimensionamiento
    p Conocer por medio de la siguiente didáctica un ejemplo de dimensionamiento.
    p.mb-5(data-aos="fade-down-right") Para el dimensionamiento de las instalaciones solares fotovoltaicas actualmente se utiliza <em>software</em> especializado. Sin embargo, para aplicaciones pequeñas como viviendas rurales se utiliza un método de cálculo sencillo que permite el diseño de instalaciones con herramientas convencionales como hojas de cálculo. En este capítulo se pretende dimensionar de forma básica una instalación solar fotovoltaica de tipo autónomo para la electrificación de una vivienda rural que quiere autoabastecer su consumo sin energía de la red principal. 
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0.fondo-32.px-5.pt-5(data-aos="fade-down-right")
        p Cabe mencionar que se hace como ejercicio didáctico, por lo tanto, algunos detalles de la instalación como planos constructivos, diagramas unifilares eléctricos, puesta a tierra y demás no son tenidos en cuenta. Para los sistemas conectados a red se pueden utilizar algunos de los pasos mostrados a continuación, sin embargo, al ser un tipo de sistema diferente algunos componentes como las baterías no están presentes. Actualmente existen varios métodos para el dimensionamiento de sistemas autónomos que se pueden elegir, para esta ocasión se muestran los pasos a seguir de acuerdo con Bayod (2019):
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen9.jpg')
    .row.justify-content-center
      .col-lg-10.col-md-12.mb-3(data-aos="fade-down-right")
        h4 A. Identificación del lugar de instalación y condiciones ambientales
      .col-lg-10.col-md-12.fondo-8.px-3(data-aos="fade-down-left")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-4.col-sm-4.col-5.p-4
            img(src='@/assets/curso/tema3/figura6.svg')
          .col-lg-10.col-md-12
            span.text-bold Ubicación del lugar: 
            span Bucaramanga (Santander). Zona rural.
            br
            span.text-bold Tipo de usuario: 
            span vivienda unifamiliar donde conviven cuatro personas.
            br
            span.text-bold ¿Es posible instalar los paneles en el tejado de la vivienda? 
            span Si.
            br
            span.text-bold ¿Hay obstáculos que generen sombras sobre el tejado? 
            span Se asume que no existe la influencia de sombras.
      .col-lg-10.col-md-12.mt-5.mb-4(data-aos="fade-down-right")
        h4 B. Determinación de la demanda o consumo de energía diaria
      .col-lg-10.col-md-12.fondo-8.px-3(data-aos="fade-down-left")
        .tabla-a.color-acento-contenido.my-4 
          table
            thead
              tr
                th.text-center.anchocol No.
                th Descripción
                th.anchocol1.desbordamiento Cantidad
                th Potencia individual [W]
                th Horas encendido al día [h]
                th Energía diaria [Wh]
            tbody.fondo-blanco
              tr
                td.text-center 1
                td Nevera pequeña
                td.text-center 1
                td.text-center 200
                td.text-center 9
                td.text-center 1.800
              tr
                td.text-center 2
                td Bombillo LED 5W
                td.text-center 4
                td.text-center 5
                td.text-center 8
                td.text-center 100
              tr
                td.text-center 3
                td Televisor LED
                td.text-center 1
                td.text-center 4
                td.text-center 5
                td.text-center 400
              tr
                td.text-center 4
                td Equipo de sonido
                td.text-center 1
                td.text-center 100
                td.text-center 3
                td.text-center 300
              tr
                td.text-center 5
                td Licuadora
                td.text-center 1
                td.text-center 200
                td.text-center 0,1
                td.text-center 20
              tr
                td.text-center 6
                td Celulares
                td.text-center 3
                td.text-center 2
                td.text-center 4
                td.text-center 24
              tr
                <td colspan="5">Consumo diario total de energía eléctrica [Wh]</td>
                td.text-center 2.644
              tr
                <td colspan="5">Consumo diario total de energía eléctrica en kWh [kWh]</td>
                td.text-center 2.644
      .col-lg-10.col-md-12.mt-5.mb-4(data-aos="fade-down-right")
        h4 C. Determinación de la energía necesaria para el diseño
      .col-lg-10.col-md-12.fondo-8.p-4(data-aos="fade-down-left")
        p Una vez se calcula la energía eléctrica consumida por la vivienda, es necesario aplicar a este valor factores de multiplicación para que el diseño esté por encima de las especificaciones mínimas requeridas y sean suplidas las pérdidas que se presentan en los demás elementos del sistema como cables, regulador y conductores entre otros.  El primero de los factores se denomina margen de seguridad y resulta de aumentar en un 15% el valor del consumo calculado en el paso anterior. Teniendo en cuenta lo anterior, el nuevo consumo con el margen de seguridad incluido del 15% es:
        .row.justify-content-center.my-4
          .col-lg-8.col-md-10.col-sm-12.fondo-blanco.redondearpuntas.sombras.mt-4.mt-lg-0
            .row.justify-content-center.align-items-center
              .col-xl-9.col-lg-8.col-md-12.pt-3.order-last.order-lg-first
                p.text-center <em>Consumo Margen 1 = Consumo calculado * (1 + 15%) = 2.644 Wh * (1+0,15) = 3.040,6 Wh = 3,04 kWh-día</em>
              .col-xl-3.col-lg-4.col-md-4.col-sm-4.col-5.order-first.first-lg-last
                img.correrarriba(src='@/assets/curso/tema3/figura7.svg')
        p Una vez calculado el Consumo aplicando el Margen 1, se debe tener en cuenta la eficiencia de conversión de corriente continua a corriente alterna, el cual en ningún momento es del 100%. Siempre existen unas pérdidas asociadas que dependen de la tecnología del inversor y de la curva de funcionamiento del mismo. Normalmente la eficiencia de los inversores varía entre 80% y 90% o mayor, sin embargo, para este ejercicio se tomará una eficiencia del 85%. La fórmula utilizada para calcular la demanda de energía eléctrica total para diseño es:
        .row.justify-content-center.my-4
          .col-lg-8.col-md-10.col-sm-12.fondo-blanco.redondearpuntas.sombras.mt-4.mt-lg-0
            .row.justify-content-center.align-items-center
              .col-xl-9.col-lg-8.col-md-12.pt-3.order-last.order-lg-first
                p.text-center <em>Consumo_diseño = Consumo_(Margen 1) / Eficiencia Inversor % = 3.040,6 𝑊ℎ / (85/100) =3.577,18 Wh</em>
              .col-xl-3.col-lg-4.col-md-4.col-sm-4.col-5.order-first.first-lg-last
                img.correrarriba(src='@/assets/curso/tema3/figura8.svg')
      .col-lg-10.col-md-12.mt-5.mb-4(data-aos="fade-down-right")
        h4 D. Evaluación de la irradiación global horizontal diaria disponible
      .col-lg-10.col-md-12.fondo-8.p-4(data-aos="fade-down-left")
        p En este paso se debe dirigir a las fuentes de información disponible de tal forma que se pueda encontrar el valor de la irradiación global horizontal disponible en la zona de instalación del sistema fotovoltaico. Para este caso en particular, se utiliza el Mapa nacional multianual de irradiación global horizontal medio diario anual. (página 74 del documento IDEAM, UPME. (2017)) en donde se determina que el valor de la irradiación global para la ciudad de Bucaramanga se encuentra en un rango entre 3,5 y 4 (kWh )/m2. Para garantizar que el diseño esté por encima de las especificaciones, se toma el valor menor del rango. Es decir, para el presente ejercicio se tomará el valor de 3,5  (kWh )/m2 = 3500 (Wh )/m2 Una vez se determina este valor, se procede a calcular las horas solares pico (HSP) de la siguiente manera:
        .row.justify-content-center.my-4
          .col-lg-8.col-md-10.col-sm-12.fondo-blanco.redondearpuntas.sombras.mt-4.mt-lg-0
            .row.justify-content-center.align-items-center
              .col-12.pt-3
                p.text-center.mb-0 HSP =  (Irradiación global horizontal diaria)/(1000 W/m2)=3500/1000=3,5 horas
                p.text-center Es elección del diseñador escoger la fuente de información. Se recomienda para diseños reales, hacer uso de las bases de datos para obtener valores más confiables.        
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        h4.mb-0.ps-0.ms-0 Cálculo del número de paneles solares y la potencia pico a instalar
    p.mb-5(data-aos="fade-down-right") Para el cálculo de la cantidad de paneles solares y la potencia pico a instalar, se debe seleccionar primero el panel solar a utilizar que se encuentre disponible en el mercado y que se adapte a las condiciones requeridas por el lugar de instalación. Existen varias potencias nominales que se pueden seleccionar. Para este caso en particular, se seleccionó el panel solar con Potencia pico de 300 W. La fórmula para calcular la cantidad total de paneles solares (Np) requeridos es la siguiente:
    .row.justify-content-center
      .col-lg-10.col-md-12.p-4.fondo-33(data-aos="fade-down-right")
        p.text-center.mb-0 Np = 1,1*(R/I) / Potencia del panel elegido =1,1 * (1.022,05 W) / 300 W = 3,74 paneles 
        p.text-center La constante de 1,1 tiene relación a un margen de seguridad de potencia que se sugiere para el cálculo.
        p.text-center Como el valor del Np no es un número entero, se aproxima al valor próximo entero que para este caso es 4 paneles.
        p.text-center.mb-0 El valor de la potencia pico del sistema completo se calcula multiplicando el número de paneles por la potencia pico de cada panel.
        p.text-center Potencia_(pico del sistema)=Np * Potencia individual del panel seleccionado = 4*300W = 1200 W_pico
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        h4.mb-0.ps-0.ms-0 Diseño del sistema de acumulación
    p.my-4(data-aos="fade-down-right") El sistema de acumulación es una de las partes más importantes para el diseño, ya que se compone de baterías que soportan el consumo de energía en horas de la noche y madrugada donde no existe o la radiación solar es muy baja. Para evaluar el tamaño del sistema de acumulación, es necesario definir para el diseño las siguientes variables:
    .tarjeta.fondo-1.p-4.mb-5(data-aos="fade-down-right")
      SlyderA.my-5(tipo="b")
        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            h3 Días de autonomía (D):
            p Corresponde al tiempo en días que debe funcionar la instalación fotovoltaica sin recibir radiación solar en las condiciones de diseño. Este valor se determina teniendo en cuenta las condiciones de la instalación como por ejemplo si tiene una planta de energía de respaldo, o si es muy crítico el uso de la energía para esa vivienda o locación. 
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema3/imagen9.png')
        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            h3 Máxima profundidad de descarga (Mpd):
            p Corresponde al límite de descarga que puede alcanzar la batería. Para aplicaciones rurales se recomienda tomar un valor de 70%.
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema3/imagen10.png')

        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            h3 Voltaje de trabajo de la instalación (Vdc): 
            p Corresponde al voltaje en DC al que trabajarán los componentes como paneles solares, regulador de carga, entrada del inversor y baterías. Este voltaje puede ser generalmente de 12,24 o 48 voltios. Se debe tener en cuenta que el voltaje de trabajo debe ser el mismo para todos los elementos seleccionados. También se debe tener en cuenta que, para instalaciones fotovoltaicas con altas potencias como los parques solares, los voltajes pueden llegar hasta 600 VDC.

          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema3/imagen11.png')

        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            h3 Consumo de diseño (C_diseño): 
            p.mb-0 Corresponde al valor de diseño del consumo de electricidad calculado en el numeral c.
            p.mb-0 La capacidad de acumulación (Q) tiene unidades de Amperio-hora (Ah) y se calcula con la siguiente fórmula:
            p.mb-0 <em>Q = (110*C_diseño*D)/(V_dc*M_pd)</em>
            p.mb-0 Para el caso del ejemplo se consideran los siguientes valores:
            p.mb-0 <em>D = 2 𝑑í𝑎𝑠 , M_pd=70% , V_dc=12 Voltios DC, C_diseño=3.577,18 Wh-día</em>
            p.mb-0 <em>Q = (110*3.577,18*2)/(12*70)=936,88 Ah</em>
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema3/imagen12.png')

        .row.justify-content-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            h3 Ahora para seleccionar el número de baterías:
            p Se debe buscar en el mercado en lo posible baterías de 12 voltios (o arreglos de baterías en serie y paralelo de 2 voltios) que tengan la mayor capacidad para disminuir su cantidad ya que son elementos costosos. Para este ejercicio, se seleccionan baterías GEL de 12 V y 250 Ah de capacidad cada una. Como las baterías tienen el mismo voltaje del sistema de 12V, se pueden conectar en paralelo y la cantidad de baterías se define como:
            p Número de baterías =Q /capacidad unitaria de batería  = 936,88/250 = 3,74 baterías. 
            p Al igual que con los paneles solares, la cantidad de baterías final se aproxima al número entero mayor, que en nuestro caso es 4 unidades.
       
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema3/imagen13.png')
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        h4.mb-0.ps-0.ms-0 Selección del regulador de carga
    .row.justify-content-center.my-5
      .col-xl-7.col-lg-12.fondo-34.p-4.mb-4.mb-xl-0(data-aos="fade-down-right")
        p Para la selección del regulador de carga se debe tener en cuenta que el voltaje de trabajo de dicho regulador sea el mismo del voltaje de diseño de la instalación, que para el ejemplo es de 12V. Adicionalmente se debe calcular la corriente de corto circuito que proviene de los paneles que se encuentra en la hoja de datos de cada panel solar que para nuestro caso es de 8,86 amperios, y como son 4 paneles solares se debe multiplicar por este valor. Es decir, se debe buscar en el mercado comercial un regulador que exceda con las siguientes características mínimas:
        p.mb-0 Voltaje = 12 V en corriente continua.
        p Corriente total = 8,86 amperios * 4 paneles = 35,44 amperios en dc.
      .col-xl-5.col-lg-6.col-md-7.col-sm-8.col-8(data-aos="fade-down-left")
        img(src='@/assets/curso/tema3/imagen14.png')
    //- titulo con figura
    .row.align-items-center.mb-0.mt-5(data-aos="fade-down-right")
      .col-sm-1.col-2
        img.flecha(src='@/assets/curso/tema1/triangulo.svg')
      .col-sm-11.col-10.correr-izq
        h4.mb-0.ps-0.ms-0 Selección del inversor requerido
        p Explorar cómo seleccionar el inversor requerido.
        p.mb-5 En el mercado existe gran cantidad de inversores con diferentes tecnologías y eficiencias. El primer parámetro que se debe tener en cuenta para la selección del inversor es que su voltaje de entrada en corriente continua debe ser el mismo del sistema diseñado, que en nuestro caso es de 12 Vdc. Otro parámetro a tener en cuenta es el voltaje de salida en corriente alterna requerido para alimentar los equipos eléctricos de la vivienda o locación. 
    .row.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0(data-aos="fade-down-right")
        img(src='@/assets/curso/tema3/imagen15.png')
      .col-lg-6.col-md-12.fondo-33.p-4(data-aos="fade-down-left")
        p En Colombia la mayoría de los equipos eléctricos residenciales funcionan a 110 VAC, por lo tanto este sería el voltaje de salida del inversor a seleccionar. El último criterio de selección es la potencia nominal en vatios del inversor, la cual se elige volviendo al cuadro de cargas realizado en el numeral b, y eligiendo los equipos de mayor potencia que pueden estar encendidos al mismo tiempo. Para nuestro ejercicio, se puede asumir que en algún momento los equipos No. 1, 3, 4 y 5 pueden estar encendidos en algún momento al mismo tiempo. La suma de las potencias de cada uno de ellos da en total 600 vatios (W). De acuerdo con lo anterior el inversor a elegir debe tener una potencia mínima de 600 W.
    separador
    #t_3_5.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 3.5 Diseño por simulación
    p.mb-5(data-aos="fade-down-right") Actualmente existen varias herramientas <em>software</em> para el diseño de los sistemas fotovoltaicos. Revisar la siguiente información para que se estudie el tipo de herramientas que lo componen.
    figure.my-5(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/F5E9YdgdsVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
