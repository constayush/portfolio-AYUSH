

function page() {
  return (
    <main className="flex-1 relative min-h-screen w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
               <div className="bg-grid absolute inset-0 pointer-events-none"/>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[2rem] md:text-[2.8rem] text-[var(--text-color)] font-bold">
               Live Examples 
              </h1>
              <p className="text-md text-[var(--secondary-text)] mt-2">
                A collection of well-crafted reusable components.
              </p>
            </div>
            <hr className="w-full border-white/20" />

           



          </div>
        </main>
  )
}

export default page