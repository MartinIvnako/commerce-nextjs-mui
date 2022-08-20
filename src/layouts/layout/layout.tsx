import Header from "@/layouts/header";
import { FCC } from "src/types/react";

const Layout: FCC = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
