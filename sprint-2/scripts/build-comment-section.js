/* <div class="comment__data">
    <div class="comment__item">
        <div class="user__image"></div>
        <div class="item__content">
            <div class="item__header"></div>
                <div class="header__name"></div>
                <div class="header__date"></div>
            <div class="item__body"></div>
        </div>
    </div>
</div> */

function createCommentElement(comment) {
    let commentContainer = document.querySelector('.comment__data');
    let commentItem = document.createElement('div');
    let image = document.createElement('div');
    let commentContent = document.createElement('div');
    let contentHeader = document.createElement('div');
    let name = document.createElement('div');
    let date = document.createElement('div');
    let content = document.createElement('div');

    commentItem.classList.add('comment__item');
    image.classList.add('user__image');
    commentContent.classList.add('item__content');
    contentHeader.classList.add('item__header');
    name.classList.add('header__name');
    date.classList.add('header__date');
    content.classList.add('item__body');

    name.innerHTML = comment.name;
    date.innerHTML = comment.date;
    content.innerHTML = comment.content;

    contentHeader.appendChild(name);
    contentHeader.appendChild(date);
    commentContent.appendChild(contentHeader);
    commentContent.appendChild(content);
    commentItem.appendChild(image);
    commentItem.appendChild(commentContent);
    commentContainer.appendChild(commentItem);
}

let comments = [
    {
        name: 'Michael Lyons', 
        date: '12/18/2018', 
        content: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        name: 'Gary Wong', 
        date: '12/12/2018', 
        content: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        name: 'Theodore Duncan', 
        date: '11/15/2016', 
        content: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }
]

comments.forEach(function(item) {
    createCommentElement(item);
})