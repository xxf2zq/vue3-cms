import { App } from 'vue'
import {
  UserFilled,
  Iphone,
  Monitor,
  Goods,
  ChatLineRound,
  ArrowRight,
  Setting,
  Fold,
  Expand,
  CircleClose,
  Refresh,
  Search,
  Edit,
  Delete,
  FullScreen,
  WarningFilled
} from '@element-plus/icons-vue'

const component = [
  UserFilled,
  Iphone,
  Monitor,
  Goods,
  ChatLineRound,
  Setting,
  Fold,
  Expand,
  FullScreen,
  CircleClose,
  Refresh,
  Search,
  Edit,
  Delete,
  ArrowRight,
  WarningFilled
]
export default function registerElement(app: App): void {
  component.forEach((element) => {
    app.component(element.name, element)
  })
}
// 统一注册Icon图标
