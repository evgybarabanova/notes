<template>
        <form className="profile-page-password-form" onSubmit={handleUpdateUserPassword}>
            <div className="profile-page-oldPassword">
                <label htmlFor="oldPassword">Old password</label>
                <input name="oldPassword" type="password" placeholder="Enter your old password" />
            </div>
            <div className="profile-page-newPassword">
                <label htmlFor="newPassword">New password</label>
                <input name="newPassword" type="password" placeholder="Enter your new password" />
                <button className="profile-page__save-oldPassword-button" type="submit" onClick={handleUpdatePassword}>
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