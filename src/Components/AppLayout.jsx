import { Outlet } from "react-router-dom";
import Header from "./Header";
import AuthProvider from "./AuthProvider";

const AppLayout = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  );
};

export default AppLayout;
