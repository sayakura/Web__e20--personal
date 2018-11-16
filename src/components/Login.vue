<template>
	<div id="login-page">
		<Header />
			<SignInUp />
		<Footer />
	</div>
</template>

<script>

import Header from '@/components/Header'
import Footer from  '@/components/Footer'

import SignInUp from '@/components/SignInUp'

export default {
	name: "Login",
	components: {
		Header,
		Footer,
		SignInUp
	}
}
</script>

<style>

</style>
