<template>
  <div class="main">
    <div
      class="user-layout"
    >
      <a-tabs
        :activeKey="customActiveKey"
        :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset', display: 'none' }"
        @change="handleTabClick"
      >
        <a-tab-pane key="tab1" tab="账号密码登录" style="margin: 0 auto;margin-top: 117px;">
          <a-form
            id="formLogin"
            class="user-layout-login"
            ref="formLogin"
            :form="form"
            @submit="handleSubmit"
          >
            <a-form-item class="title">区域风险指数系统</a-form-item>
            <a-form-item style="margin: 0 auto;margin-bottom: 28px;width: 335px;">
              <a-input
                size="large"
                type="text"
                placeholder="用户名"
                v-decorator="[
                'username'
                ]"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input>
            </a-form-item>

            <a-form-item style="margin: 0 auto;margin-bottom: 14px;width: 335px;">
              <a-input-password
                size="large"
                placeholder="密码"
                v-decorator="[
                'password'
                ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </a-input-password>
            </a-form-item>

            <a-form-item style="margin: 0 auto;height: 40px; margin-bottom: 45px;width: 335px;">
              <router-link
                :to="{ name: 'recover', params: { user: 'aaa'} }"
                class="forge-password"
                style="color: #fff"
              >忘记密码</router-link>
              <a-form-item class="register" @click.native="handleTabClick('tab2')">注册账户</a-form-item>
            </a-form-item>

            <a-form-item style="width: 335px;margin: 0 auto;height: 55px;">
              <a-button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
              >确定</a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>

        <a-tab-pane key="tab2" tab="注册" style="margin: 0 auto;margin-top: 117px;">
          <a-form-item class="title">区域风险指数系统</a-form-item>
          <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px;" message="账户或密码错误（admin/ant.design )" />
          <a-form-item style="margin: 0 auto;margin-bottom: 28px;width: 335px;">
            <a-input
              size="large"
              type="text"
              placeholder="用户名"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item style="margin: 0 auto;margin-bottom: 28px;width: 335px;">
            <a-input-password
              size="large"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input-password>
          </a-form-item>

          <a-form-item style="margin: 0 auto;margin-bottom: 14px;width: 335px;">
            <a-input-password
              size="large"
              placeholder="确认密码"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input-password>
          </a-form-item>

          <a-form-item style="margin: 0 auto;height: 27px; margin-bottom: 25px;width: 335px;">
            <a-form-item class="login" @click.native="handleTabClick('tab1')">登录</a-form-item>
          </a-form-item>

          <a-form-item style="width: 230px;margin: 0 auto;height: 65px;">
            <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
              style="width: 230px"
            >注册</a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </div>

    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'
import storage from 'store'
import { USER_ID } from '@/store/mutation-types'

export default {
  components: {
    TwoStepCaptcha
  },
  data () {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created () {
    get2step({ })
      .then(res => {
        this.requiredTwoStepCaptcha = res.result.stepCode
      })
      .catch(() => {
        this.requiredTwoStepCaptcha = false
      })
    // this.requiredTwoStepCaptcha = true
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    // handler
    handleUsernameOrEmail (rule, value, callback) {
      const { state } = this
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (regex.test(value)) {
        state.loginType = 0
      } else {
        state.loginType = 1
      }
      callback()
    },
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        Login
      } = this

      state.loginBtn = true

      validateFields(['username', 'password'], { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          const loginParams = { ...values }
          delete loginParams.username
          loginParams.username = values.username
          loginParams.password = md5(values.password)
          Login(loginParams)
            .then((res) => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    getCaptcha (e) {
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)
          getSmsCaptcha({ mobile: values.mobile }).then(res => {
            setTimeout(hide, 2500)
            this.$notification['success']({
              message: '提示',
              description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              duration: 8
            })
          }).catch(err => {
            setTimeout(hide, 1)
            clearInterval(interval)
            state.time = 60
            state.smsSendBtn = false
            this.requestFailed(err)
          })
        }
      })
    },
    stepCaptchaSuccess () {
      this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    },
    loginSuccess (res) {
      if (res.code === '200') {
        storage.set(USER_ID, res.data.username)
        this.$router.push({ path: '/' })
        // 延迟 1 秒显示欢迎信息
        setTimeout(() => {
          this.$notification.success({
            message: '欢迎',
            description: `${timeFix()} ${res.data.name}，欢迎回来`
          })
        }, 1000)
        this.isLoginError = false
      } else {
        this.isLoginError = true
        this.$notification['error']({
          message: '错误',
          description: res.message || '请求出现错误，请稍后再试',
          duration: 4
        })
      }
      // check res.homePage define, set $router.push name res.homePage
      // Why not enter onComplete
      /*
      this.$router.push({ name: 'analysis' }, () => {
        console.log('onComplete')
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      })
      */
    },
    requestFailed (err) {
      this.isLoginError = true
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout {
  width: 590px;
  height: 590px;
  margin: 0 auto;
  background: url(~@/assets/login-form-bg.png) no-repeat;
  background-size: 100% 100%;
  top: 132px;
  position: relative;

  label {
    font-size: 16px;
  }

  .title{
    margin: 0 auto;
    margin-bottom: 38px;
    width: 332px;
    height: 38px;
    font-family: AdobeHeitiStd-Regular;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 16px;
  }

  .login {
    color: #49f8f9;
    font-size: 16px;
    float: right;
    text-decoration: none;
    border-bottom: 1px solid #49f8f9;
    display: inline-block;
    height: 35px;
    width: 50px;
    text-align: center;
  }
  .register {
    color: #49f8f9;
    font-size: 16px;
    float: right;
    text-decoration: none;
    border-bottom: 1px solid #49f8f9;
    display: inline-block;
    height: 35px;
  }

  button.login-button {
    font-size: 22px;
    width: 338px;
    height: 47px;
    background-image: linear-gradient(89deg,
    #185abc 0%,
    rgba(24, 90, 188, 0.95) 30%,
    rgba(73, 226, 249, 0.81) 100%),
    linear-gradient(-90deg,
    #5039fb 0%,
    #008dff 100%);
    background-blend-mode: normal,
    normal;
    box-shadow: 1px 3px 7px 0px rgba(0, 71, 132, 0.89);
    border-radius: 22px;
    border: none;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
