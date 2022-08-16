import React from "react";
import "date-fns";
import "./home.css";
import {Typography,Box} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { CardContent } from "@mui/material";
import image from "../../Constants/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Footer, HomeTabPage } from "../../Components";

const sideleft = () => {
  var sileder = document.getElementById("slider");
  sileder.scrollLeft = sileder.scrollLeft - 500;
};

const sideright = () => {
  var sileder = document.getElementById("slider");
  sileder.scrollLeft = sileder.scrollLeft + 500;
};

const home = () => {
  return (
    <div className="background">
      <div className="background-text">
        MERHABA
        <br />
        <p>Nereyi keşfetmek istersiniz?</p>
      </div>

      <HomeTabPage />

      <div className="space">
        <a href="card" className="card-link">
          <Card className="card-space">
            <CardContent>
              <Typography component="div" variant="h5" className="Bold">
                Ek Hizmetler
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Seyahatibizi zenginleştirecek otel rezarvasyonu ve araç kiralama
                gibi hizmetlerden faydalanabilirsiniz
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="card" className="card-link">
          <Card className="card-space">
            <CardContent>
              <Typography component="div" variant="h5" >
                Seyahat Kısıltlamaları
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                İnteraktif harita uygulamalarınızı kullanarak ülkeden salgın
                tedbirlerine ve seyahat koşullaruna erişebilirsiniz.
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a href="card" className="card-link">
          <Card>
            <CardContent>
              <Typography component="div" variant="h5" className="Bold">
                Gift Card
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Gift card satın alarak sevdiklerinize süpriz bir seyahat
                deneyimi armağan edebilir, onlara yerler keşfetmenin heycanını
                yaşatabilirsiniz.
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
      <br />
      {/* --------------------------------------------------------------------------- */}
      <section className="covid-panel space">
        <div className="info-circle img-align-left">
          <i>
            <FontAwesomeIcon icon={faInfo} />
          </i>
        </div>
        <p>
          <p> Değerli yolcularımız, </p>
          COVID-19 kaynaklı güncel kural ve gelişmelerden haberdar olmanız için;
          yurt içi ve yurt dışı seyahatlerle ilgili gelişmeler, ülkeler arası
          durdurulan uçuşlar ve benzeri bilgiler için{" "}
          <a href="aa">önemli duyurular </a> sayfamızı, Türkiye'ye varışta
          geçerli olan kurallar için
          <a href="aa">Türkiye'ye Seyahat</a> sayfamızı ve diğer tüm ülkelerin
          seyahat kısıtlamaları hakkında bilgi edinmek için ise
          <a href="aa"> ülkelerin seyahat kuralları</a> sayfamızı ziyaret
          etmenizi öneririz.
        </p>
        <hr className="line" />
      </section>

      <section className="covid-panel space">
        <div className="info-circle img-align-left">
          <i>
            <FontAwesomeIcon icon={faInfo} />
          </i>
        </div>
        <p>
          <p> Değerli yolcularımız, </p>
          Ukrayna, Belarus ve Rusya uçuşlarımıza ilişkin duyurulara ve bu
          ülkelere yaptığımız uçuşlarımız için yolcularımıza tanınan haklara{" "}
          <a href="aa">buradan</a> erişebilirsiniz.
        </p>
        <hr className="line" />
      </section>

      <section className="info space">
        <div className="info">
          <i>
            <img src={require("../../img/info.jpg")} alt="info.jpg" />
          </i>
        </div>
        <p>
          Yolcu hakları konusunda detaylı bilgilere erişmek için lütfen{" "}
          <a href="aa">tıklayın.</a>
        </p>
        <hr className="line" />
      </section>
      {/* --------------------------------------------------------------------------- */}
      <div>
        <div className="card-image">
          <Box>
            <h3>Seyahat güncellemesi: COVID-19</h3>
            <hr />
            <img
              src={require("../../img/seyahatguncelleme.jpg")}
              alt="image_card1"
            />
            <div>
              <p>
                Koronavirüs kaynaklı önemli güncellemeler, uçuşa açılan
                noktalar, avantajlı esnek değişiklik hakları ve daha fazlası
                hakkında bilgi edinin.
              </p>
            </div>
            <button>incele</button>
          </Box>
        </div>

        <div className="card-image">
          <Box>
            <h3>Güncel Uçuş Planı</h3>
            <hr />
            <img
              src={require("../../img/guncelucusplani.jpg")}
              alt="image_card1"
            />
            <div>
              <p>
                Sağlıklı ve güvenli uçuşlarla sizi 200'den fazla noktaya
                ulaştırıyoruz. İster yeni yerler keşfedin ister sevdiklerinizle
                hasret giderin, temassız ve hijyenik bir seyahat deneyimiyle
                içiniz rahat olacak. Ayrıca ekstra esnek haklarınızla plan
                değişiklerine her zaman hazırsınız. Yeni seyahatlerde görüşmek
                üzere uçuş planımıza göz atmaya ne dersiniz?.
              </p>
            </div>
            <button>incele</button>
          </Box>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="space more-details">
        <hr className="line" />
        <h2 className="center">Özel fırsatlarla yeni şehirlere!</h2>
        <h4 id="center">
          <a href="aa">Tüm kampanyaları göster </a>
        </h4>
        <hr className="line" />
      </div>

      {/* --------------------------------------------------------------------------- */}
      <div className="slider">
        <MdChevronLeft className="carousel-control" onClick={sideleft} />
        <div id="slider" className="slider-box">
          <div className="apparnce">
            <img src={image.Slide5} alt="/" />
            <h4>Uçuşunuzun karbon emisyonunu dengeleyin!</h4>
            <p>
              Uçuşunuzdan kaynaklanan karbon emisyonunu dengeleyerek dünyamızı
              iyileştirme çabamıza katkıda bulunun.
            </p>
            <a href="/">Keşfet</a>
          </div>
          <div className="apparnce">
            <img src={image.Slide2} alt="/" />
            <h4>Otel rezervasyonu yaparak Mil kazanın!</h4>
            <p>
              Hemen otel rezervasyonunuzu yapıp harcadığınız her 1 avro için 5
              Mil kazanın!
            </p>
            <a href="/">Rezarvasyon</a>
          </div>

          <div className="apparnce">
            <img src={image.Slide1} alt="/" />
            <h4>Hızlı Pasaport Geçiş Sistemi ile sıra beklemeyin!</h4>
            <p>
              Uİstanbul Havalimanı’nda bulunan “Hızlı Pasaport Geçiş Sistemi”
              ile biyometrik pasaport ünitelerinden saniyeler içinde, sıra
              beklemeden geçiş yapabilirsiniz.
            </p>
            <a href="/">Keşfet</a>
          </div>

          <div className="apparnce">
            <img src={image.Slide3} alt="/" />
            <h4>Türk Hava Yolları mobil uygulamasını keşfedin, rahat edin!</h4>
            <p>
              Mobil uygulamamız ile bilet alma, mobil biniş kartı oluşturma,
              check-in gibi işlemlerinizi hızla gerçekleştirebilir; kampanya ve
              duyurularımızdan ilk siz haberdar olabilirsiniz.
            </p>
            <a href="/">Keşfet</a>
          </div>

          <div className="apparnce">
            <img src={image.Slide4} alt="/" />
            <h4>
              Turkish Airlines Holidays ile tüm tatil ihtiyaçlarınız tek
              pakette!
            </h4>
            <p>
              Uçuş, konaklama, transfer ve araç kiralama gibi tüm seyahat
              ihtiyaçlarınızı bir arada sunan tatil paketlerimize göz atın, en
              avantajlı tatil fırsatlarını kaçırmayın!
            </p>
            <a href="/">Keşfet</a>
          </div>
        </div>
        <MdChevronRight className="carousel-control" onClick={sideright} />
      </div>
      <hr className="line" />
      <Footer />
    </div>
  );
};
export default home;
