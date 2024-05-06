const btn = document.querySelector('.sumbit');
      id = document.querySelector('.id');
      parol = document.querySelector('.password')

btn.addEventListener('click', (e) => {
    e.preventDefault()


    if (id.value == "123456" && parol.value == "78900") {
        alert('siz space ga muvaffaqiyatli kirdingiz')
    } else {
        alert('parol yoki login xato')
    }

    id.value = ""
    parol.value = ""
})