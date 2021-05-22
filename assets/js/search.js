const options = {
    includeScore: true,
    threshold: 0.20,
    useExtendedSearch: true,
    keys: [
        "title",
        { name: "name", weight: 100},
        "canton",
        { name: "territoire", weight: 10},
        { name: "eglise", weight: 10},
        "meta",
        "permalink",
        { name: "NPA", weight: 100},
        "region"
    ]
};

async function fetchJSON() {
    const response = await fetch('index.json');
    const docs = await response.json();
    return docs;
}

fetchJSON().then(docs => {
    fuse = new Fuse(docs, options);
});

const input = document.querySelector('input');
var resultsUI = document.querySelector('.search-results');


input.addEventListener('keyup', function (event) {
    var result = fuse.search(this.value);
    console.log(result);

    clearResults();
    for (var i in result) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = result[i].item.title;
        link.setAttribute('href', result[i].item.permalink);
        listItem.appendChild(link);
        resultsUI.appendChild(listItem);
    }

});

var clearResults = function () {
    while (resultsUI.firstChild) {
        resultsUI.removeChild(resultsUI.firstChild);
    }
};

focusMethod = function getFocus() {           
    document.getElementById("search").focus();
  }

focusMethod();  