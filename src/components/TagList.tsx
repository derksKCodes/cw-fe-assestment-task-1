import { Badge } from "@/components/ui/badge";

type TagListProps = {
  title: string;
  tags: string[];
};

export default function TagList({ title, tags }: TagListProps) {
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
