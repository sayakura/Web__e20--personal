<template>
    <section class="bgwhite p-t-66 p-b-60" id="login">
		<div class="container">
			<div class="row">
				<div class="col-md-6 p-b-30">
					<form class="leave-comment">
						<h4 class="m-text26 p-b-36 p-t-15">
							Sign in
						</h4>
						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="email" name="email" placeholder="Email Address" v-model="sign_in_email">
						</div>

						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="password" name="password" placeholder="Password" v-model="sign_in_password">
						</div>

						<div class="w-size25">
							<!-- Button -->
							<button class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4"  @click.prevent="signin">
								Sign in
							</button>
						</div>
					</form>
				</div>

				<div class="col-md-6 p-b-30">
					<form class="leave-comment">
						<h4 class="m-text26 p-b-36 p-t-15">
							Sign up
						</h4>

						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Full Name" v-model="fullName">
						</div>

						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="number" name="phone-number" placeholder="Phone Number" v-model="phoneNumber">
						</div>

						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="email" name="email" placeholder="Email Address"
							v-model="emailAddress">
						</div>

						<div class="bo4 of-hidden size15 m-b-20">
							<input class="sizefull s-text7 p-l-22 p-r-22" type="password"  name="password" placeholder="Password"
							v-model="password">
						</div>

						<div class="w-size25">
							<!-- Button -->
							<button class="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4" @click.prevent="signup">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import swal from 'sweetalert'
import firebase from 'firebase'
const au = firebase.auth();
const db = firebase.firestore();
export default {
    name: "SignInUp",
    data(){
		return {
			authUser: null,
			fullName: null,
			phoneNumber: null,
			emailAddress: null,
			password: null,
			sign_in_password: null,
			sign_in_email: null,
		}
	},
	methods:{
		signin:function() {
			var self = this;
			if (this.sign_in_email && this.sign_in_password){
				firebase.auth().signInWithEmailAndPassword(this.sign_in_email, this.sign_in_password).then(
				function(user){
					self.sign_in_email = "";
					self.sign_in_password = "";
					 swal("Success!", "Successfully sign in!", "success").then(() => {
						self.$router.push('/');
					 });
				}
				).catch(function(error){
					swal("Failed!", error.message, "error");
				});
			} else {
				swal("Failed!", "Missing field(s)!", "error");
			}
				
		},
		signup:function(){
			var self = this;
			if (this.emailAddress && this.password && this.phoneNumber && this.fullName){
				firebase.auth().createUserWithEmailAndPassword(this.emailAddress, this.password).then(usr => {
					var user = firebase.auth().currentUser;
					user.updateProfile({
						email: self.emailAddress,
						displayName: self.fullName,
						phoneNumber: self.phoneNumber
					}).then(function(){
						db.collection('users').doc(user.uid).set({
							email: self.emailAddress,
							displayName: self.fullName,
							phoneNumber: self.phoneNumber
						}).then(() => { swal("Success!", "Successfully signed up!", "success").then(() => {self.$router.push('/')}) });
					}).catch(function(err){ swal({title: "Failed!",text: err.message,icon: "error",button: "Ok"}) });
				}).catch(function(err){ swal({title: "Failed!",text: err.message,icon: "error",button: "Ok"}) });
			} else {
				swal("Failed!", "Missing field(s)!", "error");
			}
		}
	},
	created(){
	}
}
</script>

<style>

</style>
