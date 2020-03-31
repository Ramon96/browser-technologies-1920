"use strict";

var shirtText = document.getElementById('shirttext');
var previewText = document.getElementById('previewtext');
var shirtImage = document.getElementById('previewimage');
var share = document.getElementById('share');

if (document.getElementById('shirtdesign')) {
  var colors = document.forms["shirtdesign"].elements['color'];
  var txtcolors = document.forms["shirtdesign"].elements['fontcol'];
  var font = document.getElementById('font');

  if (shirtText) {
    shirtText.addEventListener('input', function () {
      previewText.textContent = shirtText.value;
    });
  }

  if (font) {
    font.addEventListener('change', function () {
      changeFont(this);
    });
  }

  for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function () {
      changeColor(this.value);
    });
  }

  for (var i = 0; i < txtcolors.length; i++) {
    txtcolors[i].addEventListener('click', function () {
      previewText.style.color = this.value;
    });
  }
} // only add the copy button when javascript is enabled


if (share) {
  var copyclip = document.createElement('button');
  var copyText = document.createTextNode('Share');
  var tooltip = document.createElement('share');
  copyclip.id = "copy";
  tooltip.id = "tooltip";
  tooltip.textContent = "Copy to clipboard";
  copyclip.addEventListener('click', function () {
    share.select();
    share.setSelectionRange(0, 99999);
    document.execCommand("copy");
    tooltip.textContent = "Copied!";
  });
  copyclip.addEventListener('mouseleave', function () {
    tooltip.textContent = "Copy to clipboard";
  });
  copyclip.appendChild(copyText);
  copyclip.appendChild(tooltip);
  insertAfter(share, copyclip);
} 


if (share && window.print) {
  console.log('print is supported');
  var printButton = document.createElement('button');
  var printText = document.createTextNode('Print');
  var edit = document.getElementById('edit');
  printButton.id = 'print';
  printButton.appendChild(printText);
  printButton.addEventListener('click', printShirt);
  insertAfter(edit, printButton);
}

if (storageAvailable('localStorage')) {
  console.log("local storage is active");

  if (document.getElementById('shirtdesign')) {
    var colors = document.forms["shirtdesign"].elements['color'];
    var txtcolors = document.forms["shirtdesign"].elements['fontcol'];
    var sizes = document.forms["shirtdesign"].elements['size'];
    var save = document.getElementById('save');

    if (save) {
      // classList is not supported in ie9 and lower :(
      save.className = 'hide';
    }

    if (localStorage.getItem('text')) {
      previewText.textContent = localStorage.getItem('text');
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

    shirtText.addEventListener('blur', function () {
      saveValue("text", shirtText.value);
    });

    for (var i = 0; i < sizes.length; i++) {
      sizes[i].onclick = function () {
        saveValue('size', this.value);
      };
    }

    for (var i = 0; i < colors.length; i++) {
      colors[i].onclick = function () {
        saveValue('color', this.value); 
      };
    }

    for (var i = 0; i < txtcolors.length; i++) {
      txtcolors[i].onclick = function () {
        saveValue('txtcolor', this.value);
      };
    }

    if (font) {
      font.value = localStorage.getItem('font');
      previewText.className = localStorage.getItem('font');
      console.log(font)
    }
  }

  if (previewText) {
    if (localStorage.getItem('txtcolor') !== null) {
      previewText.style.color = localStorage.getItem('txtcolor');
    }

    if (localStorage.getItem('font')) {
      previewText.className = localStorage.getItem('font');
    }
  }
} else {
  console.warn('The user has disabled their localstorage');
}


// This function tests if the localstorage is working to avoid getting an ugly error message when it doesn't
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
    localStorage.setItem(part, content);
  }
}

function changeColor(color) {
  shirtImage.src = '/images/shirt' + capitalize(color) + '.png';
}

function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeFont(tagg) {
  var listValue = tagg.options[tagg.selectedIndex].value;

  previewText.className = listValue;

  if (storageAvailable('localStorage')) {
    saveValue('font', listValue);
  }
}

function printShirt() {
  window.print();
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}