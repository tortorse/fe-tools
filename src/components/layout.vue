<template>
  <a-layout id="layout-custom-trigger">
    <a-affix>
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
        :style="{ height: '100vh'}"
      >
        <div class="logo">
          <a-icon type="html5" />
          <h1 v-if="!collapsed">
            {{ $t('m.app.name') }}
          </h1>
        </div>
        <a-menu
          v-model="selected"
          theme="dark"
          model="inline"
          @click="handleClick"
        >
          <a-menu-item key="css">
            <a-icon type="copyright" />
            <span>{{ $t('m.menu.css') }}</span>
          </a-menu-item>
          <a-menu-item key="javascript">
            <a-icon type="code-o" />
            <span>{{ $t('m.menu.javascript') }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
    </a-affix>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0;display: flex;justify-content: space-between;"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => collapsed = !collapsed"
        />
        <div style="padding-right:24px;">
          <a-button @click="changeLanguage">
            {{ $t('m.app.language') }}
          </a-button>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '24px', minHeight: '280px' }">
        <slot />
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        FE tools ©2016 Created by
        <a href="https://www.tortorse.com">tortorse</a>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout, Affix, Icon, Menu, Button } from 'ant-design-vue'
export default {
  name: 'Layout',
  components: {
    'a-layout': Layout,
    'a-layout-sider': Layout.Sider,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
    'a-affix': Affix,
    'a-icon': Icon,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-button': Button
  },
  data () {
    return {
      collapsed: false,
      selected: [this.$route.name]
    }
  },
  methods: {
    handleClick (e) {
      if (e.key === 'css') {
        this.$router.push({ name: 'css' })
      } else if (e.key === 'javascript') {
        this.$router.push({ name: 'javascript' })
      }
    },
    changeLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
    }
  }
}
</script>
<style>
#layout-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#layout-custom-trigger .trigger:hover {
  color: #1890ff;
}
#layout-custom-trigger .logo {
  height: 64px;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
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
  font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: relative;
  top: -6px;
}
</style>
