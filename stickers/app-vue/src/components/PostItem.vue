<template>  
  <div>
      <p class="sticker__text">{{ note.text }}</p>
      <button class="sticker__delete-button"
       @click="$emit('delete', note)">
          x
      </button>
  </div>
</template>

<script>
export default {
    props: {
    note: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.sticker__text {
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
}
</style>