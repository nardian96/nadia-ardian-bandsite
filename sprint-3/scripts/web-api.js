const apiRegister = 'https://project-1-api.herokuapp.com/register'

let apiKey = '23dd5f0b-ed3e-41a1-b637-2eca4e704536'
// const request = axios.get(apiRegister)
// request.then((response) => {
//     console.log(response)
//     apiKey = response.data.api_key
//     console.log(apiKey)
    const apiComments = appendKey('https://project-1-api.herokuapp.com/comments')
    axios.get(apiComments)
    .then((response) => {
        console.log(response)
        comments = response.data
        comments.forEach(function (item) {
            createCommentElement(item);
        })
    })
// })

function appendKey(url) {
    let apiURL = `${url}?api_key=${apiKey}`
    console.log(apiURL)
    return apiURL
}

