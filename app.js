document.addEventListener('DOMContentLoaded', () => { 
    function getExistingUserData() {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(resp =>console.log('users', resp)) 
    }
    getExistingUserData()
    const NEWUSERFORM = document.querySelector('#add-new-user')
    NEWUSERFORM.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(NEWUSERFORM)
        const name = formData.get('name')
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')
        fetch ('http://localhost:3000/users', {
            method: "POST", 
            headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: name,
                    username: username,
                    email: email,
                    password: password
                }
            })
        })
            .then (resp => resp.json())
            .then(result => console.log('response', result))
    })
})