export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </div>
  );
}
