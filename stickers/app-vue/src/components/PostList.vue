<template>
  <ul className="list">
    <li class="list__item" v-for="note in notes" :key="note.id">
      <button className="sticker__delete-button">
        x
      </button>
      <p class="sticker__text">
        {{ note.text }}
      </p>
    </li>
  </ul>
</template>

<script>

export default {

  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.notes, 'ffffffff');
  }
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

.sticker__text {
  background-color: yellow;
  border: none;
  outline: none;
  margin: 0;
}

.sticker__delete-button{
  border: none;
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  padding: 0;
  cursor: pointer; 
}
</style>