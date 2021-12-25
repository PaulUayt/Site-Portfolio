function randomInput(k, str) {
    var arr = [];
    if (k == 2 || k == 5) {
        if (k == 5) {
            var m = Number(document.getElementById(`num${str}1`).value);
            var n = Number(document.getElementById(`num${str}2`).value);
        } else {
            var m = Number(document.getElementById(`num${str}11`).value);
            var n = Number(document.getElementById(`num${str}21`).value);
        }

        if (m <= 0 || !m || n <= 0 || !n) {
            document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
        } else {
            document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
            document.getElementById(`resultTrans${k}`).innerHTML = ' ';
            document.getElementById(`buildMatrix${k}`).innerHTML += "<p>Matrix 1:</p>"
            for (var i = 0; i < m; i++) {
                arr[i] = [];
                for (var j = 0; j < n; j++) {
                    arr[i][j] = Math.trunc(Math.random() * (198) - 99);
                    document.getElementById(`buildMatrix${k}`).innerHTML += `<div class="element">${arr[i][j]}</div>` + "   ";
                }
                document.getElementById(`buildMatrix${k}`).innerHTML += "<br><br>";
            }


            console.log(arr)
            return arr;
        }

    } else if (k == 3 || k == 6) {
        if (k == 6) {
            var m = Number(document.getElementById(`num${str}1`).value);
            var n = Number(document.getElementById(`num${str}2`).value);
        } else {
            var m = Number(document.getElementById(`num${str}12`).value);
            var n = Number(document.getElementById(`num${str}22`).value);
        }

        if (m <= 0 || !m || n <= 0 || !n) {
            document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
        } else {
            document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
            document.getElementById(`buildMatrix${k}`).innerHTML += "<p>Matrix 2:</p>"
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
    } else {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}2`).value);
    }

    if (m <= 0 || !m || n <= 0 || !n) {
        document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
    } else {
        document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
        document.getElementById(`resultTrans${k}`).innerHTML = ' ';
        document.getElementById(`buildMatrix${k}`).innerHTML += "<p>Matrix 1:</p>"
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
    if (k == 2 || k == 5) {
        if (k == 5) {
            var m = Number(document.getElementById(`num${str}1`).value);
            var n = Number(document.getElementById(`num${str}2`).value);
        } else {
            var m = Number(document.getElementById(`num${str}11`).value);
            var n = Number(document.getElementById(`num${str}21`).value);
        }
    } else if (k == 3 || k == 6) {
        if (k == 6) {
            var m = Number(document.getElementById(`num${str}1`).value);
            var n = Number(document.getElementById(`num${str}2`).value);
        } else {
            var m = Number(document.getElementById(`num${str}11`).value);
            var n = Number(document.getElementById(`num${str}21`).value);
        }

        if (m <= 0 || !m || n <= 0 || !n) {
            document.getElementById(`resultTrans${k}`).innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
        } else {
            document.getElementById(`resultTrans${k-1}`).innerHTML = ' ';
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
    var arr1 = [];
    console.log(str)
        //Ввід матриці вручну
    if (method == 1) arr = manualInput(func, str);
    //Рандомне заповнення матриці
    if (method == 2) arr = randomInput(func, str);

    //Операції
    if (func == 1) TransMatrix(arr);
    if (func == 2) {
        if (method == 1) arr1 = manualInput(func + 1, str);
        //Рандомне заповнення матриці
        if (method == 2) arr1 = randomInput(func + 1, str);
        MultiplyMatrix(arr, arr1);
    }
    if (func == 4) multMatrixNumber(Number(document.getElementById('numMultMain').value), arr);
    if (func == 5) {
        if (method == 1) arr1 = manualInput(func + 1, str);
        //Рандомне заповнення матриці
        if (method == 2) arr1 = randomInput(func + 1, str);
        SumMatrix(arr, arr1);
    }

}

function doMatrix(k, str) {
    document.getElementById(`buildMatrix${k}`).innerHTML = ' ';
    document.getElementById(`buildMatrix${k+1}`).innerHTML = ' ';
    document.getElementById(`resultTrans${k}`).innerHTML = ' ';
    if (k == 2 || k == 5) {
        if (k == 5) {
            var m = Number(document.getElementById(`num${str}1`).value);
            var n = Number(document.getElementById(`num${str}2`).value);
            var m1 = Number(document.getElementById(`num${str}1`).value);
            var n1 = Number(document.getElementById(`num${str}2`).value);
        } else {
            var m = Number(document.getElementById(`num${str}11`).value);
            var n = Number(document.getElementById(`num${str}21`).value);
            var m1 = Number(document.getElementById(`num${str}12`).value);
            var n1 = Number(document.getElementById(`num${str}22`).value);
        }


        document.getElementById(`buildMatrix${k}`).innerHTML += "<p>Matrix 1:</p>"
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                document.getElementById(`buildMatrix${k}`).innerHTML += `<input  class="el_matrix" type="number" id="el${k}${i}${j}">` + "   ";
            }
            document.getElementById(`buildMatrix${k}`).innerHTML += "<br><br>";
        }

        document.getElementById(`buildMatrix${k+1}`).innerHTML += "<p>Matrix 2:</p>"
        for (var i = 0; i < m1; i++) {
            for (var j = 0; j < n1; j++) {
                document.getElementById(`buildMatrix${k+1}`).innerHTML += `<input  class="el_matrix" type="number" id="el${k+1}${i}${j}">` + "   ";
            }
            document.getElementById(`buildMatrix${k+1}`).innerHTML += "<br><br>";
        }

        document.getElementById(`buildMatrix${k+1}`).innerHTML += `<button type="button" name="button_f" onclick="changeMatrix(${k}, 1, '${str}')" >Виконати дію</button><br><br>`;
    } else {
        var m = Number(document.getElementById(`num${str}1`).value);
        var n = Number(document.getElementById(`num${str}2`).value);

        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                document.getElementById(`buildMatrix${k}`).innerHTML += `<input  class="el_matrix" type="number" id="el${k}${i}${j}">` + "   ";
            }
            document.getElementById(`buildMatrix${k}`).innerHTML += "<br><br>";
        }
        document.getElementById(`buildMatrix${k}`).innerHTML += `<button type="button" name="button_f" onclick="changeMatrix(${k}, 1, '${str}')" >Виконати дію</button><br><br>`;
    }
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

function MultiplyMatrix(A, B) {
    var rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[i] = [];
    for (var k = 0; k < colsB; k++) {
        for (var i = 0; i < rowsA; i++) {
            var t = 0;
            for (var j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
            C[i][k] = t;
        }
    }
    takeResult(C, A.length, B[0].length, 2);
    return C;
}

function SumMatrix(A, B) //На входе двумерные массивы одинаковой размерности
{
    var m = A.length,
        n = A[0].length,
        C = [];
    for (var i = 0; i < m; i++) {
        C[i] = [];
        for (var j = 0; j < n; j++) C[i][j] = A[i][j] + B[i][j];
    }
    takeResult(C, A.length, B[0].length, 5);
    return C;
}

function takeResult(arr, m, n, k) {
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            document.getElementById(`resultTrans${k}`).innerHTML += `<div class="element">${Math.trunc(arr[i][j])}</div>` + "   ";
        }
        document.getElementById(`resultTrans${k}`).innerHTML += "<br><br>";
    }
}