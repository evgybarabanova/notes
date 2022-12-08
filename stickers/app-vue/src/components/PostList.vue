<template>
    <ul className="list">
            <li className="list__item">
                <div className="sticker" v-for="note in notes">
                    <p
                        className="sticker__text"
                      >
                        {{note.text}}
                      </p>
                </div>
            </li>
          </ul> 
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>