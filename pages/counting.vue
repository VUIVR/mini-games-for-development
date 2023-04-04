<template>
  <el-row tag="h2">
    Считалочка
  </el-row>
  <el-row>
    Суть игры: Найти по порядку или в обратном порядке все цифры.
  </el-row>
  <el-row :gutter="10">
    <el-col :span="12">
      <el-space direction="vertical" size="large">
        <h4 style="margin-bottom: 0">Параметры счета</h4>
        <el-space wrap>
          <el-space direction="vertical" size="3" alignment="normal">
            <el-text tag="p">Первая цифра счета</el-text>
            <el-input-number :min="1" :max="99" v-model="startCount" label="Первая цифра счета"/>
          </el-space>
          <el-space direction="vertical" size="3" alignment="normal">
            <el-text tag="p">Последняя цифра счета</el-text>
            <el-input-number :min="1" :max="99" v-model="finishCount" label="Последняя цифра счета"/>
          </el-space>
        </el-space>
      </el-space>
    </el-col>
    <el-divider direction="vertical" />
    <el-col :span="12">
      <el-space direction="vertical" size="large">
        <h4 style="margin-bottom: 0">Параметры поля</h4>
        <el-space wrap>
          <el-space direction="vertical" size="3" alignment="normal">
            <el-text tag="p">Ширина поля</el-text>
            <el-input-number :min="1" :max="99" v-model="widthBoard" />
          </el-space>
          <el-space direction="vertical" size="3" alignment="normal">
            <el-text tag="p">Высота поля</el-text>
            <el-input-number :min="1" :max="99" v-model="heightBoard" />
          </el-space>
        </el-space>
      </el-space>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      startCount: 1,
      finishCount: 9,
      widthBoard: 3,
      heightBoard: 3
    }
  }
}
</script>

<style scoped>

</style>