<template>
<div id="main">
  <center><h2>KDW KR EDU</h2></center>
  <div :class="$style['list']">
    <el-card v-for="card in list" :class="$style['course']" key="card.router">
      <div slot="header">
        <span>{{card.title}}</span>
        <router-link :to="card.router"><el-button style="float: right; padding: 3px 0" type="text">공부하기</el-button></router-link>
      </div>
      <div>
        {{card.desc}}
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {title: 'C언어 기본', router: 'cbasics', desc: '연산자, 조건문, 반복문 등'},
        {title: '웹 기본', router: 'webbasics', desc: 'HTML 태그 설명 등'}
      ]
    }
  }
}
</script>

<style lang="scss" module>
.list {
  display: flex;
  justify-content: space-evenly;
  .course {
    width: 25rem;
  }
}
</style>
