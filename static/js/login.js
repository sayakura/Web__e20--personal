
var firebaseOp = key => {
	switch(key){
		case 'signin':
		{
			firebase.auth().signInWithEmailAndPassword(login.sign_in_email, login.sign_in_password).then(
	            user => {
	                login.sign_in_email = null;
	                login.sign_in_password = null;
	                login.authUser = user;
	                location.reload(); // redirect to main page
	                // logined
				}
			).catch(error => {
				prompter().failed(error.message);
			});
		}
       	break ;
		case 'signup': 
		{
			firebase.auth().createUserWithEmailAndPassword(login.emailAddress, login.password).then(
	            user => {
					login.emailAddress = null;
					login.password = null;
					login.fullName = null;
					login.phonenumber = null;
					// update displayname and phonenumber
					firebase.auth().currentUser.updateProfile({
						displayName: login.fullName,
						phoneNumber: login.phoneNumber
					}).then(() => {
						prompter().success("Successfully Signup!", null, () => {
							login.authUser = firebase.auth().currentUser;
							location.reload();
						});
					}).catch(err => {
	        			prompter().failed(err.message);
            		});
            }).catch(err => {
            	prompter().failed(err.message);
            });
		}
        break ;
		case 'logout':
		{
			console.log("logged out")
			firebase.auth().signOut();
			location.reload();
		}
        break ;
        case 'listner':{
        	firebase.auth().onAuthStateChanged(user => {
	        	if (user)
             		login.authUser = user;
	        });
        }
        break ;
	}
}


var login = new Vue({
	el:"#login",
	data:{
		authUser: null,
		fullName: null,
		phoneNumber: null,
		emailAddress: null,
		password: null,
		sign_in_password: null,
		sign_in_email: null,
	},
	methods:{
		signin:() => {
			if (validater(login.sign_in_email, login.sign_in_password))
				firebaseOp('signin');
			else
				prompter().failed("missing field(s)!");
		},
		signup:() => {
			if (validater(login.fullName, login.phoneNumber, login.emailAddress, login.password))
				firebaseOp('signup');
			else
				prompter().failed("missing field(s)!");
		}
	},
	created(){
		firebaseOp('listner');
	}
});