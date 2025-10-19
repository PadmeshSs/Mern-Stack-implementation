import axios from 'axios';

export const serverlogin = (e, loginonly, setlog, setname, setval) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { ...loginonly })
        .then((result) => {
            const elemnt = document.querySelector('.errortxt-1');

            elemnt.textContent = "";
            elemnt.classList.remove("green", "red", "grey");
    
            if (result.data.msg === "Success") {
                elemnt.textContent = "Login is successful!";
                console.log(result);
                
                elemnt.classList.add("green");

                console.log(result.data.user.name);
                setlog(true);
                
                setname(result.data.user.name);
    
                setTimeout(() => {
                    setval(false);
                }, 5000);
            } 
            else if (result.data.msg === "Incorrect password") {
                elemnt.textContent = "Incorrect password. Try again.";
                elemnt.classList.add("red");
            } 
            else if (result.data.msg === "No record found") {
                elemnt.textContent = "No data found. Signup now!";
                elemnt.classList.add("grey");
            } 
            else {
                elemnt.textContent = "An unknown error occurred.";
            }
        })
        .catch((err) => {
            console.error("Error during login:", err);
            const elemnt = document.querySelector('.errortxt-1');
            elemnt.textContent = "Server error. Please try again later.";
            elemnt.classList.add("red");
        });
};
