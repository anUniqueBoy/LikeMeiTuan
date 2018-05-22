<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <img src="../assets/local.png" alt="" style="margin-right:5px;height:30px;margin-top:3px;">
        <div style="margin-right:20px;" class="show-adr">
          <p>{{ text }}</p>
          <p style="margin-left:8px;">
            <Cascader :data="data" @on-change="handleChange">
              <a href="javascript:void(0)">[修改地址]</a>
            </Cascader>
          </p>
        </div>
        <router-link to="/PersonalCenter" style="margin-right:10px;color:#31BBAC;">{{phone}}</router-link>
        <router-link to="/" style="color:#999999;">退出登录></router-link>
      </div>
      <ul class="header-right">
        <li><router-link to="/MyOrder" style="color:#999999;"><span>我的订单</span></router-link></li>
        <li><router-link to="/PersonalCenter" style="color:#999999;"><span>账户设置</span></router-link></li>
      </ul>
    </div>
    <div class="content">
      <div class="content-header">
        <Row>
        <Col span="5">
          <ul class="left-header">
            <li class="left-first">全部分类</li>
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
    <div class="select-content">
      <ul class="select-header">
        <li v-for="(item,index) in selectItem" :key="index" @click="changeActive(index)" :class="item.isActive?'active-item':''">
          {{item.name}}
        </li>
      </ul>
      <div class="show-container">
        <div class="item-container">
          <div class="item" @click="jumpDetail" v-for="(item,index) in foodList" :key=index>
            <div>
              <img class="img-size" :src="item.img" alt="">
            </div>
            <div style="text-align:left">
              <p class="font-first">{{item.name}}</p>
              <Rate show-text disabled allow-half v-model="item.grade">
                <span class="font-second">{{item.evaluate}}个评价</span>
              </Rate>
              <p class="font-second">{{item.address}}</p>
              <span class="font-price">￥{{item.price}}</span>
            </div>
          </div>
        </div>
        <div  v-if="showPagination" class="footer">
          <Page :total="totalCount" :page-size="pageSize" show-total @on-change="doPaging"></Page>
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
      text: window.localStorage.getItem('addressText'),
      phone: window.localStorage.getItem('phone'),
      data: [
        {
          value: 'xian',
          label: '西安',
          children:[
            {
              value: 'yantaqu',
              label: '雁塔区'
            },
            {
              value: 'weiyangqu',
              label: '未央区'
            },
            {
              value: 'lintongqu',
              label: '临潼区'
            }
          ]
        }
      ],
      search: '',
      value: 0,
      // valueHalf: 4.8,
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
      foodList:'',
      pageNum: 1, // 有关分页的数据
      pageSize: 8,
      totalCount: 0,
      showPagination: false,
      adressChoose: ''
    }
  },
  mounted() {
    this.showList()
  },
  methods: {
    handleChange (value, selectedData) {
      this.text = selectedData.map(o => o.label).join(', ');
      window.localStorage.setItem('addressText',this.text);
      this.showList();
    },
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
          console.log(this.chooseItem[item].name)
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
          if(this.selectItem[item].name === '销量最高'){
            this.foodList.sort((a,b)=>{
                let value1 = a.evaluate
                let value2 = b.evaluate
                return value2-value1
            })
          }else if(this.selectItem[item].name === '价格最低'){
            this.foodList.sort((a,b)=>{
                let value1 = a.price
                let value2 = b.price
                return value1-value2
            })
          }else if(this.selectItem[item].name === '评价最高'){
            this.foodList.sort((a,b)=>{
                let value1 = a.grade
                let value2 = b.grade
                return value2-value1
            })
          }else{
            this.showList()
          }
        }else {
          this.selectItem[item].isActive = false
        }
      }
    },
    // 获取json数据
    getLikeList() {
      let params = {
        page_num: this.pageNum,
        page_size: this.pageSize
      }
      this.$http.get('../../../static/json/get_like.json')
        .then((response) => {
          let arr = []
          for(let index in response.data){
            if(this.adressChoose === response.data[index].address){
              arr.push(response.data[index])
            }
          }
          this.foodList = arr
          this.totalCount = response.total
          this.showPagination = true
        })
        .catch((error) => {
          console.log(error);
        })
    },
    // 从地区的改变从而改变饭店的显示
    showList() {
      if(this.text === '西安, 未央区'){
        this.adressChoose = '未央区'
        this.getLikeList()
      }else if(this.text === '西安, 雁塔区'){
        this.adressChoose = '雁塔区'
        this.getLikeList()
      }else if(this.text === '西安, 临潼区'){
        this.adressChoose = '临潼区'
        this.getLikeList()
      }
    },
    doPaging(){
      console.log(111)
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
  .show-adr{
    display: flex;
    /* justify-content:space-between; */
    align-items: center;
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
    width:260px;
    margin:12px;
    cursor: pointer;
  }
  .item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .footer{
    text-align: right;
    margin: 0 20px 20px 20px;
  }
</style>
