// prva stranica
var prvaSlika;
var popc;
var lCitata;
var uzoriSlike;
var uzoriLista;
var uzoriSlikeNiz;
var uzoriListaNiz;
function inicijalizujprva() {
    prvaSlika = document.getElementById('prvaSlika');
    popc = document.getElementById('uticaj');
    lCitata = document.getElementById('lCitati');
    uzoriSlike = document.getElementById('uzoriSlike');
    uzoriLista = document.getElementById('lUzori');
    uzoriSlikeNiz = uzoriSlike.children;
    uzoriListaNiz = uzoriLista.children;
}
function menjajSliku(e) {
   e.style.border = '6px double black';
}
function vratiSliku(e) {
    e.style.border = '0px';
}
function smanji(e) {
    e.style.width = '50%';
}
function uvecaj(e) {
    e.style.width = '100%'
}
function slikaBorder(x) {
    var selektovana = uzoriSlikeNiz[x];
    selektovana.className = 'noviBorder';
}
function slikaSkiniBorder(x) {
    var selektovana = uzoriSlikeNiz[x];
    selektovana.className = '';
}
function citatiskloni() {
    for(i=0; i<lCitata.children.length; i++) {
        var citat = lCitata.children[i];
        citat.className = 'ukloni';
    }

}
var x=0;
function citatidodaj() {
    if(x<lCitata.children.length) {
        var citat1 = lCitata.children[0];
        if(citat1.getAttribute('class')=='ukloni') {
            x=0;
        }
        var citat = lCitata.children[x];
         citat.className = '';
         x++;
    }
    else {
        x=0;
    }
}

// treca stranica
var diva;
var slika1;
var slika2;
var slika3;
var slika4;
var autoportreti;
var brojac;
var kraj;
var divb;
var slikaprva;
var slikadruga;
var dugmeukloni;
var dugmevrati;
function inicijalizujtreca() {
    diva = document.getElementById('slikeA');
    inicijalizujSlike();
    divb = document.getElementById('brak');
    slikaprva = document.getElementById('slikab1');
    slikadruga = document.getElementById('slikab2');
    napraviDugme();
}
function inicijalizujSlike() {
    slika1 = document.getElementById('prvaAslika');
    slika2 = document.createElement('img');
    slika3 = document.createElement('img');
    slika4 = document.createElement('img');
    slika2.src = "images/edward-hopper--self-portrait-4.jpg";
    slika3.setAttribute('src', "images/sp.jpg");
    slika4.setAttribute('src', "images/self-portrait-1.jpg");
    autoportreti = [slika1, slika2, slika3, slika4];
    brojac = 0;
    kraj = autoportreti.length-1;
}
function napraviDugme() {
    dugmeukloni = document.createElement('button');
    dugmevrati = document.createElement('button');
    dugmeukloni.innerHTML = 'Klikni da slike nestanu';
    dugmevrati.innerHTML = 'Klikni da se slike vrate';
    divb.appendChild(dugmeukloni);
    divb.appendChild(dugmevrati);
    dugmeukloni.onclick = menjajKlasu;
    dugmevrati.addEventListener('click', vratiKlasu);
}
function levaStrelica() {
    brojac--;
    if(brojac<0) {
        brojac = kraj;
    }
    if(brojac==0) {
        slika1.src = "images/edward-hopper-young-man.jpg";
    }
    else {
        slika1.src = autoportreti[brojac].src;
    }
}
function desnaStrelica() {
    brojac++;
    if(brojac==autoportreti.length) {
        brojac = 0;
    }
    if(brojac==0) {
        slika1.setAttribute('src', "images/edward-hopper-young-man.jpg");
    }
    else {
        slika1.setAttribute('src', autoportreti[brojac].getAttribute('src'));
    }
}
function menjajKlasu(event) {
    slikaprva.className = 'nestani';
    slikadruga.className = 'nestani';
}
function vratiKlasu(event) {
    slikaprva.className = 'slikeb';
    slikadruga.className = 'slikeb';
}

