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
                type: Object,
                required: true,
               }
        }
    },
    methods: {
        updateNote() {
            this.$emit('update', this.note)
        }
    }
}

</script>

<style scoped>
.sticker__text {
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
}
</style>