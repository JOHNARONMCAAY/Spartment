export default function RecommendationCards({
  recommendations = [
    {
      title: "Due Payments",
      message: "5 tenants have upcoming due dates.",
    },
    {
      title: "Overdue Payments",
      message: "2 tenants have overdue balances.",
    },
    {
      title: "Collection Suggestion",
      message: "Send payment reminders to overdue tenants.",
    },
  ],
}) {
  if (recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div>
      {recommendations.map((recommendation, index) => (
        <div key={index}>
          <h3>{recommendation.title}</h3>
          <p>{recommendation.message}</p>
        </div>
      ))}
    </div>
  );
}