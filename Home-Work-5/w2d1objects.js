/**
 * @param{string} title
 * @param{strng} author
 * @param{number} libraryId
 * returns  array of sorted tiitle, author, number
 */


let library = [];
function addBook(title, author, libraryId) {
    let object1 = {};
    object1.title = title;
    object1.author = author;
    object1.libraryId = libraryId;
    return library.push(object1)
}
addBook("lion", "tiger", 510)
addBook("gameOfThrons", 'cat', 222)
addBook("weddinCake", "winti", 121)
function title() {
    let tile = [];
    for (let tide of library) {
        tile.push(tide.title)
    }
    return tile.sort();
}
console.log(title());

function author() {
    let auto = [];
    for (let any of library) {
        auto.push(any.author)
    }
    return auto.sort();
}
console.log(author());

function findLibraryId() {
    let id = [];
    for (let libra of library) {
        id.push(libra.libraryId)
    }
    return id.sort();
}
console.log(findLibraryId());