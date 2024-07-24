//Selecciona los elementos del DOM con los IDs 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//variable para llevar el control del circulo activo actual
let currentActive = 1

//Añade un even litener al boton 'next' para el evento 'click'
next.addEventListener('click', () =>{
    //Incrementa el valor de currentActive
    currentActive++

    //Asegura que currentActive no exceda el número de circulos
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    //llama a la función update para actualizar el progreso y el estado de los botones
    update()  
})

//añade un event listener al boton 'prev' para el evento 'click'
prev.addEventListener('click', () =>{
    //decrementa el valor del currentActive
    currentActive--

    //Asegura que currentActive no sea menor que 1
    if(currentActive < 1){
        currentActive = 1
    }

    update()
})

//Define la función update para activar el progreso y el estado de los botones
function update(){
    //itera sobre cada circulo y añade o elimina la clase 'active' según el valor de currentActive
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    //selecciona todos los elementos con la clase 'active'
    const actives = document.querySelectorAll('.active')

    //calcula el ancho del progreso como un porcentaje
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'


    //desabilita el boton 'prev' si currentActive es 1, si deshabilita el boton 'next' si currentActive es igual al número de circulos, de lo contrario habilita ambos botones
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}