<template>

    <div class="container">
            <br>
    <div class="body">
        <div class="row">

            <div class="col col-12 col-sm col-md-6 col-lg-3" v-for="item in products" :key="item.key">
                <div class="card" style="width: 18rem;">
                    <img v-bind:src="item.image" class="card-img-top" alt="..." style="width: 280px;height: 260px;">
                    <div class="card-body">
                        <h3 class="card-title">{{item.name}}</h3>
                        <p class="card-text">{{item.price}} $</p>
                        <button href="#" class="btn btn-primary" data-toggle="modal" @click="details(item.name,item.description,item.price,item.ingredients)" data-target="#exampleModal">Details</button>
                    </div>
                </div>      
            </div>
        
          
            
        </div>
    
    
    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details of {{productModel.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>Name Of Food:</h4>{{productModel.name}} <br>
        <h4>Price Of Food:</h4> {{productModel.price}} $<br>
        <h4>Description Of Food:</h4> {{productModel.description}}<br>
        <h4>Ingredients Of Food:</h4> {{productModel.ingredients}}<br>
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
  name:'Products',
  data(){
    return{
      products:[],
      ref:firebase.firestore().collection('products'),
      productModel:{
        name:'',
        description:'',
        price:'',
        ingredients:''
      }
    }
  },
  created(){
    this.ref.onSnapshot((querySnapshot)=>{
      this.products=[]
      querySnapshot.forEach((doc)=>{
        this.products.push({
          key:doc.id,
          name:doc.data().name,
          description:doc.data().description,
          price:doc.data().price,
          image:doc.data().image,
          ingredients:doc.data().ingredients
        })
      })
    })
  },
  methods:{
    details(name,description,price,ingredients){
      this.productModel.name=name
      this.productModel.price=price
      this.productModel.description=description
      this.productModel.ingredients=ingredients

    }
  }
}
</script>