let change = document.getElementById('change');
let fio = document.getElementById('name');
let pol = document.getElementById('pol');
let date = document.getElementById('date');
let mail = document.getElementById('mail');
let number = document.getElementById('number');
let about = document.getElementById('about');
let stag = document.getElementById('stag');
change.addEventListener('click', () => {
    let a = prompt('Что вы хотите изменить? (Имя/Пол/Дата рождения/E-MAIL/Номер телефона/Стаж/О себе)')
    if(a === 'Имя'){
        let b = prompt('Введите имя: ');
        fio.innerHTML = b;
    } else if(a === 'Пол'){
        let b = prompt('Ваш пол: ');
        pol.innerHTML = b;
    } else if(a === 'Дата рождения'){
        let b = prompt('Введите дату рождения: ');
        date.innerHTML = b;
    } else if(a === 'E-MAIL'){
        let b = prompt('Введите почту: ');
        mail.innerHTML = b;
    } else if(a === 'Номер телефона'){
        let b = prompt('Введите свой номер: ');
        number.innerHTML = b;
    } else if(a === 'О себе'){
        let b = prompt('Введите информацию о себе: ');
        about.innerHTML = b;
    } else if(a === 'Стаж'){
        let b = prompt('Введите стаж: ');
        stag.innerHTML = b;
    } else{
        alert('Такого параметра нет.')
    }
})