<template>
  <div class="main-loginPage">
    <div class="login-wrapper">
      <div class="form-wrapper">
        <div class="form-wrapper-title">
          智慧医院信息系统
        </div>
        <form
          class="form"
          style="text-align: left"
        >
          <div
            prop="username"
            :rules="[{ required: true, message: '请输入用户名或账号' }]"
          >
            <div class="form-label">
              工号
            </div>

            <input
              class="form-input"
              v-if="zhiGongXm&&showZhiGongXm"
              v-model="zhiGongXm"
              placeholder="请输入账户/账号"
              @focus="showZhiGongXm=false"
              @change="yonghuChange"
              @keydown.enter="nextInput('password')"
            >
            <input
              class="form-input"
              v-else
              v-model="form.username"
              ref="username"
              placeholder="请输入账户/账号"
              @blur="showZhiGongXm=true"
              @change="yonghuChange"
              @keydown.enter="nextInput('password')"
            >
            <i class="df-icon-user" />
            <div class="line" />
          </div>
          <div
            prop="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <div class="form-label">
              密码
            </div>
            <input
              ref="password"
              class="form-input"
              v-model="form.password"
              type="password"
              placeholder="请输入您的密码"
              @keydown.enter="nextInput('application')"
            >
            <i class="df-icon-lock" />
            <div class="line" />
          </div>
          <div>
            <df-button
              style="height: 48px; font-size: 20px; width: 100%"
              block
              type="primary"
              :loading="loading"
              @click="login"
              :disabled="!canILogin"
            >
              登 录
            </df-button>
          </div>
        </form>
        <p class="no-account">
          没有账号？联系管理员
        </p>
      </div>
    </div>
    <div class="login-footer">
      <span>{{ domain }}</span>
      <span>{{ copyright }}</span>
    </div>
  </div>
</template>
<script>
import { getYongHuIdByZhiGongGh, ddLogin } from './apis/login'
import { getCookie, setCookie } from './utils/cookies.js'

export default {
  name: 'Login',
  data () {
    return {
      form: {},
      loading: false,
      userinfo: {},
      application: {},
      domain: window.location.host,
      zhiGongXm: '',
      showZhiGongXm: false,
      activeYuanQu: {},
      copyright: 'Copyright ◎2019-2020浙江东昉医疗科技有限公司'
    }
  },
  computed: {
    canILogin () {
      return this.form.username && this.form.password
    }
  },
  created () {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
  },
  mounted () {
    const holdUsername = getCookie('hold-username')
    if (holdUsername) {
      this.form.username = holdUsername
      this.yonghuChange()
      this.showZhiGongXm = true
      this.nextInput('password')
    }
  },
  methods: {
    yonghuChange () {
      this.form.username = this.form.username.toUpperCase()
      getYongHuIdByZhiGongGh(this.form.username).then((res) => {
        this.$set(this.userinfo, 'yongHuId', res.zhiGongId)
        this.zhiGongXm = res.zhiGongXm
      })
    },
    login () {
      this.loading = true
      ddLogin({
        yongHuId: this.userinfo.yongHuId,
        password: this.form.password
      }).then((res) => {
        this.loading = false
        this.$set(this.userinfo, 'shuRuMa', res.zhiGongDA.shuRuMa)
        this.$set(this.userinfo, 'zhiGongXm', res.zhiGongDA.zhiGongXm)
        this.$set(this.userinfo, 'xingBie', res.zhiGongDA.xingBie)
        this.$set(this.userinfo, 'zhiGongGh', res.zhiGongDA.zhiGongGh)
        this.$set(this.userinfo, 'renShiKs', res.zhiGongDA.renShiKs)
        this.$set(this.userinfo, 'renShiKsMc', res.zhiGongDA.renShiKsMc)
        this.$set(this.userinfo, 'zhiGongLb', res.zhiGongDA.zhiGongLb)
        this.$set(this.userinfo, 'zhiGongDj', res.zhiGongDA.zhiGongDj)
        this.$set(this.userinfo, 'zhiGongDjMc', res.zhiGongDA.zhiGongDjMc)
        this.$set(this.userinfo, 'miMa', this.form.password)
        this.$set(this.userinfo, 'jueSeIds', [])
        if (res.zhiGongDA.zhiGongGh === '0188') {
          this.$set(this.userinfo, 'jueSeIds', ['001'])
        }
        sessionStorage.setItem('token', res.accessToken.accessToken)
        sessionStorage.setItem('userInfo', JSON.stringify(this.userinfo))
        setCookie('hold-username', this.form.username, '30d')
        setCookie(`hold-${this.form.username}-yuanqu`, this.activeYuanQu.yuanQuId, '30d')
        setCookie(`hold-${this.form.username}-yingyong`, this.application.yingYongId, '30d')
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$router.push('/professional/install')
      }).catch(() => { this.loading = false })
    },
    nextInput (next) {
      if (this.canILogin && next === 'application') {
        this.login()
        return
      }
      this.$refs[next].focus()
    },
    enterFun () {
      this.canILogin && this.login()
    }
  }
}
</script>

