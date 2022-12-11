<template>
<form class="login-page-form" @submit.prevent>
    <div class="login-page-email"> Email</div>
        <input v-model="user.email" name="email" type="email" placeholder="Enter your email" />
        <div class="login-page-password">Password</div>
        <input v-model="user.password" name="password" type="password" placeholder="Enter your password" />
        <button class="login-page-button" @click="loginUser">
          Login
        </button>
      </form>
</template>

<script>
    export default {
       data(){
        return {
            user: {
                email: "",
                password: "",
            }
        }
       } ,
       methods: {
        loginUser(){
            this.$emit('login', this.user)
            this.user = {
                email: "",
                password: "",
            }
        }
       }
    }
</script>

<style scoped>
.login-page-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

input {
  margin-left: 1rem;
  background-color: #fff;
}

.login-page-button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: large;
}

</style>