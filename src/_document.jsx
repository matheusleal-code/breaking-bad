import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,400&display=swap" rel="stylesheet">
              <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap" rel="stylesheet">
                  <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>

                <body>
                  <Main />
                  <NextScript />
                </body>
      </Html>
    )
  }
}