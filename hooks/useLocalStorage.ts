import {useEffect, useState} from "react";


function useLocalStorage(storageKey: string) {
    const [prevStorageValue, updatePrevStorageValue] = useState<string | null>(null);
    const [newLocalStorageValue, updateNewLocalStorageValue] = useState<string | null>(null);


    useEffect(() => {
        const prevStorageValue = window.localStorage.getItem(storageKey);

        if(prevStorageValue) updatePrevStorageValue(prevStorageValue);
    }, []);

    useEffect(() => {
        if (newLocalStorageValue && newLocalStorageValue !== prevStorageValue)
            window.localStorage.setItem(storageKey, newLocalStorageValue);
    }, [newLocalStorageValue]);


    return ({
        localStorageValue: newLocalStorageValue,
        updateLocalStorageValue: updateNewLocalStorageValue,
    });
}


export default useLocalStorage;
