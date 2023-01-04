<template>

  <TransitionGroup name="list" tag="ul" class="list">
    <li class="list__item" v-for="note in notes" :key="note.id">
      <p class="sticker__text">
        {{ note.text }}
      </p>
    </li>
  </TransitionGroup>

</template>

<script>

export default {

props: {
    notes: {
      type: Array,
      required: true
    }
  },
  created(){
    console.log(this.notes, 'ffffffff');
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