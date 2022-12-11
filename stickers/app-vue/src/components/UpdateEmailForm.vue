<template>
<form className="profile-page-email-form" onSubmit={handleUpdateUserEmail}>
            <div className="profile-page-email">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="Enter your new email" defaultValue={user?.email}
                    id="email" />
                <button className="profile-page__save-button" type="submit">
                    save
                </button>
            </div>
        </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>