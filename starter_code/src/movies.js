/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

    let copy = [...array]

    copy.sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year == b.year) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }
    })

    return copy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {

    let steveMovies = array.filter((eachMovie) => {
        return eachMovie.director == "Steven Spielberg" && eachMovie.genre.includes('Drama');
    })
    return steveMovies.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){

    let copy = [...array]
  
    copy.sort((a, b)=>{
  
    
    if (a.title > b.title) return 1 
    if (a.title < b.title) return -1 
    if (a.title == b.title) return 0
  
  
    
  })
  
  let titleArray = copy.map( (eachMovie) =>{
    return eachMovie.title
  })
  return titleArray.splice(0, 20);
  
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
