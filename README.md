<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

# Artikelen 
## Everyone has javascript, right?
Dit artikel gaat er heel erg over dat je moet na moet denken wat je website doet als er geen javascript aanwezig is.
De rede dat iemand geen javascript hoeft niet te zijn omdat deze persoon zijn javascript uit heeft staan.
* Wat als je in een trein zit en je verbinding valt weg voordat javascript is geladen. 
* Wat nou als het bedrijf waar je voor werkt ter beveiliging javascript blokkeert?
* Wat nou als het wifi waar je op zit of de advertentie's die je inlaad javascript injecteerd waardoor jou javascript niet meer geladen kan worden?
* Wat nou als de browser die je gebruikt details van een andere applicatie aan het binnenhalen is?
* Wat nou als de persoon gewoon javascript uit heeft gezet?
* Wat nou als ze chrome's data besparing aan hebben staan? 
* Wat nou als de gebruiker een plugin heeft geinstalleerd of een addon die met je contenet bemoeid?
* Wat nou als de content delivery network eruit ligt die je in je website inlaad?
* Wat als de browser je code niet ondersteunt?

Dit zijn vragen die je in gedachte moet nemen want de kans is dat als een van deze dingen niet het geval is, javascript het niet doet en misschien je website dus ook niet..





# Opdracht 1.1 
Breek het web

### Muis en trackpad werkt niet
 
Ik heb voor deze feature mijn web app from scratch project gebruikt.
Ik kon doormiddel van tab en shit + tab lekker door de site navigeren. 
Met behulp van de spatie balk kan ik het dropdown menu openen.
Met Enter kan ik m’n keuze maken.
En met escape kan ik voorkomen dat ik die keuze moet maken.

Dit werkt heel erg goed!

#### Waarom is dat? 
Omdat de belangrijke interactie’s in html formulieren zitten en a tags.

#### Waarom is dat handig
Als ik niet mijn muis kan bedienen omdat mijn muis stuk is, trackpad niet werkt. Er geen zin in heb. Problemen met me armen of handen. Dan is het handig dat ik nog steeds door de pagina kan navigeren.

### Kleur uitzetten
Ik heb voor deze feature een tool geïnstalleerd waarmee ik kleuren blindheid kan nabootsen. 
Omdat ik niet veel kleur gebruik binnen me wafs project en nog niet zoveel afbeeldingen. Kan ik de site nog goed zien. Het enige probleem wat ik heb is dat ik de link naar de detail pagina niet goed kan zien. Het heeft hetzelfde kleur als het achtergrond daarachter en heeft daarom geen fijn contrast.

#### Wanneer kan dit een probleem zijn
Als de gebruiker niet je site kan zien of elementen niet goed kunnen zien is het net alsof je gebruiker blind is, terwijl hij beperkt is met kleur. Het verschil is dat iemand die blind is nog hun text-to-speech aan staan. Daarom is het belangrijk dat je een goed contrast hebt binnen je pagina’s.

# Opdracht 1.2 Browser Test

Ik heb recent de browser test uitgevoerd. Ik ben erg tevreden met het resultaat. De test was vrij positief. Wat me mij opviel is dat wanneer javascript uit staat het filteren niet meer mogelijk is. Dit kan ik gelukkig gemakkelijk oplossen door de filter methode server sided af te laten handelen wanneer javascript niet beschikbaar is.

