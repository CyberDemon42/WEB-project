/*------------------- ANIMATE REVEAL ----------------------------*/

/***********************IMG ARCADE******************************/
const arcadeElement = document.querySelector('.Arcade');

arcadeElement.style.opacity = '0';
arcadeElement.style.transform = 'translateY(-40px)';

setTimeout(() => {
    // Transition styles
    arcadeElement.style.transition = 'opacity 2s, transform 2s';
    arcadeElement.style.opacity = 1;
    arcadeElement.style.transform = 'translateY(0)';
}, 1200);




/*******************REAL TIME SEARCH**************************/
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
    }
}
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInputWrapper = document.querySelector('.wrapper');
    const searchInput = document.getElementById('searchInput');
    const blurBackground = document.getElementById('blurBackground');

    searchInputWrapper.style.display = 'none';
    blurBackground.style.display = 'none';

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();

            if (searchInputWrapper.style.display === 'none') {
                searchInputWrapper.style.display = 'block';
                blurBackground.style.display = 'block';
                searchInput.focus();
            } else {
                searchInputWrapper.style.display = 'none';
                blurBackground.style.display = 'none';
                searchInput.value = '';
            }
        }
    });
});
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();