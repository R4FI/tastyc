const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch(url) 
    .then(res=>res.json())
    .then(data=> searchResult(data.meals));
}


const searchResult = meals =>{
    const result = document.getElementById('search-result');
    meals.forEach(meal=> {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `<div class="card w-75">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0 , 300)}</p>
        </div>
      </div>`;
       result.appendChild(div); 
    })
}