<style lang="scss">
.applicationPop {
  overflow: auto;
  border: 1px solid #979797;
  .yuanqu-content {
    padding: 12px 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-top: 8px;
        &.hospital-item:nth-child(1), &.hospital-item:nth-child(2) {
          margin-top: 0;
        }
        &.app-item:nth-child(1), &.app-item:nth-child(2), &.app-item:nth-child(3) {
          margin-top: 0;
        }
        &.hospital-item {
          width: 45%;
          &.isActive{
            color: #458CF7;
          }
        }
        &.app-item {
          width: 33.33333%;
          padding: 4px 4px;
          background: #fff;
          color: #595D62;
          display: flex;
          img{
            width: 24px;
          }
          &:hover{
            background: #dde7fc;
          }
        }
        .item-name {
          margin-left: 4px;
          border-radius: 4px;
          line-height: 24px;
          cursor: pointer;
          &.selected-app {
            color: #2D6EEB;
          }
        }
        &.hospital-item:not(:nth-child(2n)), &.app-item:not(:nth-child(3n)) {
          .item-name {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.main-loginPage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%!important;
  height: 100%!important;
  background: rgb(40, 101, 206);
  box-sizing: border-box;
  .login-wrapper {
    background-color: #fff;
    overflow: hidden;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 28%;
    min-width: 400px;
    border-radius: 21px;
    box-shadow: 6px 9px 15px 0px #3063CD;
    .form-wrapper {
      .form-wrapper-title{
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        color: #3A70E2;
        margin: 24px auto;
      }
      .form {
        margin: 0 auto;
        width: 326px;
        font-size: 16px;
        color: #606266;
        div[prop] {
          position: relative;
          i {
            position: absolute;
            top: 40px;
            left: 9px;
            font-size: 20px;
            color: #2D6EEB;
          }
          .df-icon-arrow-down {
            left: auto;
            right: 8px;
            color: #A3A5A8;
          }
          .line {
            position: absolute;
            top: 38px;
            left: 37px;
            width: 1px;
            height: 24px;
            background: linear-gradient(to bottom, #00000000, #979797, #00000000);
          }
        }
        div[prop]:not(:nth-child(3)) {
          margin-bottom: 20px;
        }
        .form-label {
          font-size: 14px;
          margin-bottom: 12px;
          &::before{
            content: "*";
            color: #FF4545;
            margin-right: 4px;
          }
        }
        .form-input {
          outline: none;
          height: 44px;
          font-size: 16px;
          width: 100%;
          padding: 0 30px 0 50px;
          color: #333;
          border: 1px solid rgba(51, 51, 51, 0.4);;
          border-radius: 4px;
          box-sizing: border-box;
          transition: border-color .2s cubic-bezier(.645,.045,.355,1);
          &::placeholder {
            font-size: 14px;
            color: #A3A5A8;
          }
          &:focus {
            border-color: #2d6eeb;
          }
        }
        .forget-pwd {
          display: flex;
          justify-content: flex-end;
          color: #A3A5A8;
          font-size: 16px;
          align-items: center;
          margin: 16px 0;
        }
      }
      .no-account {
        color: #458cf7;
        text-align: center;
        cursor: pointer;
        margin: 25px 0;
      }
    }
  }
  .login-footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 15px;
    color: #ffffff;
    background: #2E63D388;
  }
}
</style>
