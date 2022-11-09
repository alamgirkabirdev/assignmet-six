/*
API Links
Phone Search
URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

Example: https://openapi.programming-hero.com/api/phones?search=iphone

Phone detail url:
URL Format: https://openapi.programming-hero.com/api/phone/${id}

*/


const searchMobile = () => {
    const searchMobile = document.getElementById('search-field');
    const searchText = searchMobile.value;
    // console.log(searchText);
    // clear data
    searchMobile.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayShowPhone(data.data))
}
// function display(data){
// const twintyData = data.slice(0,20);
// console.log(twintyData)
// }

const displayShowPhone = data => {
    const searchResult = document.getElementById('search-result');
    data.slice(0,20).forEach(data => {
        console.log(data)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h2 class="card-title">${data.brand}</h2>
                  <h5 class="card-title">${data.phone_name}</h5>
                  <h5 class="card-title">${data.slug}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
