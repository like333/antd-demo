<template>
  <div class="login-container">
    <a-row type="flex" justify="center" align="middle" class="row-box">
      <a-col class="left-aside" :span="8"></a-col>

      <a-col :span="8" class="login-content-box">
        <div class="login-content">
          <img :src="logoSrc" width="274" height="44" class="logo" />
          <p class="slogan">Ant Design Pro 是东半球最具影响力的Web设计规范</p>

          <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="账户密码登录" key="1">
              <div class="components-input">
                <a-input size="large" placeholder="账户" @change="onChange" v-model="userName" ref="userNameInput">
                  <a-icon slot="prefix" type="user" />
                  <a-icon v-if="userName" slot="suffix" type="close-circle" @click="userNameEmpty" />
                </a-input>
                <a-input size="large" placeholder="密码" type="password" v-model="passWord" ref="passWordInput">
                  <a-icon slot="prefix" type="lock" />
                  <a-icon v-if="passWord" slot="suffix" type="close-circle" @click="pwdEmpty" />
                </a-input>
              </div>
            </a-tab-pane>

            <a-tab-pane tab="手机号登录" forceRender key="2">
              <div class="components-input">
                <a-input size="large" placeholder="手机号" maxLength="11" v-model="phoneNum" ref="phoneNumInput">
                  <a-icon slot="prefix" type="tablet" />
                  <a-icon v-if="phoneNum" slot="suffix" type="close-circle" @click="phoneNumEmpty" />
                </a-input>
                 <a-input-group>
                  <a-col :span="17">
                    <a-input size="large" placeholder="验证码" v-model="verCode" ref="verCodeInput">
                      <a-icon slot="prefix" type="mail" />
                      <a-icon v-if="verCode" slot="suffix" type="close-circle" @click="verCodeEmpty" />
                    </a-input>
                  </a-col>
                  <a-col :span="7">
                    <a-button class="getVerCode" size="large">获取验证码</a-button>
                  </a-col>
                </a-input-group>
              </div>
            </a-tab-pane>
          </a-tabs>

          <a-row type="flex" justify="space-between">
            <a-col>
              <a-checkbox @change="onChange">自动登录</a-checkbox>
            </a-col>
            <a-col>
              <a>忘记密码</a>
            </a-col>
          </a-row>

          <div class="login-btn-box">
            <a-button type="primary" size="large" block>登录</a-button>
          </div>

          <a-row type="flex" justify="space-between">
            <a-col>
              <p class="others-methods">
                其他登录方式
                <a-icon type="alipay-circle" />
                <a-icon type="taobao-circle" />
                <a-icon type="weibo-circle" />
              </p>
            </a-col>
            <a-col>
              <a>注册账户</a>
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
      phoneNum:"",
      verCode:"",
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    // 清空用户名
    userNameEmpty() {
      this.$refs.userNameInput.focus()
      this.userName = ''  
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
        display: flex;
        flex-flow: column;
        align-items: center;
        .slogan {
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
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
            padding-left: 16px;
            color: rgba(0, 0, 0, 0.2);
            font-size: 24px;
            &:hover {
              color: #1890ff;
            }
          }
        }
        .getVerCode{
          font-size: 14px;
          padding:0 17px;
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



