export function clean(
  template: TemplateStringsArray,
  ...templateElements: any[]
) {
  return template
    .reduce((sum, n, index) => {
      const templateElement = templateElements[index]
      if (typeof templateElement === 'string') {
        return `${sum}${n}${templateElement}`
      }
      return `${sum}${n}`
    }, '')
    .replace(/\s\s+/g, ' ')
    .trim()
}
