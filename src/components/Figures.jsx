import React from "react";

const Figures = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          src="*/src/assets/office-pic.png"
          alt=""
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-purple-600 font-semibold mb-2">
            We've helped hundreds of companies
          </p>
          <h1 className="text-4xl font-bold mb-8">
            We're only just getting started on our journey
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
