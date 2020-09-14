<template>
    <div class="container">
        <br><br><br>
        <h3 style="text-align:center;">** Manage Reservations **</h3>
        <br>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Client</th>
      <th scope="col">Food</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in reservations" :key="item.key">
      <td>{{item.firstName}} {{item.lastName }}</td>
      <td>{{item.food }}</td>
      <td><button class="btn btn-primary" style="margin-right:3px;" data-toggle="modal" data-target="#exampleModal" @click="details(item.firstName,item.lastName,item.food,item.address,item.phone,item.email)">Details</button><button class="btn btn-danger" @click="ondelete(item.key)">Delete</button></td>
    </tr>
  
  </tbody>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Client Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3>Client Name</h3> {{reservationModel.firstName}} {{reservationModel.lastName}}
        <h3>Client Email</h3> {{reservationModel.email}}
        <h3>Client Phone</h3> {{reservationModel.phone}}
        <h3>Client Address</h3> {{reservationModel.address}}
        <h3>Food</h3> {{reservationModel.food}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>   

    </div>
</template>

<script>
import firebase from '../Firebase'
export default {
   name:'Manager',
  data(){
    return{
      reservations:[],
      ref:firebase.firestore().collection('reservations'),
      reservationModel:{
        address:'nn',
        email:'',
        firstName:'',
        food:'',
        lastName:'',
        phone:''
      }  
    }
  },
  created(){
    this.ref.onSnapshot((querySnapshot)=>{
      this.reservations=[]
      querySnapshot.forEach((doc)=>{
        this.reservations.push({
          key:doc.id,
          firstName:doc.data().firstName,
          lastName:doc.data().lastName,
          email:doc.data().email,
          phone:doc.data().phone,
          food:doc.data().food,
          address:doc.data().address
        })
      })
    })
  },
  methods:{
    ondelete(key){
      this.ref.doc(key).delete().then(()=>{
        alert('deleted')
      })
    },
    details(firstName,lastName,food,address,phone,email){
      this.reservationModel.address=address
      this.reservationModel.email=email
      this.reservationModel.firstName=firstName
      this.reservationModel.lastName=lastName
      this.reservationModel.food=food
      this.reservationModel.phone=phone
    }
  }
}
</script>