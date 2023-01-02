<template>
    <ul class="list">
        <li class="list__item" v-for="note in notes">
            <div class="sticker">
                <p class="sticker__text">
                    {{ note.text }}
                </p>
            </div>
        </li>
    </ul>
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
         retrieveNotes() {
             this.$emit('retrieveNote', this.note)
             this.note = {
                 text: ""
             }
         }
    }
}
</script>

<style>
.list {
    list-style: none;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sticker {
    background-color: yellow;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    width: 50vw;
    margin-bottom: 2rem;
}

.sticker__text {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0;
}
</style>