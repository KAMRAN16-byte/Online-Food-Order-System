async function submit(){
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const name = document.querySelector('#name').value
    const mobile = document.querySelector('#mobile').value
    const body = {name,email,password,mobile}

    try{
        const response = await fetch('http://localhost:8000/user/signup', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const result = await response.json();
        if(result.status === 'success'){
            alert("Signup successful");
        }
        else{
            alert(result.Error);
        }
    }
    catch(err){
        alert(err)
    }


}

