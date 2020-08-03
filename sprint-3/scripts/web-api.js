//FETCHING DEFAULT COMMENTS DATA FROM WEB API 
const apiRegister = 'https://project-1-api.herokuapp.com/register'
let apiKey = 'b63ac6ba-bd53-4134-8589-1e26cf6b6b72'
// const request = axios.get(apiRegister)
// request.then((response) => {
//     console.log(response)
//     apiKey = response.data.api_key
//     console.log(apiKey)
const apiComments = appendKey('https://project-1-api.herokuapp.com/comments')
axios.get(apiComments)
.then((response) => {
    comments = response.data
    sorted = []
    comments.forEach(function(item) {
        sorted.push(item)
        sorted.sort(function(a, b) {
            return b.timestamp - a.timestamp;
        })
    })
    console.log(sorted)
    return sorted
})
.then((response) => {
    sortedComments = response
    console.log(response)
    sortedComments.forEach(function (item) {
        createCommentElement(item);
    })
}) 

//FUNCTION TO APPEND API KEY TO EACH REQUEST URL
function appendKey(url) {
    let apiURL = `${url}?api_key=${apiKey}`
    console.log(apiURL)
    return apiURL
}

//FETCHING SHOWS DATA FROM WEB API
const apiShows = appendKey('https://project-1-api.herokuapp.com/showdates')
axios.get(apiShows) 
.then(
    (response) => {
        shows = response.data
        console.log(shows)
        shows.forEach(function(item) {
            createShowElement(item)
        })
    }
)