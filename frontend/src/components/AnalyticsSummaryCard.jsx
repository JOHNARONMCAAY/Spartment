export default function AnalyticsSummaryCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div>
      <h3>
        {title}
      </h3>

      <p>
        {value}
      </p>

      <small>
        {subtitle}
      </small>
    </div>
  );
}