// src/components/BoxArea97.tsx

import BoxArea108 from "@/components/BoxArea108";

type BoxArea97Props = {
  initialValue: string;
  onSearch: (search: string) => void;
};

export default function BoxArea97({ initialValue, onSearch }: BoxArea97Props) {
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
        <BoxArea108 initialValue={initialValue} onSearch={onSearch} />
      </div>
    </section>
  );
}
