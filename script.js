// Zadanie na lekcji
// Zdefiniuj prostą tablicę ktora bedzie maiala liczby 2,15,18,21,123,65,56
// wyświetl talice za pomocą document write


// let tablica  =  [2,15,18,21,123,65,56];


// for(let i  =  0; i<tablica.length; i++){
//   document.write(`${tablica[i]}  <br> `)
// }

// document.write(tablica.join("<img src  =  'images.jpg'>"));
// document.write(" <br> ");
// document.write(" <br> ");
// document.write(`Ilosc elementów: ${tablica.length}`)


// let tablica  =  [2, 15, 18, 21, 123, 65, 56];

// document.write(tablica);

// document.getElementById("tekstCostam").innerHTML  =  tablica


// let tablica  =  [2, 15, 18, 21, 123, 65, 56];
// let wynik  =  "";

// wynik  =  tablica.join("; ");
// document.getElementById("tekstCostam").innerHTML  =  wynik;



// let tablica  =  [2, 15, 18, 21, 123, 65, 56];
// tablica.push(32434324342,321321)

// document.write(tablica)

// const tab  =  ["Marcin", "Ania", "Agnieszka"];
// tab.unshift("Bartek");
// console.log(tab);
// tab.unshift("Piotrek", "Paweł");
// console.log(tab);



// const tab  =  ["Marcin", "Ania", "Agnieszka"];
// const first  =  tab.shift();

// console.log(tab);
// console.log(first);

// const tab  =  ["ala", "bala"]
// const ob  =  { name : "Piotr" }

// console.log(Array.isArray(tab));
// console.log(Array.isArray(ob));

// console.log(typeof tab);
// console.log(typeof ob);


// zadeklaru tablicę pustą pt. zakupy wprowadzić do tej tablicy jeden element przy użyciu stosownej metody wyswietlic tablice
// mleko, chleb i masło
// wyswietlić na stronie przy użyciu DOMu

// let tablica  =  [];
// tablica.push("mleko");
// tablica.push("chleb", "masło");

// document.getElementById("wyswietl").innerHTML  =  tablica;


// Sewórz tablice jablko pomarancza banan
// przez push dodac dwie wartości
// Przez getelement wyswietlić zawartosc tablicy 

// let tablica  =  ["jabłko", "pomarańcza", "banan"];
// tablica.push("śliwka");
// tablica.push("gruszka");

// document.getElementById('wyswietl').innerHTML  =  `Zdrowe owoce to: ${tablica}`


// zadeklaruj tablice prostą 8,18,28,88,654,375,6666
// wyswietl tablice
// dodaj na początku dwie liczby 7, 77
// wypisz długość ablicy i bieżącą zawartość


// let tablica  =  [8, 18, 28, 88, 654, 375, 6666];
// document.getElementById("pierwsze").innerHTML  =  tablica.join("<img src  =  'pudzian-muscles.gif'>");

// tablica.unshift("7", "77");
// document.getElementById("drugie").innerHTML  =  tablica.join("<img src  =  'cat.gif'>");

// document.getElementById("trzecie").innerHTML  =  tablica.length;

// stwórz tablice kolory, ma być zielony czerwony niebieck
// zmienna pierwszy kolor z wartością 1
// działać shiftwem na tabkicy
// wyświetląc to co jest w tablicy

// const kolor  =  document.getElementById('kolor');

// kolor.addEventListener('change', ()  = > {
//   let kolorwartosc  =  kolor.value;
//   console.log(kolorwartosc);
//   document.bgColor  =  kolorwartosc;
// });


// tzablica 10 argumenytów, pobrac wezel, dolozyc z tylu 2 liczby, 
// wysiwetlic liczbe elementow stawic inner html na stronę tablicu i infgormacje o eilosci elementów

// let tablica  =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// tablica.push(11,12);

// document.getElementById("zawart_i_dl").innerHTML  =  `Tablica: ${tablica}, długość ${tablica.length}` 

// 15
// let tablica  =  [1,2,3,4,5]
// document.getElementById("zawart_i_dl").innerHTML  =  tablica; 

// document.writeln(tablica.splice(0,2));
// document.write(' <br> ');

// document.writeln(tablica);


// // 16

// let osoby  =  ["Jan Nowak", "Kamimierz Zyga", "Stefan Koc", "Ewa Mocek", "Mariusz Abramowski"];
// let indeks  =  0;

