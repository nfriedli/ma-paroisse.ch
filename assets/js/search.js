const options = {
    includeScore: true,
    threshold: 0.24,
    useExtendedSearch: true,
    ignoreLocation: true,
    ignoreFieldNorm: true,
    includeMatches: true,
    findAllMatches: true,
    keys: [
        "title",
        "name",
        "canton",
        "territoire",
        "eglise",
        "meta",
        "permalink",
        "NPA",
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
        link.textContent = result[i].item.title + " (" + result[i].item.canton +")";
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