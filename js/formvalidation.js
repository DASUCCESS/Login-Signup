const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const btn = document.getElementById('botton')
const msg = document.getElementById('errormsg')

form.addEventListener('submit', (e)=>{
    if(username.value === '' && password.value === '' ){
        msg.innerHTML = '<p> Input your name and password </p>';
        msg.style.color = 'red';
        setTimeout(()=> msg.remove(), 3000)
        
        // msg.classList.add("danger")
    }
    else if (username.value <= 5){
        msg.innerHTML = '<p> Your name is less than 5 characters </p>'
        msg.style.color = 'red'
        setTimeout(()=> msg.remove(), 3000)
    } 
    e.preventDefault()
})

form.addEventListener('click', myFunction)
function myFunction(){
    if(username.value !== '' && password.value !== ''  ) {
        msg.innerHTML = '<p> submitted </p>'
        msg.style.color = 'red'
        setTimeout(()=> msg.remove(), 3000)
    }
}
