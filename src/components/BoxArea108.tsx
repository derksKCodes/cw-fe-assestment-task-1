import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type SearchInputProps = {
  initialValue: string;
  onSearch: (search: string) => void;
};

export default function BoxArea108({ initialValue, onSearch }: SearchInputProps) {
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
        onClick={() => onSearch(innerValue)}
        className="bg-blue-800  md:text-2xl hover:bg-blue-500 text-gray-300 ml-3 px-7 py-9 text-base rounded-xl"
        aria-label="Trigger search">Search
      </Button>
    </div>
  );
}