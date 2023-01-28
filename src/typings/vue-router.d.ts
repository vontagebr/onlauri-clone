export {}
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb: (route: RouteLocationNormalized) => VNode
  }
}
