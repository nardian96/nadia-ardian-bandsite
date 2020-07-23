
/* <div class='ticket__wrap'>
<ul class='ticket__item'>
    <li></li>
    <li></li>
    <li></li>
</ul>
<button></button>
</div>  */

// //STEP 1
// let ticketWrap = document.createElement('div');
// let ticketItem = document.createElement('ul');
// let date = document.createElement('li');
// let venue = document.createElement('li');
// let loc = document.createElement('li');

// // STEP 2
// ticketWrap.classList.add('ticket__wrap');
// ticketItem.classList.add('ticket__item');
// date.classList.add('ticket__data');
// venue.classList.add('ticket__data');
// loc.classList.add('ticket__data');

// // STEP 3 
// date.innerHTML = 'Mon Dec 17 2018';
// venue.innerHTML = 'Ronald Lane';
// loc.innerHTML = 'San Fransisco, CA';


// //STEP 4
// ticketItem.appendChild(date);
// ticketItem.appendChild(venue);
// ticketItem.appendChild(loc);
// ticketWrap.appendChild(ticketItem);
// document.querySelector('.shows__ticket-container').appendChild(ticketWrap);

//STEP 5
function createShowElement(show) {
    let ticketWrap = document.createElement('div');
    let ticketItem = document.createElement('ul');
    let date = document.createElement('li');
    let venue = document.createElement('li');
    let loc = document.createElement('li');

    // STEP 2
    ticketWrap.classList.add('ticket__wrap');
    ticketItem.classList.add('ticket__item');
    date.classList.add('ticket__data');
    venue.classList.add('ticket__data');
    loc.classList.add('ticket__data');

    // STEP 3 
    date.innerHTML = show.date;
    venue.innerHTML = show.venue;
    loc.innerHTML = show.location;


    //STEP 4
    ticketItem.appendChild(date);
    ticketItem.appendChild(venue);
    ticketItem.appendChild(loc);
    ticketWrap.appendChild(ticketItem);
    document.querySelector('.shows__ticket-container').appendChild(ticketWrap);
}



const bttn = document.querySelectorAll('button');

let shows = [
    {date: 'Mon Dec 17 2018', venue: 'Ronald Lane', location: 'San Fransisco, CA', button: bttn},
    {date: 'Tue Jul 18 2019', venue: 'Pier 3 East', location: 'San Fransisco, CA', button: bttn},
    {date: 'Fri Jul 22 2019', venue: 'View Loungue', location: 'San Fransisco, CA', button: bttn},
    {date: 'Sat Aug 12 2019', venue: 'Hyatt Agency', location: 'San Fransisco, CA', button: bttn},
    {date: 'Fri Sep 05 2019', venue: 'Moscow Center', location: 'San Fransisco, CA', button: bttn},
    {date: 'Wed Aug 11 2019', venue: 'Pres Club', location: 'San Fransisco, CA', button: bttn}
];

shows.forEach(function(item) {
    createShowElement(item);
});




// let ticketWrap = document.querySelectorAll('li');
// let content = document.ticketWrap.innerHTML();

// for (const show of shows) {
//     console.log(show)
//     for (key in show) {
//     let content = shows[key];
//     console.log(content);
//     }
// }