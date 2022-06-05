import Localcahce from './Localcahce'

export const mapbreadcrumb = (s1: string, s2: string): string[] => {
  const url1 = '/main/' + s1
  const url2 = url1 + '/' + s2
  const breadcrumbs: string[] = []
  if (Localcahce.getitem('usermenus')) {
    Localcahce.getitem('usermenus').forEach((item: any) => {
      if (item.url === url1) {
        breadcrumbs.push(item.name)
        if (item.children) {
          item.children.forEach((key: any) => {
            if (key.url === url2) {
              breadcrumbs.push(key.name)
            }
          })
        }
      }
    })
  }
  return breadcrumbs
}
