const axios = require("axios");
const cheerio = require("cheerio");

const scraper = (call) => {
    axios.get("https://npr.org/sections/news")
        .then(resp => {
            const $ = cheerio.load(resp.data);
            const articles = [];
            $(".title").each((i, elem) => {
                articles.push({
                    title: $(elem).text(),
                    summary: $(elem).text(),
                    href: $(elem).text(),
                })
            })
            call(articles);
        })
}
module.exports = scraper;