<template>
    <div id="product-page">
        <Header />
            <Item />
        <Footer />
    </div>
</template>

<script>
import Item from '@/components/Item'

import Header from '@/components/Header'
import Footer from  '@/components/Footer'

export default {
    name:'Product',
    components: {
        Item,
        Header,
        Footer,
    }
}
</script>

<style>

</style>
