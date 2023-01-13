<template>
    <div class="home-page-footer">
        <button class="home-page__add-button" @click="createNote">
            +
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notes: {
                text: ""
            }
        }
    },
    methods: {
        createNote() {
            this.$emit('create', this.note)
            this.note = {
                text: ""
            }
        }
    }
}
</script>

<style scoped>

.home-page-footer{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #1e90ff;
}
.home-page__add-button {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: x-large;
    
}
</style>