export const BoldBtn = ({ title, link, onClick, customStyle }) => {
  return (
    <button
      className={`inline-block text-main ${customStyle} ${
        (onClick || link) && "cursor-pointer hover:text-yellow-300"
      }`}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
          return;
        }

        onClick();
      }}
    >
      <b>{title}</b>
    </button>
  );
};
