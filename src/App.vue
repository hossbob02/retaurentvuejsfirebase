<template>
  <div id="app">
    
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <Navbar />
	
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
   components: {
    Navbar
    
  }
}
</script>
<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/style.css';
  @import './assets/css/responsive.css';
  @import './assets/css/custom.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'

/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
