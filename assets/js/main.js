const BASE_URL=`http://ec2-54-157-14-17.compute-1.amazonaws.com:3000`
const API_TOKEN="7NQNwpCkcD"
const headers = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    "Access-Control-Allow-Origin" : "*", 
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Credentials" : true,
    token: API_TOKEN
}
const form = document.getElementById('form')
const thankYouSection = document.getElementById('thank-you-section')
const words = document.getElementsByClassName('words')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value

    if(!email || !name) return;

    fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: email,
            name: name
        })
    }).then((res)=> {
        thankYouSection.style.display = 'flex'
        form.style.display = 'none'
        words[0].style.visibility = 'visible'
        words[1].style.visibility = 'visible'
        words[2].style.visibility = 'visible'
    }).catch((e) => console.log(e.message))


});
