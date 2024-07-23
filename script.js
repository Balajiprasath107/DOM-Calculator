const body = document.body
const heading = document.createElement("h1")
const description = document.createElement("p")
const calculatorbody = document.createElement('div')
heading.setAttribute('id','title')
calculatorbody.setAttribute('id','calculator')
description.setAttribute('id','description')
heading.innerText = "Calculator"
description.innerText="using DOM"
body.append(heading)
body.append(description)
body.append(calculatorbody)


// Screen
const displayscreen = document.createElement('input')
displayscreen.setAttribute('id','result')
displayscreen.type = "text"
displayscreen.value = '0'
calculatorbody.append(displayscreen)


//button area
const buttonArea = document.createElement('div')
buttonArea.setAttribute('id','buttonArea')
calculatorbody.append(buttonArea)

// Memory buttons
const buttonMC = document.createElement('button')
buttonMC.setAttribute('id','MC')
buttonMC.classList.add('buttonM')
buttonMC.innerText = 'MC'
buttonArea.append(buttonMC)

const buttonMplus = document.createElement('button')
buttonMplus.setAttribute('id','Mplus')
buttonMplus.classList.add('buttonM')
buttonMplus.innerText = 'M+'
buttonArea.append(buttonMplus)

const buttonMminus = document.createElement('button')
buttonMminus.setAttribute('id','Mminus')
buttonMminus.classList.add('buttonM')
buttonMminus.innerText = 'M-'
buttonArea.append(buttonMminus)

const buttonMR = document.createElement('button')
buttonMR.setAttribute('id','MR')
buttonMR.classList.add('buttonM')
buttonMR.innerText = 'MR'
buttonArea.append(buttonMR)



// Operation buttons AC,+|-,/,*
const buttonAC = document.createElement('button')
buttonAC.setAttribute('id','clear')
buttonAC.classList.add('buttonSymbol')
buttonAC.innerText = 'AC'
buttonArea.append(buttonAC)

const buttonPlusmn = document.createElement('button')
buttonPlusmn.setAttribute('id','plusmn')
buttonPlusmn.classList.add('buttonSymbol')
buttonPlusmn.innerHTML = '&plusmn;'
buttonArea.append(buttonPlusmn)

const buttonDiv = document.createElement('button')
buttonDiv.setAttribute('id','Division')
buttonDiv.classList.add('buttonSymbol')
buttonDiv.innerHTML = '&divide;'
buttonArea.append(buttonDiv)

const buttonMult = document.createElement('button')
buttonMult.setAttribute('id','Multiply')
buttonMult.classList.add('buttonSymbol')
buttonMult.innerHTML = '&times;'
buttonArea.append(buttonMult)



// Number buttons 7-9, -
const buttonseven = document.createElement('button')
buttonseven.setAttribute('id','7')
buttonseven.classList.add('button-number')
buttonseven.innerHTML = '7'
buttonArea.append(buttonseven)

const buttonEight = document.createElement('button')
buttonEight.setAttribute('id','8')
buttonEight.classList.add('button-number')
buttonEight.innerHTML = '8'
buttonArea.append(buttonEight)

const buttonNine = document.createElement('button')
buttonNine.setAttribute('id','9')
buttonNine.classList.add('button-number')
buttonNine.innerHTML = '9'
buttonArea.append(buttonNine)

const buttonSub = document.createElement('button')
buttonSub.setAttribute('id','subtract')
buttonSub.classList.add('buttonSymbol')
buttonSub.innerHTML = '-'
buttonArea.append(buttonSub)


//4-6, +
const buttonFour = document.createElement('button')
buttonFour.setAttribute('id','4')
buttonFour.classList.add('button-number')
buttonFour.innerHTML = '4'
buttonArea.append(buttonFour)

const buttonFive = document.createElement('button')
buttonFive.setAttribute('id','5')
buttonFive.classList.add('button-number')
buttonFive.innerHTML = '5'
buttonArea.append(buttonFive)

const buttonSix = document.createElement('button')
buttonSix.setAttribute('id','6')
buttonSix.classList.add('button-number')
buttonSix.innerHTML = '6'
buttonArea.append(buttonSix)

const buttonPlus = document.createElement('button')
buttonPlus.setAttribute('id','add')
buttonPlus.classList.add('buttonSymbol')
buttonPlus.innerHTML = '&plus;'
buttonArea.append(buttonPlus)


//1-3
const buttonOne = document.createElement('button')
buttonOne.setAttribute('id','1')
buttonOne.classList.add('button-number')
buttonOne.innerHTML = '1'
buttonArea.append(buttonOne)

const buttonTwo = document.createElement('button')
buttonTwo.setAttribute('id','2')
buttonTwo.classList.add('button-number')
buttonTwo.innerHTML = '2'
buttonArea.append(buttonTwo)

const buttonThree = document.createElement('button')
buttonThree.setAttribute('id','3')
buttonThree.classList.add('button-number')
buttonThree.innerHTML = '3'
buttonArea.append(buttonThree)

const buttonmodulo = document.createElement('button')
buttonmodulo.setAttribute('id','modulo')
buttonmodulo.classList.add('buttonSymbol')
buttonmodulo.innerHTML = '&percnt;'
buttonArea.append(buttonmodulo)

const buttonZero = document.createElement('button')
buttonZero.setAttribute('id','0')
buttonZero.classList.add('button-number')
buttonZero.innerHTML = '0'
buttonArea.append(buttonZero)

const buttonDot = document.createElement('button')
buttonDot.setAttribute('id','Dot')
buttonDot.classList.add('button-number')
buttonDot.innerHTML = '.'
buttonArea.append(buttonDot)

