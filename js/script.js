const texts = [
    "Jamal Abdul Nasir",
    "Junior Web Developer",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(deleteEffect, 1500); // jeda sebelum hapus
        return;
    }

    setTimeout(typeEffect, 120);
}

function deleteEffect() {
    letter = currentText.slice(0, --index);
    document.getElementById("typing-text").textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(typeEffect, 500);
        return;
    }

    setTimeout(deleteEffect, 80);
}

// mulai animasi
typeEffect();
