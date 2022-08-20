import type { NextPage } from "next";
import { Grid, Container, Box } from "@mui/material";
import Layout from "@/layouts/layout";
import ProductCard from "@/common/card";

const Home: NextPage = () => {
    return (
        <Layout>
            <Container maxWidth="lg">
                <Box py={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={4}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
