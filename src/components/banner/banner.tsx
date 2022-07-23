import Link from "next/link";

function banner () {
    return ( 
  <div className = "font-th w-full h-full relative flex flex-col lg:flex-row items-center justify-center text-center gap-10 p-5">

    <div className = "lg:py-18 py-10 flex flex-col items-center text-center bg-white rounded-3xl">
      <div className="animate-text font-th font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-500 to-blue-600 text-9xl">สวัสดี!</div>
      <div className = "bg-gradient-to-br w-72 text-center from-cyan-400 to-blue-500 rounded-3xl font-prompt font-md text-white text-lg">#BEARTAI #YWC18 #SSP74</div>

      <div className = "pt-10">
        <div className = "btn btn--secondary text-blue-500"><Link href="about">เกี่ยวกับ</Link></div>
        </div>
    </div>

    <div className = "flex relative h-80 w-80">
      <img className="ratio-square rounded-3xl transform hover:-translate-y-2 transition-transform shadow-cyan-200 shadow-xl hover:shadow-3xl hover:shadow-cyan-500" src="https://scontent-kut2-1.xx.fbcdn.net/v/t1.6435-9/116893685_3227149454028949_1695802064325848054_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGyXnRyq3Ki7e2KJcmB9YjUSXvTEzcvlwlJe9MTNy-XCYdYUwdvsa3auVW4skLCy5lcgbUItbttPWY0F_WsYPvy&_nc_ohc=Xvj3nEbSWCIAX-jOoxm&_nc_pt=1&_nc_ht=scontent-kut2-1.xx&oh=00_AT_EVjaqtJhvTiMeC-MGUfN-CLoiC5B4yasCtW3s3bjU0A&oe=63004FFE" alt="" />
    </div>
  </div> );
}

export default banner ;