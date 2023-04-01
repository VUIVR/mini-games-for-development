<<<<<<< HEAD
export default defineNuxtConfig({
    title: 'Mini-games for development',
    app: {
        head: {
            meta: [
                {'charset': 'utf-8'},
                {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
                {"name": "language", 'content': 'RU'},
                {'name': 'descriptions', 'content': 'Развивающие мини игры для маленьких детей. Игры расчитаны на тренировку внимания, памяти, знаний об окружающей среде, а также знанию цифр и алфавита.'},
                {'name': 'author', 'content':"asostrovskiy.ru"}
            ],
            title: 'Развивающие мини-игры'
        },
    },

    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
        '@nuxt/devtools'
    ],
    css: [
        '@/assets/styles/normalize.css',
=======
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    title: 'Mini-games for development',
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt'
>>>>>>> 12f1d7e (start project)
    ]
})
