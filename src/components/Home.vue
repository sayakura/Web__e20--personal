<template>
  <div id="home-page">
    <Header />
      <Slide />
      <HomeBanner />
      <HomeProduct />
      <HomeInfo />
    <Footer />
  </div>
</template>

<script>
import db from '@/firebase/init'

import Header from '@/components/Header'
import Footer from  '@/components/Footer'

import Slide from '@/components/Slide'
import HomeBanner from '@/components/HomeBanner'
import HomeProduct from '@/components/HomeProduct'
import HomeInfo from '@/components/HomeInfo'

export default {
  name: 'Home',
  components:{
    Header,
    Slide,
    HomeBanner,
    HomeProduct,
    HomeInfo,
    Footer,
  },
  data () {
    return {
      users: []
    }
  },
  methods:{
    delete_user(id){
      db.collection('users').doc(id).delete()
      .then(() => {
        this.users = this.users.filter(user => {
          return user.id != id
        })
      })
    }
  },
  created(){
    db.collection('users').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let temp_user = doc.data();
        temp_user.id = doc.id;
        this.users.push(temp_user);
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
