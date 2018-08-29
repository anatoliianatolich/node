const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const SKILL = {
    html: false,
    javascript: false,
    react: false,
    node: false
}
getVacancies = async (req, res, next) => {
    const { query } = req.params;
    const dom = JSDOM.fromURL(url, {});
    const description = await dom.window.document.querySelector('.car.wordwrap').textContent.toLowerCase();
    Object.keys(SKILL).forEach((tech) => {
        SKILL[tech] = description.includes(tech.toLowerCase());
    });
    res.send(SKILL);
}