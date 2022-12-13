<template>
    <form className="profile-page-name-form" onSubmit={handleUpdateUserName}>
            <div className="profile-page-name">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" id="name" placeholder="Enter your new name" defaultValue={user?.name} />
                <button className="profile-page__save-button" type="submit">
                    save
                </button>
            </div>
        </form>
</template>

<script>
    export default {
       methods:{
        
       } 
    }
</script>

<style scoped>

</style>