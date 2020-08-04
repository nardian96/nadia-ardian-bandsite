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
    ticketItem.classList.add('ticket__item');
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

//FUNCTION TO APPEND API KEY TO EACH REQUEST URL
function appendKey(url) {
    let apiURL = `${url}?api_key=${apiKey}`
    console.log(apiURL)
    return apiURL
}

//GET SHOWS DATA FROM WEB API
const apiRegister = 'https://project-1-api.herokuapp.com/register'
let apiKey = '5a9e3f6a-a4c2-4a7e-8a3a-3b40ca07c71f'
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

