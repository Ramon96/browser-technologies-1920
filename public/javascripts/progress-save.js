const shirtText = document.getElementById('shirttext');
const previewText = document.getElementById('previewtext');
const shirtImage = document.getElementById('previewimage');

if(shirtText){
shirtText.addEventListener('input', function(){
    previewText.innerHTML = shirtText.value;
})
}

if (storageAvailable('localStorage')) {
    console.log("local storage is active")
    if (document.getElementById('shirtdesign')) {
        const sizes = document.forms["shirtdesign"].elements['size'];
        const colors = document.forms["shirtdesign"].elements['color'];

        previewText.innerHTML = localStorage.getItem('text');
        shirtText.value = localStorage.getItem('text');
        shirtImage.src = '/images/shirt' +capitalize(localStorage.getItem('color')) +'.png';

        if (localStorage.getItem('size') !== "") {
            document.getElementById(localStorage.getItem('size')).checked = true;
        }
        if (localStorage.getItem('color') !== "") {
            document.getElementById(localStorage.getItem('color')).checked = true;
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
                changeColor(this.value);
            }
        }
    }
    // console.log(size)
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

function changeColor(color){
    console.log(capitalize(color))
    shirtImage.src = '/images/shirt' + capitalize(color) + '.png';

}

function capitalize(string){
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}