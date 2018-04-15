<template>
  <div class="container">
    <div class="header">
      <div class="header-search">
        <Button type="info"  @click="jumpHome">返回首页</Button>
      </div>
      <div class="header-people" @click="jumpPeosonalCenter">
        <div style="width:30px;height:30px;">
          <img src="../assets/personCenter.png" alt="" style="width:100%;height:100%;vertical-align:middle">
        </div>
        <p style="margin-left:5px;color:#fff">个人中心</p>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <div class="right-content">
          <img src="../assets/people.png" alt="" style="width:70px;height:70px;">
          <p class="text-style">修改个人信息</p>
        </div>
        <div class="left-content">
          <p class="text-style">退出登录</p>
        </div>
      </div>
      <div class="content-body">
        <Tabs value="name1">
          <TabPane label="所有订单" name="name1">
            <ul class="order-item">
              <li>
                <img src="../assets/timg.jpg" alt="" style="width:90px;height:90px;vertical-align:middle">
              </li>
              <li>
                <p>铁板牛肉饭</p>
              </li>
              <li>
                <p>￥ 20</p>
              </li>
              <li>
                <p>2018-04-11 09:20:34</p>
              </li>
              <li>
                <p><Button type="warning">删除订单</Button></p>
              </li>
            </ul>
            <ul class="order-item">
              <li>
                <img src="../assets/timg.jpg" alt="" style="width:90px;height:90px;vertical-align:middle">
              </li>
              <li>
                <p>铁板牛肉饭</p>
              </li>
              <li>
                <p>￥ 20</p>
              </li>
              <li>
                <p>2018-04-11 09:20:34</p>
              </li>
              <li>
                <p><Button type="warning">删除订单</Button></p>
              </li>
            </ul>
            <ul class="order-item">
              <li>
                <img src="../assets/timg.jpg" alt="" style="width:90px;height:90px;vertical-align:middle">
              </li>
              <li>
                <p>铁板牛肉饭</p>
              </li>
              <li>
                <p>￥ 20</p>
              </li>
              <li>
                <p>2018-04-11 09:20:34</p>
              </li>
              <li>
                <p><Button type="warning">删除订单</Button></p>
              </li>
            </ul>
            <ul class="order-item">
              <li>
                <img src="../assets/timg.jpg" alt="" style="width:90px;height:90px;vertical-align:middle">
              </li>
              <li>
                <p>铁板牛肉饭</p>
              </li>
              <li>
                <p>￥ 20</p>
              </li>
              <li>
                <p>2018-04-11 09:20:34</p>
              </li>
              <li>
                <p><Button type="warning">删除订单</Button></p>
              </li>
            </ul>
          </TabPane>
          <TabPane label="待收货" name="name2">
            <ul class="order-item">
              <li>
                <img src="../assets/timg.jpg" alt="" style="width:90px;height:90px;vertical-align:middle">
              </li>
              <li>
                <p>铁板牛肉饭</p>
              </li>
              <li>
                <p>￥ 20</p>
              </li>
              <li>
                <p>2018-04-11 09:20:34</p>
              </li>
              <li>
                <p><Button type="primary">确认收货</Button></p>
              </li>
            </ul>
          </TabPane>
          <TabPane label="已收货" name="name3">标签三的内容</TabPane>
          <TabPane label="待评价" name="name4">标签三的内容</TabPane>
        </Tabs>
      </div>
      <div class="footer">
        <div class="footer-font">
          <p>根据浏览猜我喜欢</p>
        </div>
        <Row :gutter="24">
          <Col span="6">
            <div class="item" @click="jumpDetail">
              <div>
                <img class="img-size" src="../assets/timg.jpg" alt="">
              </div>
              <div style="text-align:left">
                <span class="font-span">￥20</span>
                <p class="font-p">铁板培根饭</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <div>
                <img class="img-size" src="../assets/timg.jpg" alt="">
              </div>
              <div style="text-align:left">
                <span class="font-span">￥20</span>
                <p class="font-p">铁板培根饭</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <div>
                <img class="img-size" src="../assets/timg.jpg" alt="">
              </div>
              <div style="text-align:left">
                <span class="font-span">￥20</span>
                <p class="font-p">铁板培根饭</p>
              </div>
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <div>
                <img class="img-size" src="../assets/timg.jpg" alt="">
              </div>
              <div style="text-align:left">
                <span class="font-span">￥20</span>
                <p class="font-p">铁板培根饭</p>
              </div>
            </div>
          </Col>
      </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
    }
  },
  methods: {
    jumpPeosonalCenter() {
      this.$router.push({ name: 'PersonalCenter' });
    },
    jumpHome() {
      this.$router.push({ name: 'Home' });
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
    height: 60px;
    line-height: 60px;
    background-color: #545051;
    /* background: url(../assets/bgheader3.png) no-repeat;
    background-size: 100% 100%; */
    display: flex;
    justify-content: space-between;
  }
  .header-search{
    margin-left:40px;
  }
  .header-people{
    margin-right:40px;
    display: flex;
    justify-content: center;
  }
  .header-people:hover{
    cursor: pointer;
  }
  .content{
  }
  .content-header{
    border: 1px solid #ddd;
    background-color: #F5F8FA;
    height: 90px;
    display: flex;
    align-items: center;
    padding-left:200px;
  }
  .right-content{
    display: flex;
    align-items: center;
  }
  .left-content{
    margin-left: 750px;
  }
  .text-style{
    margin-left: 15px;
    font-size: 18px;
    color: #4395FF;
  }
  .content-body{
    margin: 20px 50px;
  }
  .order-item{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  .order-item li{
    list-style: none;
    font-size: 18px;
    margin: 10px 0;
  }
  .footer{
    border-top:1px solid #ddd;
    padding: 10px 20px 0;
  }
  .img-size{
    width: 100%;
    height: 150px;
  }
  .font-p{
    font-size: 20px;
    padding:0 10px;
    display: inline;
  }
  .font-span{
    padding:0 10px;
    font-size:22px;
    color: #e4393c;
  }
  .footer-font{
    text-align: left;
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
