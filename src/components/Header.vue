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
  <div class="container_header">

    <h2 class="container_title" >Modulo de {{titulo}}</h2>
    <el-row justify="center" align="middle">

      <el-button type="primary" @click="abrir" class="padded-button" > {{tituloBoton}} </el-button>

    </el-row>
  </div>
   





  
</template>

<style scoped>

.container{
  margin-bottom: 10px;
}

.container_header{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
}

.padded-button {
padding: 20px;
background-color: coral;
border: none;
color: white

}

</style>
