<template>
    <div>
        <MenuHeader />
        <SearchForm />
        <PostForm @update="updateNote" />
        <PostList :notes="notes"/>
        <CreateNote @create="createNote" />
    </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue';
import SearchForm from '@/components/SearchForm.vue';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CreateNote from '@/components/CreateNote.vue';
import { retrieveNotes } from '@/logic';
import { retrieveUser } from '@/logic';
import { createNote } from '@/logic';
import { updateNote } from '@/logic'

export default {
    components: {
        MenuHeader, SearchForm, PostForm, PostList, CreateNote
    },
    data() {
        return {
            notes: [],
        }
    },
    created() {
        this.retrieveNotes()
    },
    methods: {
        createNote(text) {
            try {
                createNote(sessionStorage.token, "")
                    .then(() => retrieveNotes(sessionStorage.token))
                    // .then((notes) => notes.text)
                    .catch((error) => alert(error.message));
            } catch (error) {
                alert(error.message);
            }
        },

        updateNote(noteId, text) {
            try {
                updateNote(sessionStorage.token, noteId, text)
                    .then(() => retrieveNotes(sessionStorage.token))
                    .catch((error) =>
                        alert(error.message)
                    );
            } catch (error) {
                alert(error.message);
            }
        },

        retrieveNotes() {
            try {
                retrieveNotes(sessionStorage.token)
                    .then(notes => this.notes = notes)
                    .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>

<style>

</style>