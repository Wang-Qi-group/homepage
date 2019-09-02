<template>
<div class="layout">
  <div :height="fullHeight + 'px'" class="header">
    <div :style="{height:(fullHeight*0.6)+'px'}">
      <div style="height: 100%; position: relative">
        <ring v-if="isMounted == true"></ring>
      </div>
    </div>

    <div :style="{height:(fullHeight*0.26)+'px'}">
      <div style="color: #fff; text-align: center; font-size: 4.3rem">Crypto Lab</div>
      <div style="color: #666; text-align: center; font-size: 2rem">SUSTech</div>
    </div>

    <el-row>
      <el-col class="hidden-sm-and-down">
        <div style="background-color: #212121; " id="menu" :class="headerFixed?'isFixed':''">
          <el-menu style="border-bottom: none;" mode="horizontal" class="layout-nav" background-color="#212121" text-color="#fff" active-text-color="#ef6c00">
            <el-menu-item index="1" @click="toSection('about')"> About
            </el-menu-item>
            <el-menu-item index="2" @click="toSection('news')"> News
            </el-menu-item>
            <el-menu-item index="3" @click="toSection('research')"> Research
            </el-menu-item>
            <el-menu-item index="4" @click="toSection('people')"> People
            </el-menu-item>
            <el-menu-item index="5" @click="toSection('contact')"> Contact
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <div class="hidden-sm-and-down" v-if="headerFixed" style="height:60px"></div>

    <div class="hidden-md-and-up" style="height:60px"></div>

    <div :style="{height:(fullHeight*0.15 - 60)+'px'}"></div>

  </div>

  <div id="about" class="home-section">
    <el-row>
      <el-col :span="16" :offset="4">
        <h2 class="section-title">About</h2>
      </el-col>
    </el-row>
    <el-row style="padding: 15px">
      <el-col :lg="4" :xl="4" :sm="2" :xs="2">
        <div>&nbsp</div>
      </el-col>
      <el-col :lg="16" :xl="16" :sm="20" :xs="20">
        Here is the introduction. 
      </el-col>
      <el-col :lg="4" :xl="4" :sm="2" :xs="2">
        <div>&nbsp</div>
      </el-col>
    </el-row>
  </div>

  <div id="news" class="home-section">
    <el-row>
      <el-col :span="16" :offset="4">
        <h2 class="section-title">News</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="4" :sm="2" :xs="0">
        <div>&nbsp</div>
      </el-col>
      <el-col :lg="16" :sm="20" :xs="24">
        <div class="block">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :lg="4" :sm="2" :xs="0">
        <div>&nbsp</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="4" :sm="2" :xs="1">
        <div>&nbsp</div>
      </el-col>
      <el-col :lg="16" :sm="20" :xs="22">
        <ul style="font-size: 18px; line-height: 2;" type="circle">
          <li>
            <el-link href="#" target="_blank">

              2019-08-08 南科大计算机系学子在国际软件测试大赛中连续斩获多个奖项
            </el-link>
          </li>
          <li>
            <el-link href="#" target="_blank">2019-07-17 南方科技大学计算机系2015级毕业晚宴圆满结束
            </el-link>
          </li>
          <li>
            <el-link href="#" target="_blank">2018-09-10 Happy Teachers Day! -- Blessings from Students</el-link>
          </li>
        </ul>
      </el-col>
      <el-col :lg="4" :sm="2" :xs="1">
        <div>&nbsp</div>
      </el-col>

    </el-row>
  </div>



  <div id="research" class="home-section">
    <el-row>
      <el-col :span="16" :offset="4">
        <h2 class="section-title">Research</h2>
      </el-col>
    </el-row>

    <el-row>
      <el-col :lg="4" :sm="2" :xs="1">
        <div>&nbsp</div>
      </el-col>
      <el-col :lg="16" :sm="20" :xs="22">
        <ul style="font-size: 18px; line-height: 2;">
          <li> [J18] (with H. Yan, Z. Zhou, J. Weng, J. Wen and T. Helleseth) &quot;Differential spectrum of Kasami power permutations over odd characteristic finite fields,&quot;
            <i>IEEE Transactions on Information Theory, </i> to appear, DOI10.1109/TIT.2019.2910070.

          </li>

          <li> [J17] (with J. Michel) &quot;Almost designs and their links with balanced incomplete block designs,&quot; <i>Designs Codes and Cryptography, </i> to appear, https://doi.org/10.1007/s10623-018-00596-4.

          </li>

          <li> [J16] (with J. Michel) &quot;Almost difference sets in nonabelian groups,&quot;
            <iDesigns Codes and Cryptography</i><i>Designs Codes and Cryptography</i>, vo
              <span lang="en-us">l. 87, pp. 1243-1251, 2019</span>.

          </li>

          <li> [J15] (with J. Michel) &quot;Some new balanced and almost balanced quaternary sequences with low autocorrelation,&quot; <i>Cryptography and Communications</i>, vol. 11, pp. 191-206, 2019.

          </li>

        </ul>
      </el-col>
      <el-col :lg="4" :sm="2" :xs="1">
        <div>&nbsp</div>
      </el-col>

    </el-row>
  </div>

  <div id="people" class="home-section">
    <el-row>
      <el-col :span="16" :offset="4">
        <h2 class="section-title">People</h2>
      </el-col>

    </el-row>

    <el-row :gutter="0">
      <el-col :lg="4" :sm="2" :xs="0">
        <div>&nbsp</div>
      </el-col>
      <el-col :lg="4" :sm="24" :xs="24">
        <el-card :body-style="{ padding: '0px' }" style="margin: 10px" shadow="hover">
          <div style="text-align: center; margin: 10px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>

          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="4" :sm="24" :xs="24">
        <el-card :body-style="{ padding: '0px' }" style="margin: 10px" shadow="hover">
          <div style="text-align: center; margin: 10px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>

          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="4" :sm="24" :xs="24">
        <el-card :body-style="{ padding: '0px' }" style="margin: 10px" shadow="hover">
          <div style="text-align: center; margin: 10px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>

          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="4" :sm="24" :xs="24">
        <el-card :body-style="{ padding: '0px' }" style="margin: 10px" shadow="hover">
          <div style="text-align: center; margin: 10px">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          </div>

          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

  <div id="contact" class="home-section">
    <el-row>
      <el-col :span="16" :offset="4">
        <h2 class="section-title">Contact</h2>
      </el-col>
    </el-row>
    <el-row :gutter="20">

      <el-col :span="8" :offset="4">
        <div style="text-algin: center">

        </div>
      </el-col>
      <el-col :span="4">
        <div style="text-algin: center">

        </div>
      </el-col>

    </el-row>
  </div>



