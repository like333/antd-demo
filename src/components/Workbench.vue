
<!-- WorkBench 工作台 -->
<template>
  <div>
    <a-row style="background:#fff; padding:24px;">
      <a-col>
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>工作台</a-breadcrumb-item>
        </a-breadcrumb>
        <h3 class="title">工作台</h3>
        <a-row type="flex" justify="space-between" >
          <a-col>
            <a-list itemLayout="horizontal">
              <a-list-item>
                <a-list-item-meta description="交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED">
                  <a slot="title" href="#">早安! userName 祝你开心每一天</a>
                  <a-avatar
                    :size="64"
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-col>
          <a-col>
            项目数
            <a-divider type="vertical" />团队内排名
            <a-divider type="vertical" />项目访问
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  padding: 10px 0;
}
</style>