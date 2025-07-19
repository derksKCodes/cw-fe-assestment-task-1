import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Header Component
function Header() {
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


// BoxArea97 Component
function BoxArea97() {
  const onSearch = (search: string) => {
    console.log(search);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden mt-10">
      <img
        src="/task1/hero-bg.png"
        alt="Background image"
        className="w-full h-120 object-fit"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-10">
       <h1 className="text-5xl md:text-7xl font-extrabold text-gray-300 mb-6 tracking-tighter leading-tight font-heading">
        Search for words, phrases and meanings
      </h1>
        <BoxArea108 initialValue="" onSearch={onSearch} />
      </div>
    </section>
  );
}


// BoxArea108 Component
type BoxArea108Props = {
  initialValue: string;
  onSearch: (search: string) => void;
};

function BoxArea108({ initialValue, onSearch }: BoxArea108Props) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-neutral-950 border border-gray-700 px-3 py-3 rounded-2xl w-full max-w-2xl  shadow-md "  role="search">
      
      <Search  className="text-gray-600 ml-3 w-7 h-7" aria-hidden="true" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        aria-label="Search input "
        className="flex-1 border-none md:text-2xl text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base pl-4"
      />
      <Button
        type="button"
        className="bg-blue-800  md:text-2xl hover:bg-blue-500 text-gray-300 ml-3 px-7 py-9 text-base rounded-xl"
        aria-label="Trigger search">Search
      </Button>
    </div>
  );
}

// TagList Component
type TagListProps = {
  title: string;
  tags: string[];
};

function TagList({ title, tags }: TagListProps) {
  return (
    <section className="mt-10 px-1 max-w-7xl mx-auto">
      <h2 className="text-gray-300 text-lg md:text-3xl font-bold mb-6">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 hover:bg-gray-750 text-gray-450 rounded-xl px-4 py-1.5 text-sm md:text-xl"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}

// App Component
export default function App() {
  const [tags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-gray-500">
      <Header />
      <BoxArea97 />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
