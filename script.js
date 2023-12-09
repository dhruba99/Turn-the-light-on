const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');
const header = document.getElementById('header');

onBtn.addEventListener('click',()=>{
    document.getElementById('myImage').src='imgs/bulbOn.png';
    // header.innerHTML = 'Light is On';
})

offBtn.addEventListener('click',()=>{
    document.getElementById('myImage').src='imgs/bulbOff.png';
    // header.innerHTML = 'Can you turn the light on';
})