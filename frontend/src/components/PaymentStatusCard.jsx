export default function PaymentStatusCard({
  paymentStatus,
}) {
  return (
    <div>
      <h3>
        Payment Status
      </h3>

      <p>
        Paid: {paymentStatus.paid}
      </p>

      <p>
        Pending: {paymentStatus.pending}
      </p>

      <p>
        Overdue: {paymentStatus.overdue}
      </p>
    </div>
  );
}