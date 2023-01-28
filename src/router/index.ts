import { h, defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useStore } from '@/composables/useStore'

const { getProductById, getCatalogById } = useStore()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      redirect: () => 'home',
      meta: {
        breadcrumb: () =>
          h('div', {
            class:
              'w-[14px] h-[14px] bg-home bg-center bg-cover bg-no-repeat cursor-pointer',
            onClick: () => router.push({ name: 'home' })
          })
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/cat-:catalogId',
          meta: {
            breadcrumb: (route) =>
              defineAsyncComponent({
                loader: async () => {
                  const catalog = await getCatalogById(
                    route.params.catalogId as string
                  )
                  if (catalog === null)
                    throw new Error(
                      `could not find catalog id ${route.params.catalog}`
                    )
                  const render = () =>
                    h(
                      'div',
                      {
                        class: 'cursor-pointer text-blue-600 hover:underline',
                        onClick: () =>
                          router.push({
                            name: 'catalog',
                            params: { catalogId: route.params.catalogId }
                          })
                      },
                      catalog.label
                    )
                  return render
                },
                loadingComponent: () =>
                  h(
                    'div',
                    { class: 'bg-gray-200 animate-pulse' },
                    'Loading...'
                  ),
                errorComponent: () =>
                  h(
                    'div',
                    { class: 'bg-red-800 text-white' },
                    `Error while loading product id ${route.params.productId}`
                  )
              })
          },
          children: [
            {
              path: '',
              name: 'catalog',
              component: () => import('@/views/CatalogView.vue')
            },
            {
              path: 'prd-:productId',
              name: 'catalogProduct',
              component: () => import('@/views/ProductView.vue'),
              meta: {
                breadcrumb: (route) =>
                  defineAsyncComponent({
                    loader: async () => {
                      const product = await getProductById(
                        route.params.productId as string
                      )
                      if (product === null)
                        throw new Error(
                          `could not find product id ${route.params.productId}`
                        )
                      const render = () => h('div', {}, product.label)
                      return render
                    },
                    loadingComponent: () =>
                      h(
                        'div',
                        { class: 'bg-gray-200 animate-pulse' },
                        'Loading...'
                      ),
                    errorComponent: () =>
                      h(
                        'div',
                        { class: 'bg-red-800 text-white' },
                        `Error while loading product id ${route.params.productId}`
                      )
                  })
              }
            }
          ]
        },
        {
          path: '/prod/:id',
          name: 'product',
          component: () => import('@/views/ProductView.vue')
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
  ]
})
export default router
