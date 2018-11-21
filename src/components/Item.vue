<template>
    <section id="item-detail">
        <!-- Product Detail -->
        <hr class="item-hr">
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
                            <div class="wrap-pic-w ">
                                <img :src="getCoverImg(item.product_photos)" alt="IMG-PRODUCT">
                                <img id="instruction" src="@/assets/instruction.png" />
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
                                        <label class="color-filter" :style="[color, item_specification.color == index ? border_style : null]" :for="index"></label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex-m flex-w">
                            <div class="s-text15 w-size15 t-center">
                                Prescription Type
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="color-selector" v-model="item_specification.prescription_type">
                                    <option>Single Vision</option>
                                    <option>Non Prescrition</option>
                                    <option>Frame Only</option>
                                </select>
                            </div>
                            <div class="input-group p-input-group">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                    Prescription (LEFT)
                                </div>
                                <input type="text" class="form-control s-text7 p-input p-first" placeholder="Sphere(SPH)" v-model="item_specification.prescription_left.sphere">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Cylinder(CYL)" v-model="item_specification.prescription_left.cylinder">
                                <input type="number" class="form-control s-text7 p-input" placeholder="Axis" v-model="item_specification.prescription_left.axis">
                            </div>
                            <div class="input-group p-t-20">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                    Prescription (RIGHT)
                                </div>
                                <input type="text" class="form-control s-text7 p-input p-first" placeholder="Sphere(SPH)" v-model="item_specification.prescription_right.sphere">
                                <input type="text" class="form-control s-text7 p-input" placeholder="Cylinder(CYL)" v-model="item_specification.prescription_right.cylinder">
                                <input type="number" class="form-control s-text7 p-input" placeholder="Axis" v-model="item_specification.prescription_right.axis">
                            </div>
                            <div class="input-group">
                                <div class="s-text15 w-size15 t-center p-t-10">
                                        PD
                                </div>
                                <input type="number" class="form-control s-text7 p-input p-first" placeholder="Pupil distance(mm)" v-model="item_specification.pupil_distance">
                            </div>
                        </div>

                        <div class="flex-r-m flex-w p-t-10">
                            <div class="w-size16 flex-m flex-w">
                                <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                    <button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2" @click="decrement">
                                        <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                                    </button>

                                    <input class="size8 m-text18 t-center num-product" type="number" name="num-product" :value="item_specification.quantity">

                                    <button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2" @click="increment">
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
                        <span class="s-text8">Stock: {{item.product_stock}}</span>
                    </div>

                    <!--  -->
                    <div class="bo6 p-t-15 p-b-14"> <!-- active-dropdown-content -->
                        <img id="instruction2" class="m-t-30 m-b-30" src="@/assets/instruction.png" />
                        <h5 class="flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
                            Instruction
                        </h5>

                        <div class="p-t-15 p-b-23">
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
                        Single Vision 1.59 <input type="number" class="input-number" placeholder=" Distance" v-model="item_specification.lense_option1_single_vision_distance"/>
                        or <input type="number" class="input-number" placeholder=" Near" v-model="item_specification.lense_option1_single_vision_near"/>
                        price $ 30</li>
                        <div v-for="(option, index) in item.options['lense_option1']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10" v-model="item_specification.lense_option1" :value="option">{{option.text + ' $ ' + option.price}}</li>
                        </div>

                        <strong class="label-ul-title">Lense Option</strong>
                        <small >{{ item.options['lense_option2'].lense_option_label }}</small>

                        <li class="s-text8"> Single Vision 1.67  <input type="number" class="input-number" placeholder=" Distance" v-model="item_specification.lense_option2_single_vision_distance"/>
                        or <input type="number" class="input-number" placeholder=" Near" v-model="item_specification.lense_option2_single_vision_near"/>
                        price $ 60</li>

                         <div v-for="(option, index) in item.options['lense_option2']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10" v-model="item_specification.lense_option2" :value="option">{{option.text + ' $ ' + option.price}}</li>
                        </div>

                        <strong class="label-ul-title">Lense Coating Option</strong>

                        <div v-for="(option, index) in item.options['lense_option3']" :key="Math.random() + index">
                            <li class="s-text8"  v-if="index.indexOf('label') < 0"><input type="checkbox" class="m-r-10" v-model="item_specification.lense_coating_option" :value="option">{{option.text + ' $ ' + option.price}}</li>
                        </div>
                    </ul>
                </div>
                <br >
                <div class="confirm_card m-t-30">
                    <h3 class="confirm_card-title"><i class="fas fa-chevron-left"></i>&nbsp;Confirmation&nbsp;<i class="fas fa-chevron-right"></i></h3>
                    <hr />
                    <ol class="confirm_list m-t-20" >
                        <li> <strong>Color : </strong> {{item_specification.color ? item_specification.color : '_________' }}</li>
                        <li> <strong>Prescription Type : </strong>
                        {{item_specification.prescription_type ? item_specification.prescription_type : '_________'}}</li>
                        <li> <strong>Prescription (LEFT)</strong>: 
                        {{    'Sphere : ' + (item_specification.prescription_left.sphere ? item_specification.prescription_left.sphere :  '_______  ')
                        +   '     Cylinder : ' + (item_specification.prescription_left.cylinder ? item_specification.prescription_left.cylinder : '_______  ')
                        +   '     Axis: ' + (item_specification.prescription_left.axis ? item_specification.prescription_left.axis + '°': '______°  ')}} </li>
                        <li> <strong>Prescription (RIGHT)</strong>: 
                         {{    'Sphere : ' + (item_specification.prescription_right.sphere ? item_specification.prescription_right.sphere :  '_______  ')
                        +   '     Cylinder : ' + (item_specification.prescription_right.cylinder ? item_specification.prescription_right.cylinder : '_______  ')
                        +   '     Axis : ' + (item_specification.prescription_right.axis ? item_specification.prescription_right.axis + '°': '______°  ')}} </li>
                        <li> <strong>Pupil Distance : </strong> {{item_specification.pupil_distance ? item_specification.pupil_distance + ' mm' :  '_____mm'}} </li>
                        <li> <strong>Quantity :</strong> {{item_specification.quantity}} </li>
                        <li> <strong>Lense Option1 : </strong> {{item_specification.lense_option1.length ? arrWithTextOnly(item_specification.lense_option1) : 'Nothing Selected Yet'}} </li>
                        <li> <strong>Lense Option2 : </strong> {{item_specification.lense_option2.length ? arrWithTextOnly(item_specification.lense_option2) : 'Nothing Selected Yet'}} </li>
                        <li> <strong>Lense Coating Option : </strong> {{item_specification.lense_coating_option.length ? arrWithTextOnly(item_specification.lense_coating_option) : 'Nothing Selected Yet'}} </li>
                        <li>
                            <hr />
                            <button type="button" class="btn btn-outline-warning btn-block  m-t-10" @click="confirm">
                                Confirm
                                <i class="far fa-calendar-check p-l-5" v-if="form_complete"></i>
                                <i class="far fa-calendar p-l-5" v-else></i>
                            </button>
                        </li>
                    </ol>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import { bus } from '../main'
