//  let character = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}:';
// let = passwordlength;
// let password = "";

// function passwordgenrate(){
//     let character = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}:';
//     let passwordlength ="7 ";
//     let password = "";
//     for (let i=0; i< passwordlength; i++){
//         let random = math.floor(math.random()*character.length);
//         pass += character.charAt(random);
//     }
//     document.getElementById("sanket").value = password;
// }
// passwordgenrate();
// function copyPassword() {
//     var passwordField = document.getElementById('password');
//     passwordField.select();
//     document.execCommand("copy");

// }

function passwordgenerate() {
    let character = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+{}:';
    let passwordlength = 8;
    let password = "";

    for (let i = 0; i < passwordlength; i++) {
        let random = Math.ceil(Math.random() * character.length);
        password += character.charAt(random);
    }

    document.getElementById("sanket").value = password;
}


