<template>
    <div>
        <div class="wrap_header fixed-header2 trans-0-4">
            <!-- Logo -->
            <a href="index.html" class="logo">
                <img src="@/assets/Logo.png" alt="IMG-LOGO" style="height:100px">
            </a>

            <!-- Menu -->
            <div class="wrap_menu">
                <nav class="menu">
                    <ul class="main_menu">
                        <li>
                            <a id="home" href="index.html">Home</a>
                        </li>

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li class="sale-noti">
                            <a href="product.html">Sale</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>

                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Header Icon -->
            <div class="header-icons">
                <a href="#" class="header-wrapicon1 dis-block">
                    <img src="@/assets/images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
                </a>

                <span class="linedivide1"></span>

                <div class="header-wrapicon2">
                    <img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
                    <span class="header-icons-noti">{{item_list.length}}</span>

                    <!-- Header cart noti -->
					<div class="header-cart header-dropdown">
							<ul class="header-cart-wrapitem" v-for="item in item_list" :key="item.id">
								<li class="header-cart-item">
									<div class="header-cart-item-img">
										<img :src="getCoverImg(item.product_photos)" alt="IMG">
									</div>

									<div class="header-cart-item-txt">
										<a href="#" class="header-cart-item-name">
											{{ item.product_name ?  item.product_name : "The cart is empty."}}
										</a>

										<span class="header-cart-item-info" v-if="item.product_price">
											{{ '$' + item.product_price }}
										</span>
									</div>
								</li>
							</ul>

							<div class="header-cart-total">
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
                </div>
            </div>
        </div>
		<header class="header2">
			<!-- Header desktop -->
			<div class="container-menu-header-v2 p-t-26">
				<div class="topbar2">
					<a href="index.html" class="logo2">
						<img src="@/assets/Logo.png" alt="IMG-LOGO" style="height:100px">
					</a>

					<div class="topbar-child2">
						<span class="topbar-email">				
							<router-link to="/login">Login</router-link>
						</span>

				
						<!--  -->
						<a href="#" class="header-wrapicon1 dis-block m-l-30">
							<img src="@/assets/images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
						</a>

						<span class="linedivide1"></span>

						<div class="header-wrapicon2 m-r-13">
							<img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
							<span class="header-icons-noti">{{item_list.length}}</span>

							<!-- Header cart noti -->
							<div class="header-cart header-dropdown">
								<ul class="header-cart-wrapitem" v-for="item in item_list" :key="item.id">
									<li class="header-cart-item">
										<div class="header-cart-item-img">
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

								<div class="header-cart-total">
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
						</div>
					</div>
				</div>

				<div class="wrap_header">

					<!-- Menu -->
					<div class="wrap_menu">
						<nav class="menu">
							<ul class="main_menu">
								<li>
									<a href="index.html">Home</a>
								</li>

								<li>
									<a href="product.html">Shop</a>
								</li>

								<li class="sale-noti">
									<a href="product.html">Sale</a>
								</li>
								
								<li>
									<a href="about.html">About</a>
								</li>

								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</nav>
					</div>

					<!-- Header Icon -->
					<div class="header-icons">

					</div>
				</div>
			</div>

			<!-- Header Mobile -->
			<div class="wrap_header_mobile">
				<!-- Logo moblie -->
				<a href="index.html" class="logo-mobile">
					<img src="@/assets/Logo.png" alt="IMG-LOGO" style="height:100px">
				</a>

				<!-- Button show menu -->
				<div class="btn-show-menu">
					<!-- Header Icon mobile -->
					<div class="header-icons-mobile">
						<a href="#" class="header-wrapicon1 dis-block">
							<img src="@/assets/images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
						</a>

						<span class="linedivide2"></span>

						<div class="header-wrapicon2">
							<img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
							<span class="header-icons-noti">{{item_list.length}}</span>

							<!-- Header cart noti -->
							<div class="header-cart header-dropdown">
								<ul class="header-cart-wrapitem" v-for="item in item_list" :key="item.id">
									<li class="header-cart-item">
										<div class="header-cart-item-img">
											<img :src="getCoverImg(item.product_photos)" alt="IMG">
										</div>

										<div class="header-cart-item-txt">
											<a href="#" class="header-cart-item-name">
												{{ item.product_name ?  item.product_name : "The cart is empty."}}
											</a>

											<span class="header-cart-item-info">
												{{ '$' + item.product_price }}
											</span>
										</div>
									</li>
								</ul>

								<div class="header-cart-total">
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
						</div>
					</div>

					<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</div>
				</div>
			</div>

			<!-- Menu Mobile -->
			<div class="wrap-side-menu" >
				<nav class="side-menu">
					<ul class="main-menu">
				

						<li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
							<div class="topbar-child2-mobile">
								<span class="topbar-email">
									fashe@example.com
								</span>

								<div class="topbar-language rs1-select2">
									<select class="selection-1" name="time">
										<option>USD</option>
										<option>EUR</option>
									</select>
								</div>
							</div>
						</li>

						<li class="item-menu-mobile">
							<a href="index.html">Home</a>
						</li>

						<li class="item-menu-mobile">
							<a href="product.html">Shop</a>
						</li>

						<li class="item-menu-mobile">
							<a href="product.html">Sale</a>
						</li>

						<li class="item-menu-mobile">
							<a href="about.html">About</a>
						</li>

						<li class="item-menu-mobile">
							<a href="contact.html">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
    </div>
</template>

<script>
import firebase from 'firebase'
import { bus } from '../main'
import Cookie from 'js-cookie'
export default {
	name: "Header",
	data(){
		return {
			item_list: []
		}
	},
	methods:{
		getCoverImg: function(arr){
			for (var photo in arr){
				return arr[photo].link;
			}
		},
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
	created(){
		var self = this;
		bus.$on("add_cart", function(item){
			self.item_list.push(item);
			Cookie.set("shopping_cart", JSON.stringify(self.item_list));
		});
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
</style>
