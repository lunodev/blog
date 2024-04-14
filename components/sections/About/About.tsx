import React from "react";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {capitalize} from "@mui/material";
import useLangSelector from "../../../hooks/useLangSelector";
import {JsonData} from "../../../data/data";


function About() {
    const {currentLang} = useLangSelector();


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize((JsonData as any)[currentLang].About.label) || 'loading'}
                </h1>
                <p className="App-Section-Paragraph">
                    {(JsonData as any)[currentLang].About.presentation || 'loading'}
                </p>
            </div>
        </>
    );
}

export default About;