<template>
  <el-config-provider :locale='rusLang'>
    <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Выберите дату"
    />
  </el-config-provider>
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



