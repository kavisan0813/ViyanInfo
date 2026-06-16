export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-(--color-glass-1) border border-border-1 text-sm font-body text-text-secondary hover:text-(--color-text-accent) hover:bg-glass-2 transition-all cursor-default">
      {name}
    </span>
  );
}
