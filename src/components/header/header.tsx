import Link from 'next/link'

function header() {
  return ( 
  
  <header className="flex w-full bg-white justify-between items-center h-16 px-10 text-black">
    <div className="text-3xl font-header font-extrabold">
    <Link href="/">
      ZWIFT
    </Link><span className="text-sm text-blue-500">.DEV</span>
    </div>

    <ul className = "flex font-extrabold text-md items-center gap-2 text-black">
      <div className="hover:bg-blue-500 hover:text-white rounded-2xl p-2 transition-colors"><Link href="/about">ABOUT</Link></div>
      <div className="hover:bg-blue-500 hover:text-white rounded-2xl p-2 transition-colors"><Link href="/blog">BLOG</Link></div>
    </ul>

  </header> );
}

export default header;