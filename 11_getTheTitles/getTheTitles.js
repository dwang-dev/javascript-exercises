const getTheTitles = function(bookObjArr) {
    let titles = []
    for (let bookObj of bookObjArr) {
        titles.push(bookObj.title)
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
