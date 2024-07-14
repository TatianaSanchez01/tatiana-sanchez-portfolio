import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useThemeSwitcher = (): [string, Dispatch<SetStateAction<string>>] => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const userPreference = window.localStorage.getItem('theme');
            const mediaQuery = window.matchMedia(preferDarkQuery);
            return userPreference ? userPreference : (mediaQuery.matches ? "dark" : "light");
        }
        return "light";
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userPreference = window.localStorage.getItem('theme');
            const mediaQuery = window.matchMedia(preferDarkQuery);
            const check = userPreference ? userPreference : (mediaQuery.matches ? "dark" : "light");
            setMode(check);
            if (check === "dark") {
                window.localStorage.setItem("theme", "dark")
                document.documentElement.classList.add('dark');
            } 
            if(check === 'light') {
                window.localStorage.setItem("theme", "light")
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add('dark');
            } else {
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove('dark');
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
