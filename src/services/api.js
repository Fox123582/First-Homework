export default {
    getTodos :async ()=>{
        return await fetch('https://61498bf2035b3600175ba32f.mockapi.io/todo')
            .then(res => res.json())

    },
    updateStatus: async (element) => {

        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${element.id}`, {
            method: 'PUT',
            body: JSON.stringify({completed: element.completed }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    },
    updateInfo: async (element) => {

        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${element.id}`, {
            method: 'PUT',
            body: JSON.stringify({title: element.title,description: element.description}),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    }
    ,
    createNewTask: async (elem) => {
        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo`, {
            method: 'POST',
            body: JSON.stringify({title: elem.title,description:elem.description, completed: false}),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
    },
    deleteElement: async (elem) =>{
        return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${elem.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }
}