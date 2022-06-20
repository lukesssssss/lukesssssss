<template>
  <div>
    <theHeader/>
    <router-view></router-view>
    <theFooter v-show="!this.$route.meta.show"/>
  </div>
</template>

<script>
import theHeader from './components/Header/index.vue'
import theFooter from './components/Footer/index.vue'
export default {
  name:'App',
  components:{theHeader,theFooter},
  mounted() {
    //通过这种方法可以让这个就执行一次，优化性能
   this.$store.dispatch('home/cgList')
  },
}
</script>

<style>

</style>
