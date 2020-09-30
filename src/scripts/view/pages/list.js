/* eslint-disable linebreak-style */
/* eslint-disable indent */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Restaurants List</h2>
            <div id="lists" class="lists">
            <p id="nama"></p>
            </div>
        </div>
        `;
    },
    async afterRender() {
        const listsContainer = document.querySelector('#nama');
        // akan dipanggil setelah render
        try {
            const lists = await RestaurantSource.list();
            console.log(lists);
            lists.forEach((list) => {
                console.log(list.name);
                listsContainer.innerHTML += createRestaurantItemTemplate(list.name);
            });
        } catch (err) {
            console.log(err);
        }
    },
};

export default List;