// peta stranica
var sveSlike = ["images/Hopper_Nighthawks.jpg", 'images/EdwardHopperHotelWindow.jpg', 'images/first-row-orchestra.jpg', 'images/High-Noon-Edward-Hopper-1949.jpg', 'images/hopper.chair-car.jpg', 'images/Hopper-Gas-1940.jpg', 'images/Hotel-by-a-Railroad-Edward-Hopper-1952.jpg', 'images/hopper.sun-empty-room.jpg', 'images/hopper.office-night.jpg', 'images/Intermission.jpg', 'images/lee_shore.jpg', 'images/LePontRoyal.jpeg', 'images/NewYorkOffice.jpg', 'images/Newyork-movie-edward-hopper-1939.jpg', 'images/RoadInMaine.jpeg', 'images/Second_Story_Sunlight.png', 'images/seven-am.jpg', 'images/SouthCarolinaMorning.jpg', 'images/sunlight-on-brownstones.jpg', 'images/SunlightinaCafeteria.jpg', 'images/Summertime.jpg', 'images/two-on-the-aisle.jpg', 'images/westernMotel.jpg'];
var tekslika = 0;
var kontejner = document.getElementById('kontejner');
var animSlika = document.getElementById('animSlika');
var maxW;
var id;
var pos;
function animiraj() {
    pos = 0;
    maxW = kontejner.offsetWidth;
    clearInterval(id);
    id = setInterval(pomeri, 5);
    var promeniSliku = false;
    function pomeri() {
        if(pos>maxW-animSlika.offsetWidth) {
            pos = 0;
            promeniSliku = true;
        }
        else {
            pos++;
            animSlika.style.left = pos + 'px';
        }
        if(promeniSliku) {
            tekslika = (tekslika+1) % sveSlike.length;
            animSlika.src = sveSlike[tekslika];
            promeniSliku = false;
        }
    }
}
function stop() {
    clearTimeout(id);
    animSlika.src = sveSlike[0];
    tekslika = 0;
    animSlika.style.left = '0px';
}
function ukloniAnim() {
    kontejner.removeChild(animSlika);
}
function vratiAnim() {
    kontejner.append(animSlika);
}
function resize() {
    maxW = kontejner.offsetWidth;
}

