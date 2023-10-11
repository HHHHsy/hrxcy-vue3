<template>
  <!-- <div class="hr-main">
    <div class="hr-content">
      <div class="font-top">
        <p>牢大！牢大！！o.0</p>
      </div>
    </div>
  </div> -->
  
  <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
</template>

<script setup lang="ts">
</script>

<style>

.hr-content{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hr-content .font-top p{
  font-size: 5.25rem;
  font-family: 'Times New Roman', Times, serif;
  box-shadow: 0.3125rem 0.0625rem 0.3125rem 0.0625rem;
  animation-name: bulink;
  animation-duration: 901s;
  animation-iteration-count: infinite;
}
.hr-content .font-top p:hover{
  color: crimson;
}
@keyframes bulink {
  0% {
    transform: scale(0.1);
    opacity: 0;
    color: black;
  }
  25% {
    color: yellow;
  }
  50% {
    transform: scale(1);
    opacity: 1;
    color: orangered;
  }
  75% {
    color: hotpink;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
    color: black;
  }
}

</style>