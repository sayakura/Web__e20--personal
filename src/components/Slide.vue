<template>
    <section class="slide1">
		<div class="wrap-slick1">
			<div class="slick1">
				<div class="item-slick1 item1-slick1" :style="carousal_1">
					<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<h2 class="caption1-slide1 xl-text2 t-center bo14 p-b-6 animated visible-false m-b-22" data-appear="fadeInUp">
							{{carousal_1.title}}
						</h2>
						<span class="caption2-slide1 m-text1 t-center animated visible-false m-b-33" data-appear="fadeInDown">
							{{carousal_1.description}}
						</span>

						<div class="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
							<!-- Button -->
							<a href="product.html" class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
								Shop Now
							</a>
						</div>
					</div>
				</div>

				<div class="item-slick1 item2-slick1" :style="carousal_2">
					<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<h2 class="caption1-slide1 xl-text2 t-center bo14 p-b-6 animated visible-false m-b-22" data-appear="rollIn">
							{{carousal_2.title}}
						</h2>

						<span class="caption2-slide1 m-text1 t-center animated visible-false m-b-33" data-appear="lightSpeedIn">
							{{carousal_2.description}}
						</span>

						<div class="wrap-btn-slide1 w-size1 animated visible-false" data-appear="slideInUp">
							<!-- Button -->
							<a href="product.html" class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
								Shop Now
							</a>
						</div>
					</div>
				</div>

				<div class="item-slick1 item3-slick1" :style="carousal_3">
					<div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<h2 class="caption1-slide1 xl-text2 t-center bo14 p-b-6 animated visible-false m-b-22" data-appear="rotateInDownLeft">
							{{carousal_3.title}}
						</h2>

						<span class="caption2-slide1 m-text1 t-center animated visible-false m-b-33" data-appear="rotateInUpRight">
							{{carousal_3.description}}
						</span>

						<div class="wrap-btn-slide1 w-size1 animated visible-false" data-appear="rotateIn">
							<!-- Button -->
							<a href="product.html" class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
								Shop Now
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>

import firebase from '@/firebase/init'
const db = firebase.firestore()
export default {
    name: 'Slide',
	data(){
		return {
			carousal_1: {
				title: null,
				description: null,
				backgroundImage: null
			},
			carousal_2: {
				title: null,
				description: null,
				backgroundImage: null
			},
			carousal_3: {
				title: null,
				description: null,
				backgroundImage: null
			}
		}
	},
	created(){
		var self = this;
		db.collection('layout').doc('carousal_items').get().then(doc => {
			self.carousal_1.backgroundImage = "url( " + doc.data().carousal_1.link + ")";
			self.carousal_2.backgroundImage = "url( " + doc.data().carousal_2.link + ")";
			self.carousal_3.backgroundImage = "url( " + doc.data().carousal_3.link + ")";
			self.carousal_1.description =  doc.data().carousal_1.description;
			self.carousal_2.description =  doc.data().carousal_2.description;
			self.carousal_3.description =  doc.data().carousal_3.description;
			self.carousal_1.title =  doc.data().carousal_1.title;
			self.carousal_2.title =  doc.data().carousal_2.title;
			self.carousal_3.title =  doc.data().carousal_3.title;
		})
	}
}
</script>

<style>
</style>
