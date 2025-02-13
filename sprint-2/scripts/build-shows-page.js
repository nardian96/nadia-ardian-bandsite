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
    venue.innerHTML = show.venue;
    loc.innerHTML = show.location;
    btn.innerHTML = 'BUY TICKETS';

    ticketItem.appendChild(date);
    ticketItem.appendChild(venue);
    ticketItem.appendChild(loc);
    ticketWrap.appendChild(ticketItem);
    showsContainer.appendChild(ticketWrap);
    ticketWrap.appendChild(btn);
}

let shows = [
    {date: 'Mon Dec 17 2018', venue: 'Ronald Lane', location: 'San Fransisco, CA'},
    {date: 'Tue Jul 18 2019', venue: 'Pier 3 East', location: 'San Fransisco, CA'},
    {date: 'Fri Jul 22 2019', venue: 'View Loungue', location: 'San Fransisco, CA'},
    {date: 'Sat Aug 12 2019', venue: 'Hyatt Agency', location: 'San Fransisco, CA'},
    {date: 'Fri Sep 05 2019', venue: 'Moscow Center', location: 'San Fransisco, CA'},
    {date: 'Wed Aug 11 2019', venue: 'Pres Club', location: 'San Fransisco, CA'}
];

shows.forEach(function(item) {
    createShowElement(item);
});
