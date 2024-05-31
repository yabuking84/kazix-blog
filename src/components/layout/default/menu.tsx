"use client"

import DarkMode from "./dark-mode"
import LanguageSwitcher from "./lang"


export default function Menu() {

    return (
        <div className="mx-2 flex items-center">
            <DarkMode className="me-10" />
            <LanguageSwitcher />
        </div>
    )
}