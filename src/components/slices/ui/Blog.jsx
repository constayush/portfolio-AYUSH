

function Blog({
  title = "Gallery Component",
  description = "The Gallery component displays a set of images in a responsive grid.",
  steps = [],
  component = "Gallery",
  codeSnippet,
}) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[var(--slices-primary-text)] mb-4">{title}</h1>

      {/* Description */}
      <p className="text-lg text-[var(--slices-secondary-text)] mb-6">{description}</p>

      {/* Preview CTA */}
      <div className="border rounded-xl p-4 shadow-lg  bg-gray-50/10 mb-6">
        <h2 className="text-xl text-[var(--slices-primary-text)] font-semibold mb-2">Live Preview</h2>
        {/* <Preview component={component} /> */}
        <button className="mt-4 text-[var(--slices-secondary-text)]">🔗 Open in Preview Page</button>
      </div>

      {/* Step by Step Guide */}
      <section className="mb-8">
        <h2 className="text-2xl text-[var(--slices-primary-text)] font-semibold mb-4">How to Build It</h2>
        <ol className="list-decimal list-inside space-y-3 text-[var(--slices-secondary-text)]">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Code Snippet */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--slices-primary-text)] mb-4">Code Example</h2>
        <pre className="bg-stone-800 text-orange-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{codeSnippet}</code>
        </pre>
      </section>
    </article>
  );
}

export default Blog;
