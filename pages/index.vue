<template>
    <el-row>
      Контент
    </el-row>
</template>

<script>
import rusLang from 'element-plus/dist/locale/ru.min' //TODO перенести локализацию в layout
export default {
  data() {
    return {
      value1: ''
    }
  },
  computed: {
    rusLang() { return rusLang }
  },
}


</script>

<style>

</style>



