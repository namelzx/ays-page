<template>
  <!-- 我的页面 -- 编辑我的资料  -->
  <div class="compile">
    <div class="compileBox">
      <!--  添加车型  -->
      <div class="select-add">
        <span class="add-name" @click="tologCar">添加车辆</span>
      </div>

      <!-- 更改用户名  -->
      <div class="select-pr" style="clear:both">
        <div class="prBox">
          <div class="title">更改用户名</div>
          <div class="names" @click="clickUsers">
            <div class="names-character">{{users}}</div>
            <div class="names-img">
              <img src="../../assets/operator.png" />
            </div>
          </div>
        </div>
      </div>
      <!-- 更改手机号  -->
      <div class="select-pr">
        <div class="prBox">
          <div class="title">更改手机号</div>
          <div class="names" @click="tophone">
            <div class="names-character">{{phone |phoneNum}}</div>
            <div class="names-img">
              <img src="../../assets/operator.png" />
            </div>
          </div>
        </div>
      </div>
      <!--爱车  -->
      <div class="select-car">
        <div class="prBox">
          <div class="title">爱车</div>
          <div class="names" @click="toggleShow">
            <div class="names-character">{{carbrand}}{{carsuit}}{{carseries}}</div>
            <div class="names-img">
              <img src="../../assets/operator.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- 按钮  -->
      <div class="select-btn">
        <div class="btn-return" @click="toreturn">返回</div>
        <div class="btn-save" @click="savebottom">保存</div>
      </div>

      <!-- 更改用户名弹窗  -->
      <div class="up-users" v-if="Upusers" @touchmove.prevent>
        <div class="usersBox">
          <div class="usersBoxHe">
            <div class="title">请输入姓名</div>
            <div class="inps">
              <input v-model="users" maxlength="10" @input="descInput" />
              <span>{{remnant}}/10</span>
            </div>
            <div class="user-btn">
              <span class="btn-qx" @click="clickbtnqx">取消</span>
              <span class="btn-ok" @click="clickBtnok">确定</span>
            </div>
          </div>
        </div>
      </div>

      <!--  弹出选择车型  -->

      <!--  弹出选择车型  -->
    <div class="pull-car" v-if="opneCars" @touchmove.prevent>
      <div class="prBox">
        <div class="title">
          <div class="ti-headline">
            <span>选择车型</span>
            <img @click="toggleShow" src="../../assets/close.png" />
          </div>
          <div class="ti-names">
            <span @click="carbrandBnt">
              {{carbrand}}
              <span v-if="carsuit!==''">></span>
            </span>
            <span @click="carsuitBtn" v-if="carbrand!=='品牌'">
              {{carsuit}}
              <span v-if="carseries!==''">></span>
            </span>
            <span v-if="carsuit!=='车系'">{{carseries}}</span>
          </div>
        </div>

        <!-- 字母列表  -->
        <div class="letter" v-if="carsubscript===1">
          <div
            v-for="(item,index) in letters"
            :key="index"
            :ref="index"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="hendletterClick(item)"
          >
            <div class="letters-name">{{item}}</div>
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
                @click="Controlcar(items.name)"
              >{{items.name}}</div>
            </div>
          </div>
        </div>

        <div class="prlist wrappers" v-if="carsubscript===2" ref="wrappers">
          <div>
            <div
              :class="['prlist-name',{'prlist-arcit':carsuit===item.name}]"
              v-for="(item,index) in carlist2"
              :key="index"
              @click="Controlercar(item.name)"
            >{{item.name}}</div>
          </div>
        </div>

        <div class="prlist wrappers" v-if="carsubscript===3" ref="wrappers">
          <div>
            <div
              :class="['prlist-name',{'prlist-arcit':carseries===item.name}]"
              v-for="(item,index) in carlist3"
              :key="index"
              @click="Controlsancar(item.name)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mycompile",
  data() {
    return {
      car: "本田",
      users: "阿帕金刚",
      phone: "1325769140",
      remnant: 10,
      Upusers: false, //更改用户弹窗
      carbrand: "品牌", //车型品牌
      carsuit: "", // 车型型号
      carseries: "", //车型版本
      carsubscript: 1, //列表下标
      opneCars: false, //车型弹窗
      carlist2: [
        {
          id: 1,
          name: "本田SVT"
        },
        {
          id: 2,
          name: "艾力绅"
        },
        {
          id: 3,
          name: "冠道"
        },
        {
          id: 4,
          name: "飞度"
        },
        {
          id: 5,
          name: "哥瑞"
        },
        {
          id: 6,
          name: "本田HR-V"
        },
        {
          id: 7,
          name: "锋范"
        },
        {
          id: 8,
          name: "雅阁"
        },
        {
          id: 9,
          name: "奥德赛"
        }
      ],
      carlist3: [
        {
          id: 1,
          name: "2018款 1.5L CVT舒适天窗版"
        },
        {
          id: 2,
          name: "2018款 1.5L CVT潮跑版"
        },
        {
          id: 3,
          name: "2018款 2.0L CVT潮跑版"
        }
      ],
      cities: [
        {
          id: "1",
          title: "A",
          list: [{ id: "1", name: "奥迪" }, { id: "2", name: "阿尔特" }]
        },
        {
          id: "2",
          title: "B",
          list: [
            { id: "1", name: "本田" },
            { id: "2", name: "比亚迪" },
            { id: "3", name: "标志" },
            { id: "4", name: "别克" },
            { id: "5", name: "宝马" },
            { id: "6", name: "奔驰" }
          ]
        },
        {
          id: "3",
          title: "C",
          list: [{ id: "1", name: "长城" }, { id: "2", name: "长安" }]
        },
        {
          id: "4",
          title: "D",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        },
        {
          id: "5",
          title: "E",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        },
        {
          id: "6",
          title: "F",
          list: [
            { id: "1", name: "东方" },
            { id: "2", name: "大众" },
            { id: "3", name: "道奇" }
          ]
        }
      ],
      letter: "",
      touchStatus: false,
      userInfo:[]
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i = 0; i < this.cities.length; i++) {
        const element = this.cities[i].title;
        letters.push(element);
      }
      return letters;
    }
  },
  //过滤器
  filters: {
    phoneNum(val) {
      if (val === undefined) {
        return "****";
      }
      var one = val.substring(0, 3);
      var tow = "****";
      return one + tow + val.substring(6, 11); //185****5017
    },
  },
  methods: {
    // lists[index].opt1 = e1
    // lists[index].opt2 =e2
    // clickToAdd () {
    //     let temp ={
    //         title: "aiche",
    //         list: [
    //             {}
    //         ]
    //     }
    //     this.lists.push(temp)
    // }
    descInput() {
      var txtVal = this.users.length;
      this.remnant = 10 - txtVal;
    },

    //点击弹出更改用户框
    clickUsers() {
      this.Upusers = !this.Upusers;
    },
    clickbtnqx() {
      this.clickUsers();
    },
    //用户名确定
    clickBtnok() {
      this.clickUsers();
    },

    // 挂载ref节点
    setRef() {
      const options = {
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        click: true,
        taps: true
      };

      setTimeout(() => {
        let wrappers = document.querySelector(".wrappers");
        this.scroll = new BScroll(wrappers, options);
      }, 300);
    },
    //打开车型
    toggleShow() {
      this.opneCars = !this.opneCars;
      this.setRef();
    },
    //第一级
    Controlcar(name) {
      this.carbrand = name;
      this.carsuit = "车系";
      this.carsubscript = 2;
    },
    //第二级
    Controlercar(name) {
      this.carsuit = name;
      this.carseries = "车型";
      this.carsubscript = 3;
    },
    //第三极
    Controlsancar(name) {
      this.carseries = name;
      this.opneCars = false;
    },
    //点击第一级标题
    carbrandBnt() {
      this.carsubscript = 1;
      this.carsuit = "";
      this.carseries = "";
      this.setRef();
    },
    // 点击第二级标题
    carsuitBtn() {
      this.carsubscript = 2;
      this.carseries = "";
      this.setRef();
    },
    //点击字母表
    hendletterClick(e) {
      this.letter = e;
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //122
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 400;
        const index = Math.floor((touchY - startY) / 75);
        if (index >= 0 && index < this.letters.length) {
          this.letter = this.letters[index];
        }
      } else {
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },

    //跳转输入手机号码
    tophone() {
      this.$router.push({ path: "/my/myphone" });
    },
    //跳转添加车辆
    tologCar() {
      this.$router.push({ path: "/my/myaddcar" });
    },
    //返回
    toreturn() {
      this.$router.go(-1); //返回上一层
    },
    //保存提交数据
    savebottom() {
      let users = this.users;//用户名
      let phone = this.phone;//用户手机
      let model = this.carbrand + this.carsuit + this.carseries  //爱车
      let temp = {
        users:users,
        phone:phone,
        model:model
      }
      this.userInfo.push(temp);
      console.log(this.userInfo,"提交的数据");
    }
  },
  watch: {
    letter() {
      if (this.letter) {
        const wrappers = this.$refs[this.letter][0];
        this.scroll.scrollToElement(wrappers);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.compile {
  font-family: SourceHanSans;
  width: 10rem;
  min-height: 667px;
  background: #f7f7f7;
  overflow: hidden;
  .compileBox {
    width: 9.15rem;
    margin: 2rem auto 0;
    .select-pr {
      width: 9.15rem;
      height: 0.75rem;
      line-height: 0.75rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.13rem;
      margin-top: 0.63rem;
      .prBox {
        margin: 0 auto;
        width: 8.35rem;
        display: flex;
        justify-content: space-between;
        .title {
          color: #333333;
          font-size: 0.32rem;
        }
        .names {
          width: 6rem;
          display: flex;
          height: 0.75rem;
          line-height: 0.75rem;
          justify-content: space-between;
          .names-character {
            width: 100%;
            text-align: right;
            margin-right: 0.6rem;
            color: #666666;
            span {
              display: inline-block;
              width: 33%;
              text-align: center;
            }
          }
          .names-img {
            width: 0.35rem;
            height: 0.35rem;
            margin-top: 0.05rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .select-car {
      width: 9.15rem;
      height: 0.75rem;
      line-height: 0.75rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.13rem;
      margin-top: 0.63rem;
      .prBox {
        margin: 0 auto;
        width: 8.35rem;
        display: flex;
        justify-content: space-between;
        .title {
          color: #333333;
          font-size: 0.32rem;
        }
        .names {
          width: 7.5rem;
          display: flex;
          height: 0.75rem;
          line-height: 0.75rem;
          justify-content: space-between;
          .names-character {
            width: 100%;
            text-align: right;
            margin-right: 0.6rem;
            span {
              display: inline-block;
              width: 33%;
              text-align: center;
            }
          }
          .names-img {
            width: 0.35rem;
            height: 0.35rem;
            margin-top: 0.05rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .select-add {
      float: right;
      text-align: center;
      width: 1.65rem;
      height: 0.61rem;
      line-height: 0.61rem;
      border: 1px solid $color;
      border-radius: 0.31rem;
      color: $color;
      font-size: 0.32rem;
      margin-bottom: 0.63rem;
    }
    .select-btn {
      width: 6rem;
      margin: 5rem auto 0;
      display: flex;
      justify-content: space-between;
      .btn-return {
        width: 2.43rem;
        height: 0.75rem;
        line-height: 0.75rem;
        border: 1px solid $color;
        border-radius: 0.13rem;
        text-align: center;
        color: $color;
        font-size: 0.32rem;
      }
      .btn-save {
        width: 2.43rem;
        height: 0.75rem;
        line-height: 0.75rem;
        border: 1px solid $color;
        border-radius: 0.13rem;
        text-align: center;
        color: #ffffff;
        font-size: 0.32rem;
        background: $color;
      }
    }
    .up-users {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
      .usersBox {
        overflow: hidden;
        margin: 3.45rem auto;
        width: 9.15rem;
        height: 4.45rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.13rem;
        .usersBoxHe {
          width: 9.15rem;
          // margin: 0 auto;
          .title {
            margin-top: 0.2rem;
            text-align: center;
            color: #333333;
            font-size: 0.4rem;
          }
          .inps {
            margin-top: 0.2rem;
            width: 9.15rem;
            height: 0.89rem;
            border-bottom: 1px solid #dcdcdc;
            background: rgba(255, 255, 255, 1);
            // border-radius:0.27rem;
            position: relative;
            margin-bottom: 0.2rem;
            input {
              width: 8rem;
              margin-left: 0.2rem;
              height: 0.8rem;
              line-height: 0.89rem;
              color: #333333;
              font-size: 0.4rem;
            }
            span {
              position: absolute;
              bottom: 0;
              right: 0.4rem;
              font-size: 0.27rem;
              color: #666666;
            }
          }
          .user-btn {
            text-align: right;
            margin-top: 1.45rem;
            .btn-qx {
              display: inline-block;
              width: 1.68rem;
              height: 0.59rem;
              line-height: 0.59rem;
              text-align: center;
              background: rgba(153, 153, 153, 1);
              border-radius: 0.13rem;
              color: #fffbfb;
              margin-right: 0.27rem;
            }
            .btn-ok {
              display: inline-block;
              width: 1.68rem;
              height: 0.59rem;
              line-height: 0.59rem;
              background: rgba(227, 32, 33, 1);
              border-radius: 0.13rem;
              text-align: center;
              color: #fffbfb;
              margin-right: 0.4rem;
            }
          }
        }
      }
    }

    .pull-car {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
      .prBox {
        position: absolute;
        width: 10rem;
        height: 12.39rem;
        background: #ffffff;
        bottom: 0;
        .letter {
          position: absolute;
          top: 1.6rem;
          right: 0;
          bottom: 0;
          width: 1rem;
          text-align: center;
          font-size: 0.27rem;
          z-index: 10;
          .letters-name {
            height: 0.5rem;
            line-height: 0.5rem;
          }
        }
        .title {
          width: 10rem;
          height: 1.39rem;
          border-bottom: 1px solid #eeeeee;
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
          height: 10.03rem;
          // margin-top: .25rem;
          color: #333333;
          font-size: 0.32rem;
          // overflow: auto; //超出高度滚动
          overflow: hidden;
          padding-bottom: 0.4rem;
          .prlist-title {
            background-image: linear-gradient(
              to right,
              #ffdae1 45%,
              #fff2f4,
              #ffffff
            );
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
          }
          .prlist-arcit {
            color: #f00505;
          }
        }
      }
    }
  }
}
</style>