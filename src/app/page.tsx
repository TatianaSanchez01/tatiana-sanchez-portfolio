"use client";
import MainPage from "./components/organisms/MainPage";
import TransitionEffect from "./components/atoms/TransitionEffect";

export default function Home() {
    return (
        <>
            <TransitionEffect />
            <MainPage />
        </>
    );
}
