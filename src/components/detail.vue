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
        <Row :gutter="24">
            <Col span="11">
                <div class="left-content">
                    <Carousel loop v-model="value">
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../assets/timg.jpg" class="img-style" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../assets/timg (1).jpg" class="img-style" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../assets/timg (2).jpg" class="img-style" alt="">
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">
                            <img src="../assets/timg (3).jpg" class="img-style" alt="">
                        </div>
                    </CarouselItem>
                    </Carousel>
                </div>
            </Col>
            <Col span="13">
                <div class="right-content">
                    <ul class="right-top">
                        <li style="margin:10px 0;color:blue">
                            <span>铁板培根饭</span>
                        </li>
                        <li>
                            <span>价格：</span>
                            <b style="color:#e4393c">￥20</b>
                        </li>
                        <li>
                            <span>月售：</span>
                            <span style="color:gray">42</span>
                        </li>
                        <li>
                            <span>描述：</span>
                            <span style="color:gray">培根+米饭+萝卜+青菜</span>
                        </li>
                        <li>
                            <span>主要原料：</span>
                            <span style="color:gray">培根</span>
                        </li>
                        <li>
                            <span>用户评分：</span>
                            <Rate show-text disabled allow-half v-model="valueHalf">
                                <span style="color: #f5a623;font-size:16px;">{{ valueHalf }}</span>
                            </Rate>
                        </li>
                        <li>
                            <span>用户评价：</span>
                        </li>
                    </ul>
                    <div class="comment">
                      <span class="tag-span"  v-for="(item,index) in comment" :key="index" @click="changeActive(index)" :class="item.isActive?'tag-click':''"> 
                        {{item.name}}
                      </span>
                    </div>
                    <Table :show-header="false" height="140" :columns="commentColumns" :data="commentData"></Table>
                    <div class="button">
                      <Button type="success" long @click="jumpOrder">立即下单</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      value: 0,
      valueHalf: 4.8,
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
          title: 'describe',
          key: 'describe'
        }
      ],
      commentData:[
        {
          describe: '味道还不错，推荐哦哦'
        },
        {
          describe: '量很足'
        },
        {
          describe: '很满意'
        },
        {
          describe: '味道还不错，推荐哦哦'
        },
        {
          describe: '味道还不错，推荐哦哦'
        }
      ],
    }
  },
  methods: {
    jumpPeosonalCenter() {
      this.$router.push({ name: 'PersonalCenter' });
    },
    jumpHome() {
      this.$router.push({ name: 'Home' });
    },
    jumpOrder() {
      this.$router.push({ name: 'MyOrder' });
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
    position: fixed;
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
    margin: 20px;
    height: 100%;
  }
  .right-content{
    text-align: left;
    font-size: 20px;
    height:28px;
    line-height: 40px;
  }
  .right-top li{
    list-style: none;
  }
  .img-style{
    width: 100%;
    height: 565px;
  }
  .tag-span{
    text-align: center;
    display: inline-block;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    border-radius: 5px;
    display: flex;
    align-self:flex-start;
  }
  .tag-click{
    background-color: #2d8cf0;
    color: #fff;
  }
  .comment{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .button{
    margin:20px 0px;
  }
</style>
