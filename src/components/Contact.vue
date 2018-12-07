<template>
    <div >
		<Header />
        <div class="container mt-5 mb-5" id="form-contact">
            <form class="pt-3">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <div class="bo4 of-hidden size15 m-b-20">
                            <input class="sizefull s-text7 p-l-22 p-r-22" type="email" name="email" placeholder="Email Address" >
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="exampleFormControlTextarea1">Question</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <button class="sizefull bg1 hov1 s-text1 trans-0-4" id="contact-btn-send" @click="contact_button_send">
                    Send
                </button>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import firebase from '../firebase/init'
import Header from '@/components/Header'
import Footer from  '@/components/Footer'
import swal from 'sweetalert';

const db = firebase.firestore();

export default {
    name: "Contact",
    data(){
        return {
            email: null,
            content: null,
            created_by: null,
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        contact_button_send: function(){
            var obj = {
                email: this.email,
                content: this.content,
                created_by: this.created_by
            }
            db.collection('email').add(obj).then(()=> {
                swal("Success!", "This message has been sent!", "success");
            });
        }
    }
}
</script>

<style>
#contact-btn-send{
    border-radius: 10px;
    height: 60px;
}
#form-contact{
    padding: 30px;
    border: solid 1px lightgray;
    box-shadow: 0 0 5px lightgray;
}
</style>
