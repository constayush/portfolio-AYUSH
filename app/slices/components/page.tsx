import { Button1, Button2 , Button3, Button4, Card1, Card2 } from "./indexer";
function page() {
  return (
    <main className="flex-1 relative min-h-screen w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[2rem] md:text-[2.8rem] text-[var(--text-color)] font-bold">
            Components
          </h1>
          <p className="text-md text-[var(--secondary-text)] mt-2">
            A collection of well-crafted reusable components.
          </p>
        </div>
        <hr className="w-full border-[var(--border-color)]/40" />

        <div className="gap-8 flex flex-col">
          <h1 className="text-3xl font-bold">cards</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Add your content here */}
            <Card2 />
            <Card1 />
          </div>
        </div>

        <div className="gap-8 flex flex-col">
          <h1 className="text-3xl font-bold">buttons</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Add your content here */}
            <Button1 cta_text="hover me" href="https://example.com" />
            <Button2>slice me</Button2>
            <Button3>slice me</Button3>
            <Button4>slice me</Button4>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