</div>
</template>

<script>
export default {
  data() {
    return {
      fullHeight: 0, // 屏幕高度
      isMounted: false,
      headerFixed: false
    };
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    this.fullHeight = document.documentElement.clientHeight;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        this.fullHeight = window.fullHeight;
      })();
    };
    this.isMounted = true;
    // 监听dom渲染完成
    this.$nextTick(function() {
      // 这里fixedHeaderRoot是吸顶元素的ID
      let header = document.getElementById("menu");
      // 这里要得到top的距离和元素自身的高度
      this.offsetTop = header.offsetTop;
      this.offsetHeight = header.offsetHeight;
    });
    // handleScroll为页面滚动的监听回调
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {},
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {},
  methods: {
    toSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    },
    handleScroll() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断页面滚动的距离是否大于吸顶元素的位置

      let header = document.getElementById("menu");
      // 这里要得到top的距离和元素自身的高度
      this.offsetTop = header.offsetTop;

      // this.headerFixed = scrollTop > (this.offsetTop);
      // console.log(scrollTop)
      // console.log('this' + this.fullHeight * 0.85)
      this.headerFixed = scrollTop > this.fullHeight * 0.85 + 60;
    },
    handlerClick(link) {
      if (/^http/.test(link)) {
        window.open(link);
      } else {
        this.$router.push(link);
      }
    }
  }
};
</script>

<style scoped>
.section-title {
  font-size: 48px;
  text-align: center;
}

.layout {
  /* border: 1px solid #d7dde4; */
  position: relative;
  /* border-radius: 4px; */
  overflow: hidden;
}

.header {
  background: #212121;
}

.layout-nav {
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  margin: 0 auto;
  text-align: center;
}

.layout-footer-center {
  text-align: center;
}

.isFixed {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: auto;
  z-index: 4;
}

.home-section:nth-of-type(2n + 1) {
  background-color: rgb(247, 247, 247);
}

.home-section {
  background-color: rgb(255, 255, 255);
  padding: 40px 0 110px 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99bfb2;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #b5d3c8;
}

ul > li {
  margin-bottom: 20px;
}
</style>