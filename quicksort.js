function quicksort(array) {
    if (array.length == 0) return [];
    if (array.length == 1) return array;

    var pivot, menores, iguais, maiores, _arr;

    pivot = array[0];
    menores = array.filter(n => n < pivot);
    iguais = array.filter(n => n == pivot);
    maiores = array.filter(n => n > pivot);

    _arr = quicksort(menores).concat(iguais).concat(quicksort(maiores));
    return _arr;
}

function executarQuicksort() {
    var arrayParaOrdenar = [5, 3, 7, 9, 4, 6, 1, 2];
    var arrayOrdenado = quicksort(arrayParaOrdenar);
    alert("Array ordenado: " + arrayOrdenado);
}