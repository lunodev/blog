import React from "react";
import {capitalize} from "@mui/material";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import useLangSelector from "../../../hooks/useLangSelector";
import {JsonData} from "../../../data/data";


function Contact() {
    const {currentLang} = useLangSelector();


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize((JsonData as any)[currentLang].Contact.label) || 'loading'}
                </h1>
                <h2 className={"Section-subtitle"}>
                    {capitalize((JsonData as any)[currentLang].Contact.Info.label) || 'loading'}
                </h2>
                <p>
                <span>
                  <i className='fa fa-map-marker'></i>
                    {capitalize((JsonData as any)[currentLang].Contact.address.label) || 'loading'}
                </span>
                    {capitalize((JsonData as any)[currentLang].Contact.address.value) || 'loading'}
                </p>
            </div>
        </>
    );
}

export default Contact;