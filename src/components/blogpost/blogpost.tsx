import { Icon } from '@iconify/react';
import Link from 'next/link'

const picture = [
  "https://assets.beartai.com/uploads/2022/06/M2-1.jpg",
  "https://assets.beartai.com/uploads/2022/06/Ventura.jpg",
  "https://assets.beartai.com/uploads/2022/06/M2.jpg",
  "https://assets.beartai.com/uploads/2022/05/10iv-1280x720-1.jpg",
  "https://assets.beartai.com/uploads/2022/05/Pixel-6a.jpg",
  "https://assets.beartai.com/uploads/2022/05/Pixel-Watch.jpg",
  "",
]

const header = [
  "สื่อนอกตั้งข้อสังเกต GPU ใหม่ใน Apple M2 ไม่ได้น่าตื่นเต้นขนาดนั้น",
  "macOS 13 Ventura ใช้ iPhone แทนเว็บแคม, ระบบความปลอดภัยใหม่",
  "เปิดตัวชิป Apple M2 ชิป Silicon รุ่นล่าสุด กราฟิกแรงกว่า M1 ถึง 35%!",
  "เปิดตัว Sony Xperia 10 IV มือถือราคาประหยัด แต่ไม่กั๊กความบันเทิง",
  "Google Pixel 6a ที่เก่าเวลาเดิม เพิ่มเติมสเปกเรือธงในงบ 15,000 บาท!",
  "Pixel Watch เผยโฉมนาฬิกาอัจฉริยะตัวแรกจาก Google ดีไซน์เรียบหรู",
  "",
]

const ref = [
  "https://www.beartai.com/news/itnews/1071590",
  "https://www.beartai.com/news/itnews/1069917",
  "https://www.beartai.com/news/itnews/1069833",
  "https://www.beartai.com/news/mobilenews/1045921",
  "https://www.beartai.com/news/mobilenews/1045239",
  "https://www.beartai.com/news/itnews/1045221",
  "",
]

function blogpost () {
  return ( 
  <div className="font-th justify-center w-full items-center flex flex-col relative gap-20 px-20 py-20 ">

    <div className="highlight w-70">
      <div className="text-white ">
        MY BLOG..<span className="text-white animate-ping font-secondary">I</span>
      </div>
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">

      <a href = {ref[0]} className="postcard">
        <div>
          <div><img src={picture[0]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[0]}
          </div>
        </div>
      </a>

      <a href = {ref[1]} className="postcard">
        <div>
          <div><img src={picture[1]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[1]}
          </div>
        </div>
      </a>

      <a href = {ref[2]} className="postcard">
        <div>
          <div><img src={picture[2]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[2]}
          </div>
        </div>
      </a>

      <a href = {ref[3]} className="postcard">
        <div>
          <div><img src={picture[3]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[3]}
          </div>
        </div>
      </a>

      <a href = {ref[4]} className="postcard">
        <div>
          <div><img src={picture[4]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[4]}
          </div>
        </div>
      </a>

      <a href = {ref[5]} className="postcard">
        <div>
          <div><img src={picture[5]} alt="" className="h-64 object-cover" /></div>

          <div className="p-5 text-lg font-bold">
            <p className="pb-1 font-light text-sm text-gray-400">posted on <span className="text-blue-500">beartai</span> </p>
            {header[5]}
          </div>
        </div>
      </a>

    </div>
    
    <div className = "btn-secondary flex items-center gap-2">
      <Icon icon="fluent:more-circle-32-filled" />
      <div className=""><Link href="https://www.beartai.com/author/imswiftie">อ่านเพิ่มเติมที่ beartai</Link></div>
    </div>
  </div> );
}

export default blogpost ;