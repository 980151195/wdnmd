<template>
    <div id="cnnodewrapper">
        <div id="cnnodetitle">
            
        </div>
    </div >
</template>

<script>
import Axios from 'axios'

export default {
    data() {
        return {
            topicsArr:[]
        }
    },
    beforeCreate() {
        cons
    },
    created() {
        Axios.get('https://cnodejs.org/api/v1/topics').then(function (response){
            console,log()
        })
    },
}
</script>

<style>
    
</style>