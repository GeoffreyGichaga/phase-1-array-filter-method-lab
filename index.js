// Code your solution here

function findMatching(drivers,names)
{
    let match =[]
    drivers.filter((name)=>{
        if(name == names)
        {
            match.push(name)
        }
    }) 
    return match

}


function fuzzyMatch(drivers,nameLetter)
{
    drivers.filter(name=>{
        if(name[0]== nameLetter){
            console.log(name);
            return name
        }
    })
}
let matchName = (drivers,names)=>{
    drivers.filter(driver=>{
        if(driver.name === names)

        {
            console.log(driver);
            return driver
        }
    })
}