export default function OccupancyCard({
  occupancyRate,
}) {
  return (
    <div>
      <h3>
        Occupancy Rate
      </h3>

      <p>
        {occupancyRate}%
      </p>
    </div>
  );
}