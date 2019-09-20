<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" :selectedKeys="[selKey]">
        <a-menu-item key="1" @click="menuClick">
          <a-icon type="desktop" />
          <span class="nav-text">工作台</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="file" />
            <span>表单</span>
          </span>
          <a-menu-item key="2" @click="menuClick">基础表单</a-menu-item>
          <a-menu-item key="3" @click="menuClick">分布表单</a-menu-item>
          <a-menu-item key="4" @click="menuClick">高级表单</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="align-left" />
            <span>列表</span>
          </span>
          <a-menu-item key="5" @click="menuClick">标准列表</a-menu-item>
          <a-menu-item key="6" @click="menuClick">带筛选列表</a-menu-item>
          <a-menu-item key="7" @click="menuClick">筛选卡片列表</a-menu-item>
          <a-menu-item key="8" @click="menuClick">卡片列表</a-menu-item>
          <a-menu-item key="9" @click="menuClick">搜索列表</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="profile" />
            <span>详情页</span>
          </span>
          <a-menu-item key="10" @click="menuClick">基础详情页</a-menu-item>
          <a-menu-item key="11" @click="menuClick">高级详情页</a-menu-item>
        </a-sub-menu>

        <a-menu-item key="12" @click="menuClick">
          <a-icon type="table" />
          <span class="nav-text">表格</span>
        </a-menu-item>

        <a-menu-item key="13" @click="menuClick">
          <a-icon type="line-chart" />
          <span class="nav-text">分析页</span>
        </a-menu-item>
        <a-menu-item key="14" @click="menuClick">
          <a-icon type="fund" />
          <span class="nav-text">监控页</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0, boxShadow:'0px 0px 5px rgba(0,0,0,.1)',zIndex:2}">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col>
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </a-col>
          <a-col class="tool-group">
            <a-icon class="tool-item search" type="search" />
            <a-tooltip placement="bottom">
              <template slot="title">
                <span>prompt text</span>
              </template>
              <span class="tool-item">
                <a-icon type="question-circle" />
              </span>
            </a-tooltip>
            <a-dropdown v-model="visible" placement="bottomRight" :trigger="['click']">
              <span class="tool-item">
                <a-badge :count="9" :overflowCount="99" :offset="[5,-3]">
                  <a-icon type="bell" />
                </a-badge>
              </span>
              <a-menu slot="overlay" >
                <a-tabs defaultActiveKey="1" style="width:336px;" >
                  <a-tab-pane tab="notice" key="1">
                    <!-- <a-list itemLayout="horizontal" :dataSource="notification">
                      <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta :description="item.date">
                          <a slot="title" href="#">{{item.title}}</a>
                          <a-avatar slot="avatar" src="#" />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list>-->
                    Content of Tab Pane 1
                  </a-tab-pane>
                  <a-tab-pane tab="message" key="2">
                    <!-- <a-list itemLayout="horizontal" :dataSource="data">
                      <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta :description="{{item.description}}">
                          <a slot="title" href="#">{{item.title}}</a>
                          <a-avatar slot="avatar" src="#" />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list>-->
                    Content of Tab Pane 1
                  </a-tab-pane>
                  <a-tab-pane tab="todoList" key="3">
                    <!-- <a-list itemLayout="horizontal" :dataSource="data">
                      <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta :description="{{item.description}}">
                          <a slot="title" href="#">{{item.title}}</a>
                          <a-avatar slot="avatar" src="#" />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list>-->
                    Content of Tab Pane 3
                  </a-tab-pane>
                </a-tabs>
              </a-menu>
            </a-dropdown>
            <a-dropdown placement="bottomRight">
              <span class="tool-item">
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span class="userName">Serati Ma</span>
              </span>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    <a-icon type="user" />个人中心
                  </a>
                </a-menu-item>

                <a-menu-item key="1">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    <a-icon type="setting" />设置
                  </a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="2">
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    <a-icon type="poweroff" />退出登录
                  </a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <div :style="{ background: '#f0f2f5', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
const data = {
  notification: [
    {
      title: "你收到了14份新周报",
      date: "2017-9-12",
      iconStyle: ""
    },
    {
      title: "你推荐的 曲妮妮 已通过第三轮面试",
      date: "2017-9-12",
      iconStyle: ""
    },
    {
      title: "这种模板可以区分多种通知类型",
      date: "2017-9-12",
      iconStyle: ""
    },
    {
      title: "左侧图标用于区分不同的类型",
      date: "2017-9-12",
      iconStyle: ""
    },
    {
      title: "内容不要超过两行字，超出时自动截断",
      date: "2017-9-12",
      iconStyle: ""
    }
  ],
  message: [
    {
      title: "曲丽丽 评论了你",
      description: "描述信息描述信息描述信息",
      date: "2017-9-12",
      avatar: ""
    },
    {
      title: "朱偏右 回复了你",
      description: "这种模板用于提醒谁与你发生了互动，左侧放[谁]的头像",
      date: "2017-9-12",
      avatar: ""
    },
    {
      title: "曲丽丽 评论了你",
      description: "这种模板用于提醒谁与你发生了互动，左侧放[谁]的头像",
      date: "2017-9-12",
      avatar: ""
    }
  ],
  todoList: [
    {
      title: "任务名称",
      description: "任务需要在2017-01-12 20:00 前启动",
      state: "未开始"
    },
    {
      title: "第三方紧急代码变更",
      description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
      state: "马上到期"
    },
    {
      title: "信息安全考试",
      description: "指派竹尔 2017-01-09 前完成更新并发布",
      state: "已耗时8天"
    },
    {
      title: "ABCD版本发布",
      description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务",
      state: "进行中"
    }
  ]
};

export default {
  data() {
    return {
      selKey: "",
      collapsed: false,
      data: data,
      visible: false
    };
  },
  methods: {
    // handleMenuClick(e) {
    //   console.log(e.key);
    //   if (e.key === "2") {
    //     this.visible = false;
    //   }
    // },
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },

    menuClick(item, key, keyPath) {
      this.selKey = item.key;
      console.log("key:", item.key);
      switch (item.key) {
        case "1":
          this.$router.push("workBench");
          break;
        case "2":
          this.$router.push("basicForm");
          break;
        case "3":
          this.$router.push("disForm");
          break;
        case "4":
          this.$router.push("advaForm");
          break;
        case "5":
          this.$router.push("standardList");
          break;
        case "6":
          this.$router.push("filterList");
          break;
        case "7":
          this.$router.push("filterCardList");
          break;
        case "8":
          this.$router.push("cardList");
          break;
        case "9":
          this.$router.push("searchList");
          break;
        case "10":
          this.$router.push("basicPage");
          break;
        case "11":
          this.$router.push("advancedPage");
          break;
        case "12":
          this.$router.push("table");
          break;
        case "13":
          this.$router.push("analysis");
          break;
        case "14":
          this.$router.push("monitor");
          break;
      }
    },
    callback(key) {
      console.log(key);
    }
  },
  mounted: function() {
    this.selKey = "1";
  }
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: url(../assets/menu_logo.svg) 9px / auto 28px no-repeat;
  margin: 16px;
}
.ant-layout-sider {
  height: 100vh;
}

#components-layout-demo-responsive .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-responsive .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-responsive .tool-group {
  padding-right: 24px;
}

#components-layout-demo-responsive .tool-group .tool-item {
  height: 100%;
  display: inline-block;
  padding: 0 14px;
  cursor: pointer;
}
#components-layout-demo-responsive .tool-group span:hover {
  background-color: rgba(0, 0, 0, 0.02);
}
#components-layout-demo-responsive .tool-group .userName {
  padding-left: 10px;
}
</style>