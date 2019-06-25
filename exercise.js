// variable and data types

// var, const, let
// var scope global scope

let name = 'abia'
const phi = 3.14

// data types

// primitive
// number, string, boolean, null, undefined

//name = "agam"

let isCompleted = false

let textLength = null

//  array
const fruits = ['oranges', 'apples', 'bananas']

fruits.push('durian')

// menambahkan dari belakang (index terakhir) = array.push
// menambahkan dari awal
fruits.unshift('grapes')
// menghapus ,mengeluarkan dari belakang
fruits.pop()
// menghapus dari depan 
fruits.shift()

// Object 

const todo = {
    id: 1,
    text : 'Learn Javascript',
    isCompleted : true
}

todo.isCompleted = false;

// string
//console.log(`my name is ${name}`)


// Array Object

const todos = [
    {
        id: 1,
        text : 'Learn Javascript',
        isCompleted : true
    },
    {
        id: 2,
        text : 'Sleep',
        isCompleted : false
    },
    {
        id: 3,
        text : 'Lunch',
        isCompleted : false,
        fruits : ['bananas', ' grapes']
    }
]


// Looping

const todosText = todos.map(todo => {
    //todo.text = "reasign value"
    return(todo.text)
});


