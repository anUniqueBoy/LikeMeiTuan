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
            <span style="font-size:16px;"> 我的订单</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
      <div class="store-style">
        <Tabs :animated="false">
          <TabPane label="全部订单">
            <ul v-for="(item, index) in orderList" :key="index" @click="jumpOrderDetail" class="order-item">
              <li class="img-item">
                <img src="../assets/tuangou.png" alt="" style="width:100px;height:100px;vertical-align:middle">
                <div class="title-item">
                  <p style="font-size:16px;">{{item.title}}</p>
                  <p>数量：{{item.number}}</p>
                </div>
              </li>
              <li>总价：￥{{item.price}}</li>
              <li>{{item.state}}</li>
            </ul>
          </TabPane>
          <TabPane label="待付款">标签二的内容</TabPane>
          <TabPane label="待使用">标签三的内容</TabPane>
          <TabPane label="待评价">标签三的内容</TabPane>
          <TabPane label="已退款/已取消">标签三的内容</TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
      orderList: [
        {
          title: '探鱼2人餐',
          number: '1',
          price: '178',
          state: '待付款'
        },
        {
          title: '探鱼2人餐',
          number: '1',
          price: '178',
          state: '待付款'
        },
        {
          title: '探鱼2人餐',
          number: '1',
          price: '178',
          state: '待付款'
        }
      ],
    }
  },
  methods: {
    jumpOrderDetail() {
      this.$router.push({ name: 'OrderDetail' });
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
    padding: 20px 150px;
    color: #666;
  }
  .store-style{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #EBEBEB;
  }
  .order-item{
    padding-right:200px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .img-item{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .title-item{
    margin-left:20px;
    text-align: left;
  }
  .title-item p{
    margin:10px;
  }
</style>
