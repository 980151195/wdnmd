<template>
    <div id="loginwrapper">
        <div id="logincontent">
            <el-card class="box-card">
            <div slot="header" class="clearfix">

            </div>
            <div id="logincontentbodt">
                <el-input id="username" v-model="user.usename" clearable></el-input>
                <el-input id="password" v-model="user.password" show-password clearable></el-input>
            </div>
            <div id="loginsudmit">
                <el-button id="systemSubmit"></el-button>
                @click="loginSystem"
            </div>      
            </el-card>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        name:"login"
        return{
            user:{
                username:"",
                password:""
            }
        }
    }
}
</script>

<style>
 #loginwrapper{
     /* background-color: violet; */
     height: 100%;   
 } 
 #logincontent{
     width: 400px;
     margin: 0 auto;
     padding-top: 100px;
 }
 #systemSubmit{
     display: block;
     margin: 0 auto;
     background-color: #0a9588;
     color:rgb(255, 255, 255);
     
 }
 

</style>