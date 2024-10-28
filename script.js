const quotes = [
    "When I saw you I fell in love, and you smiled because you knew.",
    "My love is as a fever longing still for that which longer nurseth the disease.",
    "If I know what love is, it is because of you.",
    "My night has become a sunny dawn because of you.",
    "I would find you in any lifetime.",
    "You're nothing short of my everything.",
    "You're the greatest gift I've ever gotten.",
    "All you are is all I'll ever need.",
    "Forever & Always.",
    "The regret of my life is that I have not said 'I love you' often enough.",
    "I look at you and see the rest of my life in front of my eyes."
];

function showText() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden'); // Toggle the visibility of the message
}

function showQuote() {
    const quoteDiv = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.textContent = randomQuote;
    quoteDiv.classList.remove('hidden'); // Show the quote
}
