import { useState } from 'react'
import { ChevronDown, Bell, CircleHelp, ShoppingCart, Search } from 'lucide-react'
import Link from 'next/link'

export default function Header() {

  type Language = 'th' | 'en'

  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>('th')

  const languages: { lang: Language; label: string }[]  = [
    { lang: 'th', label: 'ไทย' },
    { lang: 'en', label: 'English' },
  ]

  const texts = {
    th: {
      sellerCentre: 'ศูนย์ขาย',
      getStarted: 'เริ่มต้นที่',
      download: 'ดาวน์โหลด',
      followUs: 'ติดตามเรา',
      notifications: 'การแจ้งเตือน',
      help: 'ช่วยเหลือ',
      register: 'ลงทะเบียน',
      searchPlaceholder: 'ค้นหาสินค้าและร้านค้า',
    },
    en: {
      sellerCentre: 'Seller Centre',
      getStarted: 'Start Selling',
      download: 'Download',
      followUs: 'Follow Us',
      notifications: 'Notifications',
      help: 'Help',
      register: 'Register',
      searchPlaceholder: 'Search for products, brands and shops',
    },
  }

  return (
    <header className="w-full">
      <div className="w-full bg-gradient-to-b from-[#f53d2d] to-[#f63] text-white">
        <div className="container mx-auto px-44">
          <div className="flex items-center justify-between py-1 text-sm">
            <nav className="flex items-center gap-2">
              <a href="#">{texts[currentLang].sellerCentre}</a>
              {"|"}
              <a href="#">{texts[currentLang].getStarted}</a>
              {"|"}
              <a href="#">{texts[currentLang].download}</a>
              {"|"}
              <a href="#">{texts[currentLang].followUs}</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1">
                <Bell className="w-4" /> {texts[currentLang].notifications}
              </a>
              <a href="#" className="flex items-center gap-1">
                <CircleHelp className="w-4" /> {texts[currentLang].help}
              </a>
              <div className="relative">
                <button
                  className="flex items-center hover:opacity-75"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{languages.find(lang => lang.lang === currentLang)?.label}</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {isOpen && (
                  <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-sm shadow-lg z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.lang}
                        className="w-full px-4 py-2 text-left text-black hover:bg-gray-100 text-sm"
                        onClick={() => {
                          setCurrentLang(lang.lang)
                          setIsOpen(false)
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="hover:opacity-75">{texts[currentLang].register}</a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-44 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Shopee
            </Link>

            <div className="flex-1 mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder={texts[currentLang].searchPlaceholder}
                  className="w-full px-4 py-2 rounded-sm text-black focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-[#f53d2d] text-white rounded-r-sm">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button className="text-white">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
