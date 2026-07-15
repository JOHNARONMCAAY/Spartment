export default function RentStatementTable({
  rentStatements,
}) {
  if (rentStatements.length === 0) {
    return (
      <p>No rent statements found.</p>
    );
  }

  return (
    <div>
      <h2>Rent Statements</h2>

      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rentStatements.map(
            (statement, index) => (
              <tr key={index}>
                <td>{statement.period}</td>

                <td>
                  {statement.dueDate}
                </td>

                <td>
                  ₱{statement.amount}
                </td>

                <td>
                  {statement.status}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}