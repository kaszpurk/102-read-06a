var response = prompt('Do you prefer dogs, cats, or both?');
var message;

if (response === 'dogs') {
    message = 'I love Dogs!';
} else if (response === 'cats') {
    message = 'Cats are Grrrreat!';
} else if (response === 'both') {
    message = 'HURRRAH I like both also!';
} else { 
    message = 'Okay, do you like animals?';
}

document.write('<h3>' + message + '</h3>');