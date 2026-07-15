export default function BillingSummaryCards({
  summary,
}) {
  return (
    <div>
      <h2>Billing Summary</h2>

      <div>
        <div>
          <h3>Electricity</h3>
          <p>₱{summary.electricity}</p>
        </div>

        <div>
          <h3>Water</h3>
          <p>₱{summary.water}</p>
        </div>

        <div>
          <h3>Combined Utilities</h3>
          <p>₱{summary.totalUtilities}</p>
        </div>
      </div>
    </div>
  );
}