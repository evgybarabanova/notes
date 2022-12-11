<template>
  <main class="register-page-main">
    <h1>Register here</h1>
    <RegisterForm @register="registerUser" />
    <router-link class="link" to="/">back</router-link>
  </main>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'
import { registerUser } from '@/logic'
export default {
  components: {
    RegisterForm
  },
  data() {
    return {
    }
  },
  methods: {
    registerUser(user) {
      try {
        const { name, email, password } = user

        registerUser(name, email, password)
          .then(() => {
            this.$router.push({ path: '/login' });
          })
          .catch(error => {
            alert(error.message)
          })
      } catch (error) {
        alert(error.message)
      }
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

.link {
  margin-top: 1rem;
  font-size: large;
  color: #fff;
}
</style>