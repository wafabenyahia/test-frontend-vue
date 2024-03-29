import { createStore } from 'vuex'
import userModule from '@/store/user'
import entrepriseModule from '@/store/entreprise'
import responsableModule from '@/store/responsable'
import pdlModule from '@/store/pdl'
export default createStore(
  {
    modules: {
      userModule,
      entrepriseModule,
      responsableModule,
      pdlModule
    }
  }
)
