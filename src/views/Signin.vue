<template>
    <div class="container">
      <br>
      <br>
        <form @submit.prevent="userLogin">
          <h3 style="text-align:center;">** You must be administator to login**</h3>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1">
  </div>
  
  <button class="btn btn-primary">Submit</button>
</form>

    </div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'

export default {
   name:'Signin',
  data(){
    return{
     user:{
       email:'',
       password:''
     }
    }
  },
  methods:{
    userLogin(){
      firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(()=>{
        router.push({
          name:'Manager'
        })
      }).catch((err)=>{
        alert(err)
      })
    }
  }
}
</script>