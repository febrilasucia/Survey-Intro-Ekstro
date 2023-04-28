import React from "react";

const StartPage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">
        Tes Apakah Kamu Introvert atau Ekstrovert
      </h1>
      <p className="text-xl mb-8">
        Tes ini akan membantu kamu mengetahui apakah kamu lebih condong ke arah
        kepribadian introvert atau ekstrovert.
      </p>
      <button
        className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold"
        onClick={onStart}
      >
        Mulai
      </button>
    </div>
  );
};

export default StartPage;
