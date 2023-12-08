
let numberOfMusicButtons = document.querySelectorAll (".exp").length;

for (let i=0; i<numberOfMusicButtons; i++) {

    document.querySelectorAll (".exp") [i].addEventListener ("click", function() {
        let buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
        
            case "a":
                let exp1 = new Audio ("sounds/exp1.mp3");
                exp1.play();
                break;

            case "b":
                let exp2 = new Audio ("sounds/exp2.mp3");
                exp2.play();
                break;

            case "c":
                let exp3 = new Audio ("sounds/exp3.mp3");
                exp3.play();
                break;

            case "d":
                let exp4 = new Audio ("sounds/exp4.mp3");
                exp4.play();
                break;

            case "f":
                let exp5 = new Audio ("sounds/exp5.mp3");
                exp5.play();
                break;
                
            default: console.log (buttonInnerHTML);
            
        }

    })
}