export {}
import type { VNode } from 'vue'
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb: (route: RouteLocationNormalized) => string | VNode
  }
}
