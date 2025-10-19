import axios from 'axios';

export const serverpost = (e, formdata, signuponly)=>{
    e.preventDefault();
    console.log("serverpost function triggered");
    const elemnt = document.querySelector(".errortxt-2");
    if(formdata.pass_signup.length < 8 || formdata.pass_signup.length > 12){
        elemnt.textContent ='Password must be between 8-12 characters';
        elemnt.classList.add('red');
    }
    else{
        axios.post('http://localhost:3001/register', {...signuponly})
        .then(result => {
            console.log(result);
            if(result.data === "data exists"){
                elemnt.textContent = 'User already exists. Login now!';
                elemnt.classList.add("grey");
            }
            else{
                elemnt.textContent = 'Registered your account successfully. Login now!';
                elemnt.classList.add("green");
            }
        })
        .catch(err => console.error("Axios Error:", err.response?.data || err.message));
    }
}