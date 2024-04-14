import React, {useEffect, useState} from "react";
import {capitalize} from "@mui/material";
import ResponsiveAppBar from "../../ResponsiveAppBar/ResponsiveAppBar";
import {useAppSelector} from "../../../lib/hooks";
import Building from "../../Building/Building";
import {JsonData} from "../../../data/data";
import Link from "next/link";


export default function Blog(props: {
    posts: [{
        slug: string,
        frontMatter: { [key: string]: string }
    }]
}) {
    const {posts} = props;
    const langSelector = useAppSelector(state => state.langSelector)
    const [currentLang, setCurrentLang] = useState(langSelector.value)


    useEffect(() => {
        setCurrentLang(langSelector.value)
    }, [langSelector.value]);


    return (
        <>
            <ResponsiveAppBar/>
            <div className="App-Section">
                <h1 className={"Section-title"}>
                    {capitalize((JsonData as any)[currentLang].Blog.label)}
                </h1>
            </div>
            <Building/>
            <div>
                {posts.map(({slug, frontMatter: {title, description}}) => (
                    <Link key={slug} href={`/blog/${slug}`} passHref>
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <hr/>
                    </Link>
                ))}
            </div>
        </>
    );
}
