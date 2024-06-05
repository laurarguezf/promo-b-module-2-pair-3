const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
};

const data = document.querySelector('.js_data');

data.innerHTML = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.</p>
<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}.</p>`;