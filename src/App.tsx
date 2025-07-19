import { useState } from "react";
import Header from "@/components/Header";
import BoxArea97 from "@/components/BoxArea97";
import TagList from "@/components/TagList";

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
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <BoxArea97 initialValue="" onSearch={(value) => console.log("App search:", value)} />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
