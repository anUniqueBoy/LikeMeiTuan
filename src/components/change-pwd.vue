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
          <h2 class="login-h2">修改密码</h2>
          <div class="login-form">
            <Form :model="formItem" ref="formItem" :rules="ruleItem" :label-width="80">
              <FormItem prop="phone" label="手机号：">
                <Input type="text" v-model="formItem.phone" size="large" placeholder="请输入手机号"></Input>
              </FormItem>
              <FormItem prop="password" label="旧密码：">
                <Input type="password" v-model="formItem.password" size="large" placeholder="请输入密码"></Input>
              </FormItem>
              <FormItem prop="newPassword" label="新密码：">
                <Input type="password" v-model="formItem.newPassword" size="large" placeholder="请输入密码"></Input>
              </FormItem>
              <Button type="info" @click="handleSubmit('formItem')" long>确认</Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'ForgetPwd',
  data () {
    return {
      formItem: {
        phone: '',
        password: '',
        newPassword: '',
      },
      ruleItem: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max:12, message: '密码长度不能小于或大于12', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, max:12, message: '密码长度不能小于或大于12', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 修改密码的按钮
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({ name: 'Login' });
        } else {
        }
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
  .img-container{
    display: flex;
    justify-content: left;
  }
</style>
