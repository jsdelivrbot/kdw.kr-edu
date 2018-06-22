<template>
<div id="main">
  <center><h2>KDW KR EDU</h2></center>
  <div :class="$style['list']">
    <el-card :class="$style['course']">
      <div slot="header">
        <span>C언어 기본</span>
        <router-link to="cbasics"><el-button style="float: right; padding: 3px 0" type="text">공부하기</el-button></router-link>
      </div>
      <div>
        연산자, 조건문, 랜덤함수, 반복문, 중첩반복문, 배열
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" module>
.list {
  display: flex;
  justify-content: center;
  .course {
    width: 30rem;
  }
}
</style>
