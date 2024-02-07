import React from 'react';
import "../App.css";
import headerImg from '../assests/Alternative-1/foto.png';


export default function Profile() {
  const basicInformationData = [
    { label: `Doğum Tarihi`, value: "4.03.1996" },
    { label: "İkamet Şehri", value: "Ankara" },
    { label: "Eğitim Durumu", value: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
    { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
  ];
  
  const aboutMeData = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
  ];

  return (
    <main className="CommonThings flex-col bg-[#4731D3] gap-8 dark:bg-[#171043]">
      <h2 className="text-[48px] text-[#CBF281] font-bold justify-start w-2/3">Profile</h2>
      <div className="flex w-2/3 gap-8">
        <div className="flex gap-8 flex-wrap" >
          <div className="flex flex-col gap-8 grow">
            <p className="text-[30px] font-normal">Basic Information</p>
            {basicInformationData.map((item, index) => (
              <p key={index} className="text-[16px]">
                <span className="text-[#CBF281] font-semibold">{item.label}</span> {item.value}
              </p>
            ))}
          </div>
          <img src={headerImg} alt="Profile" className='grow-0'/>
          <div className="flex flex-col gap-8 w-1/3 grow">
            <p className="text-[30px] font-normal">About Me</p>
            {aboutMeData.map((item, index) => (
              <p key={index} className="text-[16px]">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
