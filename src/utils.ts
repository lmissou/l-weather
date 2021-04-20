const numToDay = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export function isEmpty(val?: any) {
  return (val == undefined || val == null)
}

export function dateToDay(dateStr: string | number) {
  if(isEmpty(dateStr)) dateStr = ''
  return numToDay[(new Date(dateStr)).getDay()]
}
