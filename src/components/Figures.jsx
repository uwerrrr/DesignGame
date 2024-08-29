import React from "react";
import img from "../../public/assets/images/office-pic.png";

const Stat = ({ number, label }) => (
  <div>
    <p className="text-3xl font-bold text-purple-600">{number}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Figures = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={img} className="rounded-lg shadow-md" />
      </div>

      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-purple-600 font-semibold mb-2">
            {`We've helped hundreds of companies`}
          </p>
          <h1 className="text-4xl font-bold mb-8">
            {`We're only just getting started on our journey`}
          </h1>
          <div className="grid grid-cols-2 gap-8">
            <Stat number="400+" label="Projects completed" />
            <Stat number="600%" label="Return on investment" />
            <Stat number="10k" label="Global downloads" />
            <Stat number="200+" label="5-star reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
