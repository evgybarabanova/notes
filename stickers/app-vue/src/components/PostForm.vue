<template>
  <div>
    <button class="home-page-footer__add-button" @click="createNote">
      +
    </button>
    <!-- <button  @click="retrieveNotes">
      set post
    </button> -->
  </div>
</template>

<script>
import retrieveNotes from '@/logic';
import createNote from '@/logic';
import axios from 'axios';
export default {
  methods: {
  }
}

</script>

<style scoped>
.home-page-footer__add-button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: x-large;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
}
</style>