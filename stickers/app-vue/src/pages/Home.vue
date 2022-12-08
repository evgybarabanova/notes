<template>
    <div>
        <MenuHeader />
        <SearchForm />
        <PostListVue />
        <PostFormVue />
    </div>
</template>

<script>
import PostFormVue from '@/components/PostForm.vue';
import PostListVue from '@/components/PostList.vue';
import MenuHeader from '@/components/MenuHeader.vue';
import SearchForm from '@/components/SearchForm.vue';

export default {
    components: {
        PostFormVue, PostListVue, MenuHeader, SearchForm
    }
}
</script>

<style>

</style>