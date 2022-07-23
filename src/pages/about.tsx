import Head from 'next/head'
import * as React from 'react';

import Card from '../components/card/card'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Info from '../components/info/info'


function AboutPage() {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  
  return ( 
  <div className="">
    <Head>
      <title>About - ZWIFT.DEV</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    <Card></Card>
    <Info></Info>
    <Footer></Footer>
  </div> );
}

export default AboutPage;