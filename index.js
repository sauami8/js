
let myobj = {
    mountain: ['Evereset','Swis Alp','Grand Canyon'],
    mountainfunc: function()
    {
        setTimeout(() => console.log(this.mountain.join('/')) , 300)
        //this is used to access the enclosed object or function objects
    }
}

console.log(myobj.mountainfunc());

// object de-structuring 

let schedule = {
    morning: 'Get ready',
    noon: 'lunch',
    evening: 'walk',
    night: 'dinner'
};
//decomposing the object
let { morning, noon } = schedule;
console.log(`Morning ${morning} and then in noon time ${noon}`);

// arrow function with object return 
let st = student => {
    console.log(`here is ${student.name} is ${student.age}`)
};

st({
    name: 'Raj',
    age: 10
})

//--
let job = position => {
    // with decomposition of position object, benefits is to get only required object field  
    let {analyst,city} = position
    console.log(`give me ${analyst} for domain in city ${city}`);
    // till here next line is without decomposing o
    console.log(`Give me ${position.analyst} domain analyst for cities ${position.city}`)
}
//invoking the job function or object
job ({
    analyst: ['SCM','Manufacturing', 'Planning'],
    city: ['SFO','NY', 'TX']
})
//-----