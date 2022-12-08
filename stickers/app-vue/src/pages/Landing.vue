<template>
    <main class="landing-page-main">
        <h1>Welcome</h1>
        <router-link class="landing-page-link" to="/register">Register</router-link>
        <router-link class="landing-page-link" to="/login">Login</router-link>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.landing-page-main {
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

.landing-page-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #fff;
    text-decoration: none;
    margin-top: 1rem;
    font-size: large;
}
</style>