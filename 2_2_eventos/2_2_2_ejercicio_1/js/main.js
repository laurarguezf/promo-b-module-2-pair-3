const btn = document.querySelector('.js_btn');

btn.addEventListener( 'click' , (ev) => {
    const input = document.querySelector('.js_input').value;
    const span = document.querySelector('.js_span');
    span.innerHTML = `Hola ${input}`;
});