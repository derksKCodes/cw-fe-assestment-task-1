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
    <main className="bg-black min-h-screen text-gray-500">
      <Header />
      <BoxArea97 initialValue="" onSearch={(value) => console.log("App search:", value)} />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
