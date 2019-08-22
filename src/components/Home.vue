<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
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
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return{
      selKey:''
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    menuClick(item, key, keyPath) {
      this.selKey = item.key
      console.log("key:",item.key)
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
    }
  },
  mounted:function(){
   this.selKey = '1'
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>