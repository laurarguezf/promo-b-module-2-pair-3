const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista',
    showBio: function () {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`)
    }
};

const adalaber2 = {
    name: 'María',
    age: 25,
    job: 'actriz',
    showBio: function () {
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`)
    }
};

adalaber1.showBio();
adalaber2.showBio();