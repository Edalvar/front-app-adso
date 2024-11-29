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
<!-- genero  -->
    <el-form-item label="Genero" prop="genero">
      <el-input v-model="formulario.genero" />
    </el-form-item>
<!-- director pelicula -->
    <el-form-item label="Director" prop="director">
      <el-input v-model="formulario.director" />
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
    <el-form-item label="Portada" prop="imagenPortada" >
      <el-input v-model="formulario.imagenPortada" />
    </el-form-item>
<!-- pais -->
    <el-form-item label="Pais" prop="pais">
      <el-select v-model="formulario.pais" placeholder="Pais">
        <el-option label="United States" value="shanghai" />
        <el-option label="Colombia" value="beijing" />
      </el-select>
    </el-form-item>
  
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
  fechaEstreno: '',
  idioma: '',
  subtitulos:'',
  imagenPortada:'',
  pais: '',
})



const rulesForm = reactive({
  titulo: [
    { required: true, message: 'Por Favor agregue el nombre de la Película', trigger: 'blur' }
   
  ],
  genero: [
    {
      required: true,
      message: 'Por Favor ingrese el género de la película',
      trigger: 'change',
    },
  ],
  director: [
    {
      required: true,
      message: 'Por Favor ingrese el director de la película',
      trigger: 'change',
    },
  ],
  ano: [
    {
      required: true,
      message: 'Please Por Favor ingrese el año en el que se estrenó la película',
      trigger: 'change',
    },
  ],
  duracion: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  sinopsis: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  clasificacion: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  fechaEstreno: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  idioma: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  subtitulos: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  imagenPortada: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async () => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = () => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>


  
  
      
  
      
    <style scoped>
     
    </style>
      