let btn = document.querySelector('button')
let img = document.querySelector('img')

//light on 
btn.addEventListener('click', lightOn)
function lightOn(){
    img.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulbon.gif"
}

// // light off 
// btn.addEventListener('click', lightOff)
// function lightOff(){
//     img.src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulboff.gif"
// }