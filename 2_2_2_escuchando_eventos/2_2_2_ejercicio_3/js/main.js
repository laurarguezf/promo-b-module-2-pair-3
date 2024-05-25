let paragraph = document.querySelector('.paragraph');

paragraph.addEventListener('click' , () => {
    const paragraph2 = '<p>Lorem ipsum</p>'
    paragraph.innerHTML += paragraph2;
});