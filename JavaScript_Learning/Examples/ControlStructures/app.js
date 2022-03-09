// const randomNumber=Math.random()

// if(randomNumber>0.7)
// {
//     alert("greater than 0.7")
// }
// else
// {
//     alert("not greater than 0.7")
// }

// const numbers=[1,2,3,4,5,6]                //one way of looping
// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i])
// }

// for(const num of numbers)    //another way of looping
// {
//     console.log(num)
// }

// let counter=0                           //looping using while
// while(counter<numbers.length)
// {
//     console.log(numbers[counter])
//     counter++
// }

// //for loop-backwards
// for(let i=numbers.length-1;i>=0;i--)
// {
//     console.log(numbers[i])
// }


// //using logical and operator
// const randomNumber2=Math.random()
// console.log(randomNumber)
// console.log(randomNumber2)

// if((randomNumber>0.7 && randomNumber2>0.7)|| randomNumber<=0.2 && randomNumber2<=0.2)
// {
//     alert("greater than 0.7 or smaller than 0.2")
// }












//var ,let and const


let name='Max'  
                        //we can redeclare var variables whereas let var we cannot redeclare

if (name==="Max")
{
    let hobbies=['Sports','Cooking']
    console.log(hobbies)
}

function greet()
{
    let age=30                                       //local variable 
    let name='Manu'
    console.log(name,age)                               //re-declaring variable inside fnction (shadowed)
}
console.log(name)
greet()
