import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { PolitcsPage } from "../pages/politics";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacyTerms" element={<PolitcsPage />} />
    </Routes>
  );
};
