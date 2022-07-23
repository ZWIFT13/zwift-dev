import { Icon } from '@iconify/react';

const picture = [
  "https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/146786434_3753834974693725_1758498046571058619_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFCCJ_vkiZc-E_Xd8peizsgQULRjq3ygRdBQtGOrfKBF36ilSGKQ793q_lXoFftL9tYiVP8g5QZkHpUFgLhfCfq&_nc_ohc=u_M8D5Dy-IIAX_3B-RM&_nc_pt=1&_nc_ht=scontent.fbkk2-6.fna&oh=00_AT9Qa90L8jaeY1a3U--KL0IFLTZp01NX_hj1L7_O6FfXJA&oe=62FDCC96"
]

function info () {
  return ( 
  <div className="justify-between w-full h-1/3 items-center flex flex-col xl:flex-row relative bg-gradient-to-tr from-cyan-300 to-blue-800 p-52 gap-10 animate-[text_4s_ease-in-out_infinite]">

    <div className = "flex relative h-80 w-80">
      <img className="img-responsive ratio-square object-cover rounded-3xl  transform hover:-translate-y-2 transition-transform" src={picture[0]} alt="" />
    </div>

    <div>
      <div className="highlight w-70">
        <div className="text-white ">
          FOLLOW ME..<span className="text-white animate-ping font-secondary">I</span>
        </div>
      </div>
    
      <div className = "grid grid-cols-1 lg:grid-cols-2 py-5 gap-2 items-start font-primary font-bold">

        <a href="https://www.facebook.com/imswiftie1989" className = " gap-2 p-2 bg-white rounded-xl flex-row flex items-center">
          <Icon className="text-center" icon="akar-icons:facebook-fill" /> Facebook
        </a>


        <a href="https://www.instagram.com/zwift_13" className = " gap-2 p-2 bg-white rounded-xl flex-row flex items-center">
          <Icon icon="icon-park-solid:instagram" /> Instagram
        </a>


        <a href="https://th.linkedin.com/in/zwift13" className = " gap-2 p-2 bg-white rounded-xl flex-row flex items-center">
          <Icon icon="fa:linkedin-square" /> Linkedin
        </a>


        <a href="https://github.com/ZWIFT13" className = " gap-2 p-2 bg-white rounded-xl flex-row flex items-center">
          <Icon icon="ant-design:gitlab-filled" /> Gitlab
        </a>

      </div>
    </div>

  </div> );
}

export default info ;