// for(let i  =  0; i<osoby.length; i++){
//   if(osoby[i]  =  =  "Ewa Mocek"){
//     indeks  =  i;
//   }
// }
// document.write(' <br> ');
// console.log(osoby.splice(indeks,1, "Maria Kapik", "Elżbieta Konf"));
// document.write(osoby);

// let tablica  =  ["Kutno", "Łowicz", "Sochaczew", "Łódź", "Warszawa", "Kraków"];
// console.log(`Ilość elementów w tablicy to: ${tablica.length}`);
// document.querySelector(".ilosc_pocz").innerHTML  =  `Ilość elementów na początku to <span>${tablica.length}</span>`;

// tablica.sort();
// console.log(`Posrtowana: ${tablica}`);
// document.querySelector(".sortow").innerHTML  =  `Posortowana tablica <span>${tablica}</span>`;

// tablica.push("Zgierz");
// console.log(`Dodanie na końcu: ${tablica}`);
// document.querySelector(".dodaj_kon").innerHTML  =  `Tablica po dodaniu na końcu: <span>${tablica}</span>`;

// let ilosc  =  tablica.unshift("Poznań");
// console.log(`Dodanie na początku: ${tablica}`);
// console.log(ilosc);
// document.querySelector(".dodaj_pocz").innerHTML  =  `Tablica po dodaniu na początku: <span>${tablica}</span>`;
// document.querySelector(".ilosc_pdoda").innerHTML  =  `Ilość elementów po dodaniu na początku to <span>${tablica.length}</span>`;

// tablica.pop();
// console.log(`Usunięcie ostatniego: ${tablica}`);
// document.querySelector(".usun_ost").innerHTML  =  `Tablica po usunięciu ostatniego: <span>${tablica}</span>`;



// let tablica  =  [];
// for (let i  =  0; i < 6; i++) {
//   tablica[i]  =  parseInt(Math.random() * 100);
//   if (tablica[i] % 2  =  =  0) {
//     tablica[i + 1]  =  11 - tablica.length;
//   }
// }

// document.querySelector(".tablica").innerHTML  =  tablica.join(", ");
// document.write(tablica.join(", "));

// let suma  =  0;
// // for (let i  =  0; i < tablica.length; i++) {
// //   suma + =  tablica[i];
// // }


// let min  =  tablica[0];
// let max  =  tablica[0];
// for (let i  =  1; i < tablica.length; i++) {
//   if (tablica[i] < min) {
//     min  =  tablica[i];
//   }

//   if (tablica[i] > max) {
//     max  =  tablica[i];
//   }
// }


// tablica.forEach(function (elem_tablicy) {
//   suma + =  elem_tablicy;
// })
// document.querySelector(".suma").innerHTML  =  "Suma to: " + suma;

// document.querySelector(".min").innerHTML  =  "Najmniejsza liczba to: " + min;
// document.querySelector(".max").innerHTML  =  "Największa liczba to: " + max;


// let tablica  =  [40,100,1,5,25,10];
// tablica.sort(function(a,b){return a-b});


// let tab  =  [15,20,2,6,125,40];
// tab.push(3);
// tab.unshift(28);

// let tab_uporzadkowana  =  [];
// tab_uporzadkowana[0]  =  tab[0];

// for(let i  =  0; i < tab.length; i++){
//     for(let j  =  0; j<tab_uporzadkowana.length; j++){
//         if(tab[i] < tab_uporzadkowana[j]){
//             tab_uporzadkowana[j]  =  tab[j]
//         }
//     }
// }

// document.write(tab_uporzadkowana)
// document.write(" <br> ")
// document.write(tab)

// const tab  =  [123, 32, 23, 5, 6, 78, 39];
// document.querySelector(".a").innerHTML  =  tab;

// tab.push(3231);
// console.log(tab);

// tab.unshift(123231);
// console.log(tab);

// let suma  =  0;
// let min  =  tab[0];
// let max  =  tab[0];
// for(let i  =  0; i<tab.length; i++){
//     suma+ =  tab[i];
//     if(tab[i] < min){
//         min  =  tab[i];
//     } 
//     if(tab[i] > max){
//         max  =  tab[i];
//     }
// }

// console.log(`Suma to ${suma}. Max to ${max}. Min to ${min}`);


// tab.sort(function(a,b){return a-b;});

// console.log(tab);

// setInterval(()  = > {
//     const czasDoSylwestra  =  new Date("2025-12-31T23:59:59") - new Date();
//     // console.log(czasDoSylwestra)

