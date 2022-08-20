import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@/common/link";
import Image from "next/image";

export default function Header() {
    return (
        <React.Fragment>
            <Paper variant="outlined">
                <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Link align="center" noWrap href="/" sx={{ flex: 1 }}>
                        <Image src="/logo.svg" height={50} width={50} alt="" />
                    </Link>

                    <Link href="/sign-in">Sign in</Link>
                </Toolbar>
            </Paper>
        </React.Fragment>
    );
}
