<template>
    <div>
        <h1> about page asdsd </h1>
        <router-link :to="{ name : 'Home'}" >go home {{msg}}</router-link>
    </div>
</template>

<script>
export default {
    name: "About",
    data(){
        return {
            msg: "guapi!"
        }
    },
    created(){
        this.msg = this.$route.params.user_id;
    }
}
</script>
