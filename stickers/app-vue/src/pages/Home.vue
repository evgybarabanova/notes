<template>
    <div>
        <MenuHeader />
        <SearchForm />
        <PostForm @create="createNote" />
    </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue';
import SearchForm from '@/components/SearchForm.vue';
import PostForm from '@/components/PostForm.vue';
import { retrieveNotes } from '@/logic';
import { createNote } from '@/logic';

export default {
    components: {
        MenuHeader, SearchForm, PostForm
    },
    data() {
        return {
            notes: []
        }
    },
    methods: {
        retrieveNotes(note) {
            try {
                const { text } = note

                retrieveNotes(text)
                    .then((token) => {
                        sessionStorage.token = token;
                    })
                    .catch((error) => alert(error.message));
            } catch (error) {
                alert(error.message);
            }
        },
        createNote(note) {
            const { text } = note
            try {
                createNote(text)
                    .then((token) => retrieveNotes(sessionStorage.token = token))
                    .then((notes) => {notes.push(note)})
                    .catch((error) => alert(error.message));
            } catch (error) {
                alert(error.message);
            }
        }
    }
}
</script>

<style>

</style>