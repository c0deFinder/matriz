let generateMatrix = function(A) {
    let arr = [],
      counter = 1;
    for (let i = 0; i < A; i++) {
      let items = [];
      for (let j = 0; j < A; j++) {
        items.push(0);
      }
      arr.push(items); //// se crea el array donde van a estar contenidos los elementos de la matriz
    }
  
    var spiralMatrix = function(arr) { //aqui se van definiendo las columnas en el array
      let count = 1;
      let k = 0; // starting row
      let m = arr.length; // ending row
      let l = 0; // starting column
      let n = arr[0].length; //ending column
  
      while (k < m && l < n) { //estas son las condicionales para cada columna (superior,derecha,izquierdaabajo)
        // top
        for (var i = l; i < n; i++) {
          arr[k][i] = count;
          count++;
        }
        k++;
  
        // right
        for (var i = k; i < m; i++) {
          arr[i][n - 1] = count;
          count++;
        }
        n--;
  
        // bottom
        if (k < m) {
          for (var i = n - 1; i >= l; i--) {
            arr[m - 1][i] = count;
            count++;
          }
          m--;
        }
  
        // left
        if (l < n) {
          for (var i = m - 1; i >= k; i--) {
            arr[i][l] = count;
            count++;
          }
          l++;
        }
      }
      return arr;
    };
    return spiralMatrix(arr);
  };
  
  console.log(generateMatrix(4));

  let suma = 0;
for( i = 0; i < generateMatrix.length; i++){ //se hace la suma de los elementos de la matriz 
   suma += matriz[i][i];
}

console.log(suma)