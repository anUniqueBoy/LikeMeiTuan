<template>
  <div class="container">
    <Row>
      <Col span="16">
        <div class="img-container">
            <img src="../assets/shouye.jpg" alt="" width="400px" height="400px">
          </div>
      </Col>
      <Col span="8">
        <div class="login-container">
          <h2 class="login-h2">欢迎注册</h2>
          <div class="login-form">
            <Form :model="formItem" ref="formItem" :rules="ruleItem" :label-width="80">
              <FormItem prop="phone" label="手机号：">
                <Input type="text" v-model="formItem.phone" size="large" placeholder="请输入手机号"></Input>
              </FormItem>
              <FormItem prop="password" label="密码：">
                <Input type="password" v-model="formItem.password" size="large" placeholder="请输入密码"></Input>
              </FormItem>
              <FormItem prop="code" label="验证码：">
                <Row>
                  <Col span="8">
                    <Input v-model="formItem.code" placeholder="请输入验证码"></Input>
                    <u class="u-font" @click="changeCode">看不清，换一张</u>
                  </Col>
                  <Col span="16">
                    <div style="width:180px;height:70px;">
                      <img v-if="codeNum === 1" src="../assets/yanzheng1.png" width="100%" height="100%" alt="">
    　　　　　　       <img v-if="codeNum === 2" src="../assets/yanzheng2.png" width="100%" height="100%" alt="">
    　　　　　　       <img v-if="codeNum === 3" src="../assets/yanzheng3.png" width="100%" height="100%" alt="">
                    </div>
                  </Col>
                </Row>
    　　　　　 </FormItem>
              <Button type="info" @click="handleSubmit('formItem')" long>注册</Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      formItem: {
        phone: '',
        password: '',
        code: '',
      },
      codeNum: 1,
      ruleItem: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max:12, message: '密码长度不能小于或大于12', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册按钮
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let lowCode = this.formItem.code.toLowerCase();
          if (lowCode === '3n3d' || lowCode === '7wob' || lowCode === 'dwse') {
            this.register()
            // this.$router.push({ name: 'Home' });
          } else if (lowCode === ''){
            this.$Message.warning('请输入验证码');
          } else {
            this.$Message.warning('验证码输入错误，请重新输入');
          }
        } else {
        }
      })
    },
    // 点击切换验证码图片
    changeCode () {
      if (this.codeNum === 1) {
        this.codeNum = 2
      } else if (this.codeNum === 2) {
        this.codeNum = 3
      } else if (this.codeNum === 3) {
        this.codeNum = 1
      }
    },
    register(){
      this.$http.post('http://127.0.0.1/php/register.php',{
          uname:this.formItem.phone,
          upwd:this.formItem.password
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 外层大背景的样式 */
  .container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 右侧输入框的样式 */
  .login-container{
    background: #fff;
    width:400px;
    margin-right:70px;
    border: 1px solid #aaa;
    border-radius: 20px;
    padding:5px;
  }
  .login-h2{
    font-size:30px;
    font-weight: normal;
    display: flex;
    align-content: flex-start;
    margin:20px;
  }
  .login-form{
    border-top:1px solid #aaa;
    padding:20px 10px;
  }
  .u-font{
    margin-top:10px;
    display: inline-block;
    color:#3879D9;
  }
  .u-font:hover{
    cursor: pointer;
  }
  .img-container{
    display: flex;
    justify-content: left;
  }
</style>
