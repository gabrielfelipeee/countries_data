import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
    const pageRef = document.documentElement.classList;

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [dark, setDark] = useState(systemPreference);

    useEffect(() => {
        dark && pageRef.add("dark");
    }, []);

    const toggle = () => {
        pageRef.toggle("dark");
        setDark(!dark);
    };

    return (
        <div className="">
            <MoonIcon
                onClick={toggle}
                className="h-8 text-dark_elements dark:text-dark_text_and_light_elements cursor-pointer block dark:hidden"
            />
            <SunIcon
                onClick={toggle}
                className="h-8 text-dark_elements dark:text-dark_text_and_light_elements cursor-pointer hidden dark:block"
            />
        </div>
    )
}
export default ToggleTheme;