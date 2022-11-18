<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
    .titulo-principal.color-acento-botones.mb-4(data-aos="fade-down-right")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    span.resaltado(data-aos="fade-down-right") En los temas energéticos existe una clasificación de las energías de manera general: 
    span(data-aos="fade-down-right") fuentes primarias y fuentes secundarias. Se denomina fuentes primarias de energía a aquellas que se encuentran en la naturaleza y son utilizadas para ser transformadas a otro tipo de energía denominada secundaria aprovechando las leyes físicas y la tecnología existente, se debe revisar la siguiente presentación para saber más acerca de este tema.
    figure.my-5(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_FRP3zLz3xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
