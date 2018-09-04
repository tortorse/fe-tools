<template>
  <a-layout id="layout-custom-trigger">
    <a-affix>
      <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
        :style="{ height: '100vh'}"
      >
        <div class="logo">
          <a-icon type="html5" />
          <h1 v-if="!collapsed">{{ $t('m.app.name') }}</h1>
        </div>
        <a-menu theme="dark" model="inline" @click="handleClick" v-model="selected">
          <a-menu-item key="1">
            <a-icon type="copyright" />
            <span>{{ $t('m.menu.css')}}</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="code-o" />
            <span>{{ $t('m.menu.javascript')}}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
    </a-affix>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ padding: '24px', minHeight: '280px' }">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout, Affix, Icon, Menu, Row, Col } from 'ant-design-vue'
export default {
  name: 'layout',
  components: {
    'a-layout': Layout,
    'a-layout-sider': Layout.Sider,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-affix': Affix,
    'a-icon': Icon,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-row': Row,
    'a-col': Col
  },
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    selected () {
      if (this.$route.name === 'css') {
        return ['1']
      } else if (this.$route.name === 'javascript') {
        return ['2']
      }
    }
  },
  methods: {
    handleClick (e) {
      if (e.key === '1') {
        this.$router.replace({ name: 'css' })
      } else if (e.key === '2') {
        this.$router.replace({ name: 'javascript' })
      }
    }
  }
}
</script>
<style>
#layout-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding:  0 24px;
  cursor: pointer;
  transition: color .3s;
}
#layout-custom-trigger .trigger:hover {
  color: #1890ff;
}
#layout-custom-trigger .logo {
  height: 64px;
  line-height: 64px;
  padding-left: 24px;
  transition: all .3s;
  background: #002140;
  overflow: hidden;
  color: orange;
  font-size: 32px;
}

#layout-custom-trigger .logo h1 {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  font-family: "Myriad Pro","Helvetica Neue",Arial,Helvetica,sans-serif;
  position: relative;
  top: -6px;
}
</style>
