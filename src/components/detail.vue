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
        <li><router-link to="/MyOrder" style="color:#999999;"><span>我的订单</span></router-link></li>
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>账户设置</span></router-link></li>
      </ul>
    </div>
    <div class="search">
      <Row>
        <Col span="6">
          <div class="search-title">
            <span class="search-meishi">美食</span>
            <span style="font-size:16px;"> 店铺商品</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
      <div class="store-style">
        <Row>
          <Col span="16">
            <ul class="text-store">
              <li style="font-size:30px;">{{name}}</li>
              <li class="border-li">
                <Rate show-text disabled allow-half v-model="valueHalf">
                  <span class="font-second">{{valueHalf}}分</span>
                  <span>人均{{price}}</span>
                </Rate>
              </li>
              <li>地址：{{address}}</li>
              <li>电话 ：{{phone}}</li>
              <li class="border-li">营业时间：{{openTime}}</li>
              <li>{{description}}</li>
            </ul>
          </Col>
          <Col span="8">
            <div class="right-content">
              <Carousel loop v-model="value">
                <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/tanyu.png" class="img-style" alt="">
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/tanyu.png" class="img-style" alt="">
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/tanyu.png" class="img-style" alt="">
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div class="demo-carousel">
                    <img src="../assets/tanyu.png" class="img-style" alt="">
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <div class="tuangou-style">
        <h1 class="h-color">商家团购及优惠</h1>
        <div class="youhui-item">
          <h2 class="h-color">2 款堂食优惠</h2>
          <div v-for="(item,index) in tuangou" :key="index" class="box">
            <div class="item-box" @click="jumpMoreDetail">
              <img src="../assets/tuangou.png" alt="" width="120px" height="100px">
              <div style="margin-left:20px;">
                <div>
                  <p style="font-size:16px;color:#000;">{{item.title}}</p>
                  <p style="text-align:left;">已售 {{item.number}}</p>
                </div>
                <div style="text-align:left;margin-top:22px">
                  <span style="font-size:25px;color:#FF6800;">￥ {{item.price}}</span>
                  <span>&nbsp;&nbsp;&nbsp;门店价: ￥ {{item.menPrice}}</span>
                </div>
              </div>
            </div>
            <div>
              <Button type="warning" size="large" shape="circle">立即抢购</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      search: '',
      value: 0,
      name: '探鱼（Cityon熙地港店）',
      valueHalf: 3.9,
      price: 79,
      address: '未央区未央路Cityon熙地港店5层',
      phone: '1882978242',
      openTime: '周一至周五10：00-22：00',
      description:  '提供wifi',
      tuangou:[
        {
          title:'2人套餐A，提供免费wifi',
          number: '234',
          price: '178',
          menPrice: '235'
        },
        {
          title:'2人套餐B，提供免费wifi',
          number: '23',
          price: '183',
          menPrice: '298'
        }
      ],
    }
  },
  methods: {
    jumpMoreDetail() {
      this.$router.push({ name: 'MoreDetail' });
    },
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
  .search{
    padding: 20px;
    border: 1px solid #fff;
    box-shadow: 10px 10px 5px #EBEBEB;
  }
  .search-title{
    text-align: left;
    padding-left: 80px;
  }
  .search-meishi{
    color:#31BBAC;
    font-size:30px;
    font-weight: bold;
  }
  .header-search{
    display: flex;
    justify-content: flex-start;
    margin-left:50px;
    margin-top: 10px;
  }
  .content{
    background-color: #F8F8F8;
    padding: 20px 80px;
    color: #66667F;
  }
  .store-style, .youhui-item{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #EBEBEB;
  }
  .text-store{
    text-align: left;
    font-size: 15px;
  }
  .text-store li{
    margin:10px 0;
  }
  .border-li{
    border-bottom: 1px solid #E5E5E5;
    padding-bottom:10px;
  }
  .img-style{
    width:100%;
    height:100%;
  }
  /* h1,h2的字体样式 */
  .h-color{
    color:#000;
    text-align: left;
  }
  .tuangou-style{
    margin-top:20px;
  }
  .box:last-child{
    border-bottom: none;
  }
  .box{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-right:20px;
    padding: 20px 0;
    border-bottom:1px solid #ddd;
  }
  .item-box{
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
  }
</style>
