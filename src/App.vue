<template >
  <div class="h-full w-full ">
    <router-view></router-view>
  </div>
  <div class="cargando" v-if="cargando">
            <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635919241/elementos_de_marca_sr-05_mjayqu.png" alt="loading">
    </div>
</template>

<script>
export default {
  data() {
    return {
      cargando: true,
    }
  },

      mounted() {
      let vm = this;
      setTimeout(function(){
            vm.cargando = false;
        },500)
      },

}
</script>

<style>
#app {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Rubik', 'Quicksand', Helvetica, Arial, sans-serif;
  background: #D0D0D0;
}

html{
font-size: 62.5%;
}
</style>
