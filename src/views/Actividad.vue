<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="fade-down-right")
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/iconos/arrastrar.svg", alt="Arrastrar y soltar")
      .col-12.col-md-8.col-lg-9(data-aos="fade-down-left")
        .titulo-segundo
          h2 Actividad De Profundización
        p.mb-4 #[b Objetivo] Reforzar el conocimiento adquirido, a través de la actividad de arrastrar y soltar, completando los párrafos de información importante.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
