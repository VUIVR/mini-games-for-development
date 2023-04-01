<<<<<<< HEAD
import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment() {
            // `this` is the store instance
            this.counter++
        },
    },
})
=======
// import { defineStore } from 'pinia'
// export const useMainStore = defineStore('main', {
//     state: () => ({
//         counter: 0,
//     }),
//     actions: {
//         increment() {
//             // `this` is the store instance
//             this.counter++
//         },
//     },
// })
>>>>>>> 12f1d7e (start project)
