<template>
   
    <LayoutMain>
        <template #slotLayout>
            <Header
            :titulo="'Series'"
            :tituloBoton="'Adicionar Serie'"
            :abrir="abrirFormulario"
            >
  
            </Header>
            <!--componente-->
            <Formulario titulo="Adición de Serie" v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" 
            @save="guardarDatos" @update="actualizarDatos">
              <template #slotForm>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
  
  <!-- incluyo una constante refForm(definida abajo tipo ref para que sean dinamicos los cambios) que reciba la informacion y pueda haber comunicación entre los componentes -->
                  <formSeries 
                    v-model:is-open="mostrarFormulario" :is-edit="editandoFormulario" ref="formRef" :paises="paises"  :dataValue ="dataSeriesById"/> 
                    
                  </el-col>
  
                 
                
                </el-row>
  
                
  
              </template>
            </Formulario>
       
            
  
            <el-table :data="series" stripe style="width: 100%" >
                  <el-table-column prop="titulo" label="Titulo" width="180" />
                  <el-table-column prop="temporadas" label="Temporadas" />
                  <el-table-column prop="año_inicio" label="Año" />
                
                  <el-table-column fixed="right" label="Acciones" min-width="120" >
                   <template #default="registro">
                    <el-button link type="primary" size="large" :icon="Edit" @click="editarFormulario(registro.row.id)">
  
                    </el-button>
                    <el-button link type="danger" :icon="Delete" @click="eliminar(registro.row.id)">oe
                      
                    </el-button>
  
                   </template>
                  </el-table-column>
                </el-table>
  
             
                
             
      
    
        </template>
  
        
    </LayoutMain>
    
  
  </template> 
  
  <script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue'
  import axios from 'axios';
  import LayoutMain from '../../components/LayoutMain.vue';
  import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
  import Header from '../../components/Header.vue';
  import Formulario from '../../components/Formulario.vue';
  import formSeries from './components/formSeries.vue';
  import { Delete,Edit } from '@element-plus/icons-vue';
  import { ElMessage, ElMessageBox  } from 'element-plus'
  
  const mostrarFormulario=ref(false)
  const editandoFormulario=ref(false)
  const formRef=ref()
  const dataSeriesById = ref()
  const paises = ref([])
  const series=ref([])
  
  
  const abrirFormulario=()=>{
    
    mostrarFormulario.value=true
    editandoFormulario.value=false
  
  }
  
  const editarFormulario= async(id)=>{
    //abro de nuevo el formulario pero en este caso el nombre del boton guardar cambia 
    mostrarFormulario.value=true
    editandoFormulario.value=true
    dataSeriesById.value = await datosById(id)
  }
  
  const eliminar= async(id)=>{
  
    const url= 'http://127.0.0.1:8000/api/series/delete'
  
    
    ElMessageBox.confirm(
      'Está seguro de eliminar la serie ? ' ,
      'Eliminar Registro',
      {
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        type: 'error',
      }
    )
      .then(() => {
        try{
  
        axios.delete(url, {data:{id}})
        .then(function(response) {
          datosSerie()
        })
  
        .catch(function(error) {
        console.log(error);
  
        })
  
  
        }catch(error){
        console.error('error crear serie', error)
        }
  
        ElMessage({
          type: 'success',
          message: 'Se eliminó correctamente',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Eliminación de registro Cancelada',
        })
      })
    
  }
  
 
  
  const guardarDatos= async ()=>{
    const validacion = await formRef.value.validarFormulario()
   
    if(validacion){
      await crearSerie()
    }
  }
    
  
  const actualizarDatos = async()=>{
    const validacion = await formRef.value?.validarFormulario()
    if(validacion){
      await actualizarSerie()
    } 
  }
  // con estas  funcion haremos el uso de apis 
  const crearSerie =async()=>{
    //url del endpoint
    const url= 'http://127.0.0.1:8000/api/series/save'
    const dataFormulario={
      
      titulo: formRef.value.formulario.titulo,
      genero: formRef.value.formulario.genero, 
      director: formRef.value.formulario.director, 
      año_inicio: formRef.value.formulario.año_inicio, 
      episodios: formRef.value.formulario.episodios, 
      sinopsis: formRef.value.formulario.sinopsis, 
      temporadas: formRef.value.formulario.temporadas, 
      idioma: formRef.value.formulario.idioma, 
      subtitulos: formRef.value.formulario.subtitulos, 
      imagen_portada: formRef.value.formulario.imagen_portada, 
      id_pais: formRef.value.formulario.pais,  
  
    }
    //método post con axios
  console.log(dataFormulario)
    try{
  
      axios.post(url, dataFormulario)
        .then(function(response) {
          console.log(response)
          formRef.value?.limpiarFormulario()
          ElMessage({
          message: 'La serie se adicionó exitosamente',
          type: 'success',
          })
        })
        .catch(function(error) {
          console.log(error);
  
        })
  
    
    }catch(error){
      console.error('error crear serie', error)
    }
    
  
    
  }
  
  const actualizarSerie =async()=>{
    const url= 'http://127.0.0.1:8000/api/series/update'
    const dataFormulario={
      id:dataSeriesById.value[0].id,
      titulo: formRef.value.formulario.titulo,
      genero: formRef.value.formulario.genero, 
      director: formRef.value.formulario.director, 
      año_inicio: formRef.value.formulario.año_inicio, 
      episodios: formRef.value.formulario.episodios, 
      sinopsis: formRef.value.formulario.sinopsis, 
      temporadas: formRef.value.formulario.temporadas, 
      idioma: formRef.value.formulario.idioma, 
      subtitulos: formRef.value.formulario.subtitulos, 
      imagen_portada: formRef.value.formulario.imagen_portada, 
      id_pais: formRef.value.formulario.pais,  
  
    }
   
   //método PUT con axios
  
   try {
  
     axios.put(url, dataFormulario)
       .then(function(response) {
         console.log(response)
         formRef.value?.limpiarFormulario()
         ElMessage ({
          message : 'La Serie se actualizó con éxito',
          type: 'success'
         })
         datosSerie()
         mostrarFormulario.value=false
        
         })
       .catch(function(error) {
         console.log(error);
  
       })
  
   
      }catch(error){
     console.error('error crear serie', error)
   }
   
  
  }
  
  const datosById =async(id)=>{
    const url= 'http://127.0.0.1:8000/api/series/datosById'
   
   //método get con axios
  
   try{
  
      const  response =  axios.get(url,{
      params : {
        id:id 
  
  
      }
        
     })
     return(await response).data.result
       
        
         
    
    }catch(error){
     console.error('error crear serie', error)
    }
   
  
  }
  
  
  const eliminarSerie =async()=>{
    console.log('se eliminó la serie')
  }
  
  const datosSerie =async()=>{
    const url= 'http://127.0.0.1:8000/api/series/datos'
   
   //método get con axios
  
   try{
  
     axios.get(url)
       .then(function(response) {
         series.value = response.data.result
         console.log(response)
        
         })
       .catch(function(error) {
         console.log(error);
  
       })
  
   
   }catch(error){
     console.error('error crear serie', error)
   }
   
  
  }
  
  const getPais =async()=>{
    const url= 'http://127.0.0.1:8000/api/pais/datos'
   
    //método get con axios
  
    try{
  
      axios.get(url)
        .then(function(response) {
          paises.value = response.data.result
          console.log(response)
         
          })
        .catch(function(error) {
          console.log(error);
  
        })
  
    
    }catch(error){
      console.error('error crear serie', error)
    }
    
  
    
  }
  
  onMounted(()=>{
    getPais()
    datosSerie()
  
  })
  </script>