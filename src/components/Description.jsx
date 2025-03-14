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
  plan: <Plan className={iconStyle} />,
  figma: <Figma className={iconStyle} />,
};

export const Description = ({
  period,
  title,
  company,
  position,
  summary,
  points,
  stacks,
  refs,
  type,
}) => (
  <li key={title} className="flex gap-x-10">
    <section className="flex flex-col w-[140px] justify-between">
      <span>{period}</span>
      <div className="flex flex-col">
        {refs?.map((v) => {
          return (
            <li
              className="flex gap-x-1 items-center hover:[&>svg]:fill-amber-300 
            hover:[&>button]:text-amber-300 cursor-pointer"
            >
              {icons[v.type]}
              <button
                onClick={() => {
                  window.open(v.url, "_blank");
                }}
              >
                {v.type}
              </button>
            </li>
          );
        })}
      </div>
    </section>
    <section
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        rowGap: 16,
      }}
    >
      <section className="flex justify-between items-center">
        <div className="flex gap-x-1 items-center">
          {type && (
            <span className="px-2 py-1 bg-yellow-300 rounded-full text-sm font-medium">
              {type}
            </span>
          )}
          <strong
            style={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            {title}
          </strong>
          {(company || position) && (
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              - {company || position}
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
      <div>{summary}</div>
      <section className="mt-1">
        <ul className="pl-6">
          {points.map((p) => (
            <li className="list-disc -indent-1">{p}</li>
          ))}
        </ul>
      </section>
      <Tags data={stacks} styles="mt-4" />
    </section>
  </li>
);
