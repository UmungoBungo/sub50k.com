
// set timer to remove fourthCard class after 6s and add firstCard class
setTimeout(() => {
    document.querySelector('.fourthCard').classList.add('firstCard');
    document.querySelector('.fourthCard').classList.remove('fourthCard');
}, 6000);
