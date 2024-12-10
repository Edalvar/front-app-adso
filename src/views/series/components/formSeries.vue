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
        <!-- Título de la serie -->
        <el-form-item label="Título" prop="titulo">
            <el-input v-model="formulario.titulo" />
            </el-form-item>

            <!-- Subtítulos -->
            <el-form-item label="Subtítulos" prop="subtitulos">
            <el-input v-model="formulario.subtitulos" />
            </el-form-item>

            <!-- Género -->
            <el-form-item label="Género" prop="genero">
            <el-input v-model="formulario.genero" />
            </el-form-item>

            <!-- Director -->
            <el-form-item label="Director" prop="director">
            <el-input v-model="formulario.director" />
            </el-form-item>

            <!-- Temporadas -->
            <el-form-item label="Temporadas" prop="temporadas">
            <el-input v-model="formulario.temporadas" />
            </el-form-item>

            <!-- Episodios -->
            <el-form-item label="Episodios" prop="episodios">
            <el-input v-model="formulario.episodios" />
            </el-form-item>

            <!-- Sinopsis -->
            <el-form-item label="Sinopsis" prop="sinopsis">
            <el-input v-model="formulario.sinopsis" />
            </el-form-item>

            
            <!-- Idioma -->
            <el-form-item label="Idioma" prop="idioma">
            <el-input v-model="formulario.idioma" />
            </el-form-item>

            <!-- Imagen portada -->
            <el-form-item label="Cover" prop="imagen_portada">
            <el-input v-model="formulario.imagen_portada" />
            </el-form-item>

            <!-- País -->
            <el-form-item label="País" prop="pais">
            <el-select v-model="formulario.pais" placeholder="Seleccione el País">
                <el-option
                v-for="country in paises"
                :key="country.id"
                :label="country.nombre"
                :value="country.id"
                />
            </el-select>
            </el-form-item>

            <!-- Año de estreno -->
            <el-form-item label="Año" prop="año_inicio">
            <el-input v-model="formulario.año_inicio" />
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
    año_inicio: '',
    temporadas: '',
    sinopsis: '',
    episodios:'',
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
     formulario.temporadas=propiedad.dataValue[0].temporadas,
     formulario.sinopsis=propiedad.dataValue[0].sinopsis,
     formulario.episodios=propiedad.dataValue[0].episodios,
     formulario.idioma=propiedad.dataValue[0].idioma,
     formulario.imagen_portada=propiedad.dataValue[0].imagen_portada,
     formulario.pais=propiedad.dataValue[0].id_pais,
     formulario.año_inicio=propiedad.dataValue[0].año_inicio
  
  }
  
  const rulesForm = reactive({
    titulo: [{ required: true, message: 'Por favor agregue el nombre de la serie', trigger: 'blur' }],
    subtitulos: [{ required: true, message: 'Por favor agregue si la serie tiene subtitulos', trigger: 'blur' }],
    genero: [{ required: true, message: 'Por favor ingrese el género', trigger: 'blur' }],
    temporadas: [{ required: true, message: 'Por favor agregue el numero de Temporadas', trigger: 'blur' }],
    director: [{ required: true, message: 'Por favor ingrese el director', trigger: 'blur' }],
    sinopsis: [{ required: true, message: 'Por favor ingrese la sinopsis', trigger: 'blur' }],
    episodios: [{ required: true, message: 'Por favor ingrese el numero de episodios', trigger: 'blur' }],
    idioma: [{ required: true, message: 'Por favor ingrese el idioma', trigger: 'blur' }],
    imagen_portada: [{ required: true, message: 'Por favor ingrese la portada', trigger: 'blur' }],
    pais: [{ required: true, message: 'Por favor seleccione el país', trigger: 'change' }],
    año_inicio: [{ required: true, message: 'Año de Estreno', trigger: 'change' }],
    
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
        