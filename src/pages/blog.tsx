import Head from 'next/head'
import * as React from 'react';

import Blogpost from '../components/blogpost/blogpost'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

function Contact () {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;

  }
  return ( 
  <div className="bg-gradient-to-tr from-blue-500 to-blue-800">
    <Head>
      <title>Blog - ZWIFT.DEV</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    <Blogpost></Blogpost>
    <Footer></Footer>
  </div> );
}

export default Contact ;