import {useRouter} from "next/navigation";
import {useEffect} from "react";


export default function HomeIndex(){
    const router = useRouter()


    useEffect(() => {
        router.push(`/home`);
    }, []);


    return null;
}
