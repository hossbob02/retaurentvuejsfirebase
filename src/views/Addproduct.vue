<template>
    <div class="container">
        <br>
        <br>
        <h3 style="text-align:center;">Add new product</h3>
        <br>
         <form @submit="onsubmit">
     
  <div class="form-group">
    <input type="text" class="form-control" v-model="product.name"  placeholder="name of product">
  </div>
    <div class="form-group">
    <input type="number" class="form-control" v-model="product.price" placeholder="price">
  </div>
   <div class="form-group">
    <input type="text" class="form-control" v-model="product.image" placeholder="image">
  </div>
 
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="product.description" rows="3" placeholder="description"></textarea>
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="product.ingredients" placeholder="ingredients"></textarea>
  </div>
  <button type="submit" class="btn btn-success">Add Product</button>
</form>

    </div>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
   name:'Addproduct',
  data(){
    return{
      product:{},
      ref:firebase.firestore().collection('products')
    }
  },
  methods:{
    onsubmit(evt){
            evt.preventDefault()
      this.ref.add(this.product).then(()=>{
        this.product.name=''
        this.product.image=''
        this.product.description=''
        this.product.price=''
        this.product.ingredients=''
        router.push({
          name:'Products'
        })
      }).catch((err)=>alert('Error',err))
    }
  }
}
</script>