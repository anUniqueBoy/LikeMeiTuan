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
      <Form :model="formItem" :label-width="80">
        <FormItem label="姓名：">
          <Input v-model="formItem.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="联系方式：">
          <Input v-model="formItem.phone" placeholder="请输入电话号码"></Input>
        </FormItem>
        <FormItem label="联系地址：">
          <Input v-model="formItem.address" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入地址"></Input>
        </FormItem>
        <FormItem label="留言：">
          <Input v-model="formItem.message" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入留言"></Input>
        </FormItem>
        <Button type="info" long  @click="Order">确定下单</Button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
      formItem: {
        name: '',
        phone: '',
        address: '',
        message: '',
      }
    }
  },
  methods: {
    jumpPeosonalCenter() {
      this.$router.push({ name: 'PersonalCenter' });
    },
    jumpHome() {
      this.$router.push({ name: 'Home' });
    },
    Order() {
      if (this.formItem.name === '') {
        this.$Message.warning('请输入姓名')
      } else if (this.formItem.phone === '') {
        this.$Message.warning('请输入电话号码')
      } else if (this.formItem.address === '') {
        this.$Message.warning('请输入地址')
      } else {
        this.$Message.success('下单成功，请在个人中心页面查看')
        this.$router.push({ name: 'PersonalCenter' })
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
    margin: 10px;
  }
</style>
