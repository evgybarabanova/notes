<template>
    <main class="login-page-main">
      <h1>Login</h1>
      <form class="login-page-form">
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="Enter your email" />
        <div class="register-page-password"></div>
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button class="login-page-button" type="submit">
          Login
        </button>
      </form>
      <router-link class="link" to="/">back</router-link>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.login-page-main {
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

.link {
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  font-size: large;
}
</style>