const shirtText = document.getElementById('shirttext');
const previewText = document.getElementById('previewtext');
const shirtImage = document.getElementById('previewimage');
const copyclip = document.getElementById('copy');


if (document.getElementById('shirtdesign')) {
    const colors = document.forms["shirtdesign"].elements['color'];
    const txtcolors = document.forms["shirtdesign"].elements['fontcol'];
    const font = document.getElementById('font');

    if (shirtText) {
        shirtText.addEventListener('input', function () {
            previewText.innerHTML = shirtText.value;
        })
    }
    if (font) {
        font.addEventListener('change', function () {
            changeFont(this);
        })
    }

    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', function () {
            changeColor(this.value);
        })
    }

    for (let i = 0; i < txtcolors.length; i++) {
        txtcolors[i].addEventListener('click', function () {
            previewText.style.color = this.value
        })
    }
}

if (copyclip) {
    const share = document.getElementById('share');
    const tooltip = document.getElementById('tooltip');

    copyclip.addEventListener('click', function () {
        share.select();
        share.setSelectionRange(0, 99999);

        document.execCommand("copy");
        tooltip.innerHTML = "Copied!";
    })

    copyclip.addEventListener('mouseleave', function () {
        tooltip.innerHTML = "Copy to clipboard";
    })
}



if (storageAvailable('localStorage')) {
    console.log("local storage is active")

    if (document.getElementById('shirtdesign')) {
        const colors = document.forms["shirtdesign"].elements['color'];
        const txtcolors = document.forms["shirtdesign"].elements['fontcol'];
        const sizes = document.forms["shirtdesign"].elements['size'];

        const save = document.getElementById('save');

        if (save) {
            save.classList.add('hide');
        }

        if (localStorage.getItem('text')) {
            previewText.innerHTML = localStorage.getItem('text');
            shirtText.value = localStorage.getItem('text');
        }


        if (localStorage.getItem('size') !== null) {
            document.getElementById(localStorage.getItem('size')).checked = true;
        }
        if (localStorage.getItem('color') !== null) {
            shirtImage.src = '/images/shirt' + capitalize(localStorage.getItem('color')) + '.png';
            document.getElementById(localStorage.getItem('color')).checked = true;
        }
        if (localStorage.getItem('txtcolor') !== null) {
            document.getElementById(localStorage.getItem('txtcolor') + 'txt').checked = true;
        }

        shirtText.addEventListener('focusout', function () {
            saveValue("text", shirtText.value);
        });



        for (let i = 0; i < sizes.length; i++) {
            sizes[i].onclick = function () {
                saveValue('size', this.value)
            }
        }

        for (let i = 0; i < colors.length; i++) {
            colors[i].onclick = function () {
                saveValue('color', this.value)
                // changeColor(this.value);
            }
        }
        for (let i = 0; i < txtcolors.length; i++) {
            txtcolors[i].onclick = function () {
                saveValue('txtcolor', this.value)
            }
        }

        if (font) {
            font.value = localStorage.getItem('font');
            previewText.style.fontFamily = localStorage.getItem('font');
        }
    }

    if (previewText) {
        if (localStorage.getItem('txtcolor') !== null) {
            previewText.style.color = localStorage.getItem('txtcolor');
        }
        if (localStorage.getItem('font')) {
            previewText.style.fontFamily = localStorage.getItem('font');
        }
    }
} else {
    console.warn('The user has disabled their localstorage')

  
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

function saveValue(part, content) {
    if (content !== "") {
        localStorage.setItem(part, content)
    }
}

function changeColor(color) {
    shirtImage.src = '/images/shirt' + capitalize(color) + '.png';
}

function capitalize(string) {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}


function changeFont(tagg) {
    let listValue = tagg.options[tagg.selectedIndex].text;
    previewText.style.fontFamily = listValue;

    if (storageAvailable('localStorage')) {
        saveValue('font', listValue);
    }
}