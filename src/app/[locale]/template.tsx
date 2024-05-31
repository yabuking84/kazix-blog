"use client"

import PageTransition from "@/components/transitions/page";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return <PageTransition>{children}</PageTransition>
}