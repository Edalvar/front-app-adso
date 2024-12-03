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
       <!--  agrego la función submit que va a guardar o actualizar segun sea el caso  -->
        <el-button type="primary" size="large" class="form-container_button-submit" @click="submit">{{tituloBoton}}</el-button>
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
//defino constante computada asociada al nombre del boton para que guarde o actualice segun el caso
console.log(propiedad.isEdit)
    const tituloBoton= computed(()=>(propiedad.isEdit ? 'Actualizar':'Guardar'))

    const isVisible=computed(()=> propiedad.isOpen)
    //controlamos dos funciones save y update
    const $emit =defineEmits(['update:is-open', 'save','update' ]);

    const goBack= () => {
      $emit('update:is-open',false);
    }
// definimos la funcion que controla las acciones del boton {{titulo boton}}
    const submit=()=>{
      if(propiedad.isEdit){
        console.log('vamos a actualizar')
        $emit('update')
      }else{
        $emit('save')
       console.log('vamos a guardar')

      }
       
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


.form-container_button-group {
  display: flex;
  justify-content: flex-end; /* Cambia la alineación a la derecha */
  align-items: center; /* Alinea verticalmente los botones */
  gap: 10px; /* Espaciado adecuado entre botones */
}

.form-container_button-cancel{
 background-color: rgba(203, 203, 203, 0.925);
 border :none;
 color: rgb(0, 0, 0);


}
.form-container_button-submit {
 background-color: cornflowerblue;
 border :none;
 color: white;


}

    </style>
      