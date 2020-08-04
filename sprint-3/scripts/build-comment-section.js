//FUNCTION TO FORMAT DATES
function dateFormat(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
        minutes = `0${hours}`;
    }
    if (day < 10){
        day = `0${day}`;
    }
    if (month < 10){
      month = `0${month}`;
    }
    if (year < 10){
        year = `0${year}`;
    }
    return `${month}/${day}/${year}`;
}

//FUNCTION FOR DYNAMIC TIMESTAMP
function timeAgo(dateParam) {
if (!dateParam) {
    return null;
    }
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const dayMilliseconds = 86400000;
    const today = new Date();
    const isToday = today.toDateString() === date.toDateString();
    const yesterday = new Date(today - dayMilliseconds);
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const thisYear = today.getFullYear()
    const isThisYear = today.getFullYear() === date.getFullYear();
    const diffYear = date.getFullYear();
    const yearsDiff = diffYear - thisYear;
    const isMoreThanAYear = diffYear > thisYear;
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
  

    if (seconds < 5) {
    return 'now';
    } 
    else if (seconds < 60) {
    return `${seconds} seconds ago`;
    } 
    else if (seconds < 90) {
    return 'about a minute ago';
    } 
    else if (minutes < 60) {
    return `${minutes} minutes ago`;
    } 
    else if (isToday) {
    return dateFormat(date, 'Today'); 
    } 
    else if (isYesterday) {
    return dateFormat(date, 'Yesterday'); 
    } 
    else if (isThisYear) {
    return dateFormat(date, false, true);
    }
    else if (isMoreThanAYear) {
    return `${yearsDiff} years ago`
    } 
    else {
        return dateFormat(date);
    }
    
}

// FUNCTION TO CREATE DOM ELEMENTS FOR THE COMMENTS
function createCommentElement(comment) {
    const commentContainer = document.querySelector('.comment__data');
    const commentItem = document.createElement('li');
    const imageContainer = document.createElement('div');
    const image = document.createElement('div');
    const commentContent = document.createElement('div');
    const contentHeader = document.createElement('div');
    let name = document.createElement('div');
    let date = document.createElement('div');
    let content = document.createElement('div');

    commentItem.classList.add('comment__item');
    imageContainer.classList.add('image__container');
    image.classList.add('image__item');
    commentContent.classList.add('item__content');
    contentHeader.classList.add('item__header');
    name.classList.add('header__name');
    date.classList.add('header__date');
    content.classList.add('item__body');

    name.innerHTML = comment.name;
    date.innerHTML = timeAgo(new Date(comment.timestamp));
    content.innerHTML = comment.comment;

    contentHeader.appendChild(name);
    contentHeader.appendChild(date);
    commentContent.appendChild(contentHeader);
    commentContent.appendChild(content);
    imageContainer.appendChild(image);
    commentItem.appendChild(imageContainer);
    commentItem.appendChild(commentContent);
    commentContainer.appendChild(commentItem);
}


//FUNCTION TO APPEND API KEY TO EACH REQUEST URL
function appendKey(url) {
    let apiURL = `${url}?api_key=${apiKey}`
    console.log(apiURL)
    return apiURL
}

//GET DEFAULT COMMENTS DATA FROM WEB API 
const apiRegister = 'https://project-1-api.herokuapp.com/register'
let apiKey = '5a9e3f6a-a4c2-4a7e-8a3a-3b40ca07c71f'
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
    return sorted
})
.then((response) => {
    sortedComments = response
    console.log(response)
    sortedComments.forEach(function (item) {
        createCommentElement(item);
    })
})


//EVENT LISTENER
const form = document.querySelector('.form-message');
const commentContainer = document.querySelector('.comment__data');
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let nameValue = event.target.name.value;
    let messageValue = event.target.comment.value;
    if (nameValue !== "" && messageValue !== "") {
        const apiComments = appendKey('https://project-1-api.herokuapp.com/comments')
        axios.post(apiComments, {
            name: nameValue,
            comment: messageValue 
        })
        .then((response) =>{
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
            return sorted
            })
            .then((response) => {
                form.reset();
                commentContainer.innerHTML = "";
                let sortedComments = response;
                sortedComments.forEach(function(item) {
                    createCommentElement(item);
                })
            })
        })
    }
});

