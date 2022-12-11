<template>
    <form class="register-page-form" @submit.prevent>
        <div class="register-page-name"> Name</div>
        <input v-model="user.name" name="name" type="text" placeholder="Enter your name" />
        <div class="register-page-email"> Email</div>
        <input v-model="user.email" name="email" type="email" placeholder="Enter your email" />
        <div class="register-page-password"> Password</div>
        <input v-model="user.password" name="password" type="password" placeholder="Enter your password" />
        <button class="register-page-button" @click="registerUser">
            Register
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
            }
        }
    },
    methods: {
        registerUser() {
            this.$emit('register', this.user)
            this.user = {
                name: "",
                email: "",
                password: "",
            }
        }
    }
}
</script>

<style scoped>
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
</style>