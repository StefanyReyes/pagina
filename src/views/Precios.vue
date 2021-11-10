<template>
    <div class="main-precios">
        <div class="contenedor">
            <div class="icono">
            <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635921766/elementos_de_marca_sr-08_mljsii.png" alt="Icono Muelas">
            </div>
            <p>{{nombre}}</p>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        nombre(){  
            return this.$store.state.nombre
        },
    }
    
}
</script>