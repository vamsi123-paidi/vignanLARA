document.addEventListener('DOMContentLoaded', () => {
//     We use the DOMContentLoaded event in JavaScript to make sure the HTML content of a web page has been completely loaded and parsed before we try to run our scripts that interact with the DOM (Document Object Model).

// Why it's important:
// If your JavaScript tries to access elements (like buttons, inputs, or divs) before they are fully loaded, it might result in errors like null or undefined because those elements don’t exist in the DOM yet.

    const url = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2IzYzJkNDU4NWQxYTQxYTc4OTlkYzc5MWI2MjI4ZSIsIm5iZiI6MTcyNDMwMzMzMy44ODIsInN1YiI6IjY2YzZjN2U1YjhjYjMxMTBhODE1ODViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjX8nkbIhLz_3-uqcDn4du96gxOjaNi5umEmK6uPOzY'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            display(data.results, "trending")
        })
        .catch(err => console.error('error:' + err));
})

const mainContainer = document.getElementById('mainContainer')
const mainContainerTitle = document.getElementById('mainContainerTitle')
const baseUrl = 'https://image.tmdb.org/t/p/'
const size = 'w500'
async function display(data, endpoint) {
    mainContainerTitle.innerHTML = ""
    mainContainer.innerHTML = ""
    mainContainerTitle.innerHTML = `<h2>${endpoint.toUpperCase()}</h2>`
    data.forEach((item) => {
        genreFun(item).then(genre => {
            // console.log(genre)
            let movieCard = {
                id: item.id,
                title: item.title || item.name,
                poster_path: item.poster_path,
                genre: genre,
                release_date: item.release_date,
                vote_average: item.vote_average
            }
            // console.log(movieCard)
            let card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <div class="imageDiv">
                    <img src=${baseUrl}${size}${item.poster_path} class="card-img-top2" alt="...">
                </div>
                <div class="card-body">
                    <div class='titleDiv'>
                        <h5 class="card-title">${item.title || item.name}</h5>
                    </div>
                    <p>${genre}</p>
                    <p><strong>Released on : </strong>${item.release_date}</p>
                    <p class = "rating"><strong>Rating : </strong>${item.vote_average.toFixed(1)}/10(${item.vote_count})</p>
                    <div class="d-flex justify-content-between">
                        <a href=https://www.themoviedb.org/movie/${item.id} class="btn btn-primary">Know More</a>
                        <button class = "addFavButton btn btn-primary">Add ❤️</button>
                    </div>
                </div>
            `
            if (item.vote_average == 0 || item.vote_average == null) {
                card.querySelector(".rating").style.display = "none"
            }
            if (item.poster_path != null) {
                mainContainer.appendChild(card)
            }

            console.log(movieCard)
            card.querySelector(".addFavButton").addEventListener("click", () => addFavouritesFun(movieCard))
        })

    })
}

//popular movies function calling
document.getElementById("popularButton").addEventListener("click", () => moviesMore("popular"))

//upcoming movies function calling
document.getElementById("nowPlayingButton").addEventListener("click", () => moviesMore("now_playing"))

//now-playing movies function calling
document.getElementById("upcomingButton").addEventListener("click", () => moviesMore("upcoming"))

//upcoming movies function calling
document.getElementById("topRatedButton").addEventListener("click", () => moviesMore("top_rated"))


//popular, nowplaying, upcoming function
async function moviesMore(endpoint) {
    // console.log(mainContainer)
    console.log(endpoint)
    const firstPageUrl = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2IzYzJkNDU4NWQxYTQxYTc4OTlkYzc5MWI2MjI4ZSIsIm5iZiI6MTcyNDMwMzMzMy44ODIsInN1YiI6IjY2YzZjN2U1YjhjYjMxMTBhODE1ODViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjX8nkbIhLz_3-uqcDn4du96gxOjaNi5umEmK6uPOzY'
        }
    };

    try {
        const firstPageResponse = await fetch(firstPageUrl, options)
        const firstPageData = await firstPageResponse.json()

        const totalPages = firstPageData.total_pages;
        console.log(totalPages)

        const pagePromises = [];
        for (let page = 1; page <= 3; page++) {
            const url = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${page}`
            pagePromises.push(fetch(url, options).then(res => res.json()));
        }

        const allPagesData = await Promise.all(pagePromises);

        const allResults = allPagesData.flatMap(data => data.results);
//         We use flatMap() in JavaScript when we need to:

//  Map each element of an array to a new value
//  Then flatten the result by one level

        display(allResults, endpoint);
    } catch (error) {
        console.log('error', error)
    }
}


//searching movies
document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault()
    let movieName = document.getElementById("inputMovie").value
    // console.log(typeof movie)

    const firstPageUrl = `https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2IzYzJkNDU4NWQxYTQxYTc4OTlkYzc5MWI2MjI4ZSIsIm5iZiI6MTcyNDMwMzMzMy44ODIsInN1YiI6IjY2YzZjN2U1YjhjYjMxMTBhODE1ODViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjX8nkbIhLz_3-uqcDn4du96gxOjaNi5umEmK6uPOzY'
        }
    };

    try {
        const firstPageResponse = await fetch(firstPageUrl, options)
        const firstPageData = await firstPageResponse.json()

        const totalPages = firstPageData.total_pages;
        console.log(totalPages)

        const pagePromises = [];
        for (let page = 1; page <= 20; page++) {
            const url = `https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=false&language=en-US&page=${page}`
            pagePromises.push(fetch(url, options).then(res => res.json()));
        }

        const allPagesData = await Promise.all(pagePromises);

        const allResults = allPagesData.flatMap(data => data.results);

        display(allResults, `${movieName} | Search results`);
    } catch (error) {
        console.log('error', error)
    }

    // fetch(url, options)
    // .then(res => res.json())
    // .then(json => {
    //     display(json.results, `${movieName} | Search results`)
    //     console.log(json)
    // })
    // .catch(err => console.error('error:' + err));
})


//finding genre
async function genreFun(data) {
    let genreArr = data.genre_ids
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2IzYzJkNDU4NWQxYTQxYTc4OTlkYzc5MWI2MjI4ZSIsIm5iZiI6MTcyNDMwMzMzMy44ODIsInN1YiI6IjY2YzZjN2U1YjhjYjMxMTBhODE1ODViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KjX8nkbIhLz_3-uqcDn4du96gxOjaNi5umEmK6uPOzY'
        }
    };
    const res = await fetch(url, options);
    const genreData = await res.json();
        const genres = genreData.genres.filter(genre => genreArr.includes(genre.id)).map(genre => genre.name);


    return genres;
}


//adding cards to favourites
function addFavouritesFun(data) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || []
    // if(!Array.isArray(favs)){
    //     favs = []
    // }

    let exist = favs.some(item => item.id === data.id)
    // console.log(exist)
    if (!exist) {
        favs.push(data)
        localStorage.setItem("favorites", JSON.stringify(favs))
        alert(`${data.title} has been added to your favorites`)
    }
    else {
        alert(`${data.title} is already in your favorites`)
    }
}

//display favorites
function favoritesDisplay() {
    // document.getElementById("footerId").style.display = "none"
    let favsArr = JSON.parse(localStorage.getItem("favorites")) || []
    mainContainerTitle.innerHTML = "<h2>Favorites</>"
    mainContainer.innerHTML = ""
    if (favsArr.length == 0) {
        mainContainer.innerHTML = `<h5>No Favorites added yet</h5>`
    }
    else {
        favsArr.forEach((item) => {
            let card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = `
                <div class="imageDiv">
                    <img src=${baseUrl}${size}${item.poster_path} class="card-img-top2" alt="...">
                </div>
                <div class="card-body">
                    <div class='titleDiv'>
                        <h5 class="card-title">${item.title}</h5>
                    </div>
                    <p>${item.genre}</p>
                    <p><strong>Released on : </strong>${item.release_date}</p>
                    <p class = "rating"><strong>Rating : </strong>${item.vote_average.toFixed(1)}/10(${item.vote_count}) people</p>
                    <div class="d-flex justify-content-between">
                        <a href=https://www.themoviedb.org/movie/${item.id} class="btn btn-primary">Know More</a>
                        <button class = "deleteButton btn btn-danger">Remove ❌</button>
                    </div>
                </div>
            `
            mainContainer.appendChild(card)
            card.querySelector(".deleteButton").addEventListener("click", () => {
                card.remove()
                let index = favsArr.indexOf(item)
                if (index !== -1) {
                    favsArr.splice(index, 1)
                }
                if (favsArr.length == 0) {
                    mainContainer.innerHTML = `<h5>No Favorites added yet</h5>`
                }
                localStorage.setItem("favorites", JSON.stringify(favsArr))
            })
        })
    }
}

//calling the favorites display function
document.getElementById("favoritesButton").addEventListener("click", favoritesDisplay)



//collapsing the navbar list 
$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // $('a.nav-link').on('click', function(event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         var hash = this.hash;

    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
    //         }, 100, function(){
    //             window.location.hash = hash - $('.navbar').outerHeight();
    //         });
    //     }
    // });
});