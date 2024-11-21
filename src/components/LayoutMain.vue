<script setup>
import Navbar from './Navbar.vue';
import SideBarMenu from './SideBarMenu.vue';


</script>


<template>
    <el-container>
        <el-header>
            <Navbar />
        </el-header>
        <el-container>
           <el-aside>
            <SideBarMenu />
           </el-aside>  
           <el-main>
              <slot name="slotLayout"></slot>
           </el-main>
        </el-container>
        
       
        
    </el-container>
</template>


<style >




</style>

