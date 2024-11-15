//*====================== завдання 1 =================*\\
const choiceDdrink = document.querySelector('.choice-drink')
const text = document.querySelector('.text')

choiceDdrink.addEventListener('change', ()=>{
    let msg = '';

     switch (choiceDdrink.value) {
        case "coffee":
            msg = "ви обрали каву"
             break;
         case "tea":
            msg = "ви обрали чай"
             break;
         case "juice":
            msg = "ви обрали сік"
            break;
     
         default:
             msg = "оберіть щось"
            break;
    }
    
    text.textContent = msg;
})

//*====================== завдання 5 =================*\\

const input = document.querySelector('#input-color]').value
const colorText = document.querySelector('.color')

color.addEventListener("click", ()=> {
    
console.log('object :>>> ');
})