// sesta stranica
function inicijalizujsesta() {
    var imeInput = document.getElementById('ime');
    imeInput.oninvalid = invalidIme;
    imeInput.oninput = invalidIme;

    var prezimeInput = document.getElementById('prezime');
    prezimeInput.oninvalid = invalidPrezime;
    prezimeInput.oninput = invalidPrezime;

    var datumInput = document.getElementById('datum');
    datumInput.oninvalid = invalidDatum;
    datumInput.oninput = invalidDatum;

    var selectInput = document.getElementById('selektovanje');
    selectInput.oninvalid = invalidSelect;
    selectInput.oninput = invalidSelect;

    var preporukaInput = document.getElementById('preporuka');
    preporukaInput.oninvalid = invalidPreporuka;
    preporukaInput.oninput = invalidPreporuka;

    var slikaInput = document.getElementById('favslika');
    slikaInput.oninvalid = invalidSlika;
    slikaInput.oninput = invalidSlika;

    var cb1 = document.getElementById('tema1');
    cb1.oninvalid = checkboxtema1;
    cb1.oninput = checkboxtema1;
    var cb2 = document.getElementById('tema2');
    cb2.oninvalid = checkboxtema2;
    cb2.oninput = checkboxtema2;
    var cb3 = document.getElementById('tema3');
    cb3.oninvalid = checkboxtema3;
    cb3.oninput = checkboxtema3;
    var cb4 = document.getElementById('tema4');
    cb4.oninvalid = checkboxtema4;
    cb4.oninput = checkboxtema4;
    var cb5 = document.getElementById('tema5');
    cb5.oninvalid = checkboxtema5;
    cb5.oninput = checkboxtema5;
    var cb6 = document.getElementById('tema6');
    cb6.oninvalid = checkboxtema6;
    cb6.oninput = checkboxtema6;
    var cb7 = document.getElementById('tema7');
    cb7.oninvalid = checkboxtema7;
    cb7.oninput = checkboxtema7;
    var cb8 = document.getElementById('tema8');
    cb8.oninvalid = checkboxtema8;
    cb8.oninput = checkboxtema8;
}
function invalidIme() {
    this.setCustomValidity('');
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste uneli ime!');
    }
}
function invalidPrezime() {
    this.setCustomValidity('');
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste uneli prezime!');
    }
}
function invalidDatum() {
    this.setCustomValidity('');
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste uneli datum!');
    }
}
function invalidSelect() {
    this.setCustomValidity('');
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste odabrali ocenu!');
    }
}
function invalidPreporuka() {
    this.setCustomValidity('');
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste uneli preporuku!');
    }
    else if(this.validity.rangeUnderflow) {
        this.setCustomValidity('Broj ne sme biti manji od 0!');
    }
    else if(this.validity.rangeOverflow) {
        this.setCustomValidity('Broj ne sme biti veci od 10!');
    }
}
var slikeS = ['Cylinder', 'Sailboats', 'At Valley Forge', 'The Lion at Play', 'Painter and Model', 'Bridge in Paris', 'Le Pont des Arts', 'Après-midi de juin', 'Le Quai des Grands Augustins with Tree', 'Les lavoirs à Pont Royal', 'Louvre and Boat Landing', 'The El Station', 'Railroad Train', 'Summer Interior', 'The Louvre in a Thunderstorm', 'Le Pont Royal', 'Le Quai des Grands Augustins', 'Le Pavillon de Flore', 'Le Bistro or The Wine Shop', 'Sailing', 'American Village', 'Squam Light', 'Queensborough Bridge', 'Soir bleu', 'Road in Maine', 'Blackhead, Monhegan', 'Night on the El Train', 'The El Station', 'American Landscape', 'House Tops', 'Night Shadows', 'Girl at Sewing Machine', 'Evening Wind', 'New York Interior', 'East Side Interior', 'The Cat Boat', 'New York Restaurant', 'Railroad Crossing', 'Apartment Houses', 'Drawing for "Aux Fortifications"', 'The Mansard Roof', 'The Locomotive', 'The Lonely House', 'Moonlight Interior', "Haskell's House", 'House by the Railroad', 'Self-Portrait', 'Ranch House, Santa Fe', 'Day after the Funeral', 'Sunday', 'Universalist Church', 'Drug Store', 'Lighthouse Hill', "Captain Upton's House", 'Coast Guard Station', 'Coast Guard Station, Two Lights, Maine', 'Light at Two Lights', 'Automat', 'Two on the Aisle', 'The City', 'Night Windows', 'Manhattan Bridge Loop', 'From Williamsburg Bridge', "Blackwell's Island", 'Freight Cars, Gloucester', 'Chop Suey', 'The Lighthouse at Two Lights'];
var slikeS2 = ['Coast Guard Station', 'Railroad Sunset', 'Early Sunday Morning', 'Tables for Ladies', 'Apartment Houses, East River', 'Corn Hill(Truro, Cape Cod)', 'Hills, South Truro', 'House in Provincetown', "Cobb's Barns, South Truro", 'New York, New Havenand Hartford', 'Hotel Room', 'Barber Shop', 'Roofs of the Cobb Barn', 'Dauphinée House', 'Room in New York', 'Locust Trees', 'East Wind Over Weehawken', 'House at Dusk', 'Shakespeare at Dusk', 'The Long Leg', "Macomb's Dam Bridge", 'The Circle Theater', 'Jo Painting', 'Cape Cod Afternoon', 'The Sheridan Theater', 'White River at Sharon', 'Mouth of Pamet River—Fall Tide', 'Compartment C, Car 293', 'Cottages at North Truro', 'Bridle Path', 'New York Movie', 'Cape Cod Evening', 'Ground Swell', 'Gas', 'Office at Night', 'The Lee Shore', 'NightHawks', 'Dawn in Pennsylvania', 'Hotel Lobby', 'Girlie Show', 'Summertime', 'Saltillo Mansion', 'Solitude', 'Morning in a City', 'Rooms for Tourists', 'August in the City', 'Jo in Wyoming', 'Approaching a City', 'El Palacio', 'Summer Evening', 'Pennsylvania Coal Town', 'Seven AM', 'High Noon', 'Conference at Night', 'Stairway', 'Cape Cod Morning', 'Portrait of Orleans', 'Rooms by the Sea', 'First Row Orchestra', 'Morning Sun', 'Hotel by a Railroad', 'Sea Watchers', 'Office in a Small City', 'City Sunlight', 'South Carolina Morning', 'Hotel Window', 'Four Lane Road', 'Sunlight on Brownstones', 'Western Motel', 'Sunlight in a Cafeteria', 'Excursion into Philosophy', 'Second Story Sunlight', 'People in the Sun', 'A Woman in the Sun', 'New York Office', 'Intermission', 'Sun in an Empty Room', 'Chair Car', 'Two Comedians'];
function invalidSlika() {
    this.setCustomValidity('');
    var postoji = false;
    if(this.validity.valueMissing) {
        this.setCustomValidity('Niste uneli ime slike!');
    }
    var slika = document.getElementById('favslika').value;
    for(var i=0; i<slikeS.length; i++) {
        var lSlika = slikeS[i];
        if(slika==lSlika) {
            postoji = true;
        }

    }
    for(var i=0; i<slikeS2.length; i++) {
        var lSlika2 = slikeS2[i];
        if(slika==lSlika2) {
            postoji = true;
        }
    }
    if (!postoji) {
        this.setCustomValidity('Uneta slika ne postoji!');
    }
}
var tema1 = ['New York Restaurant', 'Sunday', 'Tables for Ladies', 'Cape Cod Evening', 'Office at Night', 'Hotel Lobby', 'High Noon'];
var tema2 = ['American Landscape', 'Roofs of the Cobb Barn', 'Road in Maine', 'Corn Hill(Truro, Cape Cod)', 'Hills, South Truro', 'Cobb\'s Barns, South Truro', 'Cape Cod Afternoon'];
var tema3 = ['The City', 'Manhattan Bridge Loop', 'From Williamsburg Bridge', 'Apartment Houses, East River', 'Macomb\'s Dam Bridge', 'Approaching a City'];
var tema4 = ['The Cat Boat', 'Sailboats', 'The Long Leg', 'Sailing', 'Ground Swell', 'Lee Shore'];
var tema5 = ['Girl at Sewing Machine', 'Automat', 'Room in New York', 'NightHawks', 'Morning in a City', 'August in the City', 'Seven AM', 'Cape Cod Morning', 'Rooms by the Sea', 'Morning Sun', 'Hotel by a Railroad', 'Office in a Small City', 'City Sunlight', 'Hotel Window', 'Western Motel', 'Sun in an Empty Room'];
var tema6 = ['Sun in an Empty Room', 'New York Office', 'Sunlight in a Cafeteria', 'Sunlight on Brownstones', 'Conference at Night', 'Compartment C, Car 293', 'Summertime', 'High Noon'];
var tema7 = ['Night Shadows', 'Evening Wind', 'Day after the Funeral', 'Automat', 'Girl at Sewing Machine', 'Moonlight Interior', 'Compartment C, Car 293', 'NightHawks', 'Hotel Window', 'Sunday'];
var tema8 = ['Night on the El Train', 'The El Station', 'Room in New York', 'Summer Evening', 'Hotel by a Railroad', 'Excursion into Philosophy', 'Second Story Sunlight', 'Office at Night', 'Chop Suey', 'Two Comedians'];
function checkboxtema1() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    var cb = document.getElementById('tema1').checked;
    console.log(cb);
    if(!cb) {
        for(var i=0; i<tema1.length; i++) {
            var tema1slike = tema1[i];
            if(omslika==tema1slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili prvu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema2() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    var cb = document.getElementById('tema2').checked;
    if(!cb) {
        for(var i=0; i<tema2.length; i++) {
            var tema2slike = tema2[i];;
            if(omslika==tema2slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili drugu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema3() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema3').checked) {
        for(var i=0; i<tema3.length; i++) {
            var tema3slike = tema3[i];
            if(omslika==tema3slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili treću temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema4() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema4').checked) {
        for(var i=0; i<tema4.length; i++) {
            var tema4slike = tema4[i];
            if(omslika==tema4slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili četvrtu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema5() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema5').checked) {
        for(var i=0; i<tema5.length; i++) {
            var tema5slike = tema5[i];
            if(omslika==tema5slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili petu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema6() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema6').checked) {
        for(var i=0; i<tema6.length; i++) {
            var tema6slike = tema6[i];
            if(omslika==tema6slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili šestu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema7() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema7').checked) {
        for(var i=0; i<tema7.length; i++) {
            var tema7slike = tema7[i];
            if(omslika==tema7slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili sedmu temu iako je na vašoj omiljenoj slici!');
    }
}
function checkboxtema8() {
    this.setCustomValidity('');
    var omslika = document.getElementById('favslika').value;
    var sl = false;
    if(!document.getElementById('tema8').checked) {
        for(var i=0; i<tema8.length; i++) {
            var tema8slike = tema8[i];
            if(omslika==tema8slike) {
                sl = true;
            }
        }
    }
    if(sl) {
        this.setCustomValidity('Niste označili osmu temu iako je na vašoj omiljenoj slici!');
    }
}
function provera() {
    if(!imeVelikoSlovo()) {
        alert('Ime počinje velikim slovom!');
    }
    else if(!imeSamoSlova()) {
        alert('Ime se sastoji iz slova!');
    }
    else if(!imeKratko()) {
        alert('Ime ima bar dva slova!');
    }
    else if(!prezimeVelikoSlovo()) {
        alert('Prezime počinje velikim slovom!');
    }
    else if(!prezimeSamoSlova()) {
        alert('Prezime se sastoji iz slova!');
    }
    else if(!prezimeKratko()) {
        alert('Prezime ima bar tri slova!');
    }
    else if(!ispravanDatum()) {
        alert('Nije ispravan datum!');
    }
    else {
        return true;
    }
}
function imeVelikoSlovo() {
    var ime = document.getElementById('ime').value;
    return ime[0]>='A' && ime[0]<='Z';
}
function imeSamoSlova() {
    var ime = document.getElementById('ime').value;
    for(var i=0; i<ime.length; i++) {
        var slovo = ime[i];
        if(!((slovo>='a' && slovo<='z') || (slovo>='A' && slovo<='Z'))) {
            return false;
        }
    }
    return true;
}
function imeKratko() {
    var ime = document.getElementById('ime').value;
    return ime.length>1;
}
function prezimeVelikoSlovo() {
    var prezime = document.getElementById('prezime').value;
    return prezime[0]>='A' && prezime[0]<='Z';
}
function prezimeSamoSlova() {
    var prezime = document.getElementById('prezime').value;
    for(var i=0; i<prezime.length; i++) {
        var slovo = prezime[i];
        if(!((slovo>='a' && slovo<='z') || (slovo>='A' && slovo<='Z'))) {
            return false;
        }
    }
    return true;
}
function prezimeKratko() {
    var prezime = document.getElementById('prezime').value;
    return prezime.length>2;
}
function datum() {
    var datum = doument.getElementById('datum').value;
    return Date.parse(datum);
}