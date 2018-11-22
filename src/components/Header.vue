<template>
    <div id="page-header">
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
					<i class="far fa-user-circle" v-if="!authUser" @click="signout"></i>
                    <i class="fas fa-sign-out-alt" v-else @click="signout"></i>
                </a>

                <span class="linedivide1"></span>

                <div class="header-wrapicon2"  >
                    <img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON"  @click="showCart(0)">
                    <span class="header-icons-noti">{{item_count}}</span>

                    <!-- Header cart noti -->
					<Cart id="cart" />
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
							<router-link to="/login">{{ authUser ? authUser.email : 'Login'}}</router-link>
						</span>

						<!--  -->
						<a href="#" class="header-wrapicon1 dis-block m-l-30" >
							<i class="far fa-user-circle" v-if="!authUser" @click="signout"></i>
                    		<i class="fas fa-sign-out-alt" v-else @click="signout"></i>
						</a>

						<span class="linedivide1"></span>

						<div class="header-wrapicon2 m-r-13">
							<img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON"  @click="showCart(1)">
							<span class="header-icons-noti">{{item_count}}</span>

							<!-- Header cart noti -->
							<Cart />
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
							<i class="far fa-user-circle" v-if="!authUser" @click="signout"></i>
                    		<i class="fas fa-sign-out-alt" v-else @click="signout"></i>
						</a>

						<span class="linedivide2"></span>

						<div class="header-wrapicon2">
							<img src="@/assets/images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON"  @click="showCart(2)">
							<span class="header-icons-noti">{{item_count}}</span>

							<!-- Header cart noti -->
							<Cart />
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
import Cart from '@/components/Cart'
export default {
	name: "Header",
	data(){
		return {
			authUser: null,
			item_count: 0,
			item_list: []
		}
	},
	methods:{
		showCart:function(id){
			var carts = $('.header-cart');
			for (var i = 0; i < carts.length; i++){
				if (id == i)
					$(carts[i]).toggleClass('show-header-dropdown')
			}
		},
		signout:function(){
			if (this.authUser){
				firebase.auth().signOut();
				location.reload();
			} else {
				this.$router.push('/login');
			}
		}
	},
	components:{
		Cart
	},
	created(){
		var self = this;
		bus.$on("add_cart", function(item){
			self.item_count++;
			self.item_list.push(item);
			Cookie.set("shopping_cart", JSON.stringify(self.item_list));
		});
		bus.$on("delete_item", function(){
			self.item_count--;
		});
		firebase.auth().onAuthStateChanged(user => {
			if (user){
				self.authUser = user;
			}
		});
		bus.$on("cart_count", function(length){
			self.item_count = parseInt(length);
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
.fa-sign-out-alt, .fa-user-circle{
	font-size: 25px;
}
#page-header{
    box-shadow: 0 2px 3px lightgray;
}
</style>