//     let dni  =  Math.floor(czasDoSylwestra / (1000 * 60 * 60 * 24));
//     let godziny  =  Math.floor(czasDoSylwestra % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minuty  =  Math.floor(czasDoSylwestra % (1000 * 60 * 60) / (1000 * 60));
//     let sekundy  =  Math.floor(czasDoSylwestra % (1000 * 60) / (1000));

//     document.querySelector(".a").innerHTML  =  `Zostało: ${dni} dni, ${godziny} godzin, ${minuty} minut, ${sekundy} sekund`;
// }, 1000);

// document.write(`e = ${Math.E} <br> `);
// document.write(`ln2 = ${Math.LN2} <br> `);
// document.write(`ln10 = ${Math.LN10} <br> `);
// document.write(`log2e = ${Math.LOG2E} <br> `);
// document.write(`log10e = ${Math.LOG10E} <br> `);
// document.write(`pi = ${Math.PI} <br> `);
// document.write(`sqrt1_2 = ${Math.SQRT1_2} <br> `);
// document.write(`sqrt2 = ${Math.SQRT2} <br> `);


// document.write("pow(2,8)=" + Math.pow(2, 8));
// document.write("<br> pow(9,-2)=" + Math.pow(9, -2));
// document.write("<br> pow(2.4,3.2)=" + Math.pow(2.4, 3.2));
// document.write("<br> pow(-3,2)=" + Math.pow(-3, 2));
// document.write("<br>pow(-3.2,-2.4)=" + Math.pow(-3.2, -2.4));
// document.write("<br>pow(256,2199456)=" + Math.pow(256, 2199456));
// document.write("<br>sqrt(2)=" + Math.sqrt(2));
// document.write("<br>sqrt(-2)=" + Math.sqrt(-2));
// document.write("<br>pow(sqrt(2),2)=" + Math.pow(Math.sqrt(2), 2));
// document.write("<br>pow(sqrt(4),2)=" + Math.pow(Math.sqrt(4), 2));



// document.write(`pow(2, 8) = ${Math.pow(2, 8)}`);
// document.write(`<br> abs(-9) = ${Math.abs(-9)}`);
// document.write(`<br> ceil(2.4) = ${Math.ceil(2.4)}`);
// document.write(`<br> round(3.2) = ${Math.round(3.2)}`);
// document.write(`<br> floor(3.8) = ${Math.floor(3.8)}`);
// document.write(`<br> min(2, 8) = ${Math.min(2, 8)}`);
// document.write(`<br> max(2, 8) = ${Math.max(2, 8)}`);
// document.write(`<br> sqrt(2) = ${Math.sqrt(2)}`);
// document.write(`<br> sqrt(4) = ${Math.sqrt(4)}`);
// document.write(`<br> pow(sqrt(4), 2) = ${Math.pow(Math.sqrt(4), 2)}`);


// document.write(Math.floor((Math.random() * 500) + 10));


// let wylosowana = Math.floor(Math.random() * 1000);

// let input = document.getElementById("wprowadz");
// let inputValue = "";
// let info = document.getElementById("info");
// let obrazek = document.getElementById("obrazek");

// document.getElementById("przycisk").addEventListener("click", () => {
//     inputValue = input.value;
//     if (wylosowana != inputValue) {
//         let jaka = "";
//         if(inputValue>wylosowana){
//             jaka = "mniejsza od wpisanej przez ciebie."
//         } else{
//             jaka = "większa od wpisanej przez ciebie."

//         }
//         info.innerHTML = `Niepoprawna liczba! Wylosowana liczba jest ${jaka} Spróbuj ponownie.`;
//         info.style.color = "red";
//         input.value = "";
//     } else {
//         info.innerHTML = "Zgadłeś! Brawo."
//         info.style.color = "green";
//         obrazek.style.display = "block";
//     }
// })

// obrazek.addEventListener("mouseover", () => {
//     obrazek.src = "cat.gif";
// })

// obrazek.addEventListener("mouseout", () => {
//     obrazek.src = "pudzian-muscles.gif";
// })


// let tekst = prompt("Podaj imię i nazwisko: ");

// let peki = document.querySelectorAll(".a");

// peki.forEach((pek, i) => {
//     pek.innerHTML = tekst + (i+1);
// });




