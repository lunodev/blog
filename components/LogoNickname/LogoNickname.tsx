import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "next/link";


function LogoNickname() {
    return (
        <Link
            className={"LogoNickname"}
            href={"/about"}
        >
            <Typography
                component={"div"}
                variant={"h6"}
            >
                {`LUNO Dev`}
            </Typography>
        </Link>
    );
}


export default LogoNickname;