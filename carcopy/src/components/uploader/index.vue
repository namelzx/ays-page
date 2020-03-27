<template>
    <div>
        <van-overlay :show="show"  >

            <van-loading size="24px">上传中...</van-loading>

        </van-overlay>

        <van-uploader v-model="list"  :max-count="count" :before-delete="handelDelete" :after-read="afterRead"/>

    </div>
</template>

<script>

    import axios from 'axios'
    import myconfig from "@/config";
    import { Overlay } from 'vant';

    export default {
        name: "index",
        props: {
            front: Array,
            count:Number
        },
        data() {
            return {
                show:false,
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
                console.log(e)
                var index=this.list.indexOf(e)
                this.list.splice(index,1)

                this.$emit('handelDelete', this.list)


            },
            afterRead(file) {
                this.show=!this.show
                let url = myconfig.uploadUrl.img
                let fd = new FormData()
                fd.append('file', file.file)
                axios.post(url, fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    this.show=!this.show
                    this.$emit('handelUploade', res)
                }).catch(err => {
                    alert(err)
                })
            }
        }
    }
</script>

<style scoped>
    .van-loading{
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
