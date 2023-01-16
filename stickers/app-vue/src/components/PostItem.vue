<template>  
<div class="note">
  <div>
      <p class="sticker__text">{{ note.text }}</p>
      <button className="sticker__delete-button"
       @click="$emit('delete', note)">
          x
      </button>
  </div>
</div>
</template>

<script>
export default {
    props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
p {
  background-color: yellow;
  border: none;
  outline: none;
  margin: 0;
}

button {
  border: none;
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}
</style>