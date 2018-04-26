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
            <span style="font-size:16px;"> 订单详情</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
        <div class="title-content">
            <h1>订单详情</h1>
            <router-link to="/MyOrder" style="margin-right:10px;color:#31BBAC;">返回我的订单</router-link>
        </div>
        <ul class="order-state">
            <li>当前订单状态：<b style="color:#DD0000">{{state}}</b></li>
            <li>{{message}}</li>
            <div style="margin-top:10px;">
                <Button type="primary">付款</Button>
                <Button type="ghost">删除</Button>
            </div>
        </ul>
        <div class="order-message">
            <p>订单信息</p>
            <div style="padding:10px;">
                <Row :gutter="16">
                    <Col span="6">
                        <div>
                            <span>订单编号：</span>
                            <span>{{orderNum}}</span>
                        </div>
                    </Col>
                    <Col span="6">
                        <div>
                            <span>下单时间：</span>
                            <span>{{orderTime}}</span>
                        </div>
                    </Col>
                    <div v-show="showFuKuan">
                    <Col span="6">
                        <div>
                            <span>付款方式：</span>
                            <span>{{orderTime}}</span>
                        </div>
                    </Col>
                    <Col span="6">
                        <div>
                            <span>付款时间：</span>
                            <span>{{orderTime}}</span>
                        </div>
                    </Col>
                    </div>
                </Row>
            </div>
        </div>
        <div class="tuangou-message">
            <p>团购信息</p>
            <div class="tuangou-list">
                <Row :gutter="16">
                    <Col span="6">
                        <div>团购项目</div>
                    </Col>
                    <Col span="6">
                        <div>单价</div>
                    </Col>
                    <Col span="6">
                        <div>数量</div>
                    </Col>
                    <Col span="6">
                        <div>金额</div>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="6">
                        <div>
                            <router-link to="/MoreDetail" style="color:#31BBAC;">{{title}}</router-link>
                        </div>
                    </Col>
                    <Col span="6">
                        <div>￥ {{price}}</div>
                    </Col>
                    <Col span="6">
                        <div>{{number}}</div>
                    </Col>
                    <Col span="6">
                        <div>
                            <span style="color:#FF6800;">￥ {{payMoney}}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
        showFuKuan: true,
        state: '待付款',
        message: '请及时付款，不然就被抢光啦！',
        orderNum: '2238483247',
        orderTime: '2017-04-06 17:22',
        title: '探鱼2人餐',
        number: '1',
        price: '178',
        payMoney: '178'
    }
  },
  mounted() {
      if (this.state === '待付款') {
        this.showFuKuan = false
      }
  },
  methods: {
    jumpMyOrder() {
      this.$router.push({ name: 'MyOrder' });
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
    background-color: #fff;
    padding: 20px;
    color: #666;
    border: 1px solid #ddd;
    margin: 20px 180px;
    text-align: left;
  }
  .title-content{
    height:50px;
    line-height: 50px;
    padding-bottom: 10px;
    margin-bottom:10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
  }
  .order-state{
    border:1px solid #F5D8A7;
    padding: 10px 20px;
    background-color: #FFF6DB;
  }
  .order-message, .tuangou-message{
    border:1px solid #ddd;
    margin:10px 0; 
  }
  .order-message p, .tuangou-message p{
    background-color: #eee;
    padding:10px;
    font-weight: bold;
  }
  .tuangou-list{
    padding:10px;
  }
  .tuangou-list div{
    height:20px;
    line-height: 20px;
  }
</style>
