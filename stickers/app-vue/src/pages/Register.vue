<template>
  <main class="register-page-main">
    <h1>Register here</h1>
    <form class="register-page-form">
      <div class="register-page-name"> Name</div>
      <input v-bind:value="name" @input="name = $event.target.value" name="name" type="text"
        placeholder="Enter your name" />
      <div class="register-page-email"> Email</div>
      <input v-bind:value="email" @input="email = $event.target.value" name="email" type="email"
        placeholder="Enter your email" />
      <div class="register-page-password"> Password</div>
      <input v-bind:value="password" @input="password = $event.target.value" name="password" type="password"
        placeholder="Enter your password" />
      <button class="register-page-button" @click="registerUser">
        Register
      </button>
    </form>
    <router-link class="link" to="/">back</router-link>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    }
  },
  methods: {
    registerUser() {
      // const newUser = {

      // }
    }
  }
}
</script>

<style scoped>
.register-page-main {
  background-color: #1e90ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
  padding-top: 10rem;
  font-size: large;
  width: 100%;
  height: 100%;
  color: #fff;
  left: 0%;
}

.register-page-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

input {
  margin-left: 1rem;
  background-color: #fff;
}

.register-page-button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: large;
  padding-bottom: 1rem;
}

.link {
  margin-top: 1rem;
  font-size: large;
  color: #fff;
}
</style>