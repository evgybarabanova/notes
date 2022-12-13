<template>
    <form @submit.prevent>
        <ul className="list">
            <li className="list__item" v-for="note in notes">
                <div className="sticker">
                       <p>
                           {{ note.text }}
                       </p>
                </div>
            </li>
        </ul>
    </form>
     <button className="home-page-footer__add-button" @click="createNote">
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
        },
        retrieveNotes() {
            this.$emit('retrieve', this.note)
            this.note = {   
                text: ""
            }
        }
    }
}
</script>

<style scoped>

</style>