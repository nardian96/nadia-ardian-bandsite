//FUNCTION TO CREATE EACH SHOW TICKET/ELEMENT
function createShowElement(show) {
    const showsContainer = document.querySelector('.shows__container');
    const ticketWrap = document.createElement('div');
    const ticketItem = document.createElement('ul');
    const date = document.createElement('li');
    const venue = document.createElement('li');
    const loc = document.createElement('li');
    const btn = document.createElement('button');

    ticketWrap.classList.add('ticket__wrap');
    ticketItem.classList.add('ticket__item', 'ticket__item:first-child');
    date.classList.add('ticket__data', 'ticket__data--date');
    venue.classList.add('ticket__data', 'ticket__data--venue');
    loc.classList.add('ticket__data', 'ticket__data--location', 'adjusted-padding');

    date.innerHTML = show.date;
    venue.innerHTML = show.place;
    loc.innerHTML = show.location;
    btn.innerHTML = 'BUY TICKETS';

    ticketItem.appendChild(date);
    ticketItem.appendChild(venue);
    ticketItem.appendChild(loc);
    ticketWrap.appendChild(ticketItem);
    showsContainer.appendChild(ticketWrap);
    ticketWrap.appendChild(btn);
}



