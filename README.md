# Browser Technologies 
## Custom t-shirt designer
![customshirt](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/frontscreen.png?raw=true)

## Live demo
click [here](https://bt-ramon.herokuapp.com/) to view the live demo

## Description
The goal of this project to workout a Use case that works in most browsers and is very accessible. To do so we can build our project in  layers. Functional, Reliable and Usable and Pleasureable. I hope to learn alot about browser support and inclusive design during this project.

For this project I chose the case of making your own custom t-shirt design. And in my opnion the most import function of this case is being able to create a shirt and save it for later editing. That is what I mainly focussed on.


## Table of contents
wip

## Browser Tests

## Feature research 

### Image's are not working

### Custom fonts are off

### Internet is turned off (or slow)

### Javascript is turned off

### Cookies are disabled

### localstorage is disabled

## Install 
to install the project you want to first clone the project using the commnand 

`git clone https://github.com/Ramon96/browser-technologies-1920.git`

now navigate to the project folder using your command interface and install the dependencies using 

`npm install`

once that is done you can start the project using 

`npm start`

and you should be able to see the website on your localhost (port 3000 by default) 

## Shirt designer
With the shirt designer you can design your own shirt and save it for later customization. To round it all up you will be able to print your design.

## Wireframes
<details>
  <summary>0 state & returning visitor </summary>
  
  ![schermen1](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/scherm1.jpg?raw=true)
    
 </details>
 
 <details>
  <summary>Design page & print page</summary>
  
  ![schermen2](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/scherm2.jpg?raw=true)
  
 </details>

## Functional and reliable
This is how the site works without css and javascript\

![functional screen1](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/functional1.png?raw=true)
![functional screen2](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/functional2.png?raw=true)


It doesn't look nice, but it works. You will be able to design a shirt, and save it for later use. Its not clean but it gets the job done. the core functionality still stands and works :)

### Audits
![functional audits](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/auditsfunctional.png?raw=true)

## Useable
Lets make the site a bit more useable just by adding some basic css. 
Now users will actually understand what they are looking at

![useable](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/designcss.png?raw=true)\
Thats already better to look at

I wasn't quite satisfied with the results so Decided to make another iteration on the design. 

Now it looks moor like this!

![iteration](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/mobile-iteration.png?raw=true)

More elements have been added too so these got the necesarry styling aswell.

### Audits
![useable audits](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/auditscss.png?raw=true)

## Functional and reliable



## Pleasurable

Now its time to have some fun, real fun.
Up to now the user as already able to make a design, and save it for later use.

Now lets extra elements to the page to make it more pleasureable to use 

![pleasurable](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/pleasureable.png?raw=true)

![pleasureable](https://github.com/Ramon96/browser-technologies-1920/blob/master/documentation/auditsfunctional.png)

If I had used JPEG 2000, JPEG XR, and WebP then I would have scored a 100 on perforamnce. So this is something I could add in a future update.

## Feature detection 

### Html

* formaction
```html
                <!-- Formaction doesnt work on ie 10 or lower :( -->
                <button id="save" formnovalidate formaction="/save" type="submit" name="state"
                    value="save">save</button>
                <button formaction="/final" type="submit">Next step</button>
```
Im trying to control the flow of my form in my html using `formaction` unfortunatly this isn't supported in older browsers
so as fallback I added the action on my form  


`   <form id="shirtdesign" action="/final" method="GET">`

### CSS
Im used to make alot of modern css properties. And that's completly fine if I make an fallback for users that don't use modern browsers

* Em's 
Not all browsers seem to support Em's, so I used px as a fallback

```css
    margin-bottom: 20px; /* px fallback when ems dont work */
    margin-bottom: 1.2em;
```

* Grid & Supports 

Grid is not supported in all browsers
In order to check if Grid is supported I can use this line
` @supports (display: grid)`
and then I can write my fallback. ( I use float left as fallback

```css
main#introMain div{
    box-shadow: #00000061 7px 8px 15px;
    padding-top: 28%;
    margin: 15px;
    margin: 0.9em;
    width: 28%;
    position: relative;
    float: left;
}
```

But what if Supports is not supported? 
I solve this problem by writing my fallback first and below that what the browser should do if supports and grid are supported!
So I like to avoid `@supports not`

* pointer events
This is more of a hack than a fallback in my opinion.
So I am making use of custom radio buttons with the use of labels. 
When an form is not valid the error wil be shown on the input rather than on the label. 
This means that I wont be able to hide the input fields using `display: none`.
What I can do is give the element 

```css
pointer-events: none;
position: aboslute;
opacity: 0;
```

Now the input wont be visible and it won't influence the layout.
There is just 1 problem
Not all browsers support pointer events. This means I wont be able to click on my labels
To solve this I moved my labels using the `top attribute`

```css
input[name=color] , input[name=fontcol]{
    display: block;
    position: absolute;
    opacity: 0;
    left: 50%;
    /* pointer events none are not supported in ie below 11 so we cheat a little by hidding the input boxes a little lower so the user wont click on it */
    pointer-events: none;
    top: 80%;
    transform: translate(-50%, 0)
}
```

* Centering labels on firefox
For somereason its not possible to center legends on firefox using the "display block margin auto trick".


I solved doing so: 
```css
@media screen and (-moz-images-in-menus: 0) {
    form fieldset {
      position: relative;
      margin-bottom: 20px;
      margin-bottom: 1.25em;
    }
    fieldset>legend {
      position: absolute;
      top: 12px;
      top: -0.75em;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
```

 https://stackoverflow.com/questions/27124746/centering-legend-in-firefox */

### Javascript

* Const and let
Not support so had to take them out :(

* Classlist.add()
This isn't supported on older browsers
So I had to use `className` instead 

* Only show when javascript is enable
To show (or hide) a button when javascript is enable is actually pretty simple.
Just check if the element returns true and append a class on that element to show or hide it.

```javascript
    if (save) {
      // classList is not supported in ie9 and lower :(
      save.className = 'hide';
    }
```

The save button is not needed when the localstorage is enabled so we can hide it when that is the case
Im also checking if the localstorage can be used

`if (storageAvailable('localStorage'))`

https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_availability
```javascript

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
```

You can also check if certain window event listeners are present like so.

```javascript
if (share && window.print) {
  console.log('print is supported');
```

* focusout 
focusout wasn't working on firefox as I liked. 
I remembered ppk telling about this during one of his lectures. 

So I used blur instead!
```javascript
    shirtText.addEventListener('blur', function () {
      saveValue("text", shirtText.value);
    });
```

## Sources
These are some sources I used 

**Tools**
Can I use to see in what browsers things are supported

[caniuse](https://caniuse.com/)

check my colors to see if my contrast is alright (audits help with that too)

[check my color](https://www.checkmycolours.com/)

toggle javascript to turn on and off javascript easier

[toggle javascript](https://chrome.google.com/webstore/detail/toggle-javascript/cidlcjdalomndpeagkjpnefhljffbnlo?hl=nl)

color blinding to simulate color blindness.

[color blinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa)

## Exercises 
[Articles](https://github.com/Ramon96/browser-technologies-1920/wiki/Artikelen)\
[opdracht 1.1](https://github.com/Ramon96/browser-technologies-1920/wiki/Opdracht-1.1)\
[opdracht 1.2](https://github.com/Ramon96/browser-technologies-1920/wiki/Opdracht-1.2-Browser-Test)

**Articles**
I wanted to use a Color picker to color my shirts. This article confinced me not to
https://css-tricks.com/color-inputs-a-deep-dive-into-cross-browser-differences/   

**Making labels focusable**
https://stackoverflow.com/questions/27550415/tabindex-doesnt-make-a-label-focusable-using-tab-key

## License
This project makes use of the [MIT](https://github.com/Ramon96/browser-technologies-1920/blob/master/LICENSE) license

