export default function RevenueTrendCard({
  revenueTrend,
}) {
  return (
    <div>
      <h3>
        Revenue Trend
      </h3>


      {revenueTrend.map(
        (item, index) => (
          <p key={index}>
            {item.month}: ₱
            {item.amount}
          </p>
        )
      )}

    </div>
  );
}