<template>
    <el-menu
      :default-active="activeIndex"

      background-color="#f09c22"
      text-color="#fff"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 100px"
          src="/krypton.png"
          alt="Krypton logo"
        />
      </el-menu-item>
     
      <el-sub-menu index="1">
        <template #title>Krypton</template>
        <el-menu-item index="2-1">perfil</el-menu-item>
        <el-menu-item index="2-2">Cerrar Sesion</el-menu-item>
        
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
  }
  </style>
  