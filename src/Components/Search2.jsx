import React from "react";

const Search2 = (props) => {
  return (
    <div className="h-fit w-fit">
      <form
        className="flex flex-row justify-center"
        action=""
        onSubmit={props.fetchWeather}
      >
        <input
          className="w-[15rem] h-[2.5rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] outline-none border-none text-[black]"
          type="text"
          placeholder="Enter your city"
          onChange={(e) => props.setCity(e.target.value)}
        />
        <button>
          <img
            className="h-[2.5rem] w-[2.5rem] bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
            src="/image/map1.svg"
            alt=""
          />
        </button>
        <button className="h-[2.5rem] w-[5rem] p-2 rounded-r-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[teal]">
          {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
          Search
        </button>
      </form>
    </div>
  );
};

export default Search2;
