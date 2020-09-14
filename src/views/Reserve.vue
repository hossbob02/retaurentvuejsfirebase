<template>
<div class="container">
    <br>
    <h2 style="text-align:center;">** Reserve Any Food **</h2><br>
      <form @submit="onsubmit">
  <div class="form-group">
    <input type="text" class="form-control" v-model="reservation.firstName"  placeholder="firstName">
  </div>
    <div class="form-group">
    <input type="text" class="form-control"  v-model="reservation.lastName" placeholder="lastName">
  </div>
    <div class="form-group">
    <input type="email" class="form-control" v-model="reservation.email" placeholder="Email">
  </div>
    <div class="form-group">
    <input type="text" class="form-control" v-model="reservation.phone" placeholder="Phone Number">
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1"  v-model="reservation.address" rows="3" placeholder="Your Address"></textarea>
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1"  v-model="reservation.food" rows="3" placeholder="What do you reserve ?"></textarea>
  </div>
  <div class="alert alert-success" v-if="added">{{this.added}}</div>
  <button type="submit" class="btn btn-success">Reserve</button>
</form>
</div>
  

</template>

<script>
import firebase from '../Firebase'
export default {
  name:'Reserve',
  data(){
    return{
      reservation:{},
      ref:firebase.firestore().collection('reservations'),
      added:''
    }
  },
  methods:{
    onsubmit(evt){
            evt.preventDefault()
      this.ref.add(this.reservation).then(()=>{
        this.reservation.firstName=''
        this.reservation.lastName=''
        this.reservation.email=''
        this.reservation.phone=''
        this.reservation.address=''
        this.reservation.food=''
       this.added='Your food has reserved'
      }).catch((err)=>alert('Error',err))
    }
  }
  
}
</script>