import popupimg from "@/public/assets/popup.webp";
import Image from "next/image";
import React from "react";

interface PopupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({ setIsOpen }: PopupProps) {

  return (
    <div className="fixed bottom-0 right-0 rounded-lg">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-0 left-0 rounded-full w-5 h-5 bg-red-600 text-white flex items-center justify-center"
      >
        x
      </button>
      <Image src={popupimg} alt="popup" />
    </div>
  );
}
