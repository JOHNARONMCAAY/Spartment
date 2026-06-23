export default function NotificationDropdown() {
  const notifications = [
    {
      type: "Payment Due",
      message: "Tenant payment due tomorrow",
      timestamp: "2026-06-23",
      unread: true,
    },
    {
      type: "Lease Expiry",
      message: "Lease expires in 7 days",
      timestamp: "2026-06-22",
      unread: false,
    },
  ];

  return (
    <div>
      <h3>Notifications</h3>

      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.unread && <span>● </span>}
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}