<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line" >
        <span class="g-form-label">{{  }}：</span>
        <div class="g-form-input">
          <input type="text"
                  placeholder="请输入用户名">
        </div>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
