/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.title}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}" alt="${restaurant.title}" />
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;

const createRestaurantItemTemplate = (list) => `
  <p>${list}</p>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
