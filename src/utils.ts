const numToDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export function isEmpty(val?: any) {
  return (val == undefined || val == null)
}

export function dateToDay(date?: string | number) {
  if(isEmpty(date)) date = ''
  return numToDay[(new Date(date)).getDay()]
}
