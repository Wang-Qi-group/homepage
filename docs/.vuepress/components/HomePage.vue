
<template>
<div class="layout">
  <Layout>

    <Header class="header">
      <div :style="{height:(fullHeight*0.85)+'px'}">
        <!-- <abstract-hue></abstract-hue> -->
        <!-- <abstract-saturation></abstract-saturation> -->
        <!-- <ring-blue></ring-blue> -->
        <!-- <ring-green></ring-green> -->
        <div style="height: 70%; position: relative">
          <ring></ring>
        </div>
        <div style="height: 30%">
          <div style="color: #fff; text-align: center; font-size: 48pt">Crypto Lab</div>
          <div style="color: #666; text-align: center; font-size: 20pt">SUSTech</div>

        </div>
      </div>
      <Affix @on-change="changeStyle">
        <Menu mode="horizontal" :theme="isTop? 'dark':'primary'" active-name="1">
          <!-- <div class="layout-logo">Crypto Lab</div> -->
          <div class="layout-nav">
            <MenuItem name="1"> News
            </MenuItem>
            <MenuItem name="2"> Research
            </MenuItem>
            <MenuItem name="3"> People
            </MenuItem>
            <MenuItem name="4"> Publication
            </MenuItem>
            <MenuItem name="5"> Contact
            </MenuItem>
          </div>
        </Menu>
      </Affix>
      <div :style="{height:(fullHeight*0.15 - 60)+'px'}"></div>
    </Header>
    <Content>
      <div id="news">
        <Row>
          <Col span="24" style="padding: 50px; text-align: center;">
          <h2>News</h2>
          </Col>
          <Col span="12" offset="6">
          <div>
            <Card>
              <p slot="title">Happy Teachers Day!</p>
              
              <p>

                柳枫：祝老师教师节快乐！小公主健康成长！</p>

              <p>刘逸：这几年，我在老师您身上学到了太多东西，不仅是学习和生活，还有人生态度，您是我人生中最重要的老师，真的很幸运能遇到您。老师教师节快乐，我们在接下来的时间里一起加油！</p>

              <p>温伟煌：非常感谢老师过去四年的指导，遇上老师是我在南科大发生的最幸运的事之一，希望老师今后的每一年也都精彩幸福！</p>

              <p>王佳慧：祝老师教师节快乐！很开心在新的阶段来到老师这里攻读研究生，同时感谢老师这段时间对我的照顾。 期待在接下来的日子里，能够在老师的帮助下，逐渐朝着自己理想的方向前进，最后祝老师工作顺利，家庭幸福美满。</p>

              <p>王戈扬：王老师教师节快乐！我不是很擅长写作或表达感情，总之感谢老师三年以来对我的指导，建议和帮助，这些对我影响巨大。如果我将来也有机会指导学生的话，我一定以您为标准！</p>

              <p>毛玉莲：非常幸运能遇到王老师这样好的老师，非常感谢王老师在大学三年里的谆谆教诲，从学习态度到人生态度的引导。祝王老师工作顺利，家庭幸福美满！</p>

              <p>倪子恒：祝王老师教师节快乐！非常感谢老师在我本科四年间对我的帮助，祝老师科研硕果累累！
              </p>
            </Card>
          </div>
          </Col>
        </Row>
      </div>

      <div id="research">
        <Row>
          <Col span="24" style="padding: 50px; text-align: center;">
          <h2>Research</h2>
          </Col>
          <Col span="4" offset="6" style="text-align: center">
          <i-circle :size="150" :percent="100">
            <span class="demo-Circle-inner" style="font-size:20px">Code Design</span>
          </i-circle>
          </Col>
          <Col span="4" style="text-align: center">
          <i-circle :size="200" :percent="100" stroke-color="#5cb85c">
            <span class="demo-Circle-inner" style="font-size:20px">Cryptography</span>
          </i-circle>
          </Col>
          <Col span="4" style="text-align: center">
          <i-circle :size="150" :percent="100" stroke-color="#ff5500">
            <span class="demo-Circle-inner">
            <span class="demo-Circle-inner" style="font-size:20px">Machine Learning</span>
            </span>
          </i-circle>
          </Col>
        </Row>
      </div>
      <div style="height: 1200px; ">

      </div>

    </Content>

    <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
  </Layout>
</div>
</template>

<script>
export default {
  data() {
    return {
      isTop: true,
      value2: 0,
      fullHeight: document.documentElement.clientHeight, // 屏幕高度

    };
  },
  watch: {
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function() {
          that.timer = false
        }, 400)
      }
    }

  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
  },
  computed: {},
  methods: {
    changeStyle(status) {
      this.isTop = !this.isTop
    }
  }
};
</script>

<style scoped>
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
  width: 500px;
  margin: 0 auto;
  padding: 0 25px;
  text-align: center
  /* margin-right: 20px; */
}

.layout-footer-center {
  text-align: center;
}
</style>