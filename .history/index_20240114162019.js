let btn = document.querySelector('button')
let img = document.querySelector('img')
let checked = false
//light on 
btn.addEventListener('click', lightOn)
function lightOn(){
    if(checked){
        img.src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulboff.gif"
        checked=false

    }
    else{
            img.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulbon.gif"
            checked=false
    }
}

// // light off 
// btn.addEventListener('click', lightOff)
// function lightOff(){
//     img.src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulboff.gif"
// }