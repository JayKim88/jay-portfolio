import React from "react";

export const DetailModal = ({ data, handleItem }) => {
  const {
    githubLink,
    hostingLink,
    period,
    position,
    projectType,
    purpose,
    reviewLink,
    role,
    stacks,
    summary,
    title,
  } = data;

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      handleItem(null);
    }
  };

  return (
    <div
      className="backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 cursor-pointer"
      onClick={handleClick}
    >
      <div className="border-2 border-black rounded-2xl bg-white w-[40rem] flex flex-col cursor-default">
        <div className="m-4">
          <div className="border-b-2 border-black text-3xl font-medium text-start text-[#07c173] flex items-center p-4">
            {title}
          </div>
          <div className="text-xl font-medium my-1 mb-4">{summary}</div>
          <div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">프로젝트타입</div>
              <div className="w-4/5 flex items-center m-1">{projectType}</div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">주제</div>
              <div className="w-4/5 flex items-center m-1">{purpose}</div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">작업기간</div>
              <div className="w-4/5 flex items-center m-1">{period}</div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">포지션</div>
              <div className="w-4/5 flex items-center m-1">{position}</div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">사용스택</div>
              <div className="w-7/10 flex flex-wrap mt-1">
                {stacks.map((ele) => (
                  <span
                    key={ele}
                    className="h-8 text-sm mr-2 mb-2 font-semibold"
                  >
                    {ele}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/5 m-1 font-normal">역할</div>
              <div className="mt-1">
                {role.map((ele) => (
                  <div key={ele} className="mb-1">
                    {ele}
                  </div>
                ))}
              </div>
            </div>
            {hostingLink && (
              <div className="flex mb-2">
                <div className="w-1/5 m-1 font-normal">배포링크</div>
                <div className="w-4/5 flex items-center m-1">
                  <a
                    href={hostingLink}
                    target="_blank"
                    className="w-64 overflow-hidden text-ellipsis"
                  >
                    {hostingLink}
                  </a>
                </div>
              </div>
            )}
            {githubLink && (
              <div className="flex mb-2">
                <div className="w-1/5 m-1 font-normal">깃헙링크</div>
                <div className="w-4/5 flex items-center m-1">
                  <a
                    href={githubLink}
                    target="_blank"
                    className="w-64 overflow-hidden text-ellipsis"
                  >
                    {githubLink}
                  </a>
                </div>
              </div>
            )}
            {reviewLink && (
              <div className="flex mb-2">
                <div className="w-1/5 m-1 font-normal">회고록</div>
                <div className="w-4/5 flex items-center m-1">
                  <a
                    href={reviewLink}
                    target="_blank"
                    className="w-64 overflow-hidden text-ellipsis"
                  >
                    {reviewLink}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
