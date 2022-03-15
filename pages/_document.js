import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html dir="rtl" lang="fa-IR">
        <Head>
        <link rel="preload" as="font" />
        <script src="[ckeditor-build-path]/ckeditor.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/example.png" />
        <meta name="theme-color" content="#0d2040"/>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
