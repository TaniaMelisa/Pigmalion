/*Dada la siguiente problemática: ¿puede un número X formarse
usando la suma de 2 elementos de un array?
Ejemplo 1
Input: nums = [1,4,3,9], requiredSum = 8
Output: False
Ejemplo 2
Input: nums = [1,2,4,4], requiredSum = 8
Output: True
Desarrolle (en pseudo código o su lenguaje de preferencia):
1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
importante es realizar el desarrollo en el menor tiempo posible.
2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
Ante cualquier duda o ambigüedad en el enunciado, es libre de hacer todas las suposiciones
necesarias, siempre y cuando las especifique.

*/

const requiredSum = 8

function requiredSumEasy(nums, requiredSum){ //toma como parametro un array y la suma requerida
    const num = nums.length //num es igual a la cantidad de numeros del array
    //recorre el array con 2 bucles anidados
    for(let i = 0; i<num; i++){ //el primero recorre cada elemento
        for(let j = i+1; j<num; j++){ //el segundo bucle busca el segundo numero a partir del primero + 1
            if(nums[i] + nums[j] === requiredSum){ // si la suma de nums[i] y nums[j] es igual a la suma requerida devuelve true
                return true
            }
        }
    }
    return false // sino devuelve false
}

//ejemplo de uso
console.log(requiredSumEasy([1, 4, 3, 9], 8)) //false
console.log(requiredSumEasy([1, 2, 4, 4], 8)) // true

function requiredSumDif(nums, requiredSum) {
    
    const seenNumbers = {} // se crea el objeto para guardar los numeros que ya encontramos
    
    for (const num of nums) { // con un for of se itera cada numero del array nums
        
        const complement = requiredSum - num // calculamos el complemento que sumado al numero actual suma el valor requerido

        if (complement in seenNumbers) { //se verifica si el complemento esta dentro de los numeros encontrados
            return true // si el esta en seenNumbers, quiere decir que encontramos el par que suma la requiredSum
        }

        // Si el complemento no está en 'seenNumbers', añadimos el número actual al objeto 'seenNumbers' para comprobaciones futuras
        seenNumbers[num] = true
    }

   
    return false // Si despues de revisar todos los numeros no encontramos ningun par, retornamos false
}

// Ejemplos de uso
console.log(requiredSumDif([1, 4, 3, 9], 8));  //false
console.log(requiredSumDif([1, 2, 4, 4], 8));  //true
