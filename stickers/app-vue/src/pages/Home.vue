<template>
    <div>
        <MenuHeader />
        <SearchForm @query="searchNotes"/>
        <PostForm @update="updateNote" />
        <PostList :notes="notes" />
    </div>
        <CreateNote @create="createNote" />
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
import { updateNote } from '@/logic';
import { searchNotes } from '@/logic';
import { deleteNote} from '@/logic';

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
        createNote() {
            try {
                createNote(sessionStorage.token, "")
                    .then(() => retrieveNotes(sessionStorage.token))
                    .then(() => window.location.reload())
                    .catch((error) => alert(error.message));
            } catch (error) {
                alert(error.message);
            }
        },

        deleteNote(note) {
    try {
      deleteNote(sessionStorage.token)
        .then(() => retrieveNotes(sessionStorage.token))
        .then(() => this.notes.filter(p => p.id !== note.id))
        .then(() => window.location.reload())
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
        },

        searchNotes(query){
            try {
                searchNotes(sessionStorage.token, query)
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