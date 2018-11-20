<template>
    <section id="item-detail">
        <!-- Product Detail -->
        <div class="container bgwhite p-t-10 p-b-80">
            <!-- breadcrumb -->
            <div class="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
                <a href="index.html" class="s-text16">
                    Home
                    <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
                </a>
                <a href="product.html" class="s-text16">
                    {{ item.product_category }} 
                    <i class="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true"></i>
                </a>
                <span class="s-text17">
                    {{ item.product_name }} 
                </span>
            </div>
            
            <div class="flex-w flex-sb">
                <div class="w-size13 p-t-30 respon5">
                    <div class="wrap-slick3 flex-sb flex-w">
                        <div class="wrap-slick3-dots"></div>
                            <div class="wrap-pic-w">
                                <img :src="getCoverImg(item.product_photos)" alt="IMG-PRODUCT">
                            </div>
                    </div>
                </div>

                <div class="w-size14 p-t-30 respon5">
                    <h4 class="product-detail-name m-text16 p-b-13">
                        {{ item.product_name }} 
                    </h4>

                    <span class="m-text17">
                        {{ '$' + item.product_price }} 
                    </span>

                    <p class="s-text8 p-t-10">
                        {{ item.product_description }}
                    </p>

                    <!--  -->
                    <div class="p-t-33 p-b-30">
                        <div class="flex-m flex-w p-b-10">
                            <div class="s-text15 w-size15 t-center">
                                Color
                            </div>
                          	<div class="filter-color p-t-22 bo3">
                                <ul class="flex-w">
                                    <li class="m-r-10"  v-for="(color, index) in colors" :key="index">
                                        <input class="checkbox-color-filter" :id="index" type="checkbox" @change="selectColor(index)">
                                        <label class="color-filter" :style="[color, checked_color == index ? border_style : null]" :for="index"></label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-m flex-w">
                            <div class="s-text15 w-size15 t-center">
                                Prescription Type
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="color-selector">
                                    <option>Single Vision</option>
                                    <option>Non Prescrition</option>
                                    <option>Frame Obly</option>
                                </select>
                            </div>
                            <div class="input-group p-input-group">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                    Prescription (LEFT)
                                </div>
                                <input type="text" class="form-control s-text7 p-input p-first" placeholder="Sphere(SPH)">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Cylinder(CYL)">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Axis">
                            </div>
                            <div class="input-group p-t-20">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                    Prescription (RIGHT)
                                </div>
                                <input type="text" class="form-control s-text7 p-input p-first" placeholder="Sphere(SPH)">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Cylinder(CYL)">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Axis">
                            </div>
                            <div class="input-group">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                        PD
                                </div>
                                <input type="number" class="form-control s-text7 p-input p-first" placeholder="Pupil distance(mm)">
                            </div>
                        </div>

                        <div class="flex-r-m flex-w p-t-10">
                            <div class="w-size16 flex-m flex-w">
                                <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                    <button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                                        <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                                    </button>

                                    <input class="size8 m-text18 t-center num-product" type="number" name="num-product" value="1">

                                    <button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                                        <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>

                                <div class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                    <!-- Button -->
                                    <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" @click="addToCart(item)">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-b-10">
                        <span class="s-text8 m-r-35">ID: {{$route.params.item_id}}</span>
                        <span class="s-text8">Categories: {{item.product_category}}</span>
                    </div>

                    <!--  -->
                    <div class="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content"> <!-- active-dropdown-content -->
                        <h5 class="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                            Instruction
                            <i class="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
                            <i class="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
                        </h5>

                        <div class="dropdown-content dis-none p-t-15 p-b-23">
                            <p class="s-text8 p-instruction">
                                1. Place the ruler directly over the center of your right pupil so that the ruler is horizontal. Place it against forehead for added stability. You can stand in front of a mirror while looking straight ahead or ask someone else to measure for you.
                            </p>
                            <p class="s-text8 p-instruction">
                                2. While looking straight ahead, Measure the distance from the center of your right pupil to the center of your left pupil. 
                            </p>
                            <p class="s-text8 p-instruction">
                                3. Repeat a couple time for accuracy if needed.
                            </p>
                            <p class="s-text8 p-instruction">
                                4. EYEGLASS20.COM recommends getting your PD measurement directly from your eyecare professional when you have your eyes exam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-w flex-sb p-t-50">
                 <div class="input-group p-input-group">
                    <ul class=" p-t-10">
                        <strong class="label-ul-title">Lense Option</strong>
                        <small >{{ item.options['lense_option1'].lense_option_label }}</small>
                        
                        <li class="s-text8">
                        Single Vision 1.59 <input type="number" class="input-number" placeholder=" Distance"/>
                        or <input type="number" class="input-number" placeholder=" Near"/>
                        price $ 30</li>
                         <div v-for="(option, index) in item.options['lense_option1']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10">{{option.text + ' $ ' + option.price}}</li>
                        </div>

                        <strong class="label-ul-title">Lense Option</strong>
                        <small >{{ item.options['lense_option2'].lense_option_label }}</small>

                        <li class="s-text8"> Single Vision 1.67  <input type="number" class="input-number" placeholder=" Distance"/>
                        or <input type="number" class="input-number" placeholder=" Near"/>
                        price $ 60</li>

                         <div v-for="(option, index) in item.options['lense_option2']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10">{{option.text + ' $ ' + option.price}}</li>
                        </div>

                        <strong class="label-ul-title">Lense Coating Option</strong>

                        <div v-for="(option, index) in item.options['lense_option3']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10">{{option.text + ' $ ' + option.price}}</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { bus } from '../main'
