// helper to keep slugs consistent
export const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
  

// Sidebar sections
export const slices_data = [
  {
    title: "Getting Started",
    components: ["Introduction", "Gallery"],
  },
  {
    title: "Scroll",
    components: ["Image-Grid-Zoom", "Text-Opacity", "Navbar-Shrink"],
  },
  {
    title: "Mouse",
    components: ["Custom-Cursor", "Cards-on-Hover"],
  },
  {
    title: "Utilities",
    components: ["useSwipe", "useDebounce", "useClickOutside", "useDarkMode", "Scroll To Top"],
  },
];

// Blog data mapped by slug
export const componentBlogs = {
  "image-grid-zoom": {
    title: "Gallery Component",
    description: "A responsive grid gallery with hover effects.",
    component: "Gallery",
    steps: [
      "Create a `Gallery` component inside `/components/Gallery`.",
      "Use Tailwind's `grid` classes for layout.",
      "Map over image URLs and render them.",
      "Add hover animations.",
    ],
    codeSnippet: `function Gallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={\`Gallery image \${i}\`}
          className="rounded-md hover:scale-105 transition"
        />
      ))}
    </div>
  );
}`,
  },

  "cards-on-hover": {
    title: "Card Component",
    description: "A flexible card with image, title, and description.",
    component: "Card",
    steps: [
      "Create `Card.jsx` inside `/components/Card`.",
      "Add `img`, `title`, `desc` props.",
      "Wrap content inside a styled container.",
      "Use hover effects to lift image.",
    ],
    codeSnippet: `function Card({ title, description, img }) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <img src={img} alt={title} className="rounded-md hover:-translate-y-2 transition" />
      <h2 className="mt-2 font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}`,
  },

  // 👇 stubs so UI never breaks
  "text-opacity": {
    title: "Text Opacity",
    description: "A simple fade-in text effect on scroll.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "navbar-shrink": {
    title: "Navbar Shrink",
    description: "Navbar shrinks when scrolling down.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "custom-cursor": {
    title: "Custom Cursor",
    description: "Follow mouse with a styled custom cursor.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "useSwipe": {
    title: "useSwipe Hook",
    description: "Detect swipe gestures in React.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "usedebounce": {
    title: "useDebounce Hook",
    description: "Debounce input or actions easily.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "useclickoutside": {
    title: "useClickOutside Hook",
    description: "Detect clicks outside of an element.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "usedarkmode": {
    title: "useDarkMode Hook",
    description: "Toggle dark mode with persistence.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
  "scroll-to-top": {
    title: "Scroll To Top",
    description: "Button to smoothly scroll to top of page.",
    steps: ["Stub example — fill later."],
    codeSnippet: "// TODO: add code",
  },
};
