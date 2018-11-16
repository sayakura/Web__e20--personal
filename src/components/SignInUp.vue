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
	}
}
</script>

<style>

</style>
