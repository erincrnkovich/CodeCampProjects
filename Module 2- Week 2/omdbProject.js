"use strict";

// import axios from "axios";


   async function searchMovie() {
    try {
        const movieTitle = document.getElementById("searchInput").value;
        const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=74888f3c`;
        const response = await axios.get(url);

        const data = response.data;

        const movieInfo = document.getElementById("movieInfo");
        movieInfo.innerHTML = 
        `<h2>${data.Title}</h2>
        <p>${data.Plot}</p>`

        // This code is from before we learned try/catch;
        // fetch(url)
        // .then((response) => {
        //     if(!response.ok) {
        //         alert("Movie not found, or API is down.")
        //     }
        //     return response.json();
        // })
        // .then((data) => {
           
        // })
    } catch(error) {
        alert("Whoops! Looks like something went wrong:" + error);
} 
}

document.getElementById("searchButton").addEventListener("click", searchMovie);