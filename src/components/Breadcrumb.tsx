import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://noory.io";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
      })),
    }),
    [items]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "breadcrumb");
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.querySelector('script[data-seo="breadcrumb"]');
      if (existing) existing.remove();
    };
  }, [jsonLd]);

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="container mx-auto px-4 md:px-8 pt-24 pb-2"
    >
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight size={14} className="text-muted-foreground/60" aria-hidden="true" />
              )}
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-foreground/80 line-clamp-1" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
