import { ref, unref, computed } from 'vue'
import type { ICatalogLink, IProduct } from '@/types'

const logoUrl = ref(
  new URL('/images/onlauri-logo.png', import.meta.url).toString()
)

const headerCatalogs = ref<ICatalogLink[]>([
  { id: 'home', label: 'Home', to: { name: 'home' } },
  { id: 'summer2023', label: 'Verao 2023' },
  { id: 'novidades', label: 'Novidades' },
  { id: 'balada', label: 'Balada' },
  { id: 'roupas', label: 'Roupas' },
  { id: 'vestidosDeFesta', label: 'Vestidos de Festa' },
  { id: 'beachwear', label: 'Beachwear' },
  { id: 'acessorios', label: 'Acessorios' },
  { id: 'noprecinho', label: 'No precinho' },
  { id: 'outlet', label: 'Outlet', highlight: true }
])

const products = ref<IProduct[]>([
  {
    id: '1',
    label: 'Shorts Básico Cós Alto',
    images: ['img_2295_2.jpg'],
    price: 49.9,
    discount: 0.32
  },
  {
    id: '2',
    label: 'Calça Tela Aplicações Strass',
    images: ['img_0614_1_.jpg'],
    price: 289.9
  },
  {
    id: '3',
    label: 'Shorts Básico Cós Alto',
    images: ['img_1419_2.jpg'],
    price: 49.9
  },
  {
    id: '4',
    label: 'Vestido Longo Frente Única c/ Tiras Maxi Flores',
    images: ['whatsapp_image_2021-11-16_at_09.01.59_1.jpg'],
    price: 99.9
  },
  {
    id: '5',
    label: 'Vestido Midi Plissado Gola Aplicações',
    images: ['img_7115_3_.jpg'],
    price: 69.9
  },
  {
    id: '6',
    label: 'Saia Midi Chanfrada Elástico Tropicália Print',
    images: ['img_7792.jpg'],
    price: 159.9
  },
  {
    id: '7',
    label: 'Vestido Camisa Decote V Metálico',
    images: ['img_9142.jpg'],
    price: 139.9
  }
])

const getCatalog = (id: string) => {
  const section =
    unref(headerCatalogs).find(({ id: _id }) => _id === id) ?? null
  if (section === null) throw new Error('could not find section')
  return { ...section, products: unref(products) }
}

const useStore = () => {
  return {
    logoUrl: computed(() => unref(logoUrl)),
    headerCatalogs: computed(() => unref(headerCatalogs)),
    products: computed(() => unref(products)),
    getCatalog
  }
}

export { useStore }
