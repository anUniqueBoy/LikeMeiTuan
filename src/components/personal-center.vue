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
            <span style="font-size:16px;"> 账户设置</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="content">
      <ul class="store-style">
        <li>
          <p class="setting-title">昵称</p>
          <p class="setting-content">{{name}}</p>
          <div class="setting-button">
            <Button type="ghost" shape="circle" size="large" @click="shownameModel">修改</Button>
          </div>
        </li>
        <li>
          <p class="setting-title">生日</p>
          <p class="setting-content">{{birthday}}</p>
          <div class="setting-button">
            <Button type="ghost" shape="circle" size="large" @click="showdateModel">修改</Button>
          </div>
        </li>
        <li>
          <p class="setting-title">换绑手机</p>
          <p class="setting-content">{{phone}}</p>
          <div class="setting-button">
            <Button type="ghost" shape="circle" size="large" @click="showphoneModel">换绑</Button>
          </div>
        </li>
        <li>
          <p class="setting-title">登录密码</p>
          <p class="setting-content">安全强度：{{state}}</p>
          <div class="setting-button">
            <Button type="ghost" shape="circle" size="large" @click="jumpChangePwd">修改</Button>
          </div>
        </li>
      </ul>
      <Modal v-model="modal1" width="360">
        <p slot="header">修改昵称</p>
        <div style="text-align:center">
            <Form :model="formItem" :label-width="80">
              <FormItem label="输入昵称">
                <Input v-model="formItem.name" placeholder="请输入昵称"></Input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="ghost" size="large" @click="cancle">取消</Button>
            <Button type="success" size="large" @click="changeName">确定</Button>
        </div>
      </Modal>
      <Modal v-model="modal2" width="360">
        <p slot="header">修改生日</p>
        <div style="text-align:center">
            <Form :model="formItem" :label-width="100">
              <FormItem label="请选择出生日期">
                <DatePicker type="date" placeholder="请选择日期" v-model="formItem.date"></DatePicker>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="ghost" size="large" @click="cancle">取消</Button>
            <Button type="success" size="large" @click="changeDate">确定</Button>
        </div>
      </Modal>
      <Modal v-model="modal3" width="360">
        <p slot="header">换绑手机</p>
        <div style="text-align:center">
            <Form :model="formItem" :label-width="80">
              <FormItem label="输入手机号">
                <Input v-model="formItem.phone" placeholder="请输入手机号"></Input>
              </FormItem>
            </Form>
        </div>
        <div slot="footer">
            <Button type="ghost" size="large" @click="cancle">取消</Button>
            <Button type="success" size="large" @click="changePhone">确定</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCenter',
  data () {
    return {
      name: 'chusdhw89w',
      birthday: '1994-11-17',
      phone: '188****8245',
      state: '强',
      modal1: false,
      modal2: false,
      modal3: false,
      formItem: {
        name: '',
        phont: '',
        date: ''
      }
    }
  },
  methods: {
    jumpChangePwd() {
      this.$router.push({ name: 'ChangePwd' });
    },
    shownameModel() {
      this.modal1 = true;
    },
    showdateModel() {
      this.modal2 = true;
    },
    showphoneModel() {
      this.modal3 = true;
    },
    cancle() {
      this.modal1 = false;
      this.formItem.name = '';
      this.modal3 = false;
      this.formItem.phone = '';
      this.modal2 = false;
      this.formItem.date = '';
    },
    changeName() {
      this.modal1 = false;
      this.name = this.formItem.name;
      this.formItem.name = '';
    },
    changePhone() {
      this.modal3 = false;
      this.phone = this.formItem.phone;
      this.formItem.phone = '';
    },
    changeDate() {
      this.modal2 = false;
      this.birthday = this.formItem.date;
      this.formItem.date = '';
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
  .store-style li{
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
  }
  .setting-title{
    text-align: right;
    height:40px;
    line-height: 40px;
    font-size:20px;
    width: 150px;
    padding-right:30px;
    border-right:1px solid #ddd;
  }
  .setting-content{
    padding-left:30px;
    height:40px;
    line-height: 40px;
    width:600px;
    text-align: left;
  }
  .setting-button{
    height:40px;
    line-height: 40px;
    text-align: right;
  }
</style>
