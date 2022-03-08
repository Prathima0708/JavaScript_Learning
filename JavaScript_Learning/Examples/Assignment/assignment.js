const taskElement=document.getElementById("task")
function greet()
{
    alert("Hi There...")
}
function greetUser(userName)
{
    alert("Hi "+userName)
}

function combine(str1,str2,str3)
{
    const combinedText=str1+ ' ' + str2+ ' ' + str3
    return combinedText
}

// greet()
// greetUser('Max')

taskElement.addEventListener('click',greet)
const combinedString=combine('Hi','there','!')
alert(combinedString)