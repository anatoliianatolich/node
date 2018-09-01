const {JSDOM} = require("jsdom");


const SKILL = {
    html: false,
    javascript: false,
    react: false,
    node: false
}
module.exports.getVacancies = async (req, res, next) => {
    const { url } = req.query;
    
    const dom = await JSDOM.fromURL(url, {});
    debugger;
    const description = dom.window.document.querySelector(".card.wordwrap").textContent.toLowerCase();
    debugger;
    Object.keys(SKILL).forEach((tech) => {
        SKILL[tech] = description.includes(tech.toLowerCase());
    });
    res.send(SKILL);
};


 