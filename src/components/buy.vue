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
            <span style="font-size:16px;"> 下单</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
        <div v-if="showOrder">
            <table class="table">
                <thead>
                    <tr class="tr-style">
                        <th width="400px" style="text-align:left;padding-left:20px;">项目</th>
                        <th width="200px">单价</th>
                        <th width="200px">数量</th>
                        <th width="200px">总价</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align:left;padding-left:20px;">{{item}}</td>
                        <td>￥ {{price}}</td>
                        <td>
                            <span class="span-border span-moren" @click="reduce" id="decrease">-</span>
                            <span class="span-border span-num">{{buyNumber}}</span>
                            <span class="span-border" @click="add">+</span>
                        </td>
                        <td style="color:#FF6800;">￥ {{total}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="foot">
                <span>应付金额：</span>
                <span style="color:#FF6800;font-size:20px;">￥ {{total}}</span>
            </div>
            <div class="foot-button">
                <Button type="success" size="large" @click="submitOrder">提交订单</Button>
            </div>
        </div>
        <div v-else>
            <img src="../assets/code.png" alt="">
            <p>请用手机扫描二维码付款</p>
            <Button type="success" size="large" @click="jumpMyOrder">查看订单</Button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  data () {
    return {
        showOrder: true,
        buyNumber: 1,
        item: '探鱼：2人套餐A，提供免费wifi',
        price: '178',
        total: ''
    }
  },
  mounted() {
    this.total = this.price * this.buyNumber;
  },
  methods: {
    jumpMyOrder() {
      this.$router.push({ name: 'MyOrder' });
    },
    add() {
        this.buyNumber = this.buyNumber + 1
        this.total = this.price * this.buyNumber;
        let span = document.getElementById('decrease')
        span.style.color="#666"
        span.style.border="1px solid #666"
    },
    reduce() {
        if (this.buyNumber > 1) {
            this.buyNumber = this.buyNumber - 1
            this.total = this.price * this.buyNumber;
            if (this.buyNumber === 1) {
                let span = document.getElementById('decrease');
                span.style.color="#ddd"
                span.style.border="1px solid #ddd"
            }
        } else{
            let span = document.getElementById('decrease');
            span.style.color="#ddd"
            span.style.border="1px solid #ddd"
        }
    },
    submitOrder() {
        this.showOrder = false
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
    background-color: #fff;
    padding: 20px 150px;
    color: #666;
  }
  .table{
    border-collapse: collapse;
    font-size:14px;
  }
  .table tr{
    height: 40px;
    line-height: 40px;
  }
  .table thead th{ 
    background-color: #F7F7F7;
  }
  /* 加减的框 */
  .span-border{
    display: inline-block;
    padding:3px;
    border:1px solid #666;
    text-align: center;
    vertical-align: middle;
    width:25px;
    height:25px;
    line-height: 16px;
    font-size:16px;
    cursor: pointer;
  }
  .span-num{
    cursor: auto;
  }
  .span-moren{
    color:#ddd;
    border:1px solid #ddd;
  }
  .foot, .foot-button{
    text-align: right;
    margin:20px 60px 0 0;
    padding:20px 0 0 0;
    border-top:1px dashed #ddd;
  }
</style>
