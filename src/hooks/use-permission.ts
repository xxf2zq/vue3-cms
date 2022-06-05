import { usemystore } from '@/store'
export function usePermission(pageName: string, handleName: string) {
  const store = usemystore()
  const permissions = store.state.Loginstore.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions.find((item: string) => item.indexOf(verifyPermission))
}
