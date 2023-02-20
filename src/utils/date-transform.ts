export const useDateTransform = (date: string) =>

  new Date(date).toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  ;
