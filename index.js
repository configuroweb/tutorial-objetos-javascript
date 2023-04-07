const vaso = {
    Material: 'Porcelana',
    Estado: 'Lleno'
}

const medidasVaso = {
    Alto: '10cm',
    Ancho: '5cm'
}

// console.log(vaso.Material); // Porcelana

console.log(Object.keys(vaso)); // ['Material', 'Estado']
console.log(Object.values(vaso)); // ['Porcelana', 'Lleno'] 
console.log(Object.entries(vaso));
console.log(Object.assign(vaso, medidasVaso)); // { Material: 'Porcelana', Estado: 'Lleno', Alto: '10cm', Ancho: '5cm' }    
console.log(vaso); // { Material: 'Porcelana', Estado: 'Lleno', Alto: '10cm', Ancho: '5cm' } 


const estudiantes = [
    {nombre: 'Juan', nota: 7},
    {nombre: 'Pablo', nota: 5},
    {nombre: 'Pedro', nota: 4},
    {nombre: 'Maria', nota: 9},
]

estudiantes.forEach((estudiante, index) => {
    console.log(estudiante.nombre);
});

estudiantes.map((estudiante, index) => {
    console.log(estudiante.nombre.toUpperCase());
});