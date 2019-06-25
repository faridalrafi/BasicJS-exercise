// for loop

for(let i = 0; i <= 10; i++){
    console.log(i)
}

//While Loop
let i = 0;
while(i< 10){
    console.log(10);
    i++;
}

let todos = [
    {
        id: 1,
        text: "Learn Javascript",
        isCompleted: true
    },
    {
        id: 2,
        text: "Eat Lunch",
        isCompleted: false
        },
    {
        id: 1,
        text: "Sleep enough",
        isCompleted: false
        }
]

for(let todo of todos){
    console.log(todo.text)
}

//For each, Map, Filter

todos.forEach(todo => {
    console.log(todo.text)
});

todos.forEach(function(todo){
    // statement
    console.log(todo.text)
})

const todosText = todos.map(todo => {
    //todo.text = "reasign value"
    return(todo.text)
});

const todosText = todos.filter(todo => {
    return(todo.isCompleted === true)
});
// Itteration = melakukan extracting data dari array object
// Bikin Object Array
books = [
    {
        id,
        title,
        author
    }
]

