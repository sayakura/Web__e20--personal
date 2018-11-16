<template>
    <div id="page-checkout">
        <Header />
            <CheckoutForm />
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from  '@/components/Footer'

import CheckoutForm from '@/components/CheckoutForm'
export default {
    name: "Checkout",
    components: {
        Header,
        Footer,
        CheckoutForm 
    }
}
</script>

<style>

</style>
