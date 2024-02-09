const parseService = require('../service/parseService.js');
const CSV_QUOTES = "2023-quotes.csv";

// nombre aléatoire
function randomNumber(max){
    return Math.floor(Math.random() * max)
}


exports.getQuote = async (req, res) => {
    const QUOTE = await parseService.parseFile(CSV_QUOTES)    
    .then((quotes) => {
        return quotes[randomNumber(quotes.length)];
    });

    res.json({
        QUOTE,
    })
}
