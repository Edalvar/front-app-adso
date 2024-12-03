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
    <el-form-item label="Cover" prop="imagenPortada" >
      <el-input v-model="formulario.imagen_portada" />
    </el-form-item>
<!-- pais -->
    <el-form-item label="Pais" prop="pais">
      <el-select v-model="formulario.pais" placeholder="Pais">
        <el-option label="United States" value="shanghai" />
        <el-option label="Colombia" value="beijing" />
      </el-select>
    </el-form-item>
<!-- año pelicula  -->
<el-form-item label="Año" prop="ano">
    <el-date-picker
    v-model="formulario.fechaEstreno"
    type="date"
    placeholder="Selecciona la fecha"
    format="YYYY"
    value-format="YYYY"
     />
    </el-form-item>
    <!-- <el-button type="primary" @click="validarFormulario">
        Create
    </el-button> -->
  
  </el-form>

    <!--   <el-card style="max-width: 100%;">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1>Formulario Películas</h1>

            </el-col>
        </el-row>
    </el-card> -->
</template>


<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus';



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



const rulesForm = reactive({
  titulo: [{ required: true, message: 'Por favor agregue el nombre de la película', trigger: 'blur' }],
  subtitulos: [{ required: true, message: 'Por favor agregue si la pelicula tiene subtitulos', trigger: 'blur' }],
  genero: [{ required: true, message: 'Por favor ingrese el género', trigger: 'blur' }],
  director: [{ required: true, message: 'Por favor ingrese el director', trigger: 'blur' }],
  duracion: [{ required: true, message: 'Por favor ingrese la duración', trigger: 'blur' }],
  sinopsis: [{ required: true, message: 'Por favor ingrese la sinopsis', trigger: 'blur' }],
  clasificacion: [{ required: true, message: 'Por favor ingrese la clasificación', trigger: 'blur' }],
  idioma: [{ required: true, message: 'Por favor ingrese el idioma', trigger: 'blur' }],
  imagenPortada: [{ required: true, message: 'Por favor ingrese la portada', trigger: 'blur' }],
  pais: [{ required: true, message: 'Por favor seleccione el país', trigger: 'change' }],
  fechaEstreno: [{ required: true, message: 'Por favor seleccione la fecha de estreno', trigger: 'change' }]
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




defineExpose({validarFormulario,formulario, limpiarFormulario})

</script>


  
  
      
  
      
    <style scoped>
     
    </style>
      