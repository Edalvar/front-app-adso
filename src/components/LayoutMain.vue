<script setup>
import Navbar from './Navbar.vue';
import SideBarMenu from './SideBarMenu.vue';


</script>


<template>
    <el-container style = "height :100vh;">
        <el-header>
            <Navbar />
        </el-header>
        <el-container>
           <el-aside width="180px">
            <SideBarMenu />
           </el-aside>  
           <el-main class="main-content">
              <slot name="slotLayout"></slot>
           </el-main>
        </el-container>
        
       
        
    </el-container>
</template>


<style >
.el-header {
    padding: 0;
}

.el-aside {

    background-color: aliceblue;
}

.main-content {
    position: relative;
}




</style>

