
function createCommentElement(comment) {
    const commentContainer = document.querySelector('.comment__data');
    const commentItem = document.createElement('div');
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

// let sortedComments = dateSort(comments);
//         sortedComments.forEach(function(item) {
//             createCommentElement(item);
//         })

// SORT BY DATE 
// function dateSort(array) {
//     let sortedArray = array.slice().sort((a, b) => b.date - a.date);
//     return sortedArray;
// }

function dateSort(timestamp) {
    let sortedArray = array.slice().sort((a, b) => b.date - a.date);
    return sortedArray;
}


function dateFormat(timestamp) {
    let date = new Date(timestamp)
    let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let dateFormat = `${months[date.getMonth()]}/${date.getDate()}/${date.getFullYear()}`;
    return dateFormat;
}


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
                form.reset();
                commentContainer.innerHTML = "";
                let sortedComments = dateSort(comments);
                sortedComments.forEach(function(item) {
                    createCommentElement(item);
                })
            })
        })
    }
});  