import firebase from '@/firebase/init'
const db = firebase.firestore()
export default {
    name:"Item",
    data() {
		return {
            item: {
                options: {
                    lense_option1: {
                        lense_option_label: null,
                    },
                    lense_option2: {
                        lense_option_label: null,
                    }
                }
            },
            border_style: {
                border: "solid 2px red"
            },
            checked_color: null,
            checked_grey: false,
            checked_green: false,
            checked_brown: false,
            checked_blue: false,
            checked_pink: false,
            colors: {
                Grey: { backgroundColor: '#999999' },
                Green: { backgroundColor: '#4ca64c' },
                Brown: { backgroundColor: '#ae3f3f' },
                Blue: { backgroundColor: '#0080ff' },
                Pink: { backgroundColor: '#FFC0CB' },
            },
			product_data: [],
		}
    },
    methods:{
        getCoverImg: function(arr){
			for (var photo in arr){
				return arr[photo].link;
			}
        },
        selectColor:function(color){
            this.checked_color = color; 
        },
        is_checked: function(color){
            return 'checkbox-color-filter';
        },
       	addToCart(item){
			swal("Success!", "The item has been added to the cart!", "success");
			bus.$emit("add_cart", item);
		}
    },
    created(){
        var self = this;
		db.collection('item').doc(this.$route.params.item_id).get().then(function(doc){
            self.item = doc.data();
        });
    }
}
</script>

<style>
#color-selector{
    width: 300px;
}
.p-input{
    border: dotted 1px lightslategrey !important;
    border-left: none !important;
}
.p-first{
    border-left: dotted 1px lightslategrey !important;
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
}
.form-control{
    height:40px;
    padding-top: 10px;
}
.p-instruction{
    text-indent: 20px;
}
.input-number{
    color:rgb(214, 94, 73);
    width: 80px;
    text-align: center;
    border: dotted 1px lightslategrey !important;
    border-color: rgb(214, 94, 73) !important;
    border-radius: 10px;
}
.input-number::placeholder{
    color:rgba(214, 94, 73, 0.4);
}

.input-number:focus{
    border-style: solid !important;
}

input[type='number']::-webkit-inner-spin-button, 
input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
}
.label-ul-title{
    letter-spacing: 2px;
}

.checkbox-color-filter:checked + .color-filter{
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
}

</style>