// Equal button
const buttonEqual = document.createElement('button')
buttonEqual.setAttribute('id','equal')
buttonEqual.classList.add('button-Equal')
buttonEqual.innerHTML = '&equals;'
buttonArea.append(buttonEqual)





let disp = '',operation = ''
let temp
let result
let numarr = []
function creatTemp(num){
    if(isNaN(Number(num)))
    {
        result = NaN;finalresult()
    }
    else{
    temp = Number(num)
    numarr.push(num)
    console.log(numarr)
    disp = ''
    }
}

function checkerror(){
    if(operation===''){}
    else{
        operation=''
    }
}

function displayScr(key){
    if(disp.length<16)
    disp+= key
   if((disp.length>=9 && disp.length<13)){
        displayscreen.style.cssText+= 'font-size:40px'
    }
    else if(disp.length>=13){
        displayscreen.style.cssText+= 'font-size:40px'
    }
    if(disp.length<7){
        displayscreen.removeAttribute('style')
    }
    if(disp.length>16)
        displayscreen.style.cssText+= 'font-size:25px'
    displayscreen.value = (disp);
 
    
}
window.addEventListener("keydown", function (event) {
    if(event.key>=0 && event.key<=9){
        displayScr(event.key)
    }
    else{
        this.alert("Only Numbers are allowed")
    }
  });
  numberbtn = {
    1 : '1', 2: '2', 3: '3' , 4: '4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9',0:'0', '.':'Dot'
  }
  for(let ele in numberbtn){
  document.getElementById(numberbtn[ele]).addEventListener('click',()=>{
    displayScr(ele)
  })
}
let mem
function memor(x){
    localStorage.setItem('result', x)
    mem = (localStorage.getItem('result'))
}
function checkresult(){
    if(displayscreen.value===''){
        displayscreen.value=result
    }
}
buttonMR.addEventListener('click',()=>{
    displayscreen.value=''
    disp=''
    mem = (localStorage.getItem('result'))
    displayscreen.value = (mem===null || isNaN(mem)?0:mem)
})
buttonMplus.addEventListener('click',()=>{
    checkresult()
    memor(add(mem,displayscreen.value) )
    disp=""
})
buttonMminus.addEventListener('click',()=>{
    checkresult() 
    memor(sub(mem,displayscreen.value))
    disp=""
})
buttonMC.addEventListener('click',()=>{
    displayscreen.value='0'
    disp=''
    displayScr('')
    memor(0)
})

buttonAC.addEventListener('click',()=>{
    
    disp= ''
    displayScr("")
    displayscreen.value='0'
    numarr=[]
})

buttonPlusmn.addEventListener('click',()=>{
    let symbchange
    if(displayscreen.value!== '0')symbchange =String (Number(displayscreen.value)*(-1))
    displayscreen.value = (symbchange);
})

buttonDiv.addEventListener('click',()=>{
    if(operation==='div' || operation===''){
        operation=''
        creatTemp(displayscreen.value)
    }
    else{
        buttonEqual.click()
        creatTemp(result)
    }
    checkerror()
    operation+='div'
})

buttonMult.addEventListener('click',()=>{
    if(operation==='mul' || operation===''){
        operation=''
        creatTemp(displayscreen.value)
    }
    else{
        buttonEqual.click()
        creatTemp(result)
    }
    checkerror()
    operation+='mul'
})

buttonSub.addEventListener('click',()=>{
    if(operation==='sub' || operation===''){
        operation=''
        creatTemp(displayscreen.value)
    }
    else{
        buttonEqual.click()
        creatTemp(result)
    }
    checkerror()
    operation+='sub'
})

buttonPlus.addEventListener('click',()=>{
    if(operation==='plus' || operation===''){
        operation=''
        creatTemp(displayscreen.value)
    }
    else{
        buttonEqual.click()
        creatTemp(result)
    }
    checkerror()
    operation+='plus'
})
buttonmodulo.addEventListener('click',()=>{
    if(operation==='mod' || operation===''){
        operation=''
        creatTemp(displayscreen.value)
    }
    else{
        buttonEqual.click()
        creatTemp(result)
    }
    checkerror()
    operation+='mod'
})




buttonEqual.addEventListener('click',function run(){
    
    numarr.push(displayscreen.value)
    switch(operation){
        case 'plus':
            result = numarr.reduce((a,b)=> add(a,b))
            break
        case 'div':
            result = numarr.reduce((a,b)=> div(a,b))
            break  
        case 'sub':
            result = numarr.reduce((a,b)=> sub(a,b))
            break
        case 'mul':
            result = numarr.reduce((a,b)=> mul(a,b))
            break 
        case 'mod':
            result = numarr.reduce((a,b)=> mod(a,b))
            break
        default:
            result =  displayscreen.value
    }
    displayscreen.value=(result)
    disp=''
    numarr=[]
})

function add(a=0,b){
    a = Number(a).toFixed(3)*10000
    b = Number(b).toFixed(3)*10000
    return parseFloat(((a+b)/10000).toFixed(4))
}
function div(a,b){
    return parseFloat((a/Number(b)).toFixed(4))

}
function mul(a,b){
    return parseFloat((a*Number(b)).toFixed(4))
}

function sub(a=0,b){
    a = Number(a).toFixed(3)*10000
    b = Number(b).toFixed(3)*10000
    return parseFloat(((a-b)/10000).toFixed(4))
}
function mod(a,b){    
    return  parseFloat(((a%b)).toFixed(4))
}
