//**Property Descriptor */
// var person = {
//     name : 'Younus Ali Akash'
// }
// console.log(person)

// for ( var i in person){
//     console.log(i)
// }
// console.log(Object.keys(person))

// var des = Object.getOwnPropertyDescriptor(person , 'name')
// console.log(des)

// let pro = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(pro ,'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name',{
//     enumerable : false,
//     configurable : false,
//     writable : false
// })

// console.log(Object.getOwnPropertyDescriptor(person,'name'))

//***Constrauctor ProtoType */
// function Person(){
//     this.name = name
// }
// Person.prototype.PI = 3.1416

// var p1 = new Person('YA Akash')
// var p2 = new Person ('You')
// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

//**Instance vs Prototype */
function Squre (width){
    this.width = width


}

Squre.prototype ={
    draw : function(){
        console.log('Draw')
    },
    toString: function(){
        return'My Width is ' + this.width
    }
}

var sq1 = new Squre(10)
var sq2 = new Squre(20)

//**Find Own Property */
console.log(Object.keys(sq1))

for (var i in Squre){
    console.log(i)
}