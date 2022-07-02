var email =false;
var facebook= true;
var google =false;


if(email || facebook || google){
    if(email){
        console.log("Login Success with email");
    }else if(facebook){
        console.log("Login Success with facebook");
    }else{
        console.log("Login Success with google");
    }
   
}