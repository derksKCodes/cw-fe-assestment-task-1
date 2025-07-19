import { Badge } from "@/components/ui/badge";

type TagListProps = {
  title: string;
  tags: string[];
  onTagClick?: (tag: string) => void;
}


export default function TagList({ title, tags, onTagClick }: TagListProps) {
const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, tag: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onTagClick?.(tag);
    }
  };
  return (
    <section className="mt-8 px-6 max-w-5xl mx-auto" aria-label={title}>
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-[#293038] md:text-lg text-gray-400 hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 py-1.5 px-4"
            role="button"
            tabIndex={0}
            aria-pressed="false"
            onClick={() => onTagClick?.(tag)}
            onKeyDown={(e) => handleKeyDown(e, tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
}
