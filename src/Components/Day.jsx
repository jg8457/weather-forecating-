import React from "react";

const Day = (props) => {
  return (
    <div className="h-[85%] w-[10rem] font-[500] p-4 flex flex-col justify-between border-solid border-2 border-[#f1f1f150] rounded-[1rem] hover:bg-[#f1f1f133]">
      <p>{props.day}</p>
      <img
        className="h-[5rem] w-[5rem] m-auto"
        src={`/image/${props.cloud}.svg`}
        alt=""
      />
      <p>{Math.round(props.temperature)}°C</p>
      <p className="text-[0.9rem]">{props.desc}</p>
      <p className="text-[0.75rem]">{props.condition}</p>
    </div>
  );
};

export default Day;
