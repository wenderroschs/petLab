console.log('main!');
document.querySelector('button').addEventListener('click', () => {
    console.log(parseInt((Math.random()+1)*2));
});