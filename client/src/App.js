import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Signup from "./Components/Signup";
import Emailcheck from "./Components/Emailcheck.js";
import Friends from "./Components/Friends.js";
import Income from "./Components/Income.js";
import Expenses from "./Components/Expenses.js";
import Authemail from "./Components/Authemail.js";
import Forgotpassword from "./Components/Forgotpassword.js";
import Onboarding from "./Components/Onboarding.js";
import Dashboard from "./Components/Dashboard.js";
import Loading from "./Components/Loading.js";
import Alert from "./Components/Alert.js";
import { useEffect, useState } from "react";
import Getotp from "./Components/Getotp.js";
import Stocks from "./Components/Stocks.js";
import Header from "./Components/Header.js";
import Setting from "./Components/Setting.js";
import Chatpage from "./Components/Chatpage";
import SideDrawer from "./Components/SideDrawer.js";
import { Switch, Toast, useToast } from "@chakra-ui/react";
import Footer from "./Components/Footer.js";
import { CryptoState } from "./Components/CryptoContext.js";

const App = () => {
  const { isSwitchOn, setIsSwitchOn } = CryptoState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log(global);
  const toast = useToast();
  const [alert, setAlert] = useState(null);
  const [login, setlogin] = useState(cookies.name ? true : false);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };


  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
    // Handle other actions based on the switch state
  };

  return (
    <BrowserRouter>
      {login && <Header />}

      <Routes>
        {login ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Signup showAlert={showAlert} />} />
        )}
        <Route
          path="/emailcheck"
          element={<Emailcheck showAlert={showAlert} />}
        />
        <Route
          path="/authemail"
          element={<Authemail showAlert={showAlert} />}
        />
        <Route path="/friends" element={<Friends />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/sidedrawer" element={<SideDrawer />} />
        <Route
          path="/forgotpassword"
          element={<Forgotpassword showAlert={showAlert} />}
        />
        <Route
          path="/onboarding"
          element={<Onboarding showAlert={showAlert} />}
        />
        <Route path="/loading" element={<Loading />} />
        <Route path="/getotp" element={<Getotp showAlert={showAlert} />} />
        <Route path="/stocks" element={<Stocks showAlert={showAlert} />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};
export default App;
