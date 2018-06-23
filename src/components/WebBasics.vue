<template>
<div id="WebBasic">
  <center><h3>HTML 기본</h3></center>
  <div :class="$style['box']">
    <h4>태그 설명</h4>
    <div v-for="tag in tagList" :class="$style['item']"><div :class="$style['tag']">&lt;{{tag.tag}}&gt;</div><div>{{tag.desc}}</div></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [
        {tag: 'html', desc: 'HTML 루트 태그'},
        {tag: 'head', desc: '문서에 대한 기본 정보를 입력'},
        {tag: 'title', desc: '문서에 대한 제목 입력'},
        {tag: 'body', desc: '보이는 부분 개발'},
        {tag: 'h1~h5', desc: 'heading(표제), 1이 제일 크기가 큼'},
        {tag: 'a', desc: '하이퍼링크'},
        {tag: 'img', desc: '이미지'},
        {tag: 'button', desc: '버튼'},
        {tag: 'p', desc: '문단'},
      ]
    }
  }
}
</script>

<style lang="scss" module>
.box {
  margin: 1rem;
}
.item {
  margin-bottom: 0.5rem;
}
.tag {
  font-weight: bold;
}
</style>
