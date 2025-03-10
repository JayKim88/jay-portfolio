export const Title = ({ value, color = "black" }) => {
  return (
    <div className="flex justify-center">
      <span className={`text-4xl font-bold ml-2 text-${color}`}>{value}</span>
    </div>
  );
};
