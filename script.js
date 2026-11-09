// ========================================================
// 1. ESTRUCTURA SECUENCIAL (Funcionamiento Local / Offline)
// ========================================================
function calcularSecuencial() {
    // Paso 1: Obtener las notas ingresadas por el usuario
    let input1 = document.getElementById("nota1");
    let input2 = document.getElementById("nota2");

    // Validación simple para evitar valores vacíos offline
    let n1 = parseFloat(input1.value) || 0;
    let n2 = parseFloat(input2.value) || 0;

    // Paso 2: Operación matemática secuencial
    let suma = n1 + n2;
    let promedio = suma / 2;

    // Paso 3: Mostrar resultado
    let cajaResultado = document.getElementById("resultado-secuencial");
    cajaResultado.innerText = "Nota 1: " + n1 + " | Nota 2: " + n2 + " => Promedio: " + promedio.toFixed(2);
}


// ========================================================
// 2. ESTRUCTURA CONDICIONAL
// Permite tomar caminos o decisiones según una condición (true/false).
// ========================================================
function evaluarCondicional() {
    let input = document.getElementById("nota-final");
    let nota = parseFloat(input.value) || 0;
    let cajaResultado = document.getElementById("resultado-condicional");

    if (nota >= 3.0) {
        cajaResultado.innerText = "¡APROBADO! El estudiante cumple los logros requeridos.";
        cajaResultado.style.borderLeftColor = "#27ae60";
    } else {
        cajaResultado.innerText = "REPROBADO. El estudiante requiere actividades de recuperación.";
        cajaResultado.style.borderLeftColor = "#e74c3c";
    }
}


// ========================================================
// 3. ESTRUCTURA REPETITIVA (BUCLE / CICLO)
// Permite repetir una acción múltiples veces de forma automática.
// ========================================================
function ejecutarBucle() {
    let estudiantes = ["Carlos", "María", "Juan", "Lucía", "Andrés"];
    let consola = document.getElementById("resultado-bucle");

    consola.innerHTML = "Iniciando recorrido de la lista...<br><br>";

    for (let i = 0; i < estudiantes.length; i++) {
        consola.innerHTML += "Estudiante #" + (i + 1) + ": " + estudiantes[i] + " - [Registro procesado]<br>";
    }

    consola.innerHTML += "<br>¡Bucle finalizado con éxito!";
}