<template>
   
    <LayoutMain>
        <template #slotLayout>
            <Header
            :titulo="'Paises'"
            :tituloBoton="'Crear Pais'"
            >

            </Header>
            <!--componente-->
            <Formulario titulo="título del formulario">
              <template #slotForm>

                <formPais/>

              </template>
            </Formulario>

          

          <div>
            

            <el-table :data="tableData" stripe style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180" />
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                </el-table>


          </div>
             
                
             
      
    
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

  
  interface RuleForm {
    name: string
    region: string
    count: string
    date1: string
    date2: string
    delivery: boolean
    location: string
    type: string[]
    resource: string
    desc: string
  }
  
  const formSize = ref<ComponentSize>('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    location: '',
    type: [],
    resource: '',
    desc: '',
  })
  
  const locationOptions = ['Home', 'Company', 'School']
  
  const rules = reactive<FormRules<RuleForm>>({
    name: [
      { required: true, message: 'Please input Activity name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
      },
    ],
    count: [
      {
        required: true,
        message: 'Please select Activity count',
        trigger: 'change',
      },
    ],
    date1: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a date',
        trigger: 'change',
      },
    ],
    date2: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a time',
        trigger: 'change',
      },
    ],
    location: [
      {
        required: true,
        message: 'Please select a location',
        trigger: 'change',
      },
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
      },
    ],
    resource: [
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
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  
  const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))
  </script>
  