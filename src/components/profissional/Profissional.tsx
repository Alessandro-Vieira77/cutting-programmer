import { useState } from "react";
import "./profissional.css";
// import { FaCircleUser } from "react-icons/fa6";

import image1 from "/img/alessandro.jpg";
import image2 from "/img/rony.png";

export function Profissional() {
  // const [selectedOption, setSelectedOption] = useState("profissional1");
  const [selected, setSelected] = useState("option1");
  return (
    <div className="radio-container mb-5">
      <div className="w-full flex justify-center gap-4">
        <label className="custom-radio flex flex-col">
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selected === "option1"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="checkmark mb-1">
            {/* <FaCircleUser className="w-full h-full" color="#FFFF" /> */}
            <img
              className="w-full h-full rounded-full"
              src={image1}
              alt="profissiona 1"
            />
          </span>
          <p className="text-white text-sm">Dev Front-End</p>
        </label>

        <label className="custom-radio flex-col ">
          <input
            type="radio"
            name="option"
            value="option2"
            checked={selected === "option2"}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="checkmark mb-1">
            {/* <FaCircleUser className="w-full h-full" color="#FFFF" /> */}
            <img
              className="w-full h-full rounded-full"
              src={image2}
              alt="profissional 2"
            />
          </span>
          <p className="text-white text-sm">Agrônomo</p>
        </label>
      </div>
    </div>
  );
}
