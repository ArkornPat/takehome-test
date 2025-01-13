import Image from "next/image";
import car1 from "@/public/assets/car1.jpg";
import car2 from "@/public/assets/car2.jpg";
import { useState } from "react";
import { Apple } from "lucide-react";
import banner from "@/public/assets/banner.jpg";

type Language = "th" | "en";

type HomePageProps = {
  currentLang: Language;
};

export default function HomePage({ currentLang }: HomePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const images = [car1, car2];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const texts = {
    th: {
      electronics: "อิเล็กทรอนิกส์",
      supermarket: "ซูเปอร์มาร์เก็ต",
      shopeeHome: "ช้อปปี้โฮม",
      shopeeCheap: "ช้อปปี้ถูกชัวร์",
      factoryPrices: "สินค้าราคาโรงงาน",
      shopeeMall: "ช้อปปี้มอลล์",
      shopeeDrugstore: "#ช้อปปี้ป้ายยา",
      freeShipping: "ส่งฟรี* + โค้ดลดทั้งแอป",
      beautyAndPersonalCare: "ความงามและของใช้ส่วนตัว",
      healthProducts: "กลุ่มผลิตภัณฑ์เพื่อสุขภาพ",
      mensFashion: "เสื้อผ้าแฟชั่นผู้ชาย",
      womensFashion: "เสื้อผ้าแฟชั่นผู้หญิง",
      bags: "กระเป๋า",
      mensShoes: "รองเท้าผู้ชาย",
      womensShoes: "รองเท้าผู้หญิง",
      accessories: "เครื่องประดับ",
      watchesAndEyewear: "นาฬิกาและแว่นตา",
      homeAppliances: "เครื่องใช้ในบ้าน",
      electronicsc: "อุปกรณ์อิเล็กทรอนิกส์",
      mobilesAndTablets: "มือถือ และ แท็บเล็ต",
      homeElectronics: "เครื่องใช้ไฟฟ้าภายในบ้าน",
      computersAndLaptops: "คอมพิวเตอร์และแล็ปท็อป",
      camerasAndPhotography: "กล้องและอุปกรณ์ถ่ายภาพ",
      foodAndBeverages: "อาหารและเครื่องดื่ม",
      toysAndBabyProducts: "ของเล่น สินค้าแม่และเด็ก",
      sportsAndOutdoor: "กีฬาและกิจกรรมกลางแจ้ง",
      pets: "สัตว์เลี้ยง",
      gamesAndAccessories: "เกมและอุปกรณ์เสริม",
      categorie: "หมวดหมู่"
    },
    en: {
      electronics: "Shopee Electronic",
      supermarket: "Supermarket",
      shopeeHome: "Shopee Home",
      shopeeCheap: "Cheapest on Shopee",
      factoryPrices: "Shopee Choice",
      shopeeMall: "Shopee Mall",
      shopeeDrugstore: "Shopee Trendy",
      freeShipping: "Free Shipping* + All Vouchers",
      beautyAndPersonalCare: "Beauty and Personal Care",
      healthProducts: "Health Products",
      mensFashion: "Men's Fashion",
      womensFashion: "Women's Fashion",
      bags: "Bags",
      mensShoes: "Men's Shoes",
      womensShoes: "Women's Shoes",
      accessories: "Accessories",
      watchesAndEyewear: "Watches and Eyewear",
      homeAppliances: "Home Appliances",
      electronicsc: "Electronics",
      mobilesAndTablets: "Mobiles and Tablets",
      homeElectronics: "Home Electronics",
      computersAndLaptops: "Computers and Laptops",
      camerasAndPhotography: "Cameras and Photography",
      foodAndBeverages: "Food and Beverages",
      toysAndBabyProducts: "Toys and Baby Products",
      sportsAndOutdoor: "Sports and Outdoor",
      pets: "Pets",
      gamesAndAccessories: "Games and Accessories",
      categorie: "Categories"
    },
  };

  return (
    <main className="w-full mt-2">
      <div className="container mx-auto px-44">
        <div className="w-full flex gap-2 justify-center">
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={images[currentIndex]}
              alt={`carousel image ${currentIndex + 1}`}
              height={230}
            />
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-8 h-8 font-bold text-white ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {"<"}
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-8 h-8 font-bold text-white ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {">"}
            </button>
            <div
              className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full border ${
                    index === currentIndex ? "bg-orange-600" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src={car1} alt="promotion image" height={111} />
            <Image src={car2} alt="promotion image" height={111} />
          </div>
        </div>

        <div className="flex gap-4 mt-8 mb-8 justify-evenly">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].electronics}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].supermarket}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].shopeeHome}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].shopeeCheap}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].factoryPrices}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].shopeeMall}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].shopeeDrugstore}</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              <Apple />
            </div>
            <div>{texts[currentLang].freeShipping}</div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5]">
        <div className="container mx-auto px-44 flex flex-col gap-6">
          <Image src={banner} alt="banner shopee" className="mt-6" />
          <div className="w-full bg-white rounded-xl p-4">
            <h3>{texts[currentLang].categorie}</h3>
            <div className="grid grid-cols-10 gap-4 mt-8 text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].beautyAndPersonalCare}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].healthProducts}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].mensFashion}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].womensFashion}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].bags}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].mensShoes}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].womensShoes}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].accessories}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].watchesAndEyewear}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].homeAppliances}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].electronicsc}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].mobilesAndTablets}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].homeElectronics}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].computersAndLaptops}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].camerasAndPhotography}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].foodAndBeverages}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].toysAndBabyProducts}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].sportsAndOutdoor}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].pets}</div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div>
                  <Apple />
                </div>
                <div>{texts[currentLang].gamesAndAccessories}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
