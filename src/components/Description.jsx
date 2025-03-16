import FolderOpen from "../assets/images/folder-open.svg?react";
import { Tags } from "../components/Tags";

import Figma from "../assets/images/figma.svg?react";
import Deploy from "../assets/images/rocket.svg?react";
import Plan from "../assets/images/pen-ruler.svg?react";
import Github from "../assets/images/sns/github.svg?react";

const iconStyle = `w-4 h-4 folder-open-8 fill-black`;

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
}) => (
  <li key={title} className="flex gap-x-10">
    <section className="flex flex-col w-[140px] justify-between">
      {image ? (
        <img src={image} className="w-[120px] rounded-3xl" />
      ) : (
        <span className="text-sm">{period}</span>
      )}
    </section>
    <section className="flex-1 flex flex-col gap-y-4">
      <section className="flex justify-between items-center">
        <div className="flex gap-x-1 items-center justify-center">
          {type && (
            <span className="px-2 py-1 bg-yellow-300 rounded-full text-xs font-medium">
              {type}
            </span>
          )}
          <strong className="text-base font-medium">{title}</strong>
          {(company || position) && (
            <span className="text-sm font-medium pt-0.5">
              · {company || position}
            </span>
          )}
        </div>
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            alert("show detail");
          }}
        >
          <FolderOpen className={`w-8 folder-open-8 hover:fill-amber-300`} />
        </button>
      </section>
      {summary && <div className="text-[14.6px] leading-6">{summary}</div>}
      <section className="mt-1 text-[14.6px]">
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
        <div className="flex gap-x-3 mt-auto">
          {refs?.map((v, index) => {
            return (
              <li
                key={index}
                className="flex gap-x-1 items-center cursor-pointer hover:[&>svg]:fill-amber-300 
            hover:[&>button]:text-amber-300"
              >
                {icons[v.type]}
                <button
                  className="text-[16px] cursor-pointer"
                  onClick={() => {
                    window.open(v.url, "_blank");
                  }}
                >
                  {v.type === "note" ? v.title : v.type}
                </button>
              </li>
            );
          })}
        </div>
      )}
      {stacks?.length && <Tags data={stacks} />}
    </section>
  </li>
);
