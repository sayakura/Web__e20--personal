<template>
	<!-- Banner -->
	<div class="banner bgwhite p-t-40 p-b-40">
		<div class="container">
			<div class="row">
				<div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					<!-- block1 -->
					<div class="block1 hov-img-zoom pos-relative m-b-30">
						<img :src="feature_item_1.link" alt="IMG-BENNER">

						<div class="block1-wrapbtn w-size2">
							<!-- Button -->
							<a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
								{{feature_item_1.text}}
							</a>
						</div>
					</div>
				</div>

				<div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					<!-- block1 -->
					<div class="block1 hov-img-zoom pos-relative m-b-30">
						<img :src="feature_item_2.link"  alt="IMG-BENNER">

						<div class="block1-wrapbtn w-size2">
							<!-- Button -->
							<a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
								{{feature_item_2.text}}
							</a>
						</div>
					</div>
				</div>

				<div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
					<!-- block1 -->
					<div class="block1 hov-img-zoom pos-relative m-b-30">
						<img :src="feature_item_3.link"  alt="IMG-BENNER">

						<div class="block1-wrapbtn w-size2">
							<!-- Button -->
							<a href="#" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
								{{feature_item_3.text}}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import firebase from '@/firebase/init'
const db = firebase.firestore()
export default {
    name: "HomeBanner",
	data(){
		return {
			feature_item_1: {
				link: null,
				text: null
			},
			feature_item_2: {
				link: null,
				text: null
			},
			feature_item_3: {
				link: null,
				text: null
			},
		}
	},
	created(){
		var self = this;	
		db.collection('layout').doc('feature_items').get().then(doc => {
			self.feature_item_1.link = doc.data().feature_item_1.link;
			self.feature_item_2.link = doc.data().feature_item_2.link;
			self.feature_item_3.link = doc.data().feature_item_3.link;	
			self.feature_item_1.text = doc.data().feature_item_1.text;
			self.feature_item_2.text = doc.data().feature_item_2.text;
			self.feature_item_3.text = doc.data().feature_item_3.text;
		});
	}
}
</script>

<style>

</style>
