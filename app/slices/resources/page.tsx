
import Card3 from "../components/component_files/Card3";
import Card2 from "../components/component_files/Card2";
function page() {
  const yt_channels = [
    {
      name: "Manu Paaji",
      url: "https://www.youtube.com/@manuarora",
      for: "UI Design",
      description:
        "I idealise his design process and the way he craft his designs.",
    },
    {
      name: "Web Dev Simplified",
      url: "https://www.youtube.com/@WebDevSimplified",
      for: "Web Development",
      description:
        "He makes complex development concepts easy, and his tuts are very practical.",
    },
    {
      name: "Wes Bos",
      url: "https://www.youtube.com/@wesbos",
      for: "Web Development",
      description: "Who dont kown him.",
    },
    {
      name: "Akshay Saini",
      url: "https://www.youtube.com/@akshaymarch7",
      for: "UI/UX Design",
      description:
        "he explains JS in depth and with absolute clarity, Namaste JavaScript is a masterpiece.",
    },
  ];

  const textures = [
    {
      title: "Atmosphere pattern",
      href: "https://texturelabs.org/wp-content/uploads/Texturelabs_Atmosphere_145S.jpg",
    
    },
    {
      title: "grid pattern",
      href: "https://www.toptal.com/designers/subtlepatterns/uploads/grid.png",
    },
    {
      title: "vintage pattern",
      href: "https://texturelabs.org/wp-content/uploads/Texturelabs_Grunge_189S.jpg",
    },
   {
      title: "spray paint pattern",
      href: "https://texturelabs.org/wp-content/uploads/Texturelabs_InkPaint_232S.jpg",
   } 
  ]

  return (
    <main className="flex-1 relative min-h-screen w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="bg-grid absolute inset-0 pointer-events-none" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[2rem] md:text-[2.8rem] text-[var(--text-color)] font-bold">
            Resources & assets
          </h1>
          <p className="text-md text-[var(--secondary-text)] mt-2">
            collection of resources, assets, and references that I find useful.
          </p>
        </div>
        <hr className="w-full border-[var(--border-color)]/40" />

 <div className="flex flex-col justify-center  gap-8">
          <h1 className="text-3xl  font-bold">Textures I use</h1>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {textures.map((texture) => (
              <Card2
                key={texture.title}
                title={texture.title}
                href={texture.href}
                cta_text="download"
                image_url={texture.href} 
                description=""             />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center  gap-8">
          <h1 className="text-3xl  font-bold">Youtube channels I follow</h1>

          <div className="grid grid-cols-1 md:grid-cols-  2 gap-6">
            {yt_channels.map((channel) => (
              <Card3
                key={channel.name}
                title={channel.name}
                href={channel.url}
                description={channel.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
