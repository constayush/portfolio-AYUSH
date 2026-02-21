import Image from "next/image";
import Link from "next/link";

export default function Card2({
  title = "Card 2",
  description = "A card component with CTA on hover effect. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  href = "#",
  cta_text = "Learn More →",
  image_url = "https://plus.unsplash.com/premium_photo-1663954645420-f34df6dcd26e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
}) {
  return (
    <>
      <style>{`
        .card2-root { position: relative; display: block; height: 340px; width: 100%; min-width: 220px; overflow: hidden; border-radius: 0.75rem; border: 1px solid rgba(255,255,255,0.1); background: black; }

        .card2-img { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; object-fit: cover; transform: scale(1); transition: transform 700ms ease-out; }
        .card2-root:hover .card2-img { transform: scale(1.05); }

        .card2-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent); opacity: 0.8; transition: opacity 500ms ease-out; }
        .card2-root:hover .card2-overlay { opacity: 1; }

        .card2-content { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: flex-end; width: 100%; height: 100%; padding: 1.25rem 1.5rem; gap: 0.5rem; }

        .card2-title-row { display: flex; align-items: center; gap: 0.375rem; }
        .card2-title { font-size: 1.5rem; font-weight: 600; color: white; white-space: nowrap; letter-spacing: -0.025em; }

        .card2-arrow { display: inline-block; color: var(--text-color); opacity: 0; transform: translateX(-4px) rotate(-45deg); transition: opacity 500ms ease-out, transform 500ms ease-out; }
        .card2-root:hover .card2-arrow { opacity: 1; transform: translateX(0) rotate(0deg); }

        .card2-desc { font-size: 0.875rem; color: rgb(209,213,219); line-height: 1.625; opacity: 0.7;  }
        .card2-root:hover .card2-desc { opacity: 1; transform: translateY(0); }

        .card2-cta-wrap { opacity: 0; transform: translateY(16px); transition: opacity 500ms ease-out 75ms, transform 500ms ease-out 75ms; }
        .card2-root:hover .card2-cta-wrap { opacity: 1; transform: translateY(0); }

        .card2-btn { margin-top: 0.25rem; font-size: 0.875rem; font-weight: 500; background: white; color: black; padding: 0.5rem 1.25rem; border-radius: 0.5rem; border: none; cursor: pointer; transition: background 200ms; }
        .card2-btn:hover { background: var(--bg-color); opacity: 0.9; color: var(--text-color); border: 1px solid var(--text-color); }
      
        .push-up { transform: translateY(0px); transition: transform 500ms ease-out; }
        .card2-root:hover .push-up { transform: translateY(-30px); }
      
      
      `}</style>

      <Link href={href} target="_blank" className="card2-root">
        <Image className="card2-img" src={image_url} alt={title} fill={true} />
        <div className="card2-overlay" />
        <div className="card2-content">
          <div className="push-up">
            <div className="card2-title-row">
              <h3 className="card2-title">{title}</h3>
              <span className="card2-arrow">→</span>
            </div>
            <p className="card2-desc">{description}</p>
          
          <div className="card2-cta-wrap mt-2">
            <button className="card2-btn">{cta_text}</button>
          </div></div>
        </div>
      </Link>
    </>
  );
}
