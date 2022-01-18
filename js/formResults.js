const data = {
    "-2-2-2": "./images/azul.png",
    "-2-2-1": "./images/azul.png",
    "-2-20": "./images/azul.png",
    "-2-21": "./images/azul.png",
    "-2-22": "./images/azul.png",
    "-2-1-2": "./images/azul.png",
    "-2-1-1": "./images/azul.png",
    "-2-10": "./images/azul.png",
    "-2-11": "./images/azul.png",
    "-2-12": "./images/azul.png",
    "-20-2": "./images/azul.png",
    "-20-1": "./images/azul.png",
    "-200": "./images/azul.png",
    "-201": "./images/azul.png",
    "-202": "./images/azul.png",
    "-21-2": "./images/azul.png",
    "-21-1": "./images/azul.png",
    "-210": "./images/azul.png",
    "-211": "./images/azul.png",
    "-212": "./images/azul.png",
    "-22-2": "./images/azul.png",
    "-22-1": "./images/azul.png",
    "-220": "./images/azul.png",
    "-221": "./images/azul.png",
    "-222": "./images/azul.png",
    "-1-2-2": "./images/carcason.jpg",
    "-1-2-1": "./images/carcason.jpg",
    "-1-20": "./images/carcason.jpg",
    "-1-21": "./images/carcason.jpg",
    "-1-22": "./images/carcason.jpg",
    "-1-1-2": "./images/carcason.jpg",
    "-1-1-1": "./images/carcason.jpg",
    "-1-10": "./images/carcason.jpg",
    "-1-11": "./images/carcason.jpg",
    "-1-12": "./images/carcason.jpg",
    "-10-2": "./images/carcason.jpg",
    "-10-1": "./images/carcason.jpg",
    "-100": "./images/carcason.jpg",
    "-101": "./imagescarcason.jpg",
    "-102": "./images/carcason.jpg",
    "-11-2": "./images/codenames.png",
    "-11-1": "./images/codenames.png",
    "-110": "./images/codenames.png",
    "-111": "./images/codenames.png",
    "-112": "./images/codenames.png",
    "-12-2": "./images/codenames.png",
    "-12-1": "./images/codenames.png",
    "-120": "./images/codenames.png",
    "-121": "./images/codenames.png",
    "-122": "./images/codenames.png",
    "0-2-2": "./images/codenames.png",
    "0-2-1": "./images/codenames.png",
    "0-20": "./images/codenames.png",
    "0-21": "./images/codenames.png",
    "0-22": "./images/codenames.png",
    "0-1-2": "./images/codenames.png",
    "0-1-1": "./images/codenames.png",
    "0-10": "./images/codenames.png",
    "0-11": "./images/codenames.png",
    "0-12": "./images/codenames.png",
    "00-2": "./images/takenoko.png",
    "00-1": "./images/takenoko.png",
    "000": "./images/takenoko.png",
    "001": "./images/takenoko.png",
    "002": "./images/takenoko.png",
    "01-2": "./images/takenoko.png",
    "01-1": "./images/takenoko.png",
    "010": "./images/takenoko.png",
    "011": "./images/takenoko.png",
    "012": "./images/takenoko.png",
    "02-2": "./images/takenoko.png",
    "02-1": "./images/takenoko.png",
    "020": "./images/takenoko.png",
    "021": "./images/takenoko.png",
    "022": "./images/takenoko.png",
    "1-2-2": "./images/takenoko.png",
    "1-2-1": "./images/takenoko.png",
    "1-20": "./images/takenoko.png",
    "1-21": "./images/takenoko.png",
    "1-22": "./images/takenoko.png",
    "1-1-2": "./images/takenoko.png",
    "1-1-1": "./images/takenoko.png",
    "1-10": "./images/takenoko.png",
    "1-11": "./images/takenoko.png",
    "1-12": "./images/takenoko.png",
    "10-2": "./images/takenoko.png",
    "10-1": "./images/takenoko.png",
    "100": "./images/takenoko.png",
    "101": "./images/takenoko.png",
    "102": "./images/takenoko.png",
    "11-2": "./images/bang.png",
    "11-1": "./images/bang.png",
    "110": "./images/bang.png",
    "111": "./images/bang.png",
    "112": "./images/bang.png",
    "12-2": "./images/bang.png",
    "12-1": "./images/bang.png",
    "120": "./images/bang.png",
    "121": "./images/bang.png",
    "122": "./images/bang.png",
    "2-2-2": "./images/bang.png",
    "2-2-1": "./images/bang.png",
    "2-20": "./images/bang.png",
    "2-21": "./images/bang.png",
    "2-22": "./images/bang.png",
    "2-1-2": "./images/bang.png",
    "2-1-1": "./images/bang.png",
    "2-10": "./images/bang.png",
    "2-11": "./images/bang.png",
    "2-12": "./images/bang.png",
    "20-2": "./images/bang.png",
    "20-1": "./images/bang.png",
    "200": "./images/bang.png",
    "201": "./images/bang.png",
    "202": "./images/bang.png",
    "21-2": "./images/bang.png",
    "21-1": "./images/bang.png",
    "210": "./images/bang.png",
    "211": "./images/bang.png",
    "212": "./images/bang.png",
    "22-2": "./images/bang.png",
    "22-1": "./images/bang.png",
    "220": "./images/bang.png",
    "221": "./images/bang.png",
    "222": "./images/bang.png",
}

function getUrlVars() {
    const vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getSrcByResults() {
    for (const i of Object.keys(data)) {
        if (i == String(results.useful) + String(results.buy) + String(results.walk)) {
            return data[i]
        }
    }
}

function changePicture() {
    const img = document.getElementById('resultImg')
    img.src = getSrcByResults()
}

const vars = getUrlVars()


const results = {
    useful: vars.useful,
    buy: vars.buy,
    walk: vars.walk
}

changePicture()

