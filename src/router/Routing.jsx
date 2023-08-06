import ErrorPage from "../components/errors/ErrorPage";
import PublicLayout from "../components/layout/public/PublicLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstStep from "../components/multistep/FirstStep";
import SecondStep from "../components/multistep/SecondStep";
import ThirdStep from "../components/multistep/ThirdStep";
import FourthStep from "../components/multistep/FourthStep";
import ThanksPage from "../components/thanks/ThanksPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<FirstStep />}></Route>
          <Route path="select-plan" element={<SecondStep />}></Route>
          <Route path="add-ons" element={<ThirdStep />}></Route>
          <Route path="summary" element={<FourthStep />}></Route>
          <Route path="thanks" element={<ThanksPage />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
