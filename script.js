const quotes = [{
    quotes: 'Long after one has forgotten what a woman wore, the memory of her perfume lingers.',
    author: 'Christian Dior'
}, {
    quotes: 'When I was a boy, I thought scent was contained in dewdrops on flowers and if I got up very early in the morning, I could collect it and make perfume.',
    author: 'Oscar de la Renta'
}, {
    quotes: 'A good fragrance should have a certain personality that makes people identify the scent with you.',
    author: 'Shakira'
}, {
    quotes: 'Scent is an extension of your style; it becomes your signature.',
    author: 'Kenya Kinski-Jones'
}, {
    quotes: 'Scents evoke very, very powerful memories, whether its the scent of someone that you know and someone that you love, or it it’s a meal that your mother made.',
    author: 'Blake Lively'
}, {
    quotes: 'Perfume is a story in odor, sometimes poetry in memory.',
    author: 'Jean-Claude Ellena'
}, {
    quotes: 'Perfume is that last and best reserve of the past, the one which when all our tears have run dry, can make us cry again!',
    author: 'Marcel Proust'
}, {
    quotes: 'Nothing brings to life again a forgotten memory like fragrance.',
    author: 'Christopher Poindexter'
}, {
    quotes: 'Scent is our most primitive sense, it’s the closest thing to the emotional brain. It penetrates you. You love it, and you want to be part of it.',
    author: 'Isabelle Ramsay-Brackstone'
}, {
    quotes: 'A bit of fragrance always clings to the hand that gives you roses.',
    author: 'Proverb'
}
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() *quotes.length);

    quote.innerHTML = quotes[random].quotes;

    author.innerHTML = quotes[random].author;
})
