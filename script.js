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

function tempConvert(type) {
    var num1 = document.getElementById("far");
    var num2 = document.getElementById("cel");
    var temp;
    document.getElementById("result").innerHTML
}

num1.value = tempF;
num2.value = tempC;


