<template>
    <form @submit.prevent>
        <div class="sticker">
            <p 
            ref="text" 
            :contenteditable="true" 
            @keyup.up="updateNote"  
            class="sticker__text">
                {{ note.text }}
            </p>
        </div>
    </form>

</template>

<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            note: {
                text: ""
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
.sticker__text {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0;
}
</style>
