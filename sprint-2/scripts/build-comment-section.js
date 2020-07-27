let comments = [
    {
        name: 'Michael Lyons', 
        date: new Date('12/18/2018'), 
        content: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        name: 'Gary Wong', 
        date: new Date('12/12/2018'), 
        content: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        name: 'Theodore Duncan', 
        date: new Date('11/15/2016'), 
        content: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }
]

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
    date.innerHTML = dateFormat(comment.date);
    content.innerHTML = comment.content;

    contentHeader.appendChild(name);
    contentHeader.appendChild(date);
    commentContent.appendChild(contentHeader);
    commentContent.appendChild(content);
    imageContainer.appendChild(image);
    commentItem.appendChild(imageContainer);
    commentItem.appendChild(commentContent);
    commentContainer.appendChild(commentItem);
}

let sortedComments = dateSort(comments);
        sortedComments.forEach(function(item) {
            createCommentElement(item);
        })

// SORT BY DATE 
function dateSort(array) {
    let sortedArray = array.slice().sort((a, b) => b.date - a.date);
    return sortedArray;
}

function dateFormat(date) {
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
    let dateValue = new Date();

    if (nameValue !== "" && messageValue !== "") {
        comments.push({
            name: nameValue,
            date: dateValue,
            content: messageValue
        });
        form.reset();
        commentContainer.innerHTML = "";
        let sortedComments = dateSort(comments);
        sortedComments.forEach(function(item) {
            createCommentElement(item);
        })
    }
});  

