const sayHello=(name)=>
{
    console.log("Hi " + name)
}

const sayHello2=(name,phrase)=>
{
    console.log(phrase +' ' + name)
}


const sayHello3=()=>
{
    console.log("Hi Hard Coded data ")
}


const sayHello4=(name)=>"Hi " + name



sayHello('Max')

sayHello2('Max','Hello')

sayHello3()

console.log(sayHello4('Max'))

const sayHello5=(name,phrase="HI")=>console.log(phrase+" "+ name)
sayHello5("Manu")
sayHello5("Manu","hello")


function checkInput(cb,...strings){
    let hasEmptyText=false
    for(const text of strings){
        if(!text){
            hasEmptyText=true
            break
        }
    }
    if (!hasEmptyText){
        cb()
    }
}
checkInput(()=>{
console.log("all non empty values")
},'hii','')