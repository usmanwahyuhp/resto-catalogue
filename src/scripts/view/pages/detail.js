/* eslint-disable linebreak-style */
/* eslint-disable indent */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';

const Detail = {
    async render() {
        return `
            <h2>Detail</h2>
        `;
    },
    async afterRender() {
        // akan dipanggil setelah render
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await RestaurantSource.detailRestaurant(url.id);
        console.log(detail);
    },
};

export default Detail;
