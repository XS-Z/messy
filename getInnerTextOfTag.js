/** get a collection of object place inside of specific markup */
const getInnerTextOfTag = (html, tagName) => {
    /**
     * inverse matching
     * http://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word
     * The Dot Matches (Almost) Any Character
     * http://www.regular-expressions.info/dot.html
     */
    var reg = new RegExp(`<${tagName}[^>]*>(((?!</${tagName}>)[\\s\\S])*)</${tagName}>`, "gi");
    var collection = [];
    var match = reg.exec(html);
    while (match) {
        collection.push(match[1]);
        match = reg.exec(html);
    }
    return collection;
};
exports.getInnerTextOfTag = getInnerTextOfTag;