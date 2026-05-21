export default function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div className="sectionTitle">

      <h1>{title}</h1>

      {subtitle && (
        <p>{subtitle}</p>
      )}

    </div>
  );
}