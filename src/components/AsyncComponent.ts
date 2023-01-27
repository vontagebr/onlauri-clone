import { h, defineAsyncComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default h(
  defineAsyncComponent({
    loader: async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
      return h(
        'div',
        {
          class: 'text-blue-600 hover:underline cursor-pointer',
          onClick: () => {
            const router = useRouter()
            const route = useRoute()
            console.log('CLICKED', route?.params, router)
            // router.push({ name: 'home' })
            /*
                          router.push({
                            name: 'catalog',
                            params: { catalogId: route.params.catalogId }
                          })
                          */
          }
        },
        'Hi there'
      )
    },
    loadingComponent: h('div', { class: 'bg-yellow-400' }, 'Loading...'),
    delay: 200,
    errorComponent: h(
      'div',
      { class: 'bg-red-400' },
      'esta demorando um pouco...'
    ),
    timeout: 3000
  })
)
