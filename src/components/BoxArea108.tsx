import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface BoxArea108Props {
  initialValue: string;
  onSearch: (search: string) => void;
}

export default function BoxArea108({ initialValue, onSearch }: BoxArea108Props) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center w-full max-w-md mt-6 px-4 py-2 bg-[#1C2126] rounded-lg shadow-lg">
      <Search className="text-gray-400 w-5 h-5" aria-hidden="true" />
      <Input
        type="text"
        value={innerValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0"
        aria-label="Search input"
      />
      <Button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
        Search
      </Button>
    </div>
  );
}

