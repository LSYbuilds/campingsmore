import { Route, Routes } from "react-router-dom";
import { Wrap } from "./css/layout-style";
import "./App.css";
import Login from "./components/Login";
import Main from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
function App() {
  return (
    // Wrap 스타일드 컴포넌트 입니다
    <Wrap>
      <Routes>
        <Route path="/*" element={<Account />}></Route>
        <Route path="/main/*" element={<Main />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrap>
  );
}

export default App;
