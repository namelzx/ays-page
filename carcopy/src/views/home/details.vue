<template>
    <div v-html="content"></div>
</template>

<script>
    export default {
        name: "details",
        data(){
            return{
                content:""
            }
        },
        created(){
            this.getParams()
        },
        methods:{
            getParams(){
                const content = this.$route.query.content
                console.log(content,11000)
            }
        }
    }
</script>

<style scoped>

</style>