<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "case",
        methods: {
            open() {
                window.location.href = 'http://www.baidu.com';
            },
        },
        created(){
            this.open()
        }
    }
</script>

<style scoped>

</style>