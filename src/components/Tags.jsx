export const Tags = ({ data, styles }) => {
  return (
    <ul className={`flex flex-wrap gap-2 list-none p-0 text-sm ${styles}`}>
      {data?.map((v) => (
        <li
          key={v}
          className="w-fit h-5 rounded-xl border border-black px-2 py-1 flex justify-center items-center"
        >
          {v}
        </li>
      ))}
    </ul>
  );
};
