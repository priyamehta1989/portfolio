import React from "react";
import image from "../image4.jpg";
import components from "./components.css";
export default function Home() {
    return (
        <main>
            <img src={image} alt="web developer page not found" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-red-900 shadow font-bold cursive leading-none lg:leading-snug home-name text_shadow_format" >
                    Hello. I'm Priya Mehta. 
                </h1>
            </section>
        </main>
    )
} 