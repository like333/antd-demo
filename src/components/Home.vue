<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="desktop" />
          <span class="nav-text">工作台</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"> <a-icon type="file" /><span>表单</span></span>
          <a-menu-item key="2">基础表单</a-menu-item>
          <a-menu-item key="3">分布表单</a-menu-item>
          <a-menu-item key="4">高级表单</a-menu-item>
        </a-sub-menu>
         <a-sub-menu key="sub2">
          <span slot="title"> <a-icon type="user" /><span>bars</span></span>
          <a-menu-item key="5">标准列表</a-menu-item>
          <a-menu-item key="6">带筛选列表</a-menu-item>
          <a-menu-item key="7">筛选卡片列表</a-menu-item>
          <a-menu-item key="8">卡片列表</a-menu-item>
          <a-menu-item key="9">搜索列表</a-menu-item>
        </a-sub-menu>
         <a-sub-menu key="sub3">
          <span slot="title"> <a-icon type="profile" /><span>详情页</span></span>
          <a-menu-item key="10">基础详情页</a-menu-item>
          <a-menu-item key="11">高级详情页</a-menu-item>
        </a-sub-menu>
       
           <a-menu-item key="12">
          <a-icon type="table" />
          <span class="nav-text">表格</span>
        </a-menu-item>
       
       
        <a-menu-item key="13">
          <a-icon type="line-chart" />
          <span class="nav-text">分析页</span>
        </a-menu-item>
        <a-menu-item key="14">
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
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
}
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>