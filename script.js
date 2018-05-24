const name = document.querySelector('input[name="name"]')
const phone = document.querySelector('input[name="phone"]')
const emailText = document.querySelector('input[name="email"]')
const verify = document.querySelector('input[name="verified"]')
const city = document.querySelector('input[name="city"]')
const country = document.querySelector('input[name="country"]')
const portfolio = document.querySelector('input[name="portfolio"]')
let value = 0

emailText.addEventListener('input', e => {
  value = e.target.value
})

verify.addEventListener('blur', e => {
  if(e.target.value === value){
    verify.setCustomValidity('')
    console.log('matched')
  } else{
    verify.setCustomValidity('not matched')
    console.log('not matched')
  }
})

const warn0 = document.querySelector('#warning0')
warn0.style.display = 'none'
const radioBtn = document.getElementsByClassName('row-selection')
let ticked = false
for(let item of radioBtn){
  item.addEventListener('click', ()=>{
    ticked = true
  })
}



const warn1 = document.querySelector('#warning1')
warn1.style.display = 'none'
const check = document.getElementsByClassName('col-down')[1].querySelectorAll('input')
let checked = false
for(let item of check){
  item.addEventListener('change', ()=> {
    checked = true
  })
}


const regexName = /^([A-Z][a-z'-]*\s)+([a-z]+\s)*[A-Z]([a-z(A-Z)?'-])*$/
const regexPhone = /^((\+|00)\d{1,3})?[\s-]?\d{10}$/
const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.][a-zA-Z0-9.]+$/
const regexCity = /^[A-Z][A-Za-z' -]+$/
const regexCtry = /^[A-Z][A-Za-z' -]+$/
const regexPortfolio = /^(https?:\/\/)?[\w-]+(\.\w{2,3}){1,2}(\/[\w-]+)+$/



const submit = document.querySelector('input[type="submit"]')
submit.addEventListener('click', event=>{
  event.preventDefault()
  if(name.value==="" || emailText.value==="" || verify.value==="" || city.value==="" || country.value==="" || phone.value==="" || portfolio.value==="") {
    alert('Please fill in the form')
    return false
  }
  if(!regexName.test(name.value)) return false
  if(!regexPhone.test(phone.value)) return false
  if(!regexEmail.test(emailText.value)) return false
  if(!regexCity.test(city.value)) return false
  if(!regexCtry.test(country.value)) return false
  if(!regexPortfolio.test(portfolio.value)) return false
  if(!verify.checkValidity()) return false
  if (!checked){
    warn1.style.display = 'block'
    warn1.style.color = 'hotpink'
    return false
  }else{!ticked}{
    warn0.style.display = 'block'
    warn0.style.display = 'hotpink'
    return false
  }
  console.log(portfolio.value)
  return true

})