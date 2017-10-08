let Calculate = (num1, num2, degrees) => {
let answer = "",

    switch (degrees) {
        case 'F':
        tempF = Number(num1.value);    
        tempC = (tempF - 32) * 1.8;
        break;

        case 'C':
        tempC = Number(num2.value);  
        tempF = (tempC * 1.8) + 32;
        break;

        default:
        answer = 'No valid operator was supplied'
        break
    }
        return answer
    

}


    let num1 = document.getElementById("far");
    let num2 = document.getElementById("cel");
    let temp;
    let convert = document.getElementById("convert")
    document.getElementById("result").innerHTML

    let farresult = document.getElementById("farresult")
    let celresult = document.getElementById("celresult")
 
 function tempConvert(degrees) 
let convertForm = () =>
{
    farresult.innerHTML = far.value
    celresult.innerHTML = cel.value
}

convert.addEventListener('click', (e) => {convertForm(); e.preventDefault()})
num1.value = tempF;
num2.value = tempC;


