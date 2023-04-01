

export default defineNuxtConfig({
    title: 'Mini-games for development',
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: "language", content: 'ru'},
                {hid: 'description', name: 'descriptions', content: 'Развивающие мини игры для маленьких детей. Игры расчитаны на тренировку внимания, памяти, знаний об окружающей среде, а также знанию цифр и алфавита.'},
                {name: 'author', content:"asostrovskiy.ru"}
            ],
            title: 'Развивающие мини-игры'
        },
    },
    css: [
        '@/assets/styles/normalize.css'
    ],
    typescript: {
        strict: true
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
        '@nuxt/devtools'
    ],
})
