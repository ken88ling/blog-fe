import '../node_modules/nprogress/nprogress.css'
import React from 'react'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  return { pageProps }
}

export default App
