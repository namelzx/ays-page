<template>
    <div>
        <van-uploader v-model="list"  :max-count="count" :before-delete="handelDelete" :after-read="afterRead"/>

    </div>
</template>

<script>

    import axios from 'axios'
    import myconfig from "@/config";

    export default {
        name: "index",
        props: {
            front: Array,
            count:Number
        },
        data() {
            return {
                list: this.front
            }
        },

        methods: {
            handelDelete(e){
                console.log(e)
                var index=this.list.indexOf(e)
                this.list.splice(index,1)

                this.$emit('handelDelete', this.list)


            },
            afterRead(file) {
                let url = myconfig.uploadUrl.img
                let fd = new FormData()
                fd.append('file', file.file)
                axios.post(url, fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    this.$emit('handelUploade', res)
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
