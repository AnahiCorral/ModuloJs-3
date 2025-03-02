function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?~";
    
    let charSet = "";
    if (uppercase) charSet += upperChars;
    if (lowercase) charSet += lowerChars;
    if (numbers) charSet += numberChars;
    if (symbols) charSet += symbolChars;
    
    if (charSet === "") {
        document.getElementById('password').value = "Seleccionar";
        return;
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    
    document.getElementById('password').value = password;
}

document.getElementById('generate').addEventListener('click', generatePassword);