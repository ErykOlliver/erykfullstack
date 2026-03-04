import { FormEvent } from "react";

export const handleScroll = (e: FormEvent, id: string) => {
    e.preventDefault();
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });

    }
};