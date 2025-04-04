export const Title = ({ value, color = "main" }) => (
  <div className="flex justify-start mb-14">
    <span className={`text-3xl font-semibold text-${color}`}>{value}</span>
  </div>
);
