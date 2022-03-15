const numbers=[1,2,3,4,5]
console.log(numbers)

//another way od creating array
const moreNumbers=new Array(5)
console.log(moreNumbers)


//another way od creating array
const yetMoreNumbers=Array.of(1,3)
console.log(yetMoreNumbers)

//using array .from
const num=Array.from("Hi!") //will seperate each character in o/p
console.log(num)

const listitems=document.querySelectorAll('li')
console.log(listitems)

const arrayListItems=Array.from(listitems)
console.log(arrayListItems)


//arrays can store any type of data

// const hobbies=['playing','cookin']   // all are strings
const personalData=[30,'max',{moreDetail:[]}]  //mixed data-number ,string,object ,here object is again an array

const analyticsData=[[1,3.5],[-4.5,-2.1]] //nested arrays
for (const data of analyticsData){      //data-first array
    for(const dataPoint of data){       //dataPoint-second array
        console.log(dataPoint)
    }
}



//Push method -adds element to last of an array
//unshift-adds to begining of array

const hobbies=['cooking','sports']
hobbies.push('reading')
console.log(hobbies)
hobbies.unshift('coding')
console.log(hobbies)


//pop-removes last element
//shift-removes first element
hobbies.pop()
console.log(hobbies)
hobbies.shift()
console.log(hobbies)

//splice method -1st arg (pos to be added) 2nd arg-ele to be deleted 3rd arg-ele to be added
// hobbies.splice(0,0,'coding') //adds coding ele to 0th pos
console.log(hobbies)

hobbies.splice(1,0,'coding','good food')//adds coding ele to 1st pos
console.log(hobbies)

hobbies.splice(0,1)
console.log(hobbies)

