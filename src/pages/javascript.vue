<template>
  <a-row :gutter="16">
    <a-col :span="10">
      <a-card
        :bordered="false"
        :title="$t('m.javascript.inputTitle')"
      >
        <a-textarea
          :placeholder="$t('m.javascript.inputPlaceholder')"
          :rows="30"
          v-model="inputJs"
        />
      </a-card>
    </a-col>
    <a-col :span="4">
      <a-row type="flex" justify="center" style="margin-top:64px;">
        <a-button @click="beautify" style="width:100%;margin-bottom:8px;" :disabled="disabled">{{ $t('m.javascript.beautifyButton')}}</a-button>
        <a-button @click="compress" style="width:100%;margin-bottom:8px;" :disabled="disabled">{{ $t('m.javascript.compressButton') }}</a-button>
        <a-button @click="reset" style="width:100%;" :disabled="disabled">{{ $t('m.javascript.resetButton') }}</a-button>
      </a-row>
    </a-col>
    <a-col :span="10">
      <a-card
        :bordered="false"
        :title="$t('m.javascript.outputTitle')"
      >
        <a-textarea
          :placeholder="$t('m.javascript.outputPlaceholder')"
          :rows="30"
          readOnly
          v-model="outputJs"
        />
      </a-card>
    </a-col>
  </a-row>

</template>
<script>
import beautify from 'js-beautify'
import { Row, Col, Card, Button, Input } from 'ant-design-vue'
export default {
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-card': Card,
    'a-button': Button,
    'a-input': Input,
    'a-textarea': Input.TextArea
  },
  data () {
    return {
      inputJs: '',
      outputJs: ''
    }
  },
  computed: {
    disabled () {
      return this.inputJs === ''
    }
  },
  methods: {
    beautify () {
      this.outputJs = beautify.js(this.inputJs)
    },
    compress () {
      // let output = new CleanCSS().minify(this.inputJs)
      // this.outputJs = output.styles
    },
    reset () {
      this.inputJs = ''
      this.outputJs = ''
    }
  }
}
</script>
