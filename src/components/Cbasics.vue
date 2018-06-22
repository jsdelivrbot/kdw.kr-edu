<template>
<div id="Cbasic">
  <center><h3>C언어 기본</h3></center>
  <div :class="$style['box']">
    <h4>C언어 출력타입</h4>
    %d: 10진수(정수형)<br>
    %f: 실수형<br>
    %o: 8진수<br>
    %x: 16진수<br>
    %c: 문자<br>
    %s: 문자열<br>
  </div>
  <div :class="$style['box']">
    <h4>C언어 연산자</h4>
    단항 연산자: ++, --, +, - 등<br>
    이항 연산자: +, -, *, /, %, &lt;&lt;, &gt;&gt;<br>
    삼항 연산자: 조건?참일때:거짓일때<br>
    산술 연산자 : + , - , * , / , %<br>
    관계 연산자 : &lt; , &lt;= , == , != , => , &gt;<br>
    논리 연산자 : &amp;&amp; , | | , !<br>
    증감 연산자 : ++ , --<br>
    비트 연산자 : &amp; , | , ∧ , ~ , &lt;&lt;, &gt;&gt;<br>
    대입 연산자 : = , += , -= , *= , /= 등<br>
    기타 연산자 :  ?  : ,  ,(콤마) , sizeof , pointer ( * , & ) ,  -&gt;<br>
  </div>
  <div :class="$style['box']">
    <h4>C언어 조건문</h4>
    if(조건) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;실행();<br>
    }<br>
  </div>
  <div :class="$style['box']">
    <h4>C언어 반복문</h4>
    <p>순서대로 실행</p>
    <br>
    <p>① -> (조건이 맞으면) -> ② -> ①로 다시 돌아감</p>
    while(조건①) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;실행();②<br>
    }<br>
    <br>
    <p>① -> ② -> (조건이 맞으면) -> ③ -> ④ -> ①로 다시 돌아감</p>
    for(초기화①;조건②;증감식④) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;실행();③<br>
    }<br>
    <br>
    <p>① -> ② -> (조건이 맞으면) -> ①로 다시 돌아감</p>
    do { <br>
    &nbsp;&nbsp;&nbsp;&nbsp;실행();①<br>
    } while(조건);②<br>
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
.box {
  margin: 1rem;
}
</style>
