<template>
  <el-form
    ref="formRef"
    style="max-width: 60%"
    :model="formulario"
    :rules="rulesForm"
    label-width="auto"
    
    :size="formSize"
    status-icon
  >
  <!-- titulo pelicula -->
    <el-form-item label="Titulo" prop="titulo">
      <el-input v-model="formulario.titulo" />
    </el-form-item>

     <!-- subtitulo pelicula -->
     <el-form-item label="Subtitulos" prop="subtitulos">
      <el-input v-model="formulario.subtitulos" />
    </el-form-item>
<!-- genero  -->
    <el-form-item label="Genero" prop="genero">
      <el-input v-model="formulario.genero" />
    </el-form-item>
<!-- director pelicula -->
    <el-form-item label="Director" prop="director">
      <el-input v-model="formulario.director" />
    </el-form-item>
  

<!-- duracion  -->
    <el-form-item label="Duración" prop="duracion">
      <el-input v-model="formulario.duracion" />
    </el-form-item>
<!-- sinopsis -->
    <el-form-item label="Sinopsis" prop="sinopsis">
      <el-input v-model="formulario.sinopsis" />
    </el-form-item>
<!-- clasificación -->
    <el-form-item label="Clasificación" prop="clasificacion">
      <el-input v-model="formulario.clasificacion" />
    </el-form-item>


<!-- idioma -->
    <el-form-item label="Idioma" prop="idioma">
      <el-input v-model="formulario.idioma" />
    </el-form-item>
<!-- imagen portada -->
    <el-form-item label="Cover" prop="imagen_portada" >
      <el-input v-model="formulario.imagen_portada" />
    </el-form-item>
<!-- pais -->
    <el-form-item label="Pais" prop="pais">
      <el-select v-model="formulario.pais" placeholder="Seleccione el País">
        
        <el-option v-for="country in paises" 
        :key = "country.id"
        :label = "country.nombre"
        :value="country.id"

        />
      </el-select>
    </el-form-item>
<!-- año pelicula  -->
    <el-form-item label="Año" prop="ano" >
      <el-input v-model="formulario.ano" />
    </el-form-item>
 
  
  </el-form>

</template>


<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { ElForm } from 'element-plus';
import { defineProps } from 'vue';

const propiedad= defineProps({
    paises : {
        type : Array,
        required: true,
    },
        dataValue: Object
    })

const formSize = ref('default')
const formRef = ref()
const formulario = reactive({
  titulo: '',
   genero: '',
  director: '',
  ano: '',
  duracion: '',
  sinopsis: '',
  clasificacion: '',
  idioma: '',
  subtitulos:'',
  imagen_portada:'',
  pais: '',
})

const datosFormulario = ()=>{
   formulario.titulo=propiedad.dataValue[0].titulo,
   formulario.subtitulos=propiedad.dataValue[0].subtitulos,
   formulario.genero=propiedad.dataValue[0].genero,
   formulario.director=propiedad.dataValue[0].director,
   formulario.duracion=propiedad.dataValue[0].duracion,
   formulario.sinopsis=propiedad.dataValue[0].sinopsis,
   formulario.clasificacion=propiedad.dataValue[0].clasificacion,
   formulario.idioma=propiedad.dataValue[0].idioma,
   formulario.imagen_portada=propiedad.dataValue[0].imagen_portada,
   formulario.pais=propiedad.dataValue[0].id_pais,
   formulario.ano=propiedad.dataValue[0].año

}

const rulesForm = reactive({
  titulo: [{ required: true, message: 'Por favor agregue el nombre de la película', trigger: 'blur' }],
  subtitulos: [{ required: true, message: 'Por favor agregue si la pelicula tiene subtitulos', trigger: 'blur' }],
  genero: [{ required: true, message: 'Por favor ingrese el género', trigger: 'blur' }],
  director: [{ required: true, message: 'Por favor ingrese el director', trigger: 'blur' }],
  duracion: [{ required: true, message: 'Por favor ingrese la duración', trigger: 'blur' }],
  sinopsis: [{ required: true, message: 'Por favor ingrese la sinopsis', trigger: 'blur' }],
  clasificacion: [{ required: true, message: 'Por favor ingrese la clasificación', trigger: 'blur' }],
  idioma: [{ required: true, message: 'Por favor ingrese el idioma', trigger: 'blur' }],
  imagen_portada: [{ required: true, message: 'Por favor ingrese la portada', trigger: 'blur' }],
  pais: [{ required: true, message: 'Por favor seleccione el país', trigger: 'change' }],
  ano: [{ required: true, message: 'Año de Estreno', trigger: 'change' }],
  
})




//borra todos los valores del formulario
const limpiarFormulario=()=>{
    formRef.value.resetFields()
}
//va a ser una función asincronica que va a validar que las reglas se ejecuten cuando se da guardar
//devuelve si existe algun error
const validarFormulario = async () => {
  
  return new Promise((resolve)=> {
    formRef.value.validate((valid) => {
    if (valid) {
      resolve(true)
    } else {
      resolve(false)
    }
  })

    
  } )
  
}


watch(
    ()=>propiedad.dataValue,
    (newData)=> {
        datosFormulario()
    }

)

defineExpose({validarFormulario,formulario, limpiarFormulario})



</script>


  
  
      
  
      
    <style scoped>
     
    </style>
      