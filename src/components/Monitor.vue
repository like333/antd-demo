<!-- Monitor 监控页 -->
<template>
<div>
 <h2>监控页</h2>
  <a-tabs defaultActiveKey="1">
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
</div>
 
</template>

<script>
export default {};
</script>

<style lang="sass">

</style>