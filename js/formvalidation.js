const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const btn = document.getElementById('botton')
const msg = document.getElementById('errormsg')


form.addEventListener('submit', (e)=>{
    if(username.value === '' ){
        msg.innerHTML = '<p> Input your name </p>'
        msg.style.color = 'red'
        
        // msg.classList.add("danger")
    }
    else if (password.value === '' ){
        msg.innerHTML = '<p> Input your password </p>'
        msg.style.color = 'red'
        // msg.classList.add("danger")
    }
    e.preventDefault()
})
