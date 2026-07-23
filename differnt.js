function fullName(name){
    let core=name+ ' ' + 'chodury';
    return core;
}
const mohdul=fullName("Mohabud");
console.log(mohdul)



function arreym(firstName,lestName){
    const dobule=firstName+ ' ' +lestName;
    return dobule;
}

const allem=arreym("alli","hossina");
console.log(allem)




function fistElementDobule(arrry){
    console.log(arrry);
    const fistNumber=arrry[0];
    const dodule=fistNumber*2;
    return dodule;

}

const numbers=[22,3,43,43,232];
const dodule=fistElementDobule(numbers);
console.log(dodule)










// function isStudent(studet){
//     console.log(studet)

// }
// const orStudent=isStudent(studet)




const studet={
    name:"Ali",
    marks:90,
    age:21,
}

function isStudent(studet){
    console.log(studet);
    const marks=studet.marks;
    console.log("His marks =",marks);
    if(marks>80){
        console.log("A+")
    }

}
const orStudent=isStudent(studet)