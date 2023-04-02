<template>
  <el-config-provider :locale="ruLang">
    <el-container>
      <el-header height="50px">
        <HeaderContent />
      </el-header>
      <el-main>
        <slot/>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script>
import ruLang from 'element-plus/dist/locale/ru.min'
export default {
  computed: {
    ruLang() {
      return ruLang
    }
  },
}
</script>

<style>
.el-header {
  background: aquamarine;
}
</style>