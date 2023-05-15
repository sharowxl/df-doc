<template>
  <div class="header">
    <h1 class="logo">
      <img style="width: 100%" src="@/assets/img/logo.png" />
    </h1>
    <ul class="nav">
      <li class="nav-item">
        <router-link active-class="active" to="/component">
          基础组件
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/professional">
          业务组件
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/pageLayout">
          典型页面模板
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/css">
          CSS
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/js">
          JS
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/gymk">
          业务公用模块
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/server">
          服务地址
        </router-link>
      </li>
      <li class="nav-item">
        <router-link active-class="active" to="/standard">
          规范
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  box-sizing: border-box;
  .logo {
    width: 200px;
    height: auto;
    line-height: 1;
  }
  .nav {
    display: flex;
    line-height: 80px;
    margin: 0;
    .nav-item {
      padding: 0 22px;
      a {
        text-decoration: none;
        color: #1989fa;
        opacity: 0.8;
        display: block;

        &.active,
        &:hover {
          opacity: 1;
        }

        &.active {
          border-bottom: 2px solid #409eff;
        }
      }
    }
  }
}
</style>
