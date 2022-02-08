//asynchronous programming using asnyc / await

const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error)
                resolve({ text: 'Complete Code Example' })
            else
                reject()
        }, 2000)     
    })
}

async function fetchTodo () {
    try { 
        const todo = await getTodo()
        return todo
    } catch (error) {
        console.log("Error occurred")
    }
}

fetchTodo()
    .then(todo => console.log(todo.text))
    .catch(() => console.log("Error occurred"))