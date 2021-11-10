<template >
<div class="main-inicio">
    <div class="contenedor">
        <div class="icono">
        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635921766/elementos_de_marca_sr-08_mljsii.png" alt="Icono Muelas">
        </div>
        <div class="cinta1">
        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635935699/cintas-01_bscleh.png" alt="Icono Muelas">
        </div>
        <div class="cinta2">
        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635935834/cintas_2-01_ym9dcn.png" alt="Icono Muelas">
        </div>
            <div class="contenido">
                <div class="multimedia">
                    <img class="martillo" src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635932421/hammer_hsia9q.png" alt="Construcción">
                    <div class="muela">
                        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635972756/gif-_oqpnvr.gif" alt="">
                    </div>
            </div>
            <div class="informacion">
                    <div class="logo">
                        <img src="https://res.cloudinary.com/dw21mdxqj/image/upload/v1635919241/elementos_de_marca_sr-05_mjayqu.png" alt="Logo">
                    </div>
                    <p>En construcción</p>
                    <h2>La magía está por suceder</h2>
                        <div class="info-precios">
                        <input v-model="nombre" placeholder="Ingresa tu nombre" class="nombre">
                         <p class="bienvenido">Bienvendo/a a Stefany Reyes</p>
                        <span>Dr. {{nombre}}</span>
                        <div class="campo">
                            <p >Conoce nuestro brochure de precios</p>
                            <router-link @click="guardarNombre" to="/fijas" class=" precios"><svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>Ver precios</router-link>
                        </div>
                        
                    </div>
            </div>
        </div>
        
    </div>
    <!-- <div class="footer">
        <p class="hagamos">Hagamos <span>Sonreír</span></p>
        <p class="derechos">© 2021 Stefany Reyes All rights reserved.</p>
    </div> -->
</div>
</template>

<script>
export default {
    
        data() {
            return {
                nombre:"",
            }
        },

        methods: {
            guardarNombre(){
                this.$store.commit("guardarNombre", this.nombre)
            }
        },

}
</script>

