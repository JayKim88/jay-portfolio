import { useTranslation } from "react-i18next";

export const Title = ({ value, color = "main" }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-start mb-14">
      <span className={`text-3xl font-semibold text-${color}`}>{t(value)}</span>
    </div>
  );
};
