var audio = new Audio('public/audio/thpt.mp3')

var face = document.querySelector('.face')

var poop = false

face.onclick =
    function () {
        if(!poop) {
            poop = true
            face.setAttribute('src', 'public/images/poop_face.png')
            audio.play()
        } else {
            poop = false
            face.setAttribute('src', 'public/images/some_face.png')
        }
    }
