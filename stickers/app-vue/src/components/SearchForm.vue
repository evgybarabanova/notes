<template>
    <div>
        <form className="home-page-main-form" @submit.prevent>
          <div className="home-page-main__search">
            <input
              v-model="note.query"
              type="search"
              name="query"
              placeholder="search notes"
              id="query"
            />
            <button
              className="home-page-header__search-button"
              @click="searchNotes"
            >
              Search
            </button>
          </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            note: {
            query: ""  
            }
          }
        }, 
        methods: {
          searchNotes() {
            this.$emit('query', this.query)
          }
        }
    }
</script>

<style scoped>
.home-page-main-form{
  margin-top: 80px;
}

.home-page-main__search {
  display: flex;
  justify-content: center;
  align-items: center;
}

input{
  background-color: #fff;
}

.search {
  border: none;
}

.home-page-header__search-button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
}

</style>