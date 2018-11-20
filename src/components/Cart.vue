<template>
    <div class="header-cart header-dropdown">
        <p class="cart-p" v-if="!totolPrice" >The cart is currently empty.</p>
        <ul class="header-cart-wrapitem" v-for="item in item_list" :key="item.id + Math.random()">
            <li class="header-cart-item">
                <div class="header-cart-item-img"  @click="deleteThisItem(item.id)">
                    <img :src="getCoverImg(item.product_photos)" alt="IMG">
                </div>

                <div class="header-cart-item-txt">
                    <a href="#" class="header-cart-item-name">
                        {{ item.product_name }}
                    </a>
                    <span class="header-cart-item-info">
                        {{ '$' + item.product_price }}
                    </span>
                </div>
            </li>
        </ul>

        <div class="header-cart-total" v-if="totolPrice">
            {{'$' + totolPrice}}
        </div>

        <div class="header-cart-buttons">
            <div class="header-cart-wrapbtn">
                <!-- Button -->
                <a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    View Cart
                </a>
            </div>

            <div class="header-cart-wrapbtn">
                <!-- Button -->
                <a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    Check Out
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'
import { bus } from '../main'
import Cookie from 'js-cookie'
export default {
	name: "Cart",
	data(){
		return {
			item_list: []
		}
    },
    computed:{
        totolPrice: function(){
            var total = 0;
            for (var i = 0; i < this.item_list.length; i++){
                total += parseInt(this.item_list[i].product_price);
            }
            return  parseInt(total);
		}
    },
	methods:{
		getCoverImg: function(arr){
			for (var photo in arr){
				return arr[photo].link;
			}
        },
        deleteThisItem: function(id){
            bus.$emit("delete_item");
            var item = this.item_list.find(item => {
                return item.id == id;
            })
            var index = this.item_list.indexOf(item);
            this.item_list.splice(index, 1);
			Cookie.set("shopping_cart", JSON.stringify(self.item_list));
        }
	},
	created(){
        var self = this;
        if (Cookie.get("shopping_cart")){
            try {
                self.item_list = JSON.parse(Cookie.get("shopping_cart"));    
            } catch(err) {
                Cookie.remove("shopping_cart")
            }
            bus.$emit("cart_count",  self.item_list.length);
        }
		bus.$on("add_cart", function(item){
            var obj = {
                product_photos: item.product_photos,
                product_price: item.product_price,
                product_name: item.product_name,
                id: item.id
            }
            self.item_list.push(obj);
            Cookie.set("shopping_cart", JSON.stringify(self.item_list));
        });
        $('.js-show-header-dropdown').on('click', function () {
            $(this).parent().find('.header-dropdown')
        })

      
	}
}
</script>

<style>
.topbar-email{
	font-weight: 800;
	cursor: pointer;
}
.topbar-email:hover{
	text-decoration: underline;
}
.cart-p{
    padding: 30px;
}
</style>
