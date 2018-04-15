<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <img src="../assets/local.png" alt="" style="margin-right:5px;height:30px;margin-top:3px;">
        <p style="margin-right:20px">西安</p>
        <router-link to="/PersonalCenter" style="margin-right:10px;color:#31BBAC;">18829788145</router-link>
        <router-link to="/" style="color:#999999;">退出登录></router-link>
      </div>
      <ul class="header-right">
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>我的订单</span></router-link></li>
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>我的评价</span></router-link></li>
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>我的收藏</span></router-link></li>
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>账户设置</span></router-link></li>
      </ul>
    </div>
    <div class="content">
      <div class="content-header">
        <Row>
        <Col span="5">
          <ul class="left-header">
            <li>全部分类</li>
          </ul>
        </Col>
        <Col span="19">
          <div class="header-search">
            <Input v-model="search" icon="ios-search-strong" placeholder="搜索商家或食物名称" style="width: 400px;"></Input>
            <div style="margin-left:10px;">
              <Button type="info">搜 索</Button>
            </div>
          </div>
        </Col>
      </Row>
      </div>
      <ul class="left-content">
        <li v-for="(item,index) in chooseItem" :key="index" @click="changeChoose(index)" :class="item.isActive?'active-choose':''">
          {{item.name}}
        </li>
      </ul>
      <div class="header-content">
        <Carousel autoplay v-model="value" loop :autoplay-speed="3000">
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/timg.jpg" style="width:100%;height:100%" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/timg (1).jpg" style="width:100%;height:100%" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/timg (2).jpg" style="width:100%;height:100%" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/timg (3).jpg" style="width:100%;height:100%" alt="">
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div class="select-content" v-if="showChoose">
      <ul class="select-header">
        <li v-for="(item,index) in selectItem" :key="index" @click="changeActive(index)" :class="item.isActive?'active-item':''">
          {{item.name}}
        </li>
      </ul>
      <div class="show-container">
        <Row :gutter="24">
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
        </Row>
        <div class="footer">
          <Page :total="100" show-total></Page>
        </div>
      </div>
    </div>
    <div class="cai-content">
      <div class="cai-header">
        <span style="font-size:23px;padding:20px">猜你喜欢</span>
        <span style="font-size:15px">为你挑选最适合的</span>
      </div>
      <div class="show-container">
        <Row :gutter="24">
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/tanyu.png" alt="">
              </div>
              <div style="text-align:left">
                <p class="font-first">探鱼（熙地港店）</p>
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">2056个评价</span>
                </Rate>
                <p class="font-second">未央路</p>
                <span class="font-price">￥20</span>
              </div>
            </div>
          </Col>
        </Row>
        <div class="footer">
          <Page :total="100" show-total></Page>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      search: '',
      value: 0,
      valueHalf: 4.8,
      showChoose: false,
      chooseItem:[
        {
          name: '川菜',
          isActive: false
        },
        {
          name: '火锅',
          isActive: false
        },
        {
          name: '自助餐',
          isActive: false
        },
        {
          name: '小吃快餐',
          isActive: false
        },
        {
          name: '日韩料理',
          isActive: false
        },
        {
          name: '烧烤烤肉',
          isActive: false
        },
      ],
      selectItem:[
        {
          name: '默认',
          isActive: true
        },
        {
          name: '销量最高',
          isActive: false
        },
        {
          name: '价格最低',
          isActive: false
        },
        {
          name: '评价最高',
          isActive: false
        },
      ],
    }
  },
  mounted() {
  },
  methods: {
    jumpPeosonalCenter() {
      this.$router.push({ name: 'PersonalCenter' });
    },
    jumpDetail() {
      this.$router.push({ name: 'Detail' });
    },
    changeChoose(index) {
      for (let i in this.chooseItem) {
        let item = Number(i)
        if (item === index) {
          this.chooseItem[item].isActive = true
          this.showChoose = true
        }else {
          this.chooseItem[item].isActive = false
        }
      }
    },
    changeActive(index) {
      for (let i in this.selectItem) {
        let item = Number(i)
        if (item === index) {
          this.selectItem[item].isActive = true
        }else {
          this.selectItem[item].isActive = false
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 外层大背景图的样式 */
  .container{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: #F8F8F8;
  }
  .header{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: space-between;
  }
  .header-left{
    margin-left:40px;
    display: flex;
    justify-content: space-between;
  }
  .header-right{
    margin-right:40px;
    display: flex;
    justify-content: center;
  }
  .header-right li{
    list-style: none;
    margin: 0 10px;
  }
  .header-right li:hover{
    background-color: #F8F8F8;
  }
  .header-right li span:hover{
    color:#31BBAC;
  }
  .content-header{
    padding: 10px 80px;
    background-color: #fff;
  }
  .header-search{
    display: flex;
    justify-content: flex-start;
    margin-left:50px;
    margin-top: 10px;
  }
  .left-header{
    width: 250px;
  }
  .left-content, .left-header{
    background-color: #13D1BE;
    color: #fff;
  }
  .left-content{
    padding:12px 0 10px 0;
    width: 250px;
    position: relative;
    top: -26px;
    left: 80px;
  }
  .left-content li, .left-header li{
    list-style: none;
    font-size: 18px;
    padding: 5px;
    border-bottom: none;
  }
  .left-content li:hover{
    cursor: pointer;
    background-color: #fff;
    color: #13D1BE;
  }
  .active-choose{
    background-color: #fff;
    color: #13D1BE;
  }
  .header-content{
    position: absolute;
    top: 93px;
    width: 930px;
    left: 340px;
  }
  .demo-carousel{
    height: 215px;
    width: 930px;
    margin: 10px;
  }
  .select-content{
    background-color: #fff;
    margin: 10px 80px 30px;
    border: 1px solid #ddd;
  }
  .select-content .show-container{
    border:none;
  }
  .select-header{
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    padding: 12px 24px;
    border-bottom: 1px solid #ddd;
  }
  .select-header li{
    list-style: none;
    margin-right: 80px;
  }
  .select-header li:hover{
    color:#13D1BE;
    cursor: pointer;
  }
  .active-item{
    color:#13D1BE;
  }
  .cai-content{
    background-color: #fff;
    margin: 10px 80px;
  }
  .cai-header{
    background-color: #13D1BE;
    height: 40px;
    line-height: 40px;
    color:#fff;
    text-align: left;
    border-top: 1px solid #13D1BE;
    border-radius: 5px 5px 0 0;
  }
  .show-container{
    border:1px solid #ddd;
    padding: 20px 20px 0;
  }
  .img-size{
    width: 100%;
    height: 150px;
    border-radius: 5px;
  }
  .font-first{
    font-size: 18px;
  }
  .font-second{
    color:#A4A19F;
    font-size: 6px;
  }
  .font-price{
    font-size:25px;
    color: #FF6C0B;
  }
  .item {
    margin-bottom: 20px;
    cursor: pointer;
  }
  .footer{
    text-align: right;
    margin: 0 20px 20px 20px;
  }
</style>
