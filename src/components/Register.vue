<template>
  <div class="login-container">
    <a-row type="flex" justify="center" align="middle" class="row-box">
      <a-col class="left-aside" :span="8"></a-col>

      <a-col :span="8" class="login-content-box">
        <div class="login-content">
          <img :src="logoSrc" width="274" height="44" class="logo" />
          <p class="slogan">Ant Design Pro 是东半球最具影响力的Web设计规范</p>
          <a-row>
            <a-col :span="24">
              <a-input size="large" placeholder="邮箱" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-input size="large" type="password" placeholder="6-16位密码，区分大小写" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-input size="large" type="password" placeholder="确认密码" />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-input-group compact>
                <a-select style="width: 24%" defaultValue="+86" size="large">
                  <a-select-option value="+86">+86</a-select-option>
                  <a-select-option value="+852">+852</a-select-option>
                </a-select>
                <a-input size="large" style="width: 76%" placeholder="11位手机号" maxLength="11" />
              </a-input-group>
            </a-col>
          </a-row>
          <a-row class="verCode" type="flex" align="middle" justify="space-between">
            <a-col :span="16">
              <a-input size="large" placeholder="输入验证码" />
            </a-col>
            <a-col>
              <a-button size="large">获取验证码</a-button>
            </a-col>
          </a-row>

          <a-row type="flex" justify="space-between" align="middle">
            <a-col :span="8">
              <a-button type="primary" @click="register" size="large" block>注册</a-button>
            </a-col>
            <a-col>
              <router-link to="login">已有账户登录</router-link>
            </a-col>
          </a-row>
        </div>
      </a-col>

      <a-col class="right-aside" :span="8"></a-col>
    </a-row>
  </div>
</template>


<script>
import headImg from "../assets/login_logo.svg";
export default {
  data() {
    return {
      logoSrc: headImg,
      userName: "",
      passWord: "",
      phoneNum: "",
      verCode: "",
      errorMsg: {
        userName: "",
        psw: ""
      },
      tabKey: 1
    };
  },
  watch: {
    userName: function() {
      if (this.userName) {
        this.errorMsg.userName = "";
      }
    },
    passWord: function() {
      if (this.passWord) {
        this.errorMsg.psw = "";
      }
    }
  },
  methods: {
    callback(key) {
      this.tabKey = key;
    },
    // 清空用户名
    userNameEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    // 清空密码
    pwdEmpty() {
      this.$refs.passWordInput.focus();
      this.passWord = "";
    },
    // 清空手机号
    phoneNumEmpty() {
      this.$refs.phoneNumInput.focus();
      this.phoneNum = "";
    },
    // 清空验证码
    verCodeEmpty() {
      this.$refs.verCodeInput.focus();
      this.verCode = "";
    },
    // 点击自动登录
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    // 点击登录
    register() {
      if (this.tabKey == 1) {
        if (this.userName == "") {
          this.errorMsg.userName = "请输入用户名";
        } else if (this.passWord == "") {
          this.errorMsg.psw = "请输入密码";
        } else {
          var user = { userName: this.userName, psw: this.passWord };
          sessionStorage.setItem("user", JSON.stringify(user));
          this.$router.push({ path: "/" });
        }
      }
      if (this.tabKey == 2) {
      }
    }
  }
};
</script>


<style lang="less">
.login-container {
  min-width: 1120px;
  height: 100%;
  background: #f0f2f5;
  .row-box {
    height: 100%;
    & > div {
      height: 100%;
    }
    .left-aside {
      background: url(../assets/login_tl_bg.svg) 100% 10% no-repeat,
        url(../assets/login_bl_bg.svg) 20% 80% no-repeat;
    }
    .login-content-box {
      width: 368px;
      display: flex;
      align-items: center;
      justify-content: center;
      .login-content {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        .ant-row {
          width: 100%;
          margin-bottom: 16px;
        }
        .verCode{
            margin-bottom: 16px;
        }
        .slogan {
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
        }
        .errorMsg {
          color: red;
          margin-top: -10px;
          margin-bottom: 10px;
          transition: 0.3s;
        }
        .components-input {
          .ant-input-affix-wrapper {
            margin-bottom: 20px;
            .anticon {
              color: #ccc;
            }
          }
          .anticon-close-circle {
            cursor: pointer;
            color: #ccc;
            transition: color 0.3s;
            font-size: 12px;
            &:hover {
              color: #999;
            }
            &:active {
              color: #666;
            }
          }
        }
        .ant-row-flex {
          width: 100%;
        }
        .ant-tabs {
          width: 100%;
          .ant-tabs-bar {
            border-bottom: 0;
          }
          .ant-tabs-nav:first-of-type {
            margin-left: 40px;
          }
        }
        .login-btn-box {
          width: 100%;
          margin: 20px 0;
        }
        .others-methods {
          .anticon {
            cursor: pointer;
            padding-left: 10px;
            color: rgba(0, 0, 0, 0.2);
            font-size: 24px;
            &:hover {
              color: #1890ff;
            }
          }
        }
        .getVerCode {
          font-size: 14px;
          padding: 0 17px;
        }
      }
    }
    .right-aside {
      background: url(../assets/login_tr_bg.svg) 50% 10% no-repeat,
        url(../assets/login_br_bg.svg) 100% 80% no-repeat;
    }
  }
}
</style>



