<template>
    <div>
        <div>1231231212312379878192</div>
    </div>
</template>

<script>
    import {GetBannerInfo} from '@/api/shop'

    export default {
        name: "details",
        data() {
            return {
                content: ""
            }
        },
        created() {
            console.log(1)
            this.getParams()
        },
        methods: {
            getParams() {
                const query = this.$route.query
                console.log(query, 11000)
            }
        },
        watch:{
            $route(to,from){
                console.log(to.path);
            }
        },
    }
</script>

<style scoped>

</style>