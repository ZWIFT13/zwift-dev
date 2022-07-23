
const picture = [
  "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/128520473_3582286348515256_8751835296814235383_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEgnDiMOpegt8rMFQeXiPlGNYvVTh9ATo81i9VOH0BOj-482U0xRcHKghiU_KPNXJIqA7ASaVAoRrg98mIPe2cY&_nc_ohc=_4ll60Xr9ZsAX_nTLhg&_nc_oc=AQlKIh6u2tHJPtJ9KZlSmQCXdYIVjaA-uYPfFMS5QGd91U8AS2RZaFsONvEDEpSVPdRaTaKU-WB58YR_MKUP6Uos&tn=1o4NWmhJP-nvp2e4&_nc_pt=1&_nc_ht=scontent.fbkk2-6.fna&oh=00_AT8_MCN4igFYNTXBQUN-npFpLbPWFHFjmy7fv3REPbq5_A&oe=6300ABB4",
  "https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.6435-9/125113710_3540021076075117_8637595112162531724_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFmOX-wVUhUf4XjQeAjj88rlK8nLrH_3feUrycusf_d91SSBXso7JmkJUCJ6-jhe1MomRzsZUAurpvGKVA3kNIy&_nc_ohc=S_6_7GIz3gMAX_I--Zu&_nc_pt=1&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT_Th9Kof8dK7AP9rJ9ssqKF9D27NX4SsMf3b9WGLg-zTA&oe=62FFF521",
  "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/83604582_2755416264535606_6194663736549048320_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEpTIXQ14VHLF4A7a_0z8KXaM1qJ4kCAqNozWoniQICo1E81QoPZ7kC-l8bCE-v7IjxEUr93MQKZGCtQxWyLT0w&_nc_ohc=AS7QCIk2lUkAX-25EYk&_nc_pt=1&_nc_ht=scontent.fbkk2-6.fna&oh=00_AT-uh5KRa-q8Y7hKx93qGAo8tH6m_9Q2_z1CebOj3Ily2A&oe=62FFA8D1",
  "https://scontent.fbkk2-6.fna.fbcdn.net/v/t39.30808-6/242367979_4405405919536624_3444214724853781670_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGis_x03oBFlkRIIiPwzbRBSwxJPBnbLOVLDEk8Gdss5VLTvd_qSDqVYoBfxejBeJC2TN-M-kuD8MwwvP2bSXms&_nc_ohc=SmXF_dFWz5YAX8SKdcH&tn=1o4NWmhJP-nvp2e4&_nc_pt=1&_nc_ht=scontent.fbkk2-6.fna&oh=00_AT8sVgUoqIuqbhSrYQhMmZMEC9d66W94qoSqDj-_nnt-jg&oe=62DFD6A3"
]
const textInfoDevENG =[
  "In a good old day, I used to be a kid who love seeing an update from CyanogenMod and lots of Android's custom rom. I have a lot of passion for System UI Designing. Currently working at Show No Limit Co., Ltd. as a Front-End Developer."
  ]
const textInfoDevTH =[
  "เมื่อก่อนเป็นเด็กที่หลงใหลใน Custom Rom ของ Android มาก ๆ ชื่นชอบดีไซน์ System UI ที่ออกมาใหม่เรื่อย ๆ ตั้งแต่สมัย CyanogenMod โตมาจึงชื่นชอบงานด้านดีไซน์เป็นพิเศษ ปัจจุบันเป็น Front-End Developer อยู่ที่ Show No Limit Co., Ltd."
  ]
const textInfoContENG =[
  "Since I have a lot of love for gadgets and smartphones, I started to be a Content Writer when I was 16, Now I'm working as a freelance Content Writer for IHAVECPU and #beartai."
  ]
const textInfoContTH =[
  "เป็นคนที่ชื่นชอบแก็ดเจต และสมาร์ตโฟนมาตั้งแต่เด็ก เลยสนใจ และเริ่มมาเป็นนักเขียนคอนเทนต์ตั้งแต่อายุ 16 ปัจจุบันเป็นนักเขียนฟรีแลนซ์ให้กับ #beartai และ iHAVECPU"
  ]

function card() {

  return ( 
  <div className="font-th py-52 xl:py-60 lg:py-96 justify-center w-full items-center flex flex-col xl:flex-row relative gap-40 ">

    <div>
      <div className="w-96 highlight border-blue-200">
        WHO AM I?..<span className="animate-ping font-secondary">I</span>
      </div>
      <div className="font-secondary px-3 py-1">#ZWIFT #SWIFFY</div>
    </div>

    <div className="grid grid-cols-1 relative h-full lg:grid-cols-2 gap-10 justify-middle">

    <div className="cardM bg-gradient-to-tr from-transparent to-cyan-500 shadow-2xl shadow-cyan-500 hover:shadow-cyan-500 ">
        <div className="bg-black bg-opacity-60">
          <img className="object-cover mix-blend-overlay" src={picture[0]} alt="" />
        </div>

        <div className="absolute popup">
          <div className="font-primary font-extrabold text-xl pt-4 text-start px-5 text-white flex flex-col">
            DEVELOPER <span className="text-xs font-light">#BEARTAICRAFT</span> 
          </div>
          <div className="flex flex-col h-48 justify-between">
            <div className="text-left text-lg font-th font-light text-white pt-5 px-5 h-40 place-content-center">
            {textInfoDevTH}
            </div>
          </div>

          <div className = "py-5 text-end px-5">
              <button className="btn-secondary hover:text-cyan-500">เพิ่มเติม</button>
          </div>
        </div>

    </div>


    <div className="cardM bg-gradient-to-tr from-transparent to-orange-500 shadow-2xl shadow-orange-500 hover:shadow-orange-500">
        <div className="bg-black bg-opacity-60">
          <img className="object-cover mix-blend-overlay" src={picture[1]} alt="" />
        </div>

        <div className="absolute popup">
          <div className="font-primary font-extrabold text-xl pt-4 text-start px-5 text-white flex flex-col">
            CONTENT WRITER <span className="text-xs font-light">#YWC18 #BEARTAI #iHAVECPU</span> 
          </div>
          <div className="flex flex-col h-48 justify-between">
            <div className="text-left text-lg font-th font-light text-white pt-5 px-5 h-40">
            {textInfoContTH}
            </div>
          </div>

          <div className = "py-5 text-end px-5">
              <button className="btn-secondary hover:text-orange-500">เพิ่มเติม</button>
          </div>
        </div>
    </div>
    </div>
  </div> );
}

export default card;