// // let tekst = prompt("Podaj imię i nazwisko: ");
// let a1 = document.querySelector(".a1");
// let a2 = document.querySelector(".a2");
// let a3 = document.querySelector(".a3");
// let a4 = document.querySelector(".a4");
// let a5 = document.querySelector(".a5");
// let a6 = document.querySelector(".a6");
// let a7 = document.querySelector(".a7");
// let a8 = document.querySelector(".a8");
// let a9 = document.querySelector(".a9");
// let a10 = document.querySelector(".a10");
// let a11 = document.querySelector(".a11");

// a1.style.verticalAlign = "sub";
// a2.style.verticalAlign = "super";

// document.write(`${tekst.sub()} <br>`);       // indeks dolny
// document.write(`${tekst.sup()} <br>`);       // indeks górny
// document.write(`${tekst.fontcolor("red")} <br>`); // kolor czcionki
// document.write(`${tekst.fontsize(7)} <br>`); // rozmiar czcionki (1-7)
// document.write(`${tekst.link("http://zsp2lowicz.pl")} <br>`); // link
// document.write(`${tekst.toLowerCase()} <br>`); // małe litery
// document.write(`${tekst.charAt(0)} <br>`);     // pierwszy znak
// document.write(`${tekst.concat(" + dopisek")} <br>`); // łączenie stringów
// document.write(`${tekst.repeat(3)} <br>`);     // powtórzenie tekstu
// document.write(`${tekst.slice(0, 5)} <br>`);    // fragment od 0 do 5

// let data_czas = new Date();



// setInterval(() => {
//     let data_czas = new Date();
//     document.querySelector(".data_czas").innerHTML = data_czas.toLocaleDateString();
//     document.querySelector(".dzien").innerHTML = data_czas.getDate();
//     document.querySelector(".miesiac").innerHTML = data_czas.getMonth() + 1;
//     document.querySelector(".rok").innerHTML = data_czas.getFullYear();
//     document.querySelector(".godzina").innerHTML = data_czas.getHours();
//     document.querySelector(".minuta").innerHTML = data_czas.getMinutes();
//     document.querySelector(".sekunda").innerHTML = data_czas.getSeconds();
// }, 1000)



// zrobic przyklad na wyswietlanie przez: document write, DOM, console log

// document.write("1234");
// console.log("1234");
// alert("123");
// let d = document.getElementById("d");
// document.getElementById("d").innerHTML += "<span>Przez getElementById:</span> Czarnecki";
// document.querySelector(".aa").innerHTML = "<span>Przez querySelector:</span> Pozdrawiam";


// function osoba(imie, nazwisko, rokUrodzenia) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//     this.rokUrodzenia = rokUrodzenia;
// }

// let x = new Date().getFullYear();

// let przycisk = document.getElementById("przycisk");
// let imie = document.getElementById("imie");
// let nazwisko = document.getElementById("nazwisko");
// let wiek = document.getElementById("wiek");

// przycisk.addEventListener('click', () => {
//     let confirmm = document.querySelector(".confirm");
//     let jeden = document.getElementById("1");
//     let dwa = document.getElementById("2");
//     let trzy = document.getElementById("3");
//     let imieWartosc = imie.value;
//     let naziwskoWartosc = nazwisko.value;
//     let wiekWartosc = wiek.value;
//     let rokUrUsera = x - wiekWartosc;
//     let osoba1 = new osoba(imieWartosc, naziwskoWartosc, rokUrUsera);

//     confirmm.innerHTML = "<span style='green'>Dodano</span>";

//     jeden.innerHTML = osoba1.imie;
//     dwa.innerHTML = osoba1.nazwisko;
//     trzy.innerHTML = osoba1.rokUrodzenia;
// })

// ==================================================

// function wyswietl() {
//     document.write("Imię autora:" + this.autor.imie + "<br>");
//     document.write("nazwisko autora" + this.autor.nazwisko + "<br>");
//     document.write("tytuł książki:" + this.tytul + "<br>");
//     document.write("Rok wydania" + this.rok_wydania + "<br>");
// }
// function ksiazka(autor, tytul, rok) {
//     this.autor = autor;
//     this.tytul = tytul;
//     this.rok_wydania = rok;
//     this.dane = wyswietl;
// }
// function autor(imie, nazwisko) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
// }
// autor1 = new autor("Adam", "Mickiewicz");
// autor2 = new autor("Henryk", "Sienkiewicz");
// ksiazka1 = new ksiazka(autor1, "Pan Tadeusz", 1990);
// ksiazka2 = new ksiazka(autor2, "Potop", 1998);
// ksiazka1.dane();
// document.write("<br>")
// ksiazka2.dane();

