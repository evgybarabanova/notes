<template>
  <main class="login-page-main">
    <h1>Login</h1>
    <LoginForm @login="authenticateUser"/>
    <router-link class="link" to="/">back</router-link>
  </main>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import { authenticateUser } from '@/logic';
export default {
  components: {
    LoginForm
  },
  data() {
    return {
    }
  },
  methods: {
    authenticateUser(user) {
      try {
        const { email, password } = user

        authenticateUser(email, password)
          .then((token) => {
            sessionStorage.token = token;

            this.$router.push({ path: '/home' });
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        alert(error.message);
      }
    }
  }
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

.link {
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  font-size: large;
}
</style>