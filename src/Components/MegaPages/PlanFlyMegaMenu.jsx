import React from 'react'
import './styleMega.css';

const PlanFlyMegaMenu = () => {
  return (
    <div className='title'>
<table className='Menu'>
 <th>BİLET AL VE YÖNET</th>
 <th className="margin">SEYAHATE HAZIRLIK</th>
 <th className="margin">EK HİZMETLER</th>

 
</table>
<div className='display-list'>
 <ul >
 <li>Uçak Bileti</li>
  <li>Turkish Airlines Holidays</li>
  <li>Check-in / Bilet yönetimi</li>
  <li>Business upgrade </li>
  <li>Fiyat koruma</li>
  <li>Uçuş Durumu</li>
  <li>Mobil uygulamalarımız</li>
 </ul>
 </div>

 <div  className='display-list'>
 <ul>
 
  <li>sıkça sorulan sorular</li>
  <li>Bagaj Bilgisi</li>
  <li>Check-in bilgileri </li>
  <li>Hasta ve engelli yolcular</li>
  <li>Bebek ve çocuk yolcular</li>
  <li>Transfer ve transit yolcular</li>
  <li>Evcil hayvanlarla seyahat</li>
 </ul>
 </div>

<div  className='display-list'>
 <ul>
 <li> Otel rezervasyonu</li>
  <li>Seyahat sigortası</li>
  <li>Koltuk seçimi</li>
  <li>Extra bagaj</li>
  <li>İlave menü seçimi</li>
  <li>BAE e-Vize</li>
  <li>MTüm ek hizmetleri incele</li>
 </ul>
</div>
    </div>
  )
}

export default PlanFlyMegaMenu