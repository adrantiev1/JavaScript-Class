// Add script to import the company direcotry
// filter
// reduce
// some
// every
// sort
// find
// findIndex()
// slice()


//Array.filter()
// returns an array based on the conditions you set

// const newArray = inventors.filter(function(inv,index){
//     // console.table(inv);
//     if (inv.year <= 1600) {
//         return inv
//     }

// }) 

// console.log(newArray)


// arrow function
// implicit return
// const newArray = inventors.filter((inv)=> inv.first.toLowerCase().includes('a'));
// console.log(newArray);
//  explicit return
// const newArray = inventors.filter((inv)=> {

// });

//Array.reduce
// grind down an array into a single value
const newItem = inventors.reduce(function(total,inventor){
    const lifeSpan =  inventor.passed - inventor.year;
    console.log(lifeSpan);
    return (total + lifeSpan)


},0)
console.log(newItem)