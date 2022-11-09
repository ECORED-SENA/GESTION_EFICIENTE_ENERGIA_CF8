<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos de medición energética
    span.mt-5.resaltado Muchas veces para alcanzar los objetivos que se plantean tanto a nivel personal, 
    span profesional, y en general en cualquier proceso dentro de una organización, es necesario alcanzar el control de la variable que determina si se está alcanzado la meta o por el contrario se está más lejos de alcanzarla. Por ejemplo, si alguna persona quiere mejorar su salud disminuyendo su peso corporal, lo primero que hace es medir el valor actual de su peso corporal utilizando un instrumento llamado balanza y posteriormente lo compara con el peso ideal que se desea alcanzar; la diferencia entre estos valores determina la cantidad de peso debe bajar.
    p Se invita a visualizar los instrumentos de medición energética, y la medición de presión:
    .tarjeta.fondo-1.p-4.mb-5
      SlyderA.my-5(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p Continuando con el ejemplo de la persona que desea bajar de peso, para lograr la meta, esta persona toma algunas decisiones acerca de su dieta o actividad física, acompañado siempre de la 
              span.text-bold medición 
              span de su 
              span.text-bold  peso corporal 
              span para verificar si efectivamente se está cumpliendo el objetivo. Sin el uso del instrumento de medición, seguramente la persona no tendrá cómo lograr sus objetivos, ya que estaría “ciega” con respecto a cuáles son sus necesidades y qué tan lejos o cerca está de lograr la meta.
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen1.svg')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p Para entender el significado de los Sistemas de Gestión, es necesario conocer las bases de cada uno de los conceptos asociados a la gestión. En este capítulo conoceremos las generalidades de los sistemas de gestión, hablaremos de la estructura básica de cualquier sistema de gestión denominada normalmente ciclo PHVA y finalmente se descubrirá a qué se refiere cuando se habla de certificación en los sistemas de gestión.
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen2.svg')

        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p Lo anterior también aplica a todos los procesos que se realizan al interior de una organización, en donde si no se tiene la medición de las variables que afectan al proceso, es imposible lograr un control efectivo que permita alcanzar los objetivos de una forma eficaz y eficiente. 
            p En este capítulo se mostrarán las variables físicas más comunes donde se utilizan instrumentos de medición más utilizados para el sector industrial y también algunos instrumentos utilizados en instalaciones de generación de energía renovable...
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen3.svg')

        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p.text-bold Medición de Presión.
            p La presión se define como la división entre el valor de una fuerza aplicada y el área de la superficie donde dicha fuerza se aplica. En el Sistema Internacional (SI) la unidad normalizada para la presión es el Pascal (Pa) definido como la fuerza que ejerce 1 Newton por metro cuadrado [N/m2]. En la industria las unidades de presión que más se utilizan son el Bar y el Psi. 
            p En la vida cotidiana es común encontrar referencia a la presión cuando se requiere conocer si las llantas de un automóvil están infladas a la presión correcta que en promedio es de 32 Psi, también cuando se requiere conocer la presión a la que llega el suministro de agua potable a nuestros hogares. Es decir, la presión se puede medir en fluidos como líquidos y gases. 
            span.text-bold  El resultado de la medida de presión varía dependiendo de las características del lugar 
            span de medición como por ejemplo la altitud sobre el nivel del mar y otras condiciones climáticas. Debido a lo anterior, se ha establecido de manera general dos tipos de medida de presión.
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen4.svg')

        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            span.text-bold Presión manométrica: 
            span es el tipo de presión que comúnmente se maneja. Por ejemplo, la presión de las llantas de un automóvil corresponde a presión manométrica. Si un medidor de presión manométrica está en valor cero, quiere decir que la presión del fluido o gas se encuentra en la misma presión atmosférica del lugar donde se está midiendo.
            br
            br
            span.text-bold Presión absoluta: 
            span este tipo de presión incluye el efecto de la presión atmosférica en el valor de la medida. Un instrumento de medición de presión absoluta por lo general no llega a indicar cero en su medida, ya que lo mínimo que va a medir es siempre la presión atmosférica.
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen5.svg')

        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p Por lo general en una planta industrial los instrumentos miden la presión manométrica, mientras que los instrumentos que miden la presión absoluta se encuentran en procesos donde se requieren presiones por debajo de la presión atmosférica.
            p Las equivalencias entre las unidades de presión mayormente utilizadas en la industria son:
            p 1 atm (atmósfera) = 760 mm Hg (milímetros de mercurio)
            p = 10,13 x 104 Pa (Pascal) = 14,7 P SI = 1,01325 Bar
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen6.svg')
    separador
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Medición de presión
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 A. Medidores de presión tipo mecánico
    p Los medidores de presión de tipo mecánico se denominan de esa forma porque su principio de funcionamiento involucra la interacción entre piezas mecánicas y no involucra elementos eléctricos o electrónicos para la medida de presión.
    .row.fondo-2.ampliar.px-5
      .col-12.fondo-blanco.redondearpuntas.sombras.p-4 
        p.text-center.mb-5 Dentro de los medidores de presión de tipo mecánico se encuentran tres tipos dependiendo de la tecnología usada:

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr.fondo-3
                td 
                  h4.text-center Fuelle
                td 
                  h4.text-center Diafragma o Membrana
                td 
                  h4.text-center Tubo Bourdon
            tbody
              tr
                td.sinborde.fondo-4 Se asemeja a un acordeón, pero está fabricado con membranas metálicas en forma de espiral. Cuando se aumenta la presión al interior del fuelle, este se alarga en la dirección que indica la flecha.
                td.sinborde  Está compuesto por un disco delgado normalmente metálico que tiene una saliente. Similar al caso del fuelle, cuando se aumenta la presión al interior del diafragma, este se desplaza en la dirección que indica la flecha.
                td.sinborde.fondo-4  Se compone de un tubo metálico que parece aplastado pero su interior es hueco. Cuando se aplica presión el tubo se desplaza en la dirección que indica la flecha. Este tipo de tecnología es la más utilizada en los manómetros de tipo mecánico.
              tr
                td.sinborde.fondo-4 
                  img.proporcion(src='@/assets/curso/tema1/figtabla1.svg')
                td.sinborde  
                  img.proporcion(src='@/assets/curso/tema1/figtabla2.svg')
                td.sinborde.fondo-4 
                  img.proporcion(src='@/assets/curso/tema1/figtabla3.svg')
              tr
                td.desbordamiento.fondo-4
                  span.text-bold Nota. 
                  span García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 17. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600
                td.desbordamiento 
                  span.text-bold Nota. 
                  span García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 17. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600
                td.desbordamiento.fondo-4 
                  span.text-bold Nota. 
                  span García Gutiérrez, L. (2014). Instrumentación básica de medida y control. AENOR - Asociación Española de Normalización y Certificación. p. 18. https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/53600
        .row.justify-content-center
          .col-lg-10.col-md-12(data-aos="fade-down-right")
            .tarjeta.color-primario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema1/figura1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      p.text-bold.mb-0 ¿Cómo funciona un manómetro || medida de la presión relativa?
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=4dXwxFJPTg8')" target="_blank")
                        span Ver video
                        i.fas.fa-link          
      p.my-5 A continuación, se muestran algunas características de los medidores de presión de tipo Bourdon: 
      .row.justify-content-center.fondo-blanco.redondearpuntas.sombras.p-4.my-5
        .col-lg-3.col-md-6.col-sm-12.mb-4
          .row.justify-content-center.align-items-center
            .col-12(data-aos="fade-down-right")
              p.text-center Esquema de componentes del medidor de presión tipo Bourdon.
            .col-12
              img(src='@/assets/curso/tema1/fig1.svg')
        .col-lg-3.col-md-6.col-sm-12.mb-4
          .row.justify-content-center.align-items-center
            .col-12(data-aos="fade-down-right")
              p.text-center Fotografía del medidor de presión tipo Bourdon. Fabricante WIKA.
            .col-12
              img(src='@/assets/curso/tema1/fig2.svg')
        .col-lg-3.col-md-6.col-sm-12.mb-4
          .row.justify-content-center.align-items-center
            .col-12(data-aos="fade-down-right")
              p.text-center Esquema de componentes del medidor de presión tipo membrana.
            .col-12
              img(src='@/assets/curso/tema1/fig3.svg')
        .col-lg-3.col-md-6.col-sm-12
          .row.justify-content-center.align-items-center
            .col-12(data-aos="fade-down-right")
              p.text-center Fotografía del medidor de presión tipo membrana. Fabricante WIKA.
            .col-12
              img(src='@/assets/curso/tema1/fig4.svg')

        p.p-4.fondo-5.mb-0.desbordamiento Nota. WIKA. (2021). ¿Cómo funcionan los manómetros mecánicos?. 
          a.mb-4(:href="('https://www.bloginstrumentacion.com/instrumentacion/construccin-funcionamiento-de-manmetros-mecnicos/')" target="_blank")
            span https://www.bloginstrumentacion.com/instrumentacion/construccin-funcionamiento-de-manmetros-mecnicos/

      //- titulo con figura
      .row.align-items-center.correr-izq.mb-0
        .col-1.pad1
          img(src='@/assets/curso/tema1/triangulo.svg')
        .col-11
          h4.mb-0.ps-0.ms-0 B. Medidores de presión de tipo electrónico
    .row.fondo-6.ampliar.px-5
      .col-12
        p Los medidores de presión de tipo electrónico poseen componentes capaces de convertir una señal mecánica en una señal eléctrica que se puede transportar a través de cables o conductores eléctricos hacia un equipo electrónico que pueda interpretar esa señal, convertirla en un valor numérico y mostrarla a través de una pantalla digital. 
        p.mb-5 Los principios de medición o sensores más usados para los instrumentos de presión son los siguientes:
    .row.justify-content-center
      .col-lg-5.col-md-12(data-aos="fade-down-right")
        .div.fondo-7.text-center.p-4.mb-3.redondearpuntas
          h4 Sensores resistivos
          p.mb-0 Consiste en una membrana fabricada con materiales conductores eléctricos, los cuales al ser sometidas a una presión se deforman cambiando el valor de la resistencia total del circuito. El valor de la resistencia es proporcional a la deformación de la membrana.
        .div.fondo-7.text-center.px-4.py-5.mb-3.redondearpuntas
          h4 Sensores Piezoresistivos
          p.mb-0 El funcionamiento es similar al de los sensores resistivos, pero se diferencia en el uso de materiales semiconductores para la fabricación de la membrana.
        .div.fondo-7.text-center.px-4.py-5.redondearpuntas
          h4 Sensores capacitivos
          p.mb-0 Utiliza una membrana con dos capas metálicas que conforman un condensador. El valor de la capacitancia del condensador varía en función de la deformación de las membranas.
      .col-lg-7.col-md-12(data-aos="fade-down-left")
        .div.fondo-blanco.redondearpuntas.sombras.p-4
          p.text-center.text-bold Esquema de componentes del medidor de presión tipo Bourdon.
          img(src='@/assets/curso/tema1/imagen7.svg')
          p.p-4.fondo-5.mb-0.desbordamiento.mt-5 Nota. WIKA. (2021). ¿Cómo funcionan un transmisor de presión?. Recuperado el 10 de septiembre de 2021, de 
            a.mb-4(:href="('https://www.bloginstrumentacion.com/productos/como-funciona-un-transmisor-de-presion/')" target="_blank")
              span https://www.bloginstrumentacion.com/productos/como-funciona-un-transmisor-de-presion/
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2 Medición de Temperatura.
    p.mb-5 Conocer la medición de temperatura, a partir de la siguiente didáctica.
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-8.p-5(data-aos="fade-down-right")
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen8.png')
          .col-lg-9.col-md-12(data-aos="fade-down-left")
            p La temperatura es tal vez la variable física más reconocida en la vida cotidiana. Por ejemplo, cuando una persona está enferma normalmente se mide la temperatura corporal a través de un termómetro para saber si está dentro del rango normal para los seres humanos. También al interior de los vehículos existe un indicador de temperatura del motor y de la temperatura del exterior.
          .col-lg-2.col-md-12.my-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen9.png')
          .col-lg-9.col-md-12.my-3(data-aos="fade-down-left")
            p En la industria, la medición de esta variable es fundamental y actualmente existen cantidad de aplicaciones con rangos de temperaturas y condiciones de proceso diferentes en donde los instrumentos de medición de esta variable están presentes.
          .col-lg-2.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen10.png')
          .col-lg-9.col-md-12(data-aos="fade-down-left")
            p Para las aplicaciones industriales y comerciales, normalmente se utilizan tres escalas para la medición de temperatura: Celsius (C), Fahrenheit (F) y Kelvin (K).
            p Las equivalencias entre las unidades de temperatura más usadas en la industria son:
            p.mb-0 <em><sup>o</sup>C = (<sup>o</sup>F - 32) / 18 donde <sup>o</sup>C: grados Celsius, <sup>o</sup>F: grados Fahrenheit</em>
            p <em>K = C + 273 donde K: Kelvin. C: Celsius.</em>
    .row.fondo-11.ampliar.px-5
      .col-12
        //- titulo con figura
        .row.align-items-center.correr-izq.mb-0.mt-5
          .col-1.pad1
            img(src='@/assets/curso/tema1/triangulo.svg')
          .col-11
            h4.mb-0.ps-0.ms-0 A. Termómetros de vidrio
        .row.justify-content-center
          .col-lg-6.col-md-12.pb-0(data-aos="fade-down-right")
            p.fondo-9.p-5 Este instrumento se compone de un depósito fabricado en vidrio que contiene en su interior un elemento que al ser expuesto al calor se expande y sube al interior del depósito. Debido a la fragilidad de sus materiales y a la dificultad de lectura en condiciones ambientales industriales, este tipo de termómetros se utilizan normalmente en laboratorios con ambientes controlados. El elemento usado al interior del depósito de vidrio varía dependiendo del rango de medición del proceso que se desea medir. 
          .col-lg-6.col-md-12.fondo-12.p-3(data-aos="fade-down-left")
            P.mb-0 En la siguiente tabla se muestran los elementos más usados para los termómetros de vidrio: 
            .tabla-a.color-acento-botones.text-center
              table
                thead
                  tr.fondo-3
                    td.sinbordeizq 
                      h4.mb-0 Elementos
                    td 
                      h4.mb-0 Rango de medición
                tbody
                  tr.fondo-4
                    td.sinborde.sinbordeizq Mercurio
                    td.sinborde.sinbordeder - 35 °C hasta + 280 °C
                  tr.fondo-13
                    td.sinborde.sinbordeizq Pentano
                    td.sinborde.sinbordeder -200 °C hasta + 20 °C
                  tr.fondo-4
                    td.sinborde.sinbordeizq Alcohol
                    td.sinborde.sinbordeder - 110 °C hasta + 50°C
                  tr.fondo-13
                    td.sinborde.sinbordeizq Tolueno
                    td.sinborde.sinbordeder - 70°C hasta + 100 °C
        p.my-5 A continuación, se muestran algunas características de los termómetros de vidrio:
        .row.justify-content-center
          .col-lg-10.col-md-12.fondo-blanco.sombras.redondearpuntas.p-4(data-aos="fade-down-right")
            p.text-bold.text-center Termómetros de Vidrio
            .row.justify-content-center
              .col-lg-6.col-md-12(data-aos="fade-down-right")
                p.text-center Termómetro de vidrio tipo industrial. Fabricante WIKA
                img.fondo-blanco.sombras.redondearpuntas.p-2.ajustarimg(src='@/assets/curso/tema1/imagen11.jpg')
              .col-lg-6.col-md-12(data-aos="fade-down-left")
                p.text-center Termómetro de vidrio tipo exterior
                img(src='@/assets/curso/tema1/imagen12.jpg')
        p.mt-5 El principio de medición de los termómetros bimetálicos se basa en la diferencia del coeficiente de dilatación existente entre dos metales diferentes (como por ejemplo latón, monel, acero, entre otros) los cuales se encuentran laminados conjuntamente. A este laminado se le denomina láminas bimetálicas y pueden tener formas rectas, curvas, espirales o hélices. La ventaja del termómetro bimetálico es que no posee muchas partes móviles lo cual hace que el mantenimiento de este instrumento sea mínimo y además son económicos.
        p.mb-5 A continuación, se muestran algunas características de los termómetros de vidrio:
        .row.justify-content-center
          .col-lg-10.col-md-12.fondo-blanco.sombras.redondearpuntas.p-4(data-aos="fade-down-right")
            p.text-center.text-bold Termómetro Bimetálico
            .row.justify-content-center
              .col-lg-5.col-md-12(data-aos="fade-down-right")
                p.text-center Interior de termómetro bimetálico con muelle laminado helicoidal
                img.ajustarimg1(src='@/assets/curso/tema1/imagen13.jpg')
              .col-lg-5.col-md-12(data-aos="fade-down-left")
                p.text-center Termómetro bimetálico con conexión a proceso. Fabricante WIKA.
                img(src='@/assets/curso/tema1/imagen14.jpg')
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.my-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 B. Termómetros de principio resistivo (termorresistencias).
    p Estos instrumentos de medición de temperatura aprovechan el principio de variación de la resistencia de los elementos cuando son expuestos a cambios en la temperatura. El elemento consiste generalmente de un arrollamiento de un conductor muy fino protegido por un material aislante como la cerámica o el vidrio. Este tipo de sensores o sondas también son llamados RTD por su acrónimo en inglés detector de temperatura de resistencia. Los materiales que se usan normalmente en los sensores de temperatura son el platino y el níquel. La sonda o sensor más utilizado en la industria se denomina Pt-100 y es llamado así porque está fabricado con platino y su característica principal es que el valor de su resistencia eléctrica es de 100 ohmios cuando se somete a una temperatura de 0 °C. 
    .row.justify-content-center.my-5
      .col-lg-5.col-md-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema1/figura2.svg')
      .col-lg-7.col-md-12.fondo-14.p-5(data-aos="fade-down-left")
        p.mt-5 A diferencia de los termómetros bimetálicos que son completamente de funcionamiento con piezas mecánicas, los termómetros de principio resistivo requieren de un elemento electrónico adicional que detecta el cambio del valor de la resistencia y lo convierte a un valor que se puede visualizar en una pantalla o se puede llevar la señal eléctrica a través de conductores eléctricos a un controlador de procesos. Adicionalmente este tipo de sensores se deben proteger con un bulbo de material metálico el cual estará expuesto directamente al proceso. 
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0  ¿Cómo funciona una termorresistencia?
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=dQJpTusWJHA')" target="_blank")
                    span Ver video
                    i.fas.fa-link 
    .row.fondo-15.ampliar.px-5
      .col-12
        p.my-5 A continuación, se muestran algunas características de los termómetros de principio resistivo:
        .row.justify-content-center.align-items-center
          .col-lg-10.col-md-12.fondo-blanco.redondearpuntas.sombras.p-4
            p.text-center.text-bold Termoresistencias
            .row.justify-content-center
              .col-lg-4.col-md-6.col-sm-12.mb-4
                p.text-center Detalle constructivo de un sensor de temperatura Pt100
                img(src="@/assets/curso/tema1/figura3.svg")
              .col-lg-4.col-md-6.col-sm-12.mb-4
                p.text-center Fotografía de sensor de temperatura Pt100
                img(src="@/assets/curso/tema1/figura4.svg")
              .col-lg-4.col-md-6.col-sm-12.mb-4
                p.text-center Ejemplo de instrumento de medición de temperatura con sensor Pt100. Fabricante <em>Klay instruments</em>
                img(src="@/assets/curso/tema1/figura5.svg")
    p.my-5 En el siguiente cuadro se muestran algunas características de las sondas RTD dependiendo del tipo de metal de construcción:
    .row.justify-content-center.mb-5
      .col-lg-10.col-md-12.fondo-12.p-5
        .tabla-a.color-acento-botones.text-center
          table
            thead
              tr.fondo-3
                td.sinbordeizq 
                  h4.mb-0 Elementos
                td 
                  h4.mb-0 Resistividad [μΩ/cm]
                td
                  h4.mb-0 Intervalo útil de temperatura [°C]
                td 
                  h4.mb-0 Precisión [°C]
            tbody
              tr.fondo-4
                td.sinborde.sinbordeizq Platino
                td.sinborde 9,83
                td.sinborde - 200 hasta + 950
                td.sinborde.sinbordeder 0,01
              tr.fondo-13
                td.sinborde.sinbordeizq Níquel
                td.sinborde 6,38
                td.sinborde - 150 a + 300
                td.sinborde.sinbordeder 0,5
              tr.fondo-4
                td.sinborde.sinbordeizq Cobre
                td.sinborde 1,56
                td.sinborde - 200 a + 120
                td.sinborde.sinbordeder 0,1
      //- titulo con figura
      .row.align-items-center.correr-izq.mb-0.mt-5
        .col-1.pad1
          img(src='@/assets/curso/tema1/triangulo.svg')
        .col-11
          h4.mb-0.ps-0.ms-0 C. Termopares
    p.my-5 Este tipo de instrumentos de medición de temperatura basan su funcionamiento en el principio del efecto Seebeck por medio del cual se demostró que cuando se tienen dos hilos (normalmente en forma de alambre) de metales diferentes unidos en un solo extremo, y dicha unión se calienta o se enfría, se produce un voltaje que se puede correlacionar con el valor real de la temperatura. A diferencia de los termómetros bimetálicos, los termopares no están laminados entre sí, sino que se unen en un extremo con un proceso de soldadura. Existen diferentes tipos de termopar los cuales están clasificados por una letra y se diferencian en los tipo de metales utilizados y el rango de temperatura en que pueden ser usados. La selección del tipo de termopar a utilizar dependerá de las condiciones ambientales del proceso a medir. 
    .row.justify-content-center
      .col-lg-6.col-md-12.fondo-12.p-4.mb-4(data-aos="fade-down-right")
        .tabla-a.color-acento-botones.text-center
          table
            thead
              tr.fondo-3
                td.sinbordeizq 
                  h4.mb-0 Tipo de Termopar
                td 
                  h4.mb-0 Rango de medida [°C]
                td
                  h4.mb-0 Materiales
            tbody
              tr.fondo-4
                td.sinborde.sinbordeizq J
                td.sinborde.sinbordeder 0 hasta 750
                td.sinborde.sinbordeizq Hierro - Constantan
              tr.fondo-13
                td.sinborde.sinbordeizq K
                td.sinborde - 200 hasta 1250
                td.sinborde Cromel - Alumel
              tr.fondo-4
                td.sinborde.sinbordeizq E
                td.sinborde.sinbordeder - 200 hasta 900
                td.sinborde.sinbordeizq Cromel - Constantan
              tr.fondo-4
                td.sinborde.sinbordeizq T
                td.sinborde.sinbordeder - 250 hasta 350
                td.sinborde.sinbordeizq Cobre - Constantan
      .col-lg-6.col-md-12(data-aos="fade-down-left")
        img.fondo-16.py-5.px-4(src='@/assets/curso/tema1/figura6.svg')
    p.my-5.p-5.fondo-17(data-aos="fade-down-right") De forma similar a los termómetros de principio resistivo, los termopares requieren de un elemento electrónico adicional para detectar el cambio del valor del voltaje generado por el efecto Seebeck y convertirlo a un valor que se puede visualizar en una pantalla o se puede llevar la señal eléctrica a través de conductores eléctricos a un controlador de procesos. Adicionalmente este tipo de sensores se deben proteger con un bulbo de material metálico el cual estará expuesto directamente al proceso.
    p.my-5(data-aos="fade-down-left") En el siguiente video se muestran más detalles acerca de los termopares:
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0 ¿Cómo funciona un termopar?
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=1wwAQNECC9A')" target="_blank")
                    span Ver video
                    i.fas.fa-link
    .row.fondo-15.ampliar.px-5
      .col-12
        p.my-5 A continuación, se muestran algunas características de los termómetros de principio resistivo:
        .row.justify-content-center
          .col-lg-10.col-md-12.my-5.fondo-blanco.redondearpuntas.sombras.p-4
            p.text-center.text-bold Termopar
            .row.justify-content-center
              .col-lg-4.col-md-8.col-sm-12
                p.text-center.mb-4 Corte transversal de termómetro tipo termopar con bulbo protector cerámico
                img(src="@/assets/curso/tema1/figura7.svg")
              .col-lg-8.col-md-10.col-sm-12
                p.text-centermb-4 Ejemplos de termopar expuesto con diferente tipo de aislamiento de conductor
                img(src="@/assets/curso/tema1/figura8.svg")
          //- titulo con figura
          .row.align-items-center.correr-izq.mb-0.mt-5
            .col-1.pad1
              img(src='@/assets/curso/tema1/triangulo.svg')
            .col-11
              h4.mb-0.ps-0.ms-0 D. Termómetros por radiación infrarroja
    .row.justify-content-center.my-5
      .col-lg-6.col-md-12.mb-4(data-aos="fade-down-right")
        p Los termómetros infrarrojos se caracterizan por la facilidad de medir la temperatura de un punto sin tener contacto físico. Este tipo de termómetros utilizan los principios de la ley de Stefan-Boltzmann la cual establece que todas las superficies irradian energía la cual aumenta proporcionalmente a la cuarta potencia de la temperatura absoluta de un cuerpo. Los termómetros por radiación infrarroja detectan los cambios de radicación de una superficie y los convierte internamente en un valor de temperatura.
        p El termómetro de infrarrojos capta la radiación del infrarrojo (invisible al ojo humano) y es capaz de medir temperaturas de hasta 700 °C. La tecnología ha avanzado rápidamente y actualmente existen desde termómetros infrarrojos para medir un solo punto hasta cámaras termográficas que permiten hacer imágenes de áreas completas. Esta última tecnología es muy usada para realizar labores de mantenimiento preventivo en tableros eléctricos, motores y tuberías en las industrias y también para realizar auditorías energéticas.
      .col-lg-6.col-md-12(data-aos="fade-down-left")              
        img(src='@/assets/curso/tema1/imagen15.jpg')
    p.my-5 En el siguiente video se explica el funcionamiento del termómetro por radiación infrarroja y su aplicación durante la pandemia: 
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0 Así funcionan los termómetros infrarrojos
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=y-Ezb8Q5UW0')" target="_blank")
                    span Ver video
                    i.fas.fa-link 
    separador
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3 Medición de nivel
    p.mb-5 Conocer la medición de nivel y sus diferentes procesos a continuación:
    .tarjeta.fondo-1.p-4.mb-5
      SlyderA.my-5(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p Continuando con el ejemplo de la persona que desea bajar de peso, para lograr la meta, esta persona toma algunas decisiones acerca de su dieta o actividad física, acompañado siempre de la 
              span.text-bold medición 
              span de su 
              span.text-bold  peso corporal 
              span En general existen gran cantidad de tecnologías para la medición y detección de nivel. Dichas tecnologías se pueden aplicar tanto a medición de nivel en líquidos y algunas en la medición de nivel en sólidos con marcadas diferencias por el tipo de aplicación y las condiciones ambientales. 
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen16.png')
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.mb-4.mb-lg-0
            p La medición de nivel es importante cuando se requiere por ejemplo conocer la altura de la columna de agua en un embalse de generación de energía, la cantidad de combustible en un recipiente para un generador de electricidad que utiliza diesel u otro tipo de energético primario, y muchas otras aplicaciones industriales donde conocer esta variable es determinante para los procesos productivos.
        
          .col-lg-5.col-md-12
            figure
              img(src='@/assets/curso/tema1/imagen17.png')
      p.my-5 A continuación, se mencionan algunas de las tecnologías más utilizadas en la medición de nivel.
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.mt-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0  A. Medición continua de nivel con instrumentos tipo Flotador
    p.my-5 Complementar la información de la didáctica de medición de nivel, conociendo diferentes instrumentos de medición.
    .row.justify-content-center.mb-5
      .col-lg-10.col-md-12.fondo-18.redondearpuntas.px-4.py-5
        h4.mb-4.ms-5 Medición continua de nivel con instrumentos tipo Flotador.
        .row.justify-content-center.align-items-center
          .col-lg-11.col-md-8.col-sm-10.col-11.fondo-8.p-0.redondearpuntas
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-12.m-0.p-0(data-aos="fade-down-right")
                img.m-0.p-0(src='@/assets/curso/tema1/imagen18.png')
              .col-lg-8.col-md-12.mb-0.py-4(data-aos="fade-down-leftt")
                p.p-3 Este tipo de medición aplica solo para los líquidos, ya que el principio del instrumento utiliza un flotador que tiene una densidad muy reducida de forma que flota sobre el líquido.
        h4.my-4.ms-5 En algunos casos 
        .row.justify-content-center.align-items-center.my-4
          .col-lg-11.col-md-8.col-sm-10.col-11.fondo-8.p-0.redondearpuntas
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-12.m-0.p-0(data-aos="fade-down-right")
                img.m-0.p-0(src='@/assets/curso/tema1/imagen19.png')
              .col-lg-8.col-md-12.mb-0.py-4(data-aos="fade-down-leftt")
                p.p-3 El flotador va unido a un sistema de cuerdas, poleas y contrapesos que permite en el exterior una visualización del nivel del tanque o recipiente.
        h4.mb-4.ms-5 Otra tecnología usada 
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-11.col-md-8.col-sm-10.col-11.fondo-8.p-0.redondearpuntas
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-12.m-0.p-0(data-aos="fade-down-right")
                img.m-0.p-0(src='@/assets/curso/tema1/imagen20.png')
              .col-lg-8.col-md-12.mb-0.py-4(data-aos="fade-down-leftt")
                p.p-3 Utiliza un imán al interior del flotador, que sube y baja a través de un eje que posee internamente unos microinterruptores llamados Reed switch que se van cerrando a medida que el flotador pasa por ese punto.
        h4.mb-4.ms-5 Estos interruptores 
        .row.justify-content-center.align-items-center
          .col-lg-11.col-md-8.col-sm-10.col-11.fondo-8.p-0.redondearpuntas
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-12.m-0.p-0(data-aos="fade-down-right")
                img.m-0.p-0(src='@/assets/curso/tema1/imagen21.png')
              .col-lg-8.col-md-12.mb-0.py-4(data-aos="fade-down-leftt")
                p.p-3 Están acoplados a unas resistencias y a través de un circuito electrónico se detecta el valor de la resistencia para conocer el valor del nivel del líquido a medir.
    .row.justify-content-center.align-items-center
      .col-12.fondo-19.redondearpuntas.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen22.png')
          .col-lg-7.col-md-12(data-aos="fade-down-left")
            p En el siguiente video se muestra el funcionamiento de un medidor de nivel tipo flotador con cadena de resistencias <em>reed switch</em>:
            .col-lg-10.col-md-12
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=ujPcgDLch1J" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.colorfuente.fuente14.text-bold WIKA - Medición de nivel con sensor de flotador de cadena <em>Reed</em>.
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.mt-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 B. Medición continua de nivel con indicadores tipo mirilla
    p.my-5 Este tipo de instrumentos permiten visualizar en sitio el valor del nivel del fluido al interior de un recipiente. Se basa en el principio físico de los vasos comunicantes en donde si el líquido está en reposo, alcanza el mismo nivel si se tiene uno o varios recipientes interconectados por su parte inferior. Por lo general para este tipo de medida se cuenta con un recipiente exterior y de menor tamaño instalado en paralelo al recipiente a medir y se encuentra interconectado por la parte inferior y exterior del mismo. A medida que el nivel del líquido sube y baja al interior del recipiente principal, esto se ve reflejado en el medidor exterior. Es importante que el fluido a medir esté libre de sólidos e impurezas para que se pueda obtener una medida confiable.
    .row.justify-content-center.align-items-center
      .col-12.fondo-19.redondearpuntas.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen22.png')
          .col-lg-7.col-md-12(data-aos="fade-down-left")
            p En el siguiente video se muestra el funcionamiento de un medidor de nivel con indicador tipo mirilla:
            .col-lg-10.col-md-12
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=zlaTXjhaISg" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.colorfuente.fuente14.text-bold WIKA - Indicador de nivel con mirilla.
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.mt-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 C. Medición continua de nivel por presión hidrostática
    p.my-5 En muchas aplicaciones para la medición de nivel en líquidos, se utilizan medidores de presión aprovechando el principio físico de la presión hidrostática en donde existe una relación entre la altura de la columna del fluido (para cualquier valor de densidad) y la presión de este en el fondo de dicha columna, independientemente de la forma del recipiente. En otras palabras, es posible calcular la altura de un líquido dentro de un recipiente si se mide la presión generada en el fondo y se conoce su densidad.
    .row.justify-content-center
      .col-lg-10.col-md-12.fondo-14.p-5.redondearpuntas.sombras(data-aos="fade-down-right")
        p.fuente14.text-bold.text-center La relación matemática que ilustra el principio de la presión hidrostática es:
        .row.justify-content-center
          .col-10.fondo-blanco.redondearpuntas.sombras.p-4.fuente14
            p.text-center P = p x g x h   
            p.text-center donde,P: presión hidrostática (Pa),p: densidad del fluido (kg/m3),g: aceleración de la gravedad ( m/s2),
            p.text-center h: altura de la columna vertical de fluido por encima del punto de medida de presión (m)
    p.my-5 En el siguiente video se muestra el funcionamiento básico de un medidor de nivel por presión hidrostática
    .row.justify-content-center.align-items-center
      .col-12.fondo-19.redondearpuntas.p-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-md-12(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/imagen24.png')
          .col-lg-7.col-md-12(data-aos="fade-down-left")
            p En el siguiente video se muestra el funcionamiento básico de un medidor de nivel por presión hidrostática
            .col-lg-10.col-md-12
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=YaSW_SIhe4E" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.colorfuente.fuente14.text-bold WIKA - Medición hidrostática de nivel con sensor de presión hidrostática.
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.mt-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 D. Medición continua de nivel con instrumentos sin contacto.
    p.my-5 Explorar la siguiente didáctica, descubriendo cómo medir niveles con instrumentos sin contacto.     
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/tema1/figura9.svg')
          
        p En general existen gran cantidad de tecnologías para la medición y detección de nivel. Dichas tecnologías se pueden aplicar tanto a medición de nivel en líquidos y algunas en la medición de nivel en sólidos con marcadas diferencias por el tipo de aplicación y las condiciones ambientales. 

      .col-md.tarjeta.fondo-20.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/tema1/figura10.svg')
          
        p La medición de nivel es importante cuando se requiere por ejemplo conocer la altura de la columna de agua en un embalse de generación de energía, la cantidad de combustible en un recipiente para un generador de electricidad que utiliza diesel u otro tipo de energético primario, y muchas otras aplicaciones industriales donde conocer esta variable es determinante para los procesos productivos.
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  p.text-bold.mb-0 Radar vs ultrasonido - cual es la diferencia entre los dos principios de medición? 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=Rq_EPoKHmgo')" target="_blank")
                    span Ver video
                    i.fas.fa-link 
    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 1.4 Medición de radiación solar (piranómetros)
    p.my-5(data-aos="fade-down-left") Explorar cómo medir la radiación solar.
    figure.mb-5(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.fondo-15.ampliar.px-5
      .col-12
        p.my-5 Algunas imágenes de piranómetros se muestran a continuación:
        .row.justify-content-center
          .col-10.fondo-blanco.redondearpuntas.sombras.p-5
            .row.justify-content-between
              .col-5
                p.text-center Imagen real de un piranómetro
                img(src="@/assets/curso/tema1/imagen25.png")
              .col-5
                p.text-center Piranómetro instalado en un campo solar fotovoltaico.
                img(src="@/assets/curso/tema1/imagen26.png")
        .row.justify-content-center.mt-5
          .col-lg-10.col-md-12(data-aos="fade-down-right")
            .tarjeta.color-primario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema1/figura1.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0.text-white
                      p.text-bold.mb-0 Piranómetro
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=0ud7h5_G-5U')" target="_blank")
                        span Ver video
                        i.fas.fa-link    
    separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 1.5 Medición de velocidad y dirección del viento
    p.mb-5 Para el análisis de factibilidad para el uso de la energía eólica como energético primario en un lugar determinado, se debe tener como mínimo la capacidad de medir el valor de la velocidad y la dirección del viento. 
    //- titulo con figura
    .row.align-items-center.correr-izq.mb-0.mt-5
      .col-1.pad1
        img(src='@/assets/curso/tema1/triangulo.svg')
      .col-11
        h4.mb-0.ps-0.ms-0 A. Medición de velocidad
    .row.fondo-2.ampliar.px-5
      .col-12
        p.mt-5 El instrumento de medición utilizado para este fin se denomina anemómetro y el más utilizado es el anemómetro de rotación, que a subes puede ser de tipo cazoletas o de tipo hélice. Ambos funcionan con el principio en que la velocidad de rotación es proporcional a la velocidad del viento. Dicha rotación puede medirse contando mecánicamente el número de rotaciones por medio de un sensor óptico o a través de un pequeño motor eléctrico que actúa como generador. Los anemómetros de tres cazoletas semicónicas y semiesféricas son los más utilizados, y que permiten medir las componentes horizontales del viento.
        p.mb-5 Algunas imágenes de anemómetros se muestran a continuación: 
        .row.justify-content-center
          .col-lg-10.col-md-12.fondo-blanco.sombras.redondearpuntas.p-5
            .row.justify-content-between
              .col-5
                p.text-center Imagen real de un anemómetro de tres cazoletas.
                img(src='@/assets/curso/tema1/imagen27.png')
              .col-5
                p.text-center Imagen real de un anemómetro de hélice.
                img(src='@/assets/curso/tema1/imagen28.png')
        //- titulo con figura
        .row.align-items-center.correr-izq.mb-0.mt-5
          .col-1.pad1
            img(src='@/assets/curso/tema1/triangulo.svg')
          .col-11
            h4.mb-0.ps-0.ms-0 B. Medición de dirección del viento
        .row.justify-content-around.my-5
          .col-lg-6.col-md-12.fondo-21.px-lg-2.py-lg-1.py-xl-5.px-xl-4.px-xxl-5.gridcolumna.mb-4(data-aos="fade-down-right")
            p.text-white.p-5.pt-lg-4.px-1.mb-0.pt-xxl-5 El instrumento empleado generalmente para medir la dirección del viento se denomina veleta, el cual consiste en un dispositivo instalado sobre un eje vertical y de giro libre, de tal modo que puede moverse cuando el viento cambia de dirección. En la mayoría de los instrumentos, el movimiento de la veleta está amortiguado para prevenir cambios demasiado rápidos o bruscos de la dirección del viento.
          .col-lg-6.col-md-12.gridcolumna(data-aos="fade-down-left")
            .row.justify-content-center.redondearpuntas.fondo-blanco.sombras.py-4
              .col-6
                p.text-center Imagen real de una veleta.
                img(src='@/assets/curso/tema1/imagen29.png')
              .col-6
                p.text-center Imagen real de una veleta.
                img(src='@/assets/curso/tema1/imagen30.png')
        separador
        #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-down")
          h2 1.6 Características generales de los instrumentos de medición
        p.my-5 Explorar las características generales de los instrumentos de medición.
        .tarjeta.fondo-1.p-4.mb-5
          SlyderA.my-5(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-12.mb-4.mb-lg-0
                h4 Panorama desde las empresas y organizaciones
                p Reconocer las características principales de cada instrumento de medición es muy importante para la selección del medidor adecuado dependiendo de la necesidad específica y la variable que se pretende medir. Para este fin, cada instrumento de medición posee un documento denominado Ficha Técnica en donde se muestran las principales características.
            
              .col-lg-5.col-md-12
                figure
                  img(src='@/assets/curso/tema1/imagen31.png')
            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-12.mb-4.mb-lg-0
                h4 A continuación, se describen las características más importantes para los instrumentos de medida:
                p Rango de Medida: Corresponde al conjunto de valores comprendidos entre el valor mínimo y el valor máximo de medida del instrumento. Al valor mínimo de la variable se le conoce como LRV y al valor máximo de la variable se le conoce como URV.
                p Alcance o Spam: Es la diferencia algebraica entre los valores del URV y el LRV.
                p Error: Se define como la diferencia en porcentaje entre el valor medido por el instrumento y el valor real de la variable medida. Si se desea conocer el valor del error en una medida, se utiliza la siguiente fórmula:
            
              .col-lg-5.col-md-12
                figure
                  img(src='@/assets/curso/tema1/imagen32.png')

            .row.justify-content-center.align-items-center
              .col-lg-6.col-md-12.mb-4.mb-lg-0
                h4 Otras características importantes son:
                p Exactitud. Esta cantidad determina qué tan cerca se encuentra el valor medido por el instrumento del valor real de la variable a medir. Por lo general se relaciona con el concepto de error y en las hojas de especificaciones de los medidores se muestra el porcentaje de error con respecto al valor máximo de la variable URV.
                p Incertidumbre en la medida: Es el valor obtenido cuando se realiza la comparación entre el valor medido por un instrumento de medida y otro instrumento con mayor o igual exactitud normalmente llamado patrón.
                p Precisión: Indica el grado de repetibilidad del instrumento para obtener el mismo valor medido en varias ocasiones.
                p Resolución: Corresponde al valor mínimo confiable que puede medir el instrumento. 
            
              .col-lg-5.col-md-12
                figure
                  img(src='@/assets/curso/tema1/imagen33.png')
    separador
    #t_1_7.titulo-segundo.color-acento-botones(data-aos="fade-down")
      h2 1.7 Calibración de los instrumentos de medición
    p.mb-5 La calibración de los instrumentos de medición es de gran importancia, por esto se invita a navegar por la siguiente didáctica.
    .row
      .col-12.fondo-22.p-5
        h4.text-center Calibración de los instrumentos de medición.
        .row.justify-content-center.p-5
          .col-lg-6.col-md-12(data-aos="fade-down-right")
            p En la práctica, el valor real de la variable a medir en ningún momento se va a obtener debido a que ningún instrumento de medición tiene la capacidad de medir con un error de cero. Siempre existirá un grado de incertidumbre que puede ser manejado y calculado con la información de las hojas de datos de cada instrumento. 
            p Mientras el instrumento sea más exacto, preciso y con mejor resolución, las mediciones mostradas por el instrumento se aproximan al valor real de la variable física a medir. Debido a que internamente los instrumentos de medición están compuestos de partes mecánicas y electrónicas, con el paso del tiempo y por la exposición a las condiciones ambientales del proceso, este tipo de componentes tienden a perder algunas propiedades lo cual puede en muchas ocasiones producir desviaciones en la exactitud y precisión que tienen de fábrica. 

          .col-lg-6.col-md-12(data-aos="fade-down-left")
            img(src='@/assets/curso/tema1/imagen34.png')
        p Por esta razón, si se desea garantizar que los instrumentos de medición se encuentran en los rangos adecuados de desviación de las mediciones, estos se deben calibrar.
        img.my-5(src='@/assets/curso/tema1/imagen35.png')
        p.mb-5 De manera general, se considera que un instrumento de medición está correctamente calibrado cuando en todos los puntos de su rango de medida, la diferencia entre el valor real de la variable y el valor medido por el instrumento está dentro de los límites del rango de exactitud del instrumento de acuerdo con sus especificaciones. Ahora bien, ¿cómo se puede obtener el valor real de la variable si ningún medidor puede obtener el valor de la variable real? 
        .row.justify-content-center.align-items-center
          .col-lg-1.col-md-2.col-sm-3.col-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura11.svg')
          .col-lg-11.col-md-10.col-sm-9.col-9(data-aos="fade-down-left")
            p.p-4.fondo-blanco.redondearpuntas.sombras.mb-0 Lo anterior se realiza utilizando unos equipos o instrumentos especiales que se encuentran en laboratorios certificados por los organismos de acreditación (en el caso de Colombia es la ONAC) los cuales tienen valores de precisión, exactitud y otras características mejores que los instrumentos a calibrar, lo cual que permiten utilizarlos como referencias válidas para comparar las medidas del medidor a calibrar.
        .row.justify-content-center.align-items-center.my-4
          .col-lg-1.col-md-2.col-sm-3.col-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura15.svg')
          .col-lg-11.col-md-10.col-sm-9.col-9(data-aos="fade-down-left")
            p.p-4.fondo-blanco.redondearpuntas.sombras.mb-0 Las condiciones ambientales al interior de los laboratorios de calibración permiten que se garantice la correcta realización de las mediciones sin afectaciones externas. A los equipos utilizados como referencia para la calibración de los instrumentos de medición se les denomina como “equipo patrón primario”.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.col-md-2.col-sm-3.col-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura12.svg')
          .col-lg-11.col-md-10.col-sm-9.col-9(data-aos="fade-down-left")
            p.p-4.fondo-blanco.redondearpuntas.sombras.mb-0 Los equipos patrones primarios suelen ser muy costosos a la hora de adquirirlos y también su mantenimiento lo debe hacer personal especializado lo cual resulta también en un valor alto de mantenimiento.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.col-md-2.col-sm-3.col-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura13.svg')
          .col-lg-11.col-md-10.col-sm-9.col-9(data-aos="fade-down-left")
            p.px-4.py-5.fondo-blanco.redondearpuntas.sombras.mb-0 Por tal razón las industrias y demás empresas envían sus equipos de medición a estos laboratorios y pagan por el servicio de calibración.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.col-md-2.col-sm-3.col-3(data-aos="fade-down-right")
            img(src='@/assets/curso/tema1/figura14.svg')
          .col-lg-11.col-md-10.col-sm-9.col-9(data-aos="fade-down-left")
            p.p-4.fondo-blanco.redondearpuntas.sombras.mb-0 El servicio de calibración también incluye el ajuste (cuando es posible) o corrección de los errores de acuerdo con la manipulación de algunos elementos que tiene internamente el instrumento para tal fin.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
