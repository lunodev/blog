import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {capitalize} from "@mui/material";
import useLangSelector from "../../../hooks/useLangSelector";
import Building from "../../Building/Building";
import {JsonData} from "../../../data/data";


function Home() {
    const {currentLang} = useLangSelector();


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize((JsonData as any)[currentLang].Home.label)}
                </h1>
            </div>
            <Building/>
        </>
    );
}


export default Home;
