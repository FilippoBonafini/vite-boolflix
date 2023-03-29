import { reactive } from "vue";

export const store = reactive({
    apiKey: '47ff9260259d0b312d6ffdda6a3c8e73',

    apiFilm: 'https://api.themoviedb.org/3/search/movie',
    filmList: [],

    apiTvSeries: 'https://api.themoviedb.org/3/search/tv',
    tvSeriesList: [],

    searchKey: null,
    language: 'it-IT',

    langToCountry: {
        en: 'us', // inglese
        zh: 'cn', // cinese mandarino
        es: 'es', // spagnolo
        hi: 'in', // hindi
        fr: 'fr', // francese
        ru: 'ru', // russo
        ar: 'sa', // arabo
        pt: 'br', // portoghese
        de: 'de', // tedesco
        ja: 'jp', // giapponese
        it: 'it', // italiano
        ko: 'kr', // coreano
        pl: 'pl', // polacco
        tr: 'tr', // turco
        nl: 'nl', // olandese
        sv: 'se', // svedese
        da: 'dk', // danese
        no: 'no', // norvegese
        fi: 'fi', // finlandese
        el: 'gr', // greco
        he: 'il', // ebraico
        hu: 'hu', // ungherese
        cs: 'cz', // ceco
        id: 'id', // indonesiano
        th: 'th', // thailandese
        uk: 'ua', // ucraino
        ro: 'ro', // rumeno
        bg: 'bg', // bulgaro
        fa: 'ir', // persiano
    }

})