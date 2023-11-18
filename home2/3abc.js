function encryptCaesar(message, shift) {
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
  
      if (char.match(/[a-z]/i)) {
    
        let charCode = message.charCodeAt(i);
        
        let isUpperCase = char === char.toUpperCase();
  
        charCode = (charCode - (isUpperCase ? 65 : 97) + shift) % 26 + (isUpperCase ? 65 : 97);
  
        encryptedMessage += String.fromCharCode(charCode);
      } else {

        encryptedMessage += char;
      }
    }
  
    return encryptedMessage;
  }
  
  function decryptCaesar(encryptedMessage, shift) {
    return encryptCaesar(encryptedMessage, -shift);
  }
  
  const originalMessage = "Hello, World!";
  const shiftAmount = 3;
  
  const encryptedMessage = encryptCaesar(originalMessage, shiftAmount);
  console.log(`Encrypted Message: ${encryptedMessage}`);
  
  const decryptedMessage = decryptCaesar(encryptedMessage, shiftAmount);
  console.log(`Decrypted Message: ${decryptedMessage}`);