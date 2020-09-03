import data from "../DATA.json";

console.log("data");
console.log(data.restaurants[0]);

let Card = "";
let i = 0;
while (i < 3) {
  console.log(data.restaurants[i].id);
  //   let data = data.restaurants[i];
  Card += `
          <li class="cards_item">
              <div class="card">
                  <div class="card_image">
                      <img src="${data.restaurants[i].pictureId}" alt="resto-img"/>
                  </div>
                  <div class="card_content">
                      <h4 class="card_title">Rating: ${data.restaurants[i].rating}</h4>
                      <h2 class="card_title">${data.restaurants[i].name} - ${data.restaurants[i].city}</h2>
                      <p class="card_text">${data.restaurants[i].description}</p>
                      <button class="btn card_btn">Read More</button>
                  </div>
              </div>
          </li>
  `;
  document.getElementById("cards").innerHTML = Card;
  i++;
}
