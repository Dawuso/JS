//Zadanie 1
let str = "";
for(let i=1;i<=100;i++){
    if(i%2==0)
        str+="Fiz";
    if(i%3==0)
        str+="Buz";
    if(i%2!=0 && i%3!=0)
        str+=i;
    str+=" ";
}
console.log(str);

//Zadanie 2
let t = prompt("Podaj długość promienia koła:");
let r = parseInt(t, 10);
let o = Math.round(2 * Math.PI * r * 100)/100;
console.log("Obwód: " + o);
let p = Math.round(Math.PI * Math.pow(r, 2) * 100)/100;
console.log("Pole: " + p);

//Zadanie 3
let tab = [];
function wypisz(){
    str="";
    tab.forEach(function(item, index, array){
        str +=item+" ";
    });
    console.log(str);
}

function tablica(){
    let s = 0;
    while(s<200){
        let x = Math.floor(Math.random() * 10 + 1);
        tab.push(x);
        s += x;
    }
    wypisz();
}
tablica();

function usun_najmn(){
    let nm = Math.min.apply(null, tab);
    let poz = tab.indexOf(nm);
    tab.splice(poz, 1);
    wypisz();
}
usun_najmn();

function usun_najw(){
    let nw = Math.max.apply(null, tab);
    let poz = tab.lastIndexOf(nw);
    tab.splice(poz, 1);
    wypisz();
}
usun_najw();

function zlicz(){
    let counts = {};

    for (let num of tab)
        counts[num] = (counts[num]||0) + 1;
    

    for(i=1;i<=10;i++){
        if(typeof counts[i]!=="undefined")
            console.log("Liczba "+i+": "+counts[i]);
    }
    
    wypisz();
}
zlicz();

function zamiana(){
    for(i=1;i<=10;i++)
        tab.push(tab.shift());

    wypisz();
}
zamiana();

//Zadanie 4
let imiona = ["Dawid", "Andrzej", "Radosław", "Przemysław", "Edward"];
for(i=0;i<5;i++){
    let n = imiona[i].replace(/a/gi, "4").replace(/e/gi, "3");
    imiona[i] = n;

    let l = imiona[i].length;
    if(l>6){
        n = imiona[i].replace(imiona[i].substring(3,l-3),"...");
        imiona[i] = n;
    }

}
console.log(imiona);

//Zadanie 5