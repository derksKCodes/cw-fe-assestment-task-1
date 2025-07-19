// src/components/BoxArea97.tsx

import BoxArea108 from "@/components/BoxArea108";

type BoxArea97Props = {
  initialValue: string;
  onSearch: (search: string) => void;
};

export default function BoxArea97({ initialValue, onSearch }: BoxArea97Props) {
 return (
    <section
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-label="Search section"
    >
      <img
        src="/task1/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="w-full h-100 object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[94px]">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Search for words, phrases and meanings
        </h1>
        <BoxArea108 initialValue={initialValue} onSearch={onSearch} />
      </div>
    </section>
  );
}


