<template>
    <div>

        <van-uploader v-model="list"  :max-count="count" :before-delete="handelDelete" :after-read="afterRead">

            <div class="upBtn-add">+</div>
            <div class="upBtn-add2">添加相片</div>
        </van-uploader>

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
        watch:{
            front:function (e,ne) {
                this.list=e
                console.log(this.list,'list')
            }
        },

        methods: {
            handelDelete(e){
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
