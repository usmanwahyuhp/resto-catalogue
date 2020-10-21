import FavoriteMovieIdb from '../data/favouriteresto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';

const LikeButtonInitiator = {
    async init({
        likeButtonContainer,
        detail,
        menu,
        food,
        comment,
    }) {
        this._likeButtonContainer = likeButtonContainer;
        this._movie = detail;
        this._menu = menu;
        this._food = food;
        this._comment = comment;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._movie.restaurant;

        if (await this._isMovieExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isMovieExist(id) {
        const movie = await FavoriteMovieIdb.getMovie(id);
        return !!movie;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteMovieIdb.putMovie(this._movie.restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteMovieIdb.deleteMovie(this._movie.restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;
