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
    date.innerHTML = dateFormat(new Date(comment.timestamp));
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

//FUNCTION TO FORMAT DATE 
function dateFormat(timestamp) {
    let date = new Date(timestamp)
    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let dateFormat = `${months[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
    return dateFormat;
}

// function dynamic(timestamp) {
//     const earlyDate = new Date();
//     const laterDate = new Date();

//     const diffDate = earlyDate - laterDate;

//     // console.log(diffDate)

//     let date = new Date(timestamp)
//     let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
//     if (diffDate > 1564810570) {
//         return "More than 1 year ago"
//     }
//     else if (diffdate > 1595828170) {
//         return "More than 1 week ago"
//     }
//     else if (diffdate > 1596346570) {
//         return "More than 1 day ago"
//     }
//     else if (diffdate >  )

//     let dateFormat = `${months[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
//     return dateFormat;
// } 



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

