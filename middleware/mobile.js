const isLogin = false

export default function (context) {
  // eslint-disable-next-line no-console
  console.log('[middleware]', Object.keys(context))

  const userAgent = context?.req?.headers['user-agent'] || navigator?.userAgent

  if (/mobile/i.test(userAgent)) {
    context.isMobile = true
  } else {
    context.isMobile = false
  }

  if (isLogin) {
    context.redirect('/login')
  }
}
