<template>
    	<section class="bgwhite p-t-45 p-b-58">
		<div class="container">
			<div class="sec-title p-b-22">
				<h3 class="m-text5 t-center">
					Our Products
				</h3>
			</div>

			<!-- Tab01 -->
			<div class="tab01">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#best-seller" role="tab">Best Seller</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#featured" role="tab">Men</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#sale" role="tab">Women</a>
					</li>
	
				</ul>

				<!-- Tab panes -->
				<div class="tab-content p-t-35">
					<!-- - -->
					<div class="tab-pane fade show active" id="best-seller" role="tabpanel">
						<div class="row">
							<div class="col-sm-6 col-md-4 col-lg-3 p-b-50" v-for="(item, index) in product_bestseller" :key="index">
								<!-- Block2 -->
								<div class="block2">
									<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
										<img :src="getCoverImg(item.product_photos)" alt="IMG-PRODUCT">

										<div class="block2-overlay trans-0-4">
											<div class="block2-btn-addcart w-size1 trans-0-4">
												<!-- Button -->
												<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" @click="addToCart(item)">
													Add to Cart
												</button>
											</div>
										</div>
									</div>

									<div class="block2-txt p-t-20">
										<a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
											{{item.product_name}}
										</a>

										<span class="block2-price m-text6 p-r-5">
											{{'$' + item.product_price}}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- - -->
					<div class="tab-pane fade" id="featured" role="tabpanel">
						<div class="row">
							<div class="col-sm-6 col-md-4 col-lg-3 p-b-50" v-for="(item, index) in product_men" :key="index">
								<!-- Block2 -->
								<div class="block2">
									<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
										<img :src="getCoverImg(item.product_photos)" alt="IMG-PRODUCT">

										<div class="block2-overlay trans-0-4">
											<div class="block2-btn-addcart w-size1 trans-0-4">
												<!-- Button -->
												<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" @click="addToCart(item)">
													Add to Cart
												</button>
											</div>
										</div>
									</div>

									<div class="block2-txt p-t-20">
										<a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
											{{item.product_name}}
										</a>

										<span class="block2-price m-text6 p-r-5">
											{{'$' + item.product_price}}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!--  -->
					<div class="tab-pane fade" id="sale" role="tabpanel">
						<div class="row">
							<div class="col-sm-6 col-md-4 col-lg-3 p-b-50" v-for="(item, index) in product_women" :key="index">
								<!-- Block2 -->
								<div class="block2">
									<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
										<img :src="getCoverImg(item.product_photos)" alt="IMG-PRODUCT">

										<div class="block2-overlay trans-0-4">
											<div class="block2-btn-addcart w-size1 trans-0-4">
												<!-- Button -->
												<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" @click="addToCart(item)">
													Add to Cart
												</button>
											</div>
										</div>
									</div>

									<div class="block2-txt p-t-20">
										<a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
											{{item.product_name}}
										</a>

										<span class="block2-price m-text6 p-r-5">
											{{'$' + item.product_price}}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>

</template>

<script>
import firebase from '@/firebase/init'
import { bus } from '../main'
import swal from 'sweetalert';
const db = firebase.firestore()
export default {
	name: "HomeProduct",
	data() {
		return {
			product_data: [],
		}
	},
	methods:{
		getCoverImg: function(arr){
			for (var photo in arr){
				return arr[photo].link;
			}
		},
		addToCart(item){
			swal("Success!", "The item has been added to the cart!", "success");
			bus.$emit("add_cart", item);
		}
	},
	computed:{
		product_bestseller:function(){
			return (this.product_data.filter(item => {
				return item.product_category == 'Best Seller'
			}));
		},
		product_men:function(){
			return (this.product_data.filter(item => {
				return item.product_category == 'Men'
			}));
		},
		product_women:function(){
			return (this.product_data.filter(item => {
				return item.product_category == 'Women'
			}));
		}
	},
	created(){
		var self = this;
		db.collection('item').get().then(function(snapshot){
            snapshot.forEach(function(doc){
            	var temp = doc.data();
            	temp.id = doc.id;
            	self.product_data.push(temp);
            });
        });
	}
}
</script>

<style>

</style>
