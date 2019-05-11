// es recomendable hacer un consle.log inicial para validar la vinculacion de nuestros archivos
console.log('repaso')

// creación de variables
var name = 'fulanita' // variable con un dato del tipo string
var age = 31 // tipo number
var isTyred = true // tipo booleano
var title, skillsList // variables vacias para guardar elementos del DOM

// Array o lista, que se define por los corchetes que envuelven sus elementos
var skills = ['html', 'sass', 'js']
// podemos acceder a un contenido de a lista especificando su indice dentro de corchetes
console.log(skills[0])

// Objeto, que se define por las llaves y agrupa propiedades que pueden contener cualquier tipo de dato
var person = {
  person_name: name,
  person_age: age,
  person_skills: skills,
  greet: function(){ console.log('hola')}
}

var personQualities = function(){
  console.log(person.person_skills[1])
}

// para llamar a una función escribimos su nombre y al final paréntesis para que se ejecute y parámetros si hace falta.
personQualities()
// estamos llamando una función dentro de un objeto
person.greet()


var identifyElements = function(){
  // busco un elemento en el DOM por su ID y lo guardo en una variable previamente creada
  title = document.getElementById('name')
  skillsList = document.getElementById('skill')
  // imprimo los elementos para validar que los econtré
  console.log(title, skillsList)
  // le asignamos a title el nombre de la persona como texto.
  title.innerText = person.person_name

  // usamos la función map del prototipo de lista (person_skills) para recorrer cada elemento y ejecutar una función por cada uno.
  person.person_skills.map(
    function(element){
      // imprimimos en consola cada elemento para validar el recorrido
      console.log(element)
      // creamos un LI
      var liNode = document.createElement('li')
      // le asignamo el elmento como texto interno
      liNode.innerText = element
      console.log(liNode)
      // acceder al contenedor para sumarle hijos
      skillsList.appendChild(liNode)
    }
  )
}