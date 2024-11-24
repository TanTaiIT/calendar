import { defineComponent} from 'vue'
export type routeItemType = {
  path: string,
  name: string,
  component: ReturnType<typeof defineComponent>
}
