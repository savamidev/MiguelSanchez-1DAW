

alert( null || 2 || undefined ); // 2

alert(alert(1) || 2 || alert(3)); // pirmero alerta 1, se convierte en undefine y luego se muestra el 2

alert( 1 && null && 2 ); // primer valor falsy, null

alert( alert(1) && alert(2) ); // alerta 1, undefined

alert( null || 2 && 3 || 4 ); // 3