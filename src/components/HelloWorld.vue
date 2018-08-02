<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--循环mock制造的数据-->
    <ul>
      <li v-for="(r,index) in arr" :key="index">
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          {{r.opeName}}
        </a>
      </li>
    </ul>
    <!--国际化-->
    <div>
      <el-dropdown @command="selectLanguage">
        <span class="el-dropdown-link">
          语言<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="CN">中文</el-dropdown-item>
          <el-dropdown-item command="EN">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>{{this.$t('language.name')}}</div>
    </div>
    <!--icon字体-->
    <div class="iconfont icon-biaoqian">icon字体</div>
  </div>
</template>

<script>
import helloWorld from '../../mock/helloWorld'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld',
      arr: [],
      language: ''
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render () {
      this.arr = helloWorld.res.data.items
      this.$i18n.locale = 'CN'
    },
    selectLanguage (command) {
      this.$i18n.locale = command
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
