
let pass1 = document.getElementById("firstPass")
let pass2 = document.getElementById("secondPass")
// let passwordLengeth=document.getElementById("passLength")
let parPass = document.getElementById("passWordsShow")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generatePasswordByRandom(){
    pass1.style.backgroundColor= "rgb(53, 66, 93)";
    pass2.style.backgroundColor= "rgb(53, 66, 93)";
    parPass.textContent= "Here's Your Password Sugestions"
        if (pass1 === null && pass2 === null){
        for (i=0;i<15;i++){
        let randomIndex = Math.floor( Math.random() * characters.length )
        pass1.textContent += characters[randomIndex]
        }
        for (i=0;i<15;i++){
            let randomIndex = Math.floor( Math.random() * characters.length )
            pass2.textContent += characters[randomIndex]
            }    
        } else{
            pass1.textContent ='' 
            pass2.textContent ='' 
            for (i=0;i<15;i++){
                let randomIndex = Math.floor( Math.random() * characters.length )
                pass1.textContent += characters[randomIndex]
                }
                for (i=0;i<15;i++){
                    let randomIndex = Math.floor( Math.random() * characters.length )
                    pass2.textContent += characters[randomIndex]
                    }   

        }
}



