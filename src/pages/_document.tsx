import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
          <Head>
          <link 
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"  
            rel="stylesheet"/>

          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" 
            rel="stylesheet">
          </link>

          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700&display=swap" 
            rel="stylesheet">

          </link>

          <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700&display=swap" 
            rel="stylesheet">

          </link>

          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
