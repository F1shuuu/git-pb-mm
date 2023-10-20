let creditCardNumber = "4532015112830366";
let loopCount=0;
let luhnSum=0;
let visaStartNumber = ['4'];
let americanStartNumbers=['34', '37'];
let masterStartNumbers = ['51', '52', '53', '54' ,'55'];

for (let i = creditCardNumber.length-2; i>=0; i--) 
{
    loopCount++;
    let number = loopCount%2!=0 ? creditCardNumber[i]*2 : creditCardNumber[i];
    for (const digit of number.toString()) {
        luhnSum+=Number(digit)
    }
}
let isValid = 10-(luhnSum%10)==creditCardNumber.slice(-1)

if (!isValid) {
    console.log("INVALID - karta niepoprawna")
} else 
{

    if (americanStartNumbers.includes(creditCardNumber.slice(0,2)) && creditCardNumber.length==15) {
        console.log("Given credit card is American Express")
    } else if (masterStartNumbers.includes(creditCardNumber.slice(0,2)) && creditCardNumber.length===16) {
        console.log("Given credit card is Master Card")
    } else if (creditCardNumber[0]==visaStartNumber && creditCardNumber.length===13 || creditCardNumber.length===16) {
        console.log("Given credit card is Visa Card")

    } else {
        console.log("INVALID - karta niepoprawna")
    }
}
