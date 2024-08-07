"use client";

import { useEffect, useState } from "react";

import { Progress } from "./ui/progress";

type ProgressBarProps = {
    levels: number;
};

export function ProgressBar({ levels }: ProgressBarProps) {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="hidden">{levels}</div>
            <Progress value={progress} className="h-2 w-full" />
        </div>
    );
}
