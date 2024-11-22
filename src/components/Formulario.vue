<template>
    <el-container v-show="isVisible" class="form-container">
    
    <el-row :gutter="5" class="center" align="middle">
      <el-col :xs="18" :sm="18" :md="18" :lg="22" :xl="22" class="form-container_title-col">
        <el-button text class="form-container_title-button" size="large">
        {{ titulo }}
        </el-button>
      </el-col> 
      <el-col :xs="6" :sm="6" :md="6" :lg="2" :xl="2" class="form-container_button-group"> 
        <el-button size="large" class="form-container_button-cancel" @click="goBack">Cancelar</el-button> 
        <el-button type="primary" size="large" class="form-container_button-submit" @click="submit">Guardar</el-button>
      </el-col>
    </el-row>
    <el-main class="form-container__main">
    <slot name="slotForm"></slot>
    </el-main>
    </el-container>
    
    </template>
      
    <script setup>

    import{computed,ref} from 'vue'
    const propiedad = defineProps({
      titulo:String,
      isEdit: Boolean,
      isOpen:Boolean
    
    })

    const isVisible=computed(()=> propiedad.isOpen)
    const $emit =defineEmits(['update:is-open']);
    const goBack= () => {
      $emit('update:is-open',false);
    }

    
    </script>
      
    <style scoped>
     .form-container { 
      
      position: absolute; 
      top: 0;
      left: 0; right: 5px;
      width: 100%;
      z-index: 90;
      background-color:white;
      display: flex;
      flex-direction: column;
      height: calc(100vh + 42%);
     }

.form-container_row {
  display: flex;
  align-items: center;
  padding: 10px;
}

/*estilos del titulo del  formulario */

.form-container_title-button {
  font-size: 1.5rem;
  font-weight:bold;
}

/* se alinean los botones en la parte superior derecha*/
.form-container_buttton-group{
  display:flex;
  justify-content:  flex-end;
  gap: 10px
}

.form-container_button-submit {
 background-color: cornflowerblue;
 border :none;
 color: white;


}

    </style>
      