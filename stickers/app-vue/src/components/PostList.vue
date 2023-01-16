<template>
  <ul className="list">
    <li class="list__item" 
    v-for="note in notes"
    :note="note" 
    :key="note.id"
    @delete="$emit('delete', note)">
      <!-- <button className="sticker__delete-button" 
      @click="delete">
        x
      </button> -->
      
      <!-- <p class="sticker__text">
        {{ note.text }}
      </p> -->
    </li>
  </ul>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: {PostItem},
  props: {
    notes: { 
      type: Array,
      required: true,
    }
  },
  // methods: {
  //   deleteNote() {
  //     this.$emit('delete', note)
  //     }
  // }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  background-color: yellow;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  width: 50vw;
  margin-bottom: 2rem;
}

/* .sticker__text {
  background-color: yellow;
  border: none;
  outline: none;
  margin: 0;
}

.sticker__delete-button {
  border: none;
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
} */
</style>