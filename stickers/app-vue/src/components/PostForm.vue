<template>
    <form @submit.prevent>

        <div class="sticker">
            <p type="text"
             contenteditable="true"
             v-on:keyup.up="updateNote" 
             class="sticker__text">
            </p>
        </div>
    </form>

</template>

<script>

export default {
    data() {
        return {
            note: {
                text: '',
            }
        }
    },
    methods: {
        updateNote() {
            this.$emit('update', this.note)
            this.note = {
                text: ""
            }
        }
    }
}

</script>

<style scoped>

</style>