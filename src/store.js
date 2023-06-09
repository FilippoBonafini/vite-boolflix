import { reactive } from "vue";

export const store = reactive({

    apiKey: '47ff9260259d0b312d6ffdda6a3c8e73',

    // BISOGNO AGGIUNGERE LA PARTE FINALE PER OTTENERE L'IMG 
    linkImgSmall: 'http://image.tmdb.org/t/p/w400',
    linkImgMed: 'http://image.tmdb.org/t/p/w700',
    linkImgBig: 'http://image.tmdb.org/t/p/w1000',

    searchKey: null,
    language: null,

    moreInfoMenu: false,
    moreInfoID: {
        id: null,
        title: null,
        originalTitle: null,
        description: null,
        lang: null,
        duration: null,
        actorslist: [],
        img: null,
        vote: null,
        gen: null
    },
    languages: [
        'it',
        'en',
        'es',
        'ja',
        'fr',
        'pl',
        'pt'
    ],

    categories: [

        {
            categoryName: 'Film',
            api: 'https://api.themoviedb.org/3/search/movie',
            list: [],
            loading: null,
            generApi: 'https://api.themoviedb.org/3/genre/movie/list',
            gener: [],
            reference: {
                title: 'title',
                language: 'original_language',
                description: 'overview',
                vote: 'vote_average',
                coverUrl: 'backdrop_path',
                posterUrl: 'poster_path',
                originalTitle: 'original_title',
                popularity: 'popularity',
                data: 'release_date',
            }

        },
        {
            categoryName: 'Tv Series',
            api: 'https://api.themoviedb.org/3/search/tv',
            list: [],
            loading: null,
            generApi: 'https://api.themoviedb.org/3/genre/tv/list',
            gener: [],
            reference: {
                title: 'name',
                originalTitle: 'original_name',
                language: 'original_language',
                popularity: 'popularity',
                description: 'overview',
                vote: 'vote_average',
                data: 'release_date',
                coverUrl: 'backdrop_path',
                posterUrl: 'poster_path',
                originalTitle: 'original_name',
                popularity: 'popularity',
                data: 'release_date',

            },

        }

    ],








})