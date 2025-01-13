import { useState } from "react";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Popup from "@/components/Popup";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<"th" | "en">("th");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <HomePage currentLang={currentLang} />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </div>
  );
}
