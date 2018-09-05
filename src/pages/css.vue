<template>
  <a-row :gutter="16">
    <a-col :span="10">
      <a-card
        :bordered="false"
        :title="$t('m.css.inputTitle')"
      >
        <a-textarea
          :placeholder="$t('m.css.inputPlaceholder')"
          :rows="30"
          v-model="inputCss"
        />
      </a-card>
    </a-col>
    <a-col :span="4">
      <a-row type="flex" justify="center" style="margin-top:64px;">
        <a-button @click="beautify" style="width:100%;margin-bottom:8px;" :disabled="disabled">{{ $t('m.css.beautifyButton')}}</a-button>
        <a-button @click="reset" style="width:100%;" :disabled="disabled">{{ $t('m.css.resetButton') }}</a-button>
      </a-row>
    </a-col>
    <a-col :span="10">
      <a-card
        :bordered="false"
        :title="$t('m.css.outputTitle')"
      >
        <a-textarea
          :placeholder="$t('m.css.outputPlaceholder')"
          :rows="30"
          readOnly
          v-model="outputCss"
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
      inputCss: '',
      outputCss: ''
    }
  },
  computed: {
    disabled () {
      return this.inputCss === ''
    }
  },
  methods: {
    beautify () {
      this.outputCss = beautify.css(this.inputCss, { 'indent_size': 2, 'indent_char': ' ' })
    },
    reset () {
      this.inputCss = ''
      this.outputCss = ''
    }
  }
}
</script>
