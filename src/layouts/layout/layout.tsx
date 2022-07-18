import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { FCC } from "src/types/react";

const Layout: FCC = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
