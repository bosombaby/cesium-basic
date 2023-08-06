import { createPinia } from 'pinia'

import useCesiumStore from './modules/globalCesium'

const store = createPinia()

export function registerStore(app) {
    app.use(store)
}

export { useCesiumStore }