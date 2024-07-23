//Selecciona todos los documentos del DOM con la clase 'panel'
const panels = document.querySelectorAll('.panel')

//Itera sobre cada uno de los elementos seleccionados
panels.forEach(panel =>{
    //Agrega un elemento listener a cada uno de los paneles para el evento 'click'
    panel.addEventListener('click', () => {
        //Llama a la funcion removeActiveClasses para eliminar la clase 'active' de todos los paneles
        removeActiveClasses()
        //Agrega la clase 'active' al panel que fue clickeado
        panel.classList.add('active')
    })
})

//Define una funcion para eliminar la clase 'active' de todos los paneles 
function removeActiveClasses(){
    //Itera sobre cada uno de los paneles y les elimina la clase 'active'
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}