import { useParams } from "react-router-dom";
import Blog from "../ui/Blog";
import { componentBlogs } from "../constant";

export default function BlogPage() {
  const { slug } = useParams(); // grabs from route, e.g. /blog/image-grid-zoom
  const blogData = componentBlogs[slug];



  if (!blogData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-600">404 — Blog Not Found 🤷‍♀️
        </h1>
        <p className="mt-2 text-[var(--slices-secondary-text)] animate-pulse">No blog exists for this component yet.</p>
      </div>
    );
  }

  return <Blog {...blogData} />;
}
