// const cake = ["chocolate","strawberry","mango","coconut"]
// // arrays
// const trees = []
// trees[0] = "eucalyptus"
// trees[1] = "jackfruit"
// trees[2] = "pine"
// console.log(trees)
// // new array
// const food = new Array ("rice", "chicken","matooke","gnuts")
// console.log("the item at index 3 is",food[3])
// console.log("the item at index 0 is",food[0])
// trees[1] = "mango"
// console.log(trees)
// console.log(trees.toString())
// console.log(food.toString())
// console.log(typeof trees )
// all arrays
//  const all = []
//  all[0] = 24
//  all[1] = "monday"
//  all[2] = Firstname ="Alice"
//  console.log(all)
//  const pies = []
//  pies[0] = "tuesday"
//  pies[1] = 2025
//  pies[2] = Lasttname = "Patience"
//  pies[3] = Firstname = "Livara"
//  console.log(pies)
//  console.log(pies.length)
//  console.log(pies[3])
//  // length
//  console.log(pies.length -1)
// // sort
//  console.log(pies.sort())
//  // an array within an array
//  let fruits = [1,2,3,"mango",["pie", "man","girl","boy"]]
//  console.log(fruits[4][2])
//  console.log(fruits[4][0])

// // length
const pies = ["apple", "mango", "pumpkin", "chocolate"]
console.log(pies.length)
// to string
const fruity = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruity.toString())
// arrat at
const cars = ["BMW", "Volvo", "Prado", "Jeep"]
console.log(cars.at(2))
// pop
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.pop())
// push
const car = ["BMW", "Volvo", "Prado", "Jeep"]
console.log(car.push("Spacio"))
// shift
const year = ["month", "day", "date", "week"]
console.log(year.shift("month"))
// unshift
const girl = ["tall", "brown", "small", "pretty"]
console.log(girl.unshift("brown"))
// array concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys))
// copyWithin()
const fruite = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruite.copyWithin(2, 0))
// flattening ()
const weather = ["sunny", "cloudy", "rainy"]
console.log(weather.flat())
// flat map
const number = [2, 3, 4, 5, 6, 7];
let m = number.flatMap(x => [x, x * 10]);
console.log(m)
// array splice()
const chair = ["long", "short", "flat", "raised", "big", "small"]
console.log(chair.splice(2, 1,))
// tospliced
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(1, 2, "May"))
// slice
const month = ["Jan", "Feb", "Mar", "Apr"];
const y = ["may", "Jun", "jul"]
console.log(y.slice(2))
// tostring()
const motor = ["car", "lorry", "truck", "tractor"]
console.log(motor.toString())
// try out
const phones = ["iphone", "samsung", "itel", "intel", "jov", "ilao", "camon", "swift", "sherrif"]
let result = phones.splice(4, 3, "mango", "oranges")
console.log(phones)
console.log(result)
// indexof
const color = ["blue", "green", "yellow", "white"]
console.log(color.indexOf("green"))
// last index of()
const colors = ["white", "black", "blue", "blue", "blue", "blue"]
console.log("the last index of blue is ", colors.lastIndexOf("blue"))
console.log("this array includes white", colors.includes("white"))
// find()
const choco = ["white", "black", "dark", "brown", "green"]
let results = choco.find(myFunction)
function myFunction(value, index, array) {
    return value.length > 2
    }
console.log("i want to check if green is present", results)
// find index()
const coloring = ["blue", "pink", "green", "red", "orange", "purple"]
let ans = coloring.findIndex(myFunction)
function myFunction(value,index,array) {
    return value == "orange"
}
console.log("the index of orange is", ans)
// find last()
const carss = ["taxi", "lorry", "prado", "spacio", "limozine"]
let answer = carss.findLast(syrup)
function syrup(value,index,array){
   return value == "limozine"
}
console.log(answer)

// find lastIndex()
const laptop = [12,13,14,59,50,48,34,42]
let myans = laptop.findLastIndex(my)
function my (value,index,array){
    return index > 3
}
console.log(myans)

// array sort()
const apple = ["banana","pear","mango","apple","kiwi"]
console.log(apple.sort())
// array reverse
const apples = ["banana","pear","mango","apple","kiwi"]
console.log(apples.reverse())
// toSorted
const monthly = ["Dec","Nov","Oct","Sep","Aug"] 
// console.log(monthly.toSorted())
// toReversed
const monthlyz = ["Dec","Nov","Oct","Sep","Aug"] 
console.log(monthlyz.toReversed())
// another
// const cow = ["mango","pie","apple"]
// console.log(cow.toSorted())
// cow.toSorted()
// console.log("the original array is",cow)
const monthli = ["apr","jul","aug","jan","dec"]
// monthli.reversed()
// console.log(monthli)

// numeric sort
const num = [10,20,40,100,80,90]
let x =num.sort(numbered)
function numbered(sebayigga,sharif) {
    return (sebayigga-sharif)
}
console.log(x)

const numeric = [10,30,60,30,20,88,90]
let v = numeric.sort(flower)
function flower(a,b){
return (b-a)
}
console.log(v)

const didi = [446520,676990, 305570]
// random order
let die = didi.sort(bag)
function bag (){
    return 0.5-Math.random()
}
console.log(die)
// math.floor
let price = 19.99
let roundedprice = Math.floor(price)
console.log(roundedprice)

let b = Math.random() * 10
console.log(b)

let j = Math.random() * (5+1)
console.log(j)
let k = Math.floor(j)
console.log(k)
// fisher yates method
// const grades = [20,40,10,60,44,27,81,40,59]
// for (let x = grades.lenghth-1; x > 0; x--){


// findimg the min grade
// const grade = [49,50,99,50,20,25,88]
// let answers = grade.Math.min.apply()

// function jam (){
    return 
// }
// console.log(answers)
// math.max
const flow = [40,50,60,10,20,80]
let max = Math.min(flow)
console.log("the minimum is", max)
// let max = Math.max.apply(yam)
// function yam (name){
    // return Math.max.apply(null,name)
// }
// console.log(max)