// let samochod1 = {
//     marka: "Toyota",
//     model: "Corolla",
//     rocznik: 2018,
//     nowy: "Tak",
//     wyswietl() {
//         document.write("Marka: " + this.marka + "<br>");
//         document.write("Model: " + this.model + "<br>");
//         document.write("Rocznik: " + this.rocznik + "<br>");
//         document.write("Nowy?: " + this.nowy + "<br><br>");
//     }
// };

// let samochod2 = {
//     marka: "BMW",
//     model: "X5",
//     rocznik: 2023,
//     nowy: "Nie",
//     wyswietl() {
//         document.write("Marka: " + this.marka + "<br>");
//         document.write("Model: " + this.model + "<br>");
//         document.write("Rocznik: " + this.rocznik + "<br>");
//         document.write("Nowy?: " + this.nowy + "<br><br>");
//     }
// };

// samochod1.wyswietl();
// samochod2.wyswietl();


// function osoba(imie, nazwisko, adres) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//     this.adres = adres;
// }

// var osoby = [];
// osoby[0] = new osoba("Jan", "Kowalski", "Brzozowa 5");
// osoby[1] = new osoba("Anna", "Nowak", "Akacjowa 4");
// osoby[2] = new osoba("Adam", "Janowski", "Topolowa 2");

// document.write("Zawartość tablicy osoby<br><br>");

// for (var i = 0; i < osoby.length; i++) {
//     document.write("Indeks " + i + " <br>");
//     for (var wlasciwosc in osoby[i]) {
//         document.write("&nbsp"); //twarda spacja
//         document.write(wlasciwosc + " : " + osoby[i][wlasciwosc]);
//         document.write("<br/>");
//     }
//     document.write("<br/>");
// }

// document.querySelector(".amount").innerHTML = osoby.length;

// let wpisaneID = document.querySelector('.id');

// let przyciskPokaz = document.querySelector('.show').addEventListener("click", ()=>{
//     let wpisaneIdWartosc = Number(wpisaneID.value);
//     document.querySelector(".imie").value = osoby[wpisaneIdWartosc].imie;
//     document.querySelector(".nazwisko").value = osoby[wpisaneIdWartosc].nazwisko;
//     document.querySelector(".adres").value = osoby[wpisaneIdWartosc].adres;


// })


// function sayNameForALL(label) {
//     document.write(`${label}: ${this.name} <br>`);
// }

// let person1 = {
//     name: "Nicolas"
// }

// let person2 = {
//     name: "Greg"
// }

// let name = "Michael";
// sayNameForALL.call(this, ["globalny"]);
// sayNameForALL.call(person1, ["person1"]);
// sayNameForALL.call(person2, ["person2"]);


// function sayNameForALL(label) {
//     document.write(`${label}: ${this.name} <br>`);
// }

// let person1 = {
//     name: "Nicolas"
// }

// let person2 = {
//     name: "Greg"
// }

// let sayNameForPerson1 = sayNameForALL.bind(person1);
// sayNameForPerson1("person1");

// let sayNameForPerson2 = sayNameForALL.bind(person2, "person2");
// sayNameForPerson2();

// person2.sayName=sayNameForPerson1;
// person2.sayName("person2")

// let property;
// for(property in document){
//     document.write(`Nazwa ${property}`)
//     document.write(`Wartość ${document[property]} <br>`)
// }

// let properties = Object.keys(object);
// let i, len;
// for(i=0, len=properties.length;i<len; i++){
//     document.write(`Nazwa ${properties[i]}`)
//     document.write(`Wartość: ${window[properties[i]]} <br>`)
// }

// const dog = {
//     name: "Szarik",
//     speed: 1000,
    
// }

// const dog ={
//     name: "Szarik",
//     speed: 1000,
//     showText(){
//         return "Lubię walczyć ze złem";
//     }
// }

// document.write(`${dog.name} <br>`);
// document.write(`${dog.speed} <br>`);
// document.write(dog.showText());

const tab = [];
const name = "Szama";

const speed = 1000;
const ob = {
    name: name,
    speed: speed
}
tab.push(ob);
document.writeln(`${ob.name} ${ob.speed} <br>`);

document.writeln(`<br> INACZEJ <br>`);
tab.push({name: name, speed: speed});

document.writeln(`${ob.name} ${ob.speed}`);

document.writeln(`<br> INACZEJ <br>`);

tab.push({name, speed});
document.writeln(`${ob.name} ${ob.speed}`);




