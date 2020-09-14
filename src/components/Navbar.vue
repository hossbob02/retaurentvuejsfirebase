<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light top-navbar" style="border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;">
			<div class="container">
				<a class="navbar-brand" href="index.html">
					<h1 style="color:#d65106; font-size:30px;">LA BURRADA</h1>
					<!--<img src="../assets/images/logo.png" alt="" />-->
				</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="align-right" />
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
                        <li class="nav-item active"><router-link class="nav-link" to="/products">Products</router-link></li>
                        <li class="nav-item active"><router-link class="nav-link" to="/reserve">Reserve</router-link></li>
                        <li class="nav-item active" v-if="user==null"><router-link class="nav-link" to="/signin">Sign In</router-link></li>
                        <li class="nav-item active" v-if="user"><router-link class="nav-link" to="/addproduct">Add Product</router-link></li>
                        <li class="nav-item active" v-if="user" ><router-link class="nav-link" to="/manager">Manager</router-link></li>
						<li class="nav-item active" v-if="user"><a class="nav-link" style="cursor:pointer;" @click="logout()" >Logout</a></li>
					</ul>
				</div>
			</div>
		</nav>
</template>
<script>
import firebase from '../Firebase'
import router from '../router'

export default {
	data(){
		return {user:null}
	},
	created(){
		firebase.auth().onAuthStateChanged((user)=>{
			if (user) {
				this.user=user
			} else {
				this.user=null
			}
		})
	},
	methods:{
	logout(){
		firebase.auth().signOut().then(()=>{
			router.push({
				name:'Signin'
			})
		})
	}
}
}

</script>