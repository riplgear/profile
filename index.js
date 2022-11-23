let form = document.querySelector('form');

let button = document.querySelector('button');

button.onclick = () => {
    console.log("Имя - " + form.elements.nameUser.value);
    console.log("Фамилия - " + form.elements.surnameUser.value);
    console.log("Дата рождения - " + form.elements.dateUser.value)

    let r = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}


