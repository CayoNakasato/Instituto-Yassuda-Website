import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { PolitcsPage } from "../pages/politics";
import { NewsPage } from "../pages/News";
import { MilitaryPage } from "../pages/MillitaryPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacyTerms" element={<PolitcsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/:title" element={<MilitaryPage/>}/>
    </Routes>
  );
};
