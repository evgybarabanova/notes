<template>
     <header className="home-page-header">
        <h1 className="home-page-header__title">Hello!</h1>

        <button
          className="home-page-header__menu-button"
        >
          Menu
        </button>
          <div className="home-page-header__menu-link">
            <!-- <Link className="link" to="settings">
              Settings
            </Link> 
            <button
            className="home-page-header__logout-button"
            >
            Logout
          </button>
        -->
          </div>
      </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.home-page-header {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: #1e90ff;
  font-size: medium;
}

.home-page-header__title {
  color: #fff;
  margin-right: 10px;
}

.home-page-header__logout-button, .home-page-header__menu-button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>