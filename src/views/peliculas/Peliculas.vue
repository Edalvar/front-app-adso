<template>
   
  <LayoutMain>
      <template #slotLayout>
          <Header
          :titulo="'Peliculas'"
          :tituloBoton="'Adicionar Pelicula'"
          :abrir="abrirFormulario"
          >

          </Header>
          <!--componente-->
          <Formulario titulo="Adición de Película" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" @save="guardarDatos">
            <template #slotForm>
              <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

<!-- incluyo una constante refForm(definida abajo tipo ref para que sean dinamicos los cambios) que reciba la informacion y pueda haber comunicación entre los componentes -->
                <formPeliculas 
                  v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef"/> 
                  
                </el-col>

               
              
              </el-row>

              

            </template>
          </Formulario>
     
          

          <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column prop="phone" label="Telephone" />
                <el-table-column fixed="right" label="Acciones" min-width="120" >
                 <template #default="scope">
                  <el-button link type="primary" size="large" :icon="Edit" @click="editarFormulario">

                  </el-button>
                  <el-button link type="danger" :icon="Delete">
                    
                  </el-button>

                 </template>
                </el-table-column>
              </el-table>

           
              
           
    
  
      </template>

      
  </LayoutMain>
  

</template> 

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios';
import LayoutMain from '../../components/LayoutMain.vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import Header from '../../components/Header.vue';
import Formulario from '../../components/Formulario.vue';
import formPeliculas from './components/formPeliculas.vue';
import { Delete,Edit } from '@element-plus/icons-vue';


const mostrarFormulario=ref(false)
const editandoFormulario=ref(false)
const formRef=ref()


const abrirFormulario=()=>{
  
  mostrarFormulario.value=true
  editandoFormulario.value=false

}

const editarFormulario= async()=>{
  //abro de nuevo el formulario pero en este caso el nombre del boton guardar cambia 
  mostrarFormulario.value=true
  editandoFormulario.value=true
}

const tableData = [
  {
    name: 'Edwin',
    address: 'N°. 9033 80th st NY 11421',
    phone:'4818391'
  }
]

//

const guardarDatos= async ()=>{
  const validacion = await formRef.value.validarFormulario()
  console.log(validacion)
  if(validacion){
    await crearPelicula()
  }
  

}
// con estas  funcion haremos el uso de apis 
const crearPelicula =async()=>{
  //url del endpoint
  const url= 'http://127.0.0.1:8000/api/peliculas/save'
  const dataFormulario={
    titulo: formRef.value.formulario.titulo,
    genero: formRef.value.formulario.genero, 
    director: formRef.value.formulario.director, 
    año: 1983, 
    duracion: formRef.value.formulario.duracion, 
    sinopsis: formRef.value.formulario.sinopsis, 
    clasificacion: formRef.value.formulario.clasificacion, 
    idioma: formRef.value.formulario.idioma, 
    subtitulos: formRef.value.formulario.subtitulos, 
    imagen_portada: formRef.value.formulario.imagen_portada, 
    id_pais: 1,  

  }
  //método post con axios
console.log(dataFormulario)
  try{

    axios.post(url, dataFormulario)
      .then(function(response) {
        console.log(response)
        formRef.value?.limpiarFormulario()
      })
      .catch(function(error) {
        console.log(error);

      })

  
  }catch(error){
    console.error('error crear pelicula', error)
  }
  

  
}

const actualizarPelicula =async()=>{
  console.log('se actualizo la pelicula')
}

const eliminarPelicula =async()=>{
  console.log('se eliminó la pelicula')
}

const datosPelicula =async()=>{
  console.log('se traen datos de la pelicula')
}
</script>
