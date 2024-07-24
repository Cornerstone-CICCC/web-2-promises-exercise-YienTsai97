const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let firstname , lastname , age , hobbystr , hobbyarr , hobbies

fs.readFile('./firstname.txt','utf-8')
.then((dataFirstname) =>{
    firstname = dataFirstname
    return fs.readFile('./lastname.txt','utf-8')
})
.then((dataLastname) =>{
    lastname = dataLastname
    return fs.readFile('./age.txt','utf-8')
})
.then((dataAge) =>{
    age = dataAge
    return fs.readFile('./hobbies.txt','utf-8')
})
.then((dataHobby) =>{
    hobbystr = dataHobby
    hobbyarr = hobbystr.replace(",","").replace(" ","").split('"')
    hobbyarr.shift()
    hobbyarr.pop()
    hobbies = hobbyarr.filter( n => n )
    console.log(`${firstname} ${lastname} is ${age} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}.`)
})
.catch((error)=>{
    console.log("error")
})




// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readDataFiles(){
    try{
        const firstname = await fs.readFile('./firstname.txt','utf-8')
        const lastname = await fs.readFile('./lastname.txt','utf-8')
        const age = await fs.readFile('./age.txt','utf-8')
        const hobbystr = await fs.readFile('./hobbies.txt','utf-8')
        const hobbyarr = hobbystr.replace(",","").replace(" ","").split('"')
        hobbyarr.shift()
        hobbyarr.pop()
        hobbies = hobbyarr.filter(n => n)
        return`${firstname} ${lastname} is ${age} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}.`
    }
    catch(error){
        console.log(error)
    }
}

async function output(){
    try{
        const data = await readDataFiles()
        console.log(data)
    }
    catch(error){
        console.log("error")
    }
}
output()