const form = document.querySelector("#form");

const Name = document.querySelector("#Name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");


function storage(){
    const userdata={
        username: Name.value,
        password: password.value
    };
    sessionStorage.setItem("userdata",JSON.stringify(userdata));
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    vi();
    vi1();
    vi2();
    vi3();
    
    const alldata=document.querySelectorAll(".success").length === 4
   if(alldata){  
    storage();
      
    window.location.href="signin.html";
    
   }
   
    })

       
Name.addEventListener('input', (e)=>{
    e.preventDefault();
    vi();
})
email.addEventListener("input",(e)=>{
    e.preventDefault();
    vi1()
})
password.addEventListener('input', (e)=>{
    e.preventDefault();
    vi2();
})
cpassword.addEventListener('input', (e)=>{
    e.preventDefault();
    vi3();
})

function vi(){
    const usernameVal = Name.value.trim();
     const letters = /^[a-z A-Z]*$/;
    const emp=/\s/g;
   
    if(usernameVal===''){
        setError(Name,'Name is required')
    }
    else if(usernameVal.match(emp)){
        setError(Name, "Empty space not allowed")
    }
    else if(!usernameVal.match(letters)){
        setError(Name,"Only have Alphabets")
    }
    else if(usernameVal.length<8){
        setError(Name, "Name length min 8")

    }
    else if(usernameVal.length>12){
        setError(Name, "Name length max 12")
    }
    else {
        setSuccess(Name)
    }
}
    function vi1(){
        const emailVal = email.value.trim();
           if (emailVal===''){
            setError(email,'Email is required')
        }
        
        else if(!validateEmail(emailVal)){
            setError(email,'Email is invalid')
        }
        
        else{
            setSuccess(email)
        }
        
           }
    function vi2(){
        const passwordVal = password.value.trim();
           if (passwordVal===''){
            setError(password,'password is required')
        }
        else if(passwordVal.length<8){
            setError(password,'more than 8 character')
        }
        else{
            setSuccess(password)
        }
        
    }
    function vi3(){
        
        const cpasswordVal = cpassword.value.trim();
                const passwordVal = password.value.trim();
        if (cpasswordVal=== ''){
        setError(cpassword, 'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword, 'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    }
    
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        
        /^[a-z0-9._%+-|^<>()[\]\\.,;:\s@"#]+@(gmail|yahoo)\.com+$/
      );
}

    