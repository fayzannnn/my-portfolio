import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds.join("|")]);

  return activeSection;
}
