<template>
    <button class="home-page__add-button" @click="createNote">
        +
    </button>
</template>

<script>
export default {
    data() {
        return {
            notes: {
                text: ""
            }
        }
    },
    methods: {
        createNote() {
            this.$emit('create', this.note)
            this.note = {
                text: ""
            }
        }
    }
}
</script>

<style scoped>
.home-page__add-button {
    display: flex;
    justify-content: center;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>