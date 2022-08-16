import React from 'react';
import './footer.css';
import image from "../../Constants/image";
import {FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn} from 'react-icons/fa';
import{GrInstagram} from 'react-icons/gr';
import {SiTurkishairlines} from 'react-icons/si';



const Footer = () => {
  return (
    <div>
      <div className='space'>
      <ul className= 'list'>
        <a href='/'><li><img src={image.StarAlliance} alt="StarAlliance"/></li></a>
        <a href='/'><li><img src={image.Holidays} alt="Holidays"/></li></a>
        <a href='/'> <li><img src={image.ApexLogo} alt="ApexLogo"/></li></a>
        <a href='/'><li><img src={image.CagriMerkezi} alt="CagriMerkezi"/></li></a>
      </ul>
      </div>
 {/* --------------------------------------------------------------------------- */}
      <div className='socialMedia'>
        <ul>
         <a href='/'> <li><FaTwitter className='icon'/></li></a>
         <a href='/'><li><FaFacebookF className='icon'/></li></a>
         <a href='/'> <li><GrInstagram className='icon'/></li></a>
         <a href='/'> <li><FaYoutube className='icon'/></li></a>
         <a href='/'><li><FaLinkedinIn className='icon'/></li></a>
         <a href='/'><li><SiTurkishairlines className='icon'/></li></a>
        </ul>
      </div>
       {/* --------------------------------------------------------------------------- */}

       <footer className='footer'>
        <ul>
          <a href='/'><li>Bilgi Toplumu Hizmetleri</li></a>
          <a href='/'><li>Erişebililik</li></a>
          <a href='/'>  <li>Gizlilik ve Çerez Politikası</li></a>
          <a href='/'> <li>Yasal Uyarı</li></a>
          <a href='/'> <li>Yolcu Hakları</li></a>
          <a href='/'> <li> Türk Hava Yolları A.O. Her hakkı saklıdır. © 1996 - 2022</li></a>
          <a href='/'><li><img src={image.ETBIS} alt="ETBIS"/></li></a>
        </ul>
       </footer>
    </div>
    
  )
}

export default Footer