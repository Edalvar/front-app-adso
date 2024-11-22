<template>
   
    <LayoutMain>
        <template #slotLayout>
            <Header
            :titulo="'Paises'"
            :tituloBoton="'Crear Pais'"
            :abrir="abrirFormulario"
            >

            </Header>
            <!--componente-->
            <Formulario titulo="Adición de País" v-model:is-open="mostrarFormulario">
              <template #slotForm>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">


                    <formPais 
                    v-model:is-open="mostrarFormulario" /> 
                  </el-col>

                 
                
                </el-row>

                

              </template>
            </Formulario>
       
            

            <el-table :data="tableData" stripe style="width: 100%">
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                  <el-table-column prop="phone" label="Telephone" />
                </el-table>

             
                
             
      
    
        </template>

        
    </LayoutMain>
    
 
  </template> 
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue';
  import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
  import Header from '../../components/Header.vue';
  import Formulario from '../../components/Formulario.vue';
  import formPais from './Components/formPais.vue';
  import { Delete,Edit } from '@element-plus/icons-vue';


  const mostrarFormulario=ref(false)


  const abrirFormulario=()=>{
    mostrarFormulario.value=true

  }

  const tableData = [
    {
      name: 'Edwin',
      address: 'N°. 9033 80th st NY 11421',
      phone:'4818391'
    }
  ]

  
  </script>
  