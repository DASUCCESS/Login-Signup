const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const btn = document.getElementById('botton')
const msg = document.getElementById('message')


form.addEventListener('submit', (e)=>{
    let
    if (username.Value.length <= 6){
        msg.innerText = 'Your password is less than 6'
    }
    e.preventDefault()
})
