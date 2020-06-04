<template>
    <div>


        <div class="pull-car" v-if="opneCars">
            <div class="prBox" ref="heightBox">
                <div class="backward-btn" v-if="carsubscript===2">
                    <van-icon name="arrow-left" @click="clickToBack(1)"/>
                </div>
                <div class="backward-btn" v-if="carsubscript===3">
                    <van-icon name="arrow-left" @click="clickToBack(2)"/>
                </div>
                <div class="stick" v-if="isScroll && carsubscript===1">{{alphabet}}</div>
                <!-- 字母列表  -->
                <div class="letter" v-if="carsubscript===1" ref="letterHeight">
                    <div
                            v-for="(item,index) in letters"
                            :key="index"
                            :ref="index"
                            @touchstart="handleTouchStart"
                            @touchmove.stop.prevent="handleTouchMove"
                            @touchend="handleTouchEnd"
                            @click="hendletterClick(item)"
                    >
                        <div class="letters-name" ref="zimu">{{item}}</div>
                    </div>
                </div>
                <div class="prlist wrappers" v-if="carsubscript===1" ref="wrappers">
                    <div>
                        <div class="aaa" v-for="(item,index) in cities" :key="index" :ref="item.title">
                            <div class="prlist-title">
                                <span class="titles">{{item.title}}</span>
                            </div>
                            <div
                                    :class="['prlist-name',{'prlist-arcit':carbrand===items.name}]"
                                    v-for="(items,index) in item.list"
                                    :key="index"
                                    @click="Controlcar(items)"
                            >{{items.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prlist wrappers2 wrappers" v-if="carsubscript===2" ref="wrappers">
                    <div>
                        <div
                                :class="['prlist-name',{'prlist-arcit':carsuit===item.series_name}]"
                                v-for="(item,index) in carlist2"
                                :key="index"
                                @click="Controlercar(item)"
                        >{{item.series_name}}
                        </div>
                    </div>
                </div>
                <div class="prlist wrappers2 wrappers" v-if="carsubscript===3" ref="wrappers">
                    <div>
                        <div
                                :class="['prlist-name',{'prlist-arcit':carseries===item.model_name}]"
                                v-for="(item,index) in carlist3"
                                :key="index"
                                @click="Controlsancar(item)"
                        >{{item.model_name}}
                        </div>
                    </div>
                </div>
                <div class="close-btn" @click="toggleShow">
                    <van-icon name="close"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Getcar, GetIdByModel, GetIdBySeries } from "@/api/car";

    import BScroll from "better-scroll";
    import {mapGetters} from "vuex";

    export default {
        name: "Car",
        data(){
            return{
                isScroll:false,
                opneCars:false,
                carsubscript:1,
                carlist3:[],
                carlist2:[],
                cities:[],
                postData:{
                    brand_id:'',
                },
                brand_id:'',
                carbrand:'品牌'
            }
        },
        computed: {
            letters() {
                var letters = [];
                for (let i = 0; i < 24; i++) {
                    if (this.cities[i] !== undefined) {
                        var element = this.cities[i].title;
                        letters.push(element);
                    }
                }
                return letters;
            },
            carType() {
                if (this.carbrand !== "" && this.carsuit !== "" && this.carseries !== "")
                    return this.carbrand + this.carsuit + this.carseries;
                else return "车辆选择";
            },
            ...mapGetters(["userInfo"])
        },
        created() {
            Getcar().then(res => {
                this.cities = res.data;
                // console.log(res.data);
            });
        },
        methods:{
            // 点击车型弹出层返回键
            clickToBack(num) {
                this.carsubscript = num;
            },
            // 打开车型弹出层
            toggleShow() {
                this.opneCars = !this.opneCars;
                this.setRef();
            },
            // 挂载ref节点
            setRef() {
                let _this = this;
                const options = {
                    scrollY: true,
                    scrollX: false,
                    mouseWheel: true,
                    click: true,
                    taps: true,
                    stopPropagation: true,
                    probeType: 3 // 开启滚动监听
                };
                setTimeout(() => {
                    let wrappers = document.querySelector(".wrappers");
                    _this.scroll = new BScroll(wrappers, options);

                    //监听内容滑动
                    _this.scroll.on("scroll", pos => {
                        const A =
                            this.$refs["A"][0].offsetHeight + this.$refs["A"][0].offsetTop - 10;
                        const B =
                            this.$refs["B"][0].offsetHeight + this.$refs["B"][0].offsetTop - 10;
                        const C =
                            this.$refs["C"][0].offsetHeight + this.$refs["C"][0].offsetTop - 10;
                        const D =
                            this.$refs["D"][0].offsetHeight + this.$refs["D"][0].offsetTop - 10;
                        const F =
                            this.$refs["F"][0].offsetHeight + this.$refs["F"][0].offsetTop - 10;
                        const G =
                            this.$refs["G"][0].offsetHeight + this.$refs["G"][0].offsetTop - 10;
                        const H =
                            this.$refs["H"][0].offsetHeight + this.$refs["H"][0].offsetTop - 10;
                        const I =
                            this.$refs["I"][0].offsetHeight + this.$refs["I"][0].offsetTop - 10;
                        const J =
                            this.$refs["J"][0].offsetHeight + this.$refs["J"][0].offsetTop - 10;
                        const K =
                            this.$refs["K"][0].offsetHeight + this.$refs["K"][0].offsetTop - 10;
                        const L =
                            this.$refs["L"][0].offsetHeight + this.$refs["L"][0].offsetTop - 10;
                        const M =
                            this.$refs["M"][0].offsetHeight + this.$refs["M"][0].offsetTop - 10;
                        const N =
                            this.$refs["N"][0].offsetHeight + this.$refs["N"][0].offsetTop - 10;
                        const O =
                            this.$refs["O"][0].offsetHeight + this.$refs["O"][0].offsetTop - 10;
                        const P =
                            this.$refs["P"][0].offsetHeight + this.$refs["P"][0].offsetTop - 10;
                        const Q =
                            this.$refs["Q"][0].offsetHeight + this.$refs["Q"][0].offsetTop - 10;
                        const R =
                            this.$refs["R"][0].offsetHeight + this.$refs["R"][0].offsetTop - 10;
                        const S =
                            this.$refs["S"][0].offsetHeight + this.$refs["S"][0].offsetTop - 10;
                        const T =
                            this.$refs["T"][0].offsetHeight + this.$refs["T"][0].offsetTop - 10;
                        const W =
                            this.$refs["W"][0].offsetHeight + this.$refs["W"][0].offsetTop - 10;
                        const X =
                            this.$refs["X"][0].offsetHeight + this.$refs["X"][0].offsetTop - 10;

                        let scrollY = Math.abs(Math.round(pos.y));
                        if (scrollY <= A) {
                            this.isScroll = true;
                            this.alphabet = "A";
                        } else if (scrollY > A && scrollY < B) {
                            this.isScroll = true;
                            this.alphabet = "B";
                        } else if (scrollY > B && scrollY < C) {
                            this.isScroll = true;
                            this.alphabet = "C";
                        } else if (scrollY > C && scrollY < D) {
                            this.isScroll = true;
                            this.alphabet = "D";
                        } else if (scrollY > D && scrollY < F) {
                            this.isScroll = true;
                            this.alphabet = "F";
                        } else if (scrollY > F && scrollY < G) {
                            this.isScroll = true;
                            this.alphabet = "G";
                        } else if (scrollY > G && scrollY < H) {
                            this.isScroll = true;
                            this.alphabet = "H";
                        } else if (scrollY > H && scrollY < I) {
                            this.isScroll = true;
                            this.alphabet = "I";
                        } else if (scrollY > I && scrollY < J) {
                            this.isScroll = true;
                            this.alphabet = "J";
                        } else if (scrollY > J && scrollY < K) {
                            this.isScroll = true;
                            this.alphabet = "K";
                        } else if (scrollY > K && scrollY < L) {
                            this.isScroll = true;
                            this.alphabet = "L";
                        } else if (scrollY > L && scrollY < M) {
                            this.isScroll = true;
                            this.alphabet = "M";
                        } else if (scrollY > M && scrollY < N) {
                            this.isScroll = true;
                            this.alphabet = "N";
                        } else if (scrollY > N && scrollY < O) {
                            this.isScroll = true;
                            this.alphabet = "O";
                        } else if (scrollY > O && scrollY < P) {
                            this.isScroll = true;
                            this.alphabet = "P";
                        } else if (scrollY > P && scrollY < Q) {
                            this.isScroll = true;
                            this.alphabet = "Q";
                        } else if (scrollY > Q && scrollY < R) {
                            this.isScroll = true;
                            this.alphabet = "R";
                        } else if (scrollY > R && scrollY < S) {
                            this.isScroll = true;
                            this.alphabet = "S";
                        } else if (scrollY > S && scrollY < T) {
                            this.isScroll = true;
                            this.alphabet = "T";
                        } else if (scrollY > T && scrollY < W) {
                            this.isScroll = true;
                            this.alphabet = "W";
                        } else if (scrollY > X && scrollY < X) {
                            this.isScroll = true;
                            this.alphabet = "X";
                        } else {
                            this.isScroll = false;
                        }
                    });
                }, 300);
            },

            //点击字母表
            hendletterClick(e) {
                this.letter = e;
                this.alphabet = e;
            },
            handleTouchStart() {
                this.touchStatus = true;
            },
            handleTouchMove(e) {
                // console.log(e);
                if (this.touchStatus) {
                    const height = this.$refs.zimu[0].offsetHeight;
                    const startY = this.$refs["A"][0].offsetTop;
                    const topHeight =
                        this.$refs["A"][0].offsetTop + this.$refs.heightBox.offsetTop;
                    const letterHeight = this.$refs.letterHeight.offsetTop;
                    const sumHeight = topHeight + letterHeight;
                    // const touchY = e.touches[0].clientY - 140;
                    const touchY = e.touches[0].clientY - sumHeight;
                    const index = Math.floor((touchY - startY) / height);
                    if (index >= 0 && index < this.letters.length) {
                        this.letter = this.letters[index];
                    } else {
                    }
                } else {
                }
            },
            handleTouchEnd() {
                this.touchStatus = false;
            },

            //取消返回
            tolast() {
                this.$router.go(-1); //返回上一层
            },
            //第一级
            Controlcar(row) {
                this.carbrand = row.name;
                this.postData.brand_id = row.brandid;
                console.log(row)
                GetIdBySeries(row.brandid).then(res => {
                    this.carlist2 = res.data;
                });
                this.carsuit = "车系";
                this.carsubscript = 2;
            },
            //第二级
            Controlercar(row) {
                this.carsuit = row.series_name;
                this.carseries = "车型";
                this.postData.series_id = row.series_id;

                GetIdByModel(row.series_id).then(res => {
                    this.carlist3 = res.data;
                });
                this.carsubscript = 3;
            },
            //第三极
            Controlsancar(row) {
                this.carseries = row.model_name;
                this.postData.model_id = row.model_id;
                this.postData.car_type = this.carbrand + this.carsuit + this.carseries;
                this.postData.car_model =
                    this.postData.brand_id +
                    "," +
                    this.postData.series_id +
                    "," +
                    this.postData.model_id;
                this.opneCars = false;
                this.$emit('updateRow',this.postData)
            },
        }
    }


</script>


<style lang="scss" scoped>
    .pull-car {
        position: fixed;
        top: 1.2rem;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 10;
        .prBox {
            border-radius: 15px;
            position: absolute;
            width: 9.15rem;
            height: 13.67rem;
            background: #ffffff;
        // bottom: 2rem;
            top: 1rem;
            left: 0.43rem;
            padding: 0.29rem 0;
            z-index: 10;
            .stick {
                top: 0rem;
                position: absolute;
                height: 0.8rem;
                line-height: 0.8rem;
                padding-left: 0.44rem;
            // background: #dcdcdc;
                background-image: linear-gradient(to right, #dcdcdc 45%, #ffffff);
                z-index: 100;
                left: 0;
                right: 0;
                border-radius: 15px 15px 0 0;
                color: #333333;
                font-size: 0.4rem;
            }
            .letter {
                position: absolute;
                top: 1rem;
                right: 0;
                bottom: 0;
                width: 1rem;
                text-align: center;
                font-size: 0.27rem;
                z-index: 20;
                .letters-name {
                    height: 0.5rem;
                    line-height: 0.5rem;
                }
            }
            .title {
                width: 10rem;
                height: 1.39rem;
                border-bottom: 0.02rem solid #eeeeee;
                .ti-headline {
                    text-align: center;
                    position: relative;
                    color: #333333;
                    font-size: 0.4rem;
                    margin-top: 0.23rem;
                    img {
                        position: absolute;
                        right: 0.5rem;
                        top: 0.1rem;
                        width: 0.25rem;
                        height: 0.25rem;
                    }
                }
                .ti-names {
                // margin-left: .44rem;
                    text-align: center;
                    span {
                    // margin-right: 1rem;
                        color: #333333;
                        font-size: 0.32rem;
                    }
                }
            }
            .prlist {
            // height: 14rem;
                height: 100%;
            // margin-top: .25rem;
                color: #333333;
                font-size: 0.32rem;
                overflow: auto; //超出高度滚动
                /*overflow: hidden;*/
            // padding-bottom: 0.4rem;
            // margin-bottom: .4rem;

                .prlist-title {
                    background-image: linear-gradient(to right, #dcdcdc 45%, #ffffff);
                    width: 9.09rem;
                    height: 0.61rem;
                    line-height: 0.61rem;
                    margin-bottom: 0.2rem;
                    .titles {
                        margin-left: 0.44rem;
                        font-size: 0.4rem;
                    }
                }
                .prlist-name {
                    padding-bottom: 0.3rem;
                    padding-left: 0.44rem;
                    font-size: 0.4rem;
                    line-height: 2.5;
                }
                .prlist-arcit {
                    color: #409eff;
                }
            }
            .wrappers2 {
                .prlist-name {
                    &:last-child {
                        padding-bottom: 1.5rem;
                    }
                }
            }
        }
        .close-btn {
            position: absolute;
            top: -1rem;
            right: 0.05rem;
            text-align: center;
            /* width: .65rem; */
            font-size: 0.8rem;
            color: #333333;
            font-weight: 800;
            z-index: 100;
        }
        .backward-btn {
            color: #333333;
            margin-left: 0.4rem;
            font-size: 0.5rem;
        }
    }
</style>