De website die ik gebruikt heb voor het testen van me browser is mijn progressive-web-apps project. De code daarvan is [hier](https://github.com/Ramon96/progressive-web-apps-1920) terug te lezen. 
En de live demo is [hier](https://progressive-web-apps.herokuapp.com/) terug te zien. 

Waarom dit project? 
Ik heb tijdens de oba een voice interface gemaakt met behulp van Google assistance. 
Tijdens Progressive-web-apps werkt ik verder aan aan mijn web app from scratch project.

## Hoe heb ik de feature's getest.
### Afbeeldingen uitzetten
Ik heb in mijn browser instellingen de afbeeldingen uitgezet. Als nu blijkt dat de afbeeldingen zo belangrijk is dat de content niet meer te begrijpen is (omdat er bijvoorbeeld geen alt tag aanwezig is) of dat de layout zo dusdanig stuk gaat dat er niet meer normaal door de website te navigeren valt dan is dit een groot probleem.

### Custom fonts uitzetten
Custom fonts kan je testen door gewoon in de inspecter de font's uit te zetten. Als er geen fallback font is, of een websafe font dan kan dit een groot probleem veroozaken.

### Kleur uitzetten en kleurenblindheid
Dit is een van de makkelijkere feature's om te testen. Er zijn een heleboel website's die kunnen testen of je een goed contrast hebt. Ook zijn er tools om kleurenblindheid na te bootsen. 

### een muis of trackpad
Dit kan ik testen door niet aan mijn muis en trackpad te zitten en te proberen om door me site te navigeren.

### Breedband internet uitzetten
Je kan in de dev tools je internet throttelen en testen of je site het nog doet. Je kan natuurlijk ook je internet helemaal uitzetten.

### Javascript uitzetten
Je kan in je settings je javascript uitzetten.

### Cookies niet accepteren
Dit kan je testen door niet de cookie's te acceptern.

## Safari apple iPod touch iOS 6.1.3
Alles werkt behalve de filter.
Dit kan ik fixen door de filter ook server sided afgehandeld te laten worden als javascript niet beschikbaar is.

## Ie11 nokia lumia 620 windows phone 8.1
Alles werkt behalve de filter.
Dit kan ik fixen door de filter ook server sided afgehandeld te laten worden als javascript niet beschikbaar is.

## Chrome 80 htc nexus 9 android 7.1.1
Alles werkt naar behoren.


## Chrome 
### Afbeeldingen uitzetten
De site doet het prima zonder image’s

### Custom fonts uitzetten
Ik maak geen gebruik van custom font’s dus dit kan niet stuk gaan op de website.

### Kleur uitzetten en kleurenblindheid
Ik heb checkmycolours.com gebruikt en de site geeft aan dat ik een goed contrast heb.

### een muis of trackpad
Ik kan goed door de site navigeren zonder muis

### Breedband internet uitzetten
De site werkt nog wel, maar het zou wel een goede enhancement zijn als ik de user feedback zou geven dat er data opgehaald word.

### Javascript uitzetten
Alles doet het behalve de filters.
Ik kan dit oplossen door de select een submit button te geven wanneer er geen client sidder javascript aanwezig is.

### Cookies niet accepteren
Applicatie maakt Geen gebruik van cookies en gaat hier dus niet op stuk
Localstorage uitzetten
Applicatie maakt geen gebruik van de localstorage en gaat hier dus niet op stuk.

## Safari 

### Afbeeldingen uitzetten
De site doet het prima zonder image’s

### Custom fonts uitzetten
Ik maak geen gebruik van custom font’s 

### Kleur uitzetten en kleurenblindheid
Ik heb checkmycolours.com gebruikt en de site geeft aan dat ik een goed contrast heb.

### Geen muis of trackpad
In safari wil hij niet de a tags focussen. Daardoor kan niet helemaal goed door de pagina’s navigeren.

### Breedband internet uitzetten
De site werkt nog wel, maar het zou wel een goede enhancement zijn als ik de user feedback zou geven dat er data opgehaald word.

### Javascript uitzetten
Alles doet het behalve de filters.
Ik kan dit oplossen door de select een submit button te geven wanneer er geen client sidder javascript aanwezig is.


### Cookies niet accepteren
Applicatie maakt Geen gebruik van cookies en gaat hier dus niet op stuk
Localstorage uitzetten
Applicatie maakt geen gebruik van de localstorage en gaat hier dus niet op stuk.

## Firefox 
## Afbeeldingen uitzetten
De site doet het prima zonder image’s

### Custom fonts uitzetten
Ik maak geen gebruik van custom font’s 

### Kleur uitzetten en kleurenblindheid
Ik heb checkmycolours.com gebruikt en de site geeft aan dat ik een goed contrast heb.

### Geen muis of trackpad
In firefox wil hij niet de a tags focussen. Daardoor kan niet helemaal goed door de pagina’s navigeren.
Dit is een mac probleem zoals uitgelegd in dit articel.
https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537

### Breedband internet uitzetten
De site werkt nog wel, maar het zou wel een goede enhancement zijn als ik de user feedback zou geven dat er data opgehaald word.

### Javascript uitzetten
Alles doet het behalve de filters.
Ik kan dit oplossen door de select een submit button te geven wanneer er geen client sidder javascript aanwezig is.


### cookies niet accepteren
Applicatie maakt Geen gebruik van cookies en gaat hier dus niet op stuk
Localstorage uitzetten
Applicatie maakt geen gebruik van de localstorage en gaat hier dus niet op stuk.


## De Screenreader.

Al was het ff oefenen hoe een screenreader werkt. Was mijn website wel goed toegankelijk door middel van een screen reader.
Een screenreader zal goed werken zolang je semantische html hebt en niet doormiddel van tabindex de tab order verstoort.








