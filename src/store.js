import { reactive } from "vue";

export const store = reactive({
    apiKey: '47ff9260259d0b312d6ffdda6a3c8e73',

    apiFilm: 'https://api.themoviedb.org/3/search/movie',
    filmList: [],

    apiTvSeries: '',
    tvSeriesList: [],

    searchKey: null,
    language: 'it-IT'
})