<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <img src="../assets/local.png" alt="" style="margin-right:5px;height:30px;margin-top:3px;">
        <p style="margin-right:20px">{{text}}</p>
        <router-link to="/PersonalCenter" style="margin-right:10px;color:#31BBAC;">{{phone}}</router-link>
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
            <span style="font-size:16px;"> 商品详情</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
        <div class="store-style">
            <Row :gutter="24">
                <Col span="8">
                    <div>
                        <img src="../assets/tuangou.png"  width="100%" height="100%" alt="">
                    </div>
                </Col>
                <Col span="16">
                    <div style="text-align:left">
                        <div style="border-bottom:1px solid #ddd;margin:10px 0;padding:10px 0;">
                            <h1>{{title}}</h1>
                            <p style="font-size:18px;">{{titleMore}}</p>
                        </div>
                        <ul class="store-ul">
                            <li>
                                <span class="span-style">团购价：</span>
                                <span style="font-size:25px;color:#FF6800;">￥ {{price}}</span>
                                <span>&nbsp;&nbsp;&nbsp;门店价 ￥ {{menPrice}}</span>
                            </li>
                            <li>
                                <span class="span-style">已售：</span>
                                <span style="font-size:16px;">{{number}}</span>
                            </li>
                            <li>
                                <span class="span-style">有效期：</span>
                                <span style="font-size:16px;">{{date}}</span>
                            </li>
                            <li>
                                <span class="span-style">数量：</span>
                                <span class="span-border span-moren" @click="reduce" id="decrease">-</span>
                                <span class="span-border span-num">{{buyNumber}}</span>
                                <span class="span-border" @click="add">+</span>
                            </li>
                        </ul>
                        <div style="text-align:center;margin-top:10px;">
                            <Button type="warning" size="large" shape="circle" @click="jumpBuy">立即抢购</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div class="store-detail">
            <h1 style="text-align:left;color:#000">套餐详情</h1>
            <div class="more-detail">
                <Table :columns="columns" :data="data"></Table>
                <div class="price-style">
                    <span>价值 ：</span>
                    <span>{{menPrice}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>团购价 ：</span>
                    <span>{{price}}</span>
                </div>
            </div>
        </div>
        <div class="store-detail">
            <h1 style="text-align:left;color:#000">购买须知</h1>
            <ul class="more-detail" style="text-align:left;">
                <li>
                    <span class="span-style style-size">有效期：</span>
                    <span style="font-size:14px;">{{validity}}</span>
                </li>
                <li>
                    <span class="span-style style-size">使用时间：</span>
                    <span style="font-size:14px;">{{useTime}}</span>
                </li>
                <li>
                    <span class="span-style style-size">使用规则：</span>
                    <span style="font-size:14px;">{{rule1}}</span>
                </li>
                <li>
                    <span class="span-style style-size"></span>
                    <span style="font-size:14px;">{{rule2}}</span>
                </li>
                <li>
                    <span class="span-style style-size"></span>
                    <span style="font-size:14px;">{{rule3}}</span>
                </li>
                <li>
                    <span class="span-style style-size"></span>
                    <span style="font-size:14px;">{{rule4}}</span>
                </li>
            </ul>
        </div>
        <div class="store-detail">
            <h1 style="text-align:left;color:#000">图文详情</h1>
            <div class="more-detail">
                <img src="../assets/tuangoudetail1.png" alt="" width="100%" height="100%">
                <img src="../assets/tuangoudetail2.png" alt="" width="100%" height="100%">
                <img src="../assets/tuangou.png" alt="" width="100%" height="100%">
                <img src="../assets/tuangoudetail2.png" alt="" width="100%" height="100%">
                <img src="../assets/tuangoudetail1.png" alt="" width="100%" height="100%">
                <img src="../assets/tuangou.png" alt="" width="100%" height="100%">
            </div>
        </div>
        <div class="store-detail">
            <h1 style="text-align:left;color:#000">用户评价</h1>
            <div class="more-detail">
                <div class="comment">
                    <span class="tag-span"  v-for="(item,index) in comment" :key="index" @click="changeActive(index)" :class="item.isActive?'tag-click':''"> 
                        {{item.name}}
                    </span>
                </div>
                <div style="margin-top:20px">
                    <Table :show-header="false" :columns="commentColumns" :data="commentData"></Table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreDetail',
  data () {
    return {
        text: window.localStorage.getItem('addressText'),
        phone: window.localStorage.getItem('phone'),
        title: '探鱼',
        titleMore:'2人套餐A，提供免费wifi',
        number: '234',
        price: '178',
        menPrice: '235',
        date: '2017.10.25-2018.05.23',
        buyNumber: 1,
        columns: [
            {
                title: '套餐内容',
                key: 'content'
            },
            {
                title: '单价',
                key: 'price'
            },
            {
                title: '数量/规格',
                key: 'number'
            },
            {
                title: '小计',
                key: 'total'
            },
        ],
        data: [
            {
               content: '重庆豆花烤鱼',
               price: '139',
               number: '1份',
               total: '139',
            },
            {
               content: '重庆豆花烤鱼',
               price: '139',
               number: '1份',
               total: '139',
            },
            {
               content: '重庆豆花烤鱼',
               price: '139',
               number: '1份',
               total: '139',
            },
            {
               content: '重庆豆花烤鱼',
               price: '139',
               number: '1份',
               total: '139',
            }
        ],
        validity: '2017.10.25-2018.05.23(周末及节假日有效)',
        useTime: '11:00 - 22:00',
        rule1: `无需预约，消费高峰时可能需要等位，每桌最多使用1张美团券`,
        rule2: '每张美团券建议2人使用，不提供餐巾纸，店内无包间，仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家，团购用户不可同时享受商家其他优惠',
        rule3: '酒水饮料等问题，请致电商家咨询，以商家反馈为准',
        rule4: '如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替换，具体事宜请与店内协商，提供免费WiFi',
        comment: [
        {
          name: '全部(30)',
          isActive: true
        },
        {
          name: '推荐(20)',
          isActive: false
        },
        {
          name: '吐槽(1)',
          isActive: false
        }
        ],
        commentColumns:[
        {
          title: 'user',
          key: 'user',
          width: 150
        },
        {
          title: 'describe',
          key: 'describe'
        },
        {
          title: 'date',
          key: 'date',
          width: 150
        }
        ],
      commentData:[
        {  
          user: '188****546',
          describe: '味道还不错，推荐哦哦',
          date: '2017.12.4'
        },
        {
          user: '188****546',
          describe: '量很足',
          date: '2017.12.4'
        },
        {
          user: '188****546',
          describe: '很满意',
          date: '2017.12.4'
        },
        {
          user: '188****546',
          describe: '味道还不错，推荐哦哦',
          date: '2017.12.4'
        },
        {
          user: '188****546',
          describe: '味道还不错，推荐哦哦',
          date: '2017.12.4'
        }
      ],
    }
  },
  methods: {
    //   跳到下单页面
    jumpBuy() {
      this.$router.push({ name: 'Buy', query:{ 'num' : this.buyNumber }});
    },
    add() {
        this.buyNumber = this.buyNumber + 1
        let span = document.getElementById('decrease')
        span.style.color="#666"
        span.style.border="1px solid #666"
    },
    reduce() {
        if (this.buyNumber > 1) {
            this.buyNumber = this.buyNumber - 1
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
    changeActive(index) {
      for (let i in this.comment) {
        let item = Number(i)
        if (item === index) {
          this.comment[item].isActive = true
        }else {
          this.comment[item].isActive = false
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
    color: #666;
  }
  .store-style, .more-detail{
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #EBEBEB;
  }
  .span-style{
    display: inline-block;
    font-size: 16px;
    width: 80px;
  }
  .store-ul li{
    margin: 5px 0;
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
  .store-detail{
    margin-top:20px;
  }
  .price-style{
      text-align: right;
      margin: 20px 20px 0 0;
      font-size: 16px;
  }
  .style-size{
      font-size:14px;
  }
  .comment{
      text-align: left;
  }
  .tag-span{
    text-align: center;
    display: inline-block;
    margin: 0 10px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .tag-click{
    background-color: #31BBAC;
    border: 1px solid #31BBAC;
    color: #fff;
  }
</style>
