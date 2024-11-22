<script setup>
defineProps({
  titulo:String,
  tituloBoton:String,
  abrir:{
    type:Function
  }

})


</script>



<template>
  <div>

    <h2 class="titulo" >Modulo de {{titulo}}</h2>
    <el-row justify="center" align="middle">

      <el-button type="primary" @click="abrir" > {{tituloBoton}} </el-button>

    </el-row>
  </div>
   





  
</template>

<style scoped>
.container{
  margin-bottom: 10px;
}

</style>
