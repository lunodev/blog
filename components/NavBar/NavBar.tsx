import * as React from "react";
import {ACTIVE_PAGE, PAGES} from "../../constants/pages";
import Button from "@mui/material/Button";
import {JsonData} from "../../data/data";
import useLangSelector from "../../hooks/useLangSelector";
import useActivePage from "../../hooks/useActivePage";
import Link from "next/link";


function NavBar() {
    const {currentLang} = useLangSelector();
    const {updateActivePageOnStore, currentActivePage} = useActivePage();


    return (
        <>
            {PAGES.map((page: ACTIVE_PAGE, index: number) => {
                return (
                    <Link
                        // className={({ isActive, isPending }) => isPending ? "pending" : page === currentActivePage ? "active" : isActive ? "active" : ""}
                        key={`${index}-${page}`}
                        onClick={() => updateActivePageOnStore(page)}
                        href={`/${page.toLowerCase()}`}
                    >
                        <Button
                            key={page}
                            sx={{height: "100%", color: "inherit"}}
                        >
                            {(JsonData as any)[currentLang][page].label}
                        </Button>
                    </Link>
                );
            })}
        </>
    );
}


export default NavBar;
