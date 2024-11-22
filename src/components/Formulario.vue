<template>
    <div class="container_header" v-if="isVisible">
    
    <h2 class="titulo" >Modulo de {{titulo}}</h2>


    <h1 v-show="prueba">{{ nombre }}</h1>
    <el-row justify="center" align="middle">
    
      <el-button type="primary" > Cancelar </el-button>
      <el-button type="primary" > Guardar </el-button>
    
    </el-row>
    <slot name="slotForm">
    
    </slot>
    
    
    </div>
    </template>
      
    <script setup>

    import{computed,ref} from 'vue'
    const propiedad = defineProps({
      titulo:String,
      isOpen:Boolean
    
    })

    const isVisible=computed(()=> propiedad.isOpen)

    
    </script>
      
    <style scoped>
     
    </style>
      