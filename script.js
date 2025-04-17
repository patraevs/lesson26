const getData = () => {

    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            sendData(data)
        })
        .catch(error => {
            console.log(error)
        })
}

const sendData = (data) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
}

getData()