import firebase from '@/firebase/init'
import swal from 'sweetalert';
const db = firebase.firestore()
export default {
    name:"Item",
    data() {
		return {
            item_specification: {
                color: null,
                prescription_type: 'Non Prescrition',
                prescription_left: {
                    sphere: null,
                    cylinder: null,
                    axis: null
                },
                prescription_right: {
                    sphere: null,
                    cylinder: null,
                    axis: null
                },
                pupil_distance: null,
                quantity: 1,
                lense_option1_single_vision_distance: null,
                lense_option1_single_vision_near: null,
                lense_option2_single_vision_distance: null,
                lense_option2_single_vision_near: null,
                lense_option1: [],
                lense_option2: [],
                lense_coating_option: []
            },
            item_count: 1,
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
    computed:{
        form_complete: function(){
            return this.item_specification.color && this.item_specification.prescription_type && this.item_specification.prescription_left.sphere
            && this.item_specification.prescription_left.cylinder && this.item_specification.prescription_left.axis && 
            this.item_specification.prescription_right.sphere && this.item_specification.prescription_right.cylinder && 
            this.item_specification.prescription_right.axis && this.item_specification.pupil_distance;
        }
    },
    methods:{
        getCoverImg: function(arr){
			for (var photo in arr){
				return arr[photo].link;
			}
        },
        selectColor:function(color){
            this.item_specification.color = color; 
        },
       	addToCart(item){
			swal("Success!", "The item has been added to the cart!", "success");
			bus.$emit("add_cart", item);
        },
        decrement: function(){
            if (this.item_specification.quantity > 1)
                this.item_specification.quantity--;
        },
        increment: function(){
            this.item_specification.quantity++;
        },
        arrWithTextOnly:function(arr){
            var temp = [];
            for (var i = 0; i < arr.length; i++){
                temp.push(arr[i].text);
            }
            return (temp);
        },
        confirm: function(){
            if (this.form_complete) {
                swal({
                    title: "Confirm",
                    text: "Add this item to the shopping cart?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                    })
                    .then((confirm) => {
                        if (confirm) {
                            swal("Success!", "The item has been added to the cart!", "success");
                        }
                    });
            } else {
                swal("Oops!", "Please make sure all fields have been entered!", "error");
            }
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
.item-hr{
    box-shadow: 0 2px 3px lightgray;
}
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
    color: rgb(214, 94, 73);
    letter-spacing: 2px;
}

.checkbox-color-filter:checked + .color-filter{
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
}

#instruction{
    max-height: 230px;
    width: auto;
	margin-left: auto;
	margin-right: auto;
    display: block;
    padding: 40px;
    box-shadow: 0px 0px 5px lightgray;
    cursor: pointer;
}
#instruction2{
	margin-left: auto;
	margin-right: auto;
    max-height: 130px;
    display: none;
}
.confirm_card-title{
    text-align: center;
    letter-spacing: 5px;
    font-weight: bold;
}
.confirm_card{
    display: block;
	margin-left: auto;
	margin-right: auto;
    cursor: context-menu;
    line-height: 30px;
    padding: 20px;
    box-shadow: 0px 0px 5px lightgray;
}
.confirm_list li{
    text-indent: 30px;
}
.confirm_list li strong{
    color: rgb(214, 94, 73);
}
@media only screen and (max-width: 800px) {
    #instruction{
        display: none;
    }
    #instruction2{
        display: block;
    }
}
</style>
