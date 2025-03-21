import { Tags } from "../components/Tags";

import Figma from "../assets/images/figma.svg?react";
import Deploy from "../assets/images/rocket.svg?react";
import Plan from "../assets/images/pen-ruler.svg?react";
import Github from "../assets/images/sns/github.svg?react";

const iconStyle = `max-w-6 w-6 h-6 folder-open-8 fill-white`;

const icons = {
  github: <Github className={iconStyle} />,
  deploy: <Deploy className={iconStyle} />,
  note: <Plan className={iconStyle} />,
  figma: <Figma className={iconStyle} />,
};

export const Description = ({
  period,
  image,
  title,
  company,
  position,
  summary,
  points,
  stacks,
  refs,
  type,
  paragraph,
  details,
}) => (
  <li
    key={title}
    className={`flex gap-x-10 p-4 translate-0
    transition-all delay-100 duration-200 ease-in-out 
    hover:shadow-[4px_4px_6px_rgba(0,0,0,0.3)] hover:rounded-2xl 
    hover:translate-x-2 hover:translate-y-2 ${details && "cursor-pointer"}`}
  >
    <section className="flex flex-col w-[140px] justify-between">
      {image ? (
        <img src={image} className="w-[120px] rounded-3xl" />
      ) : (
        <span className="text-sm">{period}</span>
      )}
    </section>
    <section className="flex-1 flex flex-col gap-y-4">
      <section className="flex items-center justify-start gap-x-1">
        {type && (
          <span className="px-2 py-1 bg-yellow-300 rounded-full text-xs font-medium text-black">
            {type}
          </span>
        )}
        <strong className="text-base font-medium">{title}</strong>
        {(company || position) && (
          <span className="text-sm font-medium pt-0.5">
            · {company || position}
          </span>
        )}
      </section>
      {summary && <div className="text-[14.6px] leading-6">{summary}</div>}
      <section className="mt-1 mb-2 text-[14.6px]">
        {paragraph ? (
          <p className="leading-6">{paragraph}</p>
        ) : (
          <ul className="pl-6">
            {points.map((p, index) => (
              <li key={index} className="list-disc -indent-1">
                {p}
              </li>
            ))}
          </ul>
        )}
      </section>
      {refs?.length && (
        <div className="flex gap-x-3 mt-auto h-6 mb-2">
          {refs?.map((v, index) => {
            return (
              <li
                key={index}
                className="flex gap-x-1 items-center cursor-pointer relative group"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(v.url, "_blank");
                }}
              >
                {icons[v.type]}
                <span
                  className="absolute bottom-0 opacity-0 translate-y-0 
                transition-all duration-500 ease-in-out pointer-events-none 
                group-hover:opacity-100 group-hover:-translate-y-6"
                >
                  {v.type === "note" ? v.title : v.type}
                </span>
              </li>
            );
          })}
        </div>
      )}
      {stacks?.length && <Tags data={stacks} />}
    </section>
  </li>
);
