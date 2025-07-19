// src/components/Header.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";


export default function Header() {
    const [searchValue, setSearchValue] = useState("");
  return (
    <header className="flex items-center justify-between px-8 py-3 bg-black border-b border-gray-500">
      <div className="flex items-center gap-6">
        <img
          src="/task1/logo.png"
          alt="Wortionary Logo"
          className="w-5 h-5 md:w-6 md:h-6"
        />
        <span className="text-white font-bold text-lg md:text-xl tracking-tight">Worctionary</span>
      </div>

      <div className="flex items-center gap-9">
        <div className="relative w-44 md:w-55" role="search">
          <Search
            className="text-gray-500 text-base md:text-lg absolute left-4 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
            aria-label="Search in header"
            className="pl-13 bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg text-base md:text-md py-6 placeholder:text-base md:placeholder:text-1g placeholder:text-gray-500"
          />
        </div>
        <Avatar className="w-10 h-10 md:w-[54px] md:h-[54px] mr-3">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}


