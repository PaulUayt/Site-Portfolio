function randomInput(k, str) {
    var arr = [];
    if (k == 2) {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}1`).value);
    } else {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}2`).value);
    }

    if (m <= 0 || !m || n <= 0 || !n) {
        document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
    } else {
        document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
        document.getElementById(`resultTrans${k}`).innerHTML = ' ';
        for (var i = 0; i < m; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                arr[i][j] = Math.trunc(Math.random() * (198) - 99);
                document.getElementById(`buildMatrix${k}`).innerHTML += `<div class="element">${arr[i][j]}</div>` + "   ";
            }
            document.getElementById(`buildMatrix${k}`).innerHTML += "<br><br>";
        }
        document.getElementById(`buildMatrix${k}`).innerHTML += "<p>Результат операції:</p>";

        console.log(arr)
        return arr;
    }
}

function manualInput(k, str) {
    var arr = [];
    if (k == 2) {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}1`).value);
    } else {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}2`).value);
    }
    var id = "";


    if (m <= 0 || !m || n <= 0 || !n) {
        document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
    } else {
        document.getElementById(`resultTrans${k}`).innerHTML = ' ';
        for (var i = 0; i < m; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                id = `el${k}${i}${j}`;
                console.log(id)
                arr[i][j] = Number(document.getElementById(id).value);
            }
        }
        console.log(arr)
        return arr;
    }
}

function changeMatrix(func, method, str) {
    var arr = [];
    console.log(str)
        //Ввід матриці вручну
    if (method == 1) arr = manualInput(func, str);
    //Рандомне заповнення матриці
    if (method == 2) arr = randomInput(func, str);

    //Операції
    if (func == 1) TransMatrix(arr);
    if (func == 2) InverseMatrix(arr);
    if (func == 4) multMatrixNumber(Number(document.getElementById('numMultMain').value), arr);

}

function doMatrix(k, str) {
    document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
    document.getElementById(`resultTrans${k}`).innerHTML = ' ';
    if (k == 2) {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}1`).value);
    } else {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}2`).value);
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            document.getElementById(`buildMatrix${k}`).innerHTML += `<input  class="el_matrix" type="number" id="el${k}${i}${j}">` + "   ";
        }
        document.getElementById(`buildMatrix${k}`).innerHTML += "<br><br>";
    }
    document.getElementById(`buildMatrix${k}`).innerHTML += `<button type="button" name="button_f" onclick="changeMatrix(${k}, 1, '${str}')" >Виконати дію</button><br><br>`;
}

//Transponate matrix
function TransMatrix(A) //На входе двумерный массив
{
    var m = A.length,
        n = A[0].length,
        AT = [];
    for (var i = 0; i < n; i++) {
        AT[i] = [];
        for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    takeResult(AT, n, m, 1)
    return AT;
}

function multMatrixNumber(a, A) // a - число, A - матрица (двумерный массив)
{
    var m = A.length,
        n = A[0].length,
        B = [];
    for (var i = 0; i < m; i++) {
        B[i] = [];
        for (var j = 0; j < n; j++) B[i][j] = a * A[i][j];
    }
    takeResult(B, m, n, 4);
    return B;
}

function takeResult(arr, m, n, k) {
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            document.getElementById(`resultTrans${k}`).innerHTML += `<div class="element">${Math.trunc(arr[i][j])}</div>` + "   ";
        }
        document.getElementById(`resultTrans${k}`).innerHTML += "<br><br>";
    }
}