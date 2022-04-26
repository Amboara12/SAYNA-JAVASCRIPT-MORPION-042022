const items = document.getElementsByClassName('grid-item');
console.log(items);
let table = Array.from(items)

let tableT = []
let tableO = []
let valiny = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],

] 
function telo() {
    for (let i = 0; i < valiny.length; i++) {
        if (tableT.includes(valiny[i][0]) && tableT.includes(valiny[i][1]) && tableT.includes(valiny[i][2])) {
            alert("mety")
        }
        else if (tableO.includes(valiny[i][0] && tableO.includes(valiny[i][2] && tableO.includes(valiny[i][1])))){
            alert("mety2")
        }
        
    }
}

function add0() {
    table[0].innerHTML = "x";
    tableT.push(0);
    table[5].innerHTML = "o";
    tableO.push(5)
    telo()
    
}

function add1() {
    table[1].innerHTML = "x";
    tableT.push(1);
    table[4].innerHTML = "o";
    tableO.push(4);
    telo()
}

function add2() {
    table[2].innerHTML = "x";
    tableT.push(2);
    table[3].innerHTML = "o";
    tableO.push(3);
    telo()
}

function add3() {
    table[3].innerHTML = "x";
    tableT.push(3)
    table[8].innerHTML = "o";
    tableO.push(8)
    telo()
    
    
}

function add4() {
    table[4].innerHTML = "x";
    tableT.push(4)
    table[7].innerHTML = "o";
    tableO.push(7)
    telo()
    
}

function add5() {
    table[5].innerHTML = "x";
    tableT.push(5)
    table[6].innerHTML = "o";
    tableO.push(6)
    telo()
}

function add6() {
    table[6].innerHTML = "x";
    tableT.push(6)
    table[5].innerHTML = "o";
    tableO.push(5)
    telo()
    
}

function add7() {
    table[7].innerHTML = "x";
    tableT.push(7)
    table[2].innerHTML = "o";
    tableO.push(2)
    telo()
    
}

function add8() {
    table[8].innerHTML = "x";
    tableT.push(8)
    table[1].innerHTML = "o";
    tableO.push(1)
    telo()
    
}



table[0].addEventListener("click", add0)
table[1].addEventListener("click", add1)
table[2].addEventListener("click", add2)
table[3].addEventListener("click", add3)
table[4].addEventListener("click", add4)
table[5].addEventListener("click", add5)
table[6].addEventListener("click", add6)
table[7].addEventListener("click", add7)
table[8].addEventListener("click", add8)
