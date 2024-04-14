import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import * as React from "react";
import Link from "next/link";


function LUnoDevAvatar() {
    return (
        <div className={"App-LUnoDevAvatar"}>
            <IconButton className={"App-logo"}>
                <Link style={{display: "flex"}} href={`/about`}>
                    <img
                        className={"App-logo-img"}
                        src={`/img/logo.png`}
                        alt={"Avatar"}
                    />
                </Link>
            </IconButton>
        </div>
    );
}


export default LUnoDevAvatar;
