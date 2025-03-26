if (-1 || 0) alert("primero"); // Si, se evalua la condición, se encuentra el primer valor truthy (-1) y se devuelve, al ser truthy la condición es verdadera y se ejecuta alert

if (-1 && 0) alert("segundo"); // No, en la condición, el operador && recoge el primera valor falsy, pero al no existir, devuelve el último valor analizado, 0, al ser un valor falsy no pasa la condición

if (null || (-1 && 1)) alert("tercero"); // Si, dentro de la condición && tiene prioridad y al no haber valores falsy, devuelve el valor último, 1, la el operador || busca el primer valor truthy y encuentra el 1, se cumple la condición.
