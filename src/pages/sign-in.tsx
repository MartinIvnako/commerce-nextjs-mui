import type { NextPage } from "next";
import Layout from "@/layouts/layout";
import SignInForm from "@/components/auth";

const SignIn: NextPage = () => {
    return (
        <Layout>
            <SignInForm />
        </Layout>
    );
};

export default SignIn;
