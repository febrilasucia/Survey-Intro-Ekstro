import React from "react";

const ResultPage = ({ introvertCount, extrovertCount }) => {
  const isIntrovert = introvertCount > extrovertCount;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Hasil Tes</h1>
      <p className="text-xl mb-8">{`Kamu termasuk ${
        isIntrovert ? "introvert" : "ekstrovert"
      }`}</p>
      <p className="text-lg">{`Jumlah pernyataan introvert: ${introvertCount}`}</p>
      <p className="text-lg">{`Jumlah pernyataan ekstrovert: ${extrovertCount}`}</p>
    </div>
  );
};

export default ResultPage;
