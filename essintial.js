const money = document.getElementById('money')
const btn = document.getElementById('submit')
const ui = document.querySelector('#bank')
let value;

let user = {
    name:"Naruto",
    bank: 500

}

money.addEventListener('input', (e) => {
    value = e.target.value
})

btn.addEventListener('click', () => {
    user.bank += Number(value)
    ui.innerHTML = `<span>User ${user.name}: has ${user.bank} EGP</span>`
    // console.log(user.bank);
})