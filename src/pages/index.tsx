import Head from 'next/head'
import * as React from 'react';

import Banner from '../components/banner/banner'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'



export default function HomePage() {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen justify-between">
    <Head>
      <title>Home - ZWIFT.DEV</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Header/>
      <Banner></Banner>
      <Footer></Footer>
    </div>
    
  );
}
