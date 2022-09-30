function hello(message) {
  // eslint-disable-next-line no-console
  console.log('[hello function] global', message)
}

export default function (ctx, inject) {
  inject('abc', hello)
}
