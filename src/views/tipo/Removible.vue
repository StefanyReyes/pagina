<template>
<div class="removible">
    <div class="hs no-scrollbar">
        <div class="item" v-for="tarjeta in tarjetas" :key="tarjeta.id">
            <h3>{{tarjeta.titulo}}</h3>
                <ul class="punto">
                    <li class="fila" v-for="item in tarjeta.item" :key="item.id">
                        <div  class="lista">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <p>{{item.nombre}}</p>
                        </div>
                        <p>{{item.precio}}</p>
                    </li>
                </ul>
            <div class="garantia">
            <h4>Garantía</h4>
            <p>Estás protesis cuentan con un año de garantía</p>
            </div>
            <div class="quiero">
                <a :href="mensaje" @click="sabermas(tarjeta.titulo)">
                    Quiero saber más
                </a>
                </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            saber:"",
            tarjetas:[
                {
                    id:1,
                    titulo:"ACRÍLICA",
                    item:[
                        {
                            id:1, nombre:"Biodent", precio: "$130.000"
                        }, 
                        {
                            id:2, nombre:"Super C", precio: "$150.000"
                        },
                        {
                            id:3, nombre:"Durantone", precio: "$170.000"
                        },
                        {
                            id:4, nombre:"Isosit", precio: "350.000"
                        },
                    ],
                },
                {
                    id:2,
                    titulo:"PPR",
                    item:[
                        {
                            id:1, nombre:"Aumenta $150.000 al costo del material elegido de la prótesis acrílica", precio: ""
                        }
                    ],
                },
                {
                    id:3,
                    titulo:"FLEXIBLES",
                    item:[
                        {
                            id:1, nombre:"Acker", precio: "$150.000"
                        }, 
                        {
                            id:2, nombre:"Prótesis parcial", precio: "$250.000"
                        },
                        {
                            id:3, nombre:"Gancho flex", precio: "$30.000"
                        },
                    ],
                }
            ]
        }
    },

    methods: {
        sabermas(titulo){
            this.saber = titulo
            console.log(this.saber)
        }
    },

    computed:{
        mensaje(){
            return "https://wa.me/573214661647/?text=Estoy interesado/a en " + this.saber
        }
    }
}
</script>