<template>
<div class="main-precios">
  <div class="contenedor">
    <div class="icono">
        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635921766/elementos_de_marca_sr-08_mljsii.png" alt="Icono Muelas">
    </div>
    <router-link to="/" class="logo">
      <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635919241/elementos_de_marca_sr-05_mjayqu.png" alt="Logo">
    </router-link>
    <div class="saludo">
      <span>Un gusto saludarlo/a</span>
      <p>Dr. {{saludo}}</p>
    </div>
    <div class="seleccion">
      <router-link @click="this.fondo=true" to="id/fijas" :class="check">PRÓTESIS FIJAS </router-link>
      <router-link @click="this.fondo = false" to="id/removibles" :class="check2">PRÓTESIS REMOVIBLES</router-link>
    </div>
    <span class="desliza">
        Desliza para ver más
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
</span>
    <div class="cards">
      <router-view></router-view>
    </div>
    <div class="footer">
        <p class="hagamos">Hagamos <span>Sonreír</span></p>
        <p class="derechos">© 2021 Stefany Reyes All rights reserved.</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      fondo: true,
    }
  },

  computed:{

      saludo(){
        return this.$store.state.nombre
      },
    
      check(){
        if(this.fondo){
          return "check"
        }
        return "noCheck"
      },

      check2(){
        if(this.fondo==false){
          return "check"
        }
        return "noCheck"
      }
    }
}
</script>