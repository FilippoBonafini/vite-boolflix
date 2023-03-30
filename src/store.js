import { reactive } from "vue";

export const store = reactive({
    apiKey: '47ff9260259d0b312d6ffdda6a3c8e73',

    apiFilm: 'https://api.themoviedb.org/3/search/movie',
    filmList: [],

    apiTvSeries: 'https://api.themoviedb.org/3/search/tv',
    tvSeriesList: [],

    searchKey: null,
    language: 'it-IT',

    // BISOGNO AGGIUNGERE LA PARTE FINALE PER OTTENERE L'IMG 
    linkImgSmall: 'http://image.tmdb.org/t/p/w400',
    linkImgMed: 'http://image.tmdb.org/t/p/w700',
    linkImgBig: 'http://image.tmdb.org/t/p/w1000',

})