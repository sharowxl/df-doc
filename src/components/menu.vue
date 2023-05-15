<template lang="html">
  <div class="menu">
    <df-menu
      :unique-opened="false"
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <df-menu-item :index='`/${rootPathName}/changeLog`'>
        更新日志
      </df-menu-item>
      <df-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
          <df-menu-item
            v-for='guide in guides'
            :index='`/${rootPathName}/${guide.path}`'
            :key='guide.path'
          >
            {{ guide.name }}
          </df-menu-item>
      </df-submenu>
      <df-submenu index="2" v-if="baseMenu.length">
        <template slot="title">
          <span>基础组件</span>
        </template>
        <df-menu-item-group
          :title="group.title"
          v-for="group in baseMenu"
          :key="group.title"
        >
          <df-menu-item
            :index="menu.path"
            v-for="menu in group.children"
            :key="menu.path"
          >
            {{ menu.name }}
          </df-menu-item>
        </df-menu-item-group>
      </df-submenu>
    </df-menu>
  </div>
</template>

<script>
export default {
  props: {
    rootPathName: String,
    guides: Array,
    pages: Object
  },
  data () {
    return {
      defaultActive: '/',
      baseMenu: []
    }
  },
  methods: {
    createMenu (group, page) {
      return {
        title: group,
        children: page.map(item => {
          return {
            name: `${item.path.charAt(0).toUpperCase()}${item.path.slice(1)} ${item.name}`,
            path: `/${this.rootPathName}/${item.path}`
          }
        })
      }
    },
    initBaseMenu () {
      const menus = []
      for (const key in this.pages) {
        if (Object.hasOwnProperty.call(this.pages, key)) {
          const element = this.pages[key]
          menus.push(this.createMenu(key, element))
        }
      }
      this.baseMenu = menus
      const path = this.$route.fullPath
      this.defaultActive = path === '/' ? '/' : path
    }
  },
  created () {
    this.initBaseMenu()
  }
}
</script>

<style lang="css">
</style>
