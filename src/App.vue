<template>
    <div id="app">
        <router-view />
        <FooterGuide v-show="$route.meta.showFooter" />
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
    name: "App",
    mounted() {
        // this.$store.dispatch('getAddress')
        this.getAddress()
    },
    methods: {
        ...mapActions(['getAddress'])
    },
    components: {
        FooterGuide,
    },
};
</script>

<style lang="stylus" ref="stylesheet/styles">
    .app
        width 100%;
        height 100%;
        background #f5f5f5;
</style>
