
var togle_btn = document.getElementById("togle-menu");
var close_btn = document.getElementById("close-menu");
var togle_menu = document.getElementById("popup-menu");


togle_btn.addEventListener("click", function () {
    console.log("CHANGED");
    togle_menu.style.display = 'flex';
})

close_btn.addEventListener("click", () => {
    console.log("CHANGED");
    togle_menu.style.display = 'none';
})


const combinedQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Dream big and dare to fail. - Norman Vaughan",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",

    // Technology Quotes
    "The human spirit must prevail over technology. - Albert Einstein",
    "Technology is a useful servant but a dangerous master. - Christian Lous Lange",
    "We are stuck with technology when what we really want is just stuff that works. - Douglas Adams",
    "The great myth of our times is that technology is communication. - Libby Larsen",
    "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. - Bill Gates",
    "The science of today is the technology of tomorrow. - Edward Teller",
    "Technology is anything that wasn't around when you were born. - Alan Kay",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "It's not that we use technology, we live technology. - Godfrey Reggio",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Technology will never replace great teachers, but technology in the hands of great teachers can be transformational. - George Couros",

];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIndex = getRandomInt(0, combinedQuotes.length - 1);

document.getElementById("quote-field").innerText =`❝❝ ${combinedQuotes[randomIndex]} ❞❞`;
