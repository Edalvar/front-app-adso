<template>
    <el-row class="tac" style="height: 100%;">
      <el-col :span="12" class="sidebar">
       
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#a29f9b"
          text-color="#fff"
          collapse-transitionS
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Administrador</span>
            </template>

          
              <el-menu-item index="1-2">Personas</el-menu-item>
              <el-menu-item index="1-3">Paises</el-menu-item>
              <el-menu-item index="1-4">Peliculas</el-menu-item>

          
          </el-sub-menu>
          <el-sub-menu index="2">
          <template #title>
              <el-icon><location /></el-icon>
              <span>Configuracion</span>
            </template>

            <el-menu-item index="1-2">Personas</el-menu-item>
            <el-menu-item index="1-3">Paises</el-menu-item>
            <el-menu-item index="1-4">Peliculas</el-menu-item>
           </el-sub-menu>
        
           
            

         
        </el-menu>
      </el-col>
      
        
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  