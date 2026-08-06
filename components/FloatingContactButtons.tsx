import Image from "next/image";
import { Send } from "lucide-react";

const whatsappUrl = "https://wa.me/918287832260?text=I%20WANT%20ID%20HERE..";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 shadow-lg shadow-green-600/40 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-300"
      >
        <Image src="/asset/WhatsApp_icon.png" alt="" width={48} height={48} />
      </a>
      <a
        href="https://t.me/empireexchangee"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/30 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-200"
      >
        <Send className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
