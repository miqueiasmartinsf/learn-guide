import { Check } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Imgfootball from "@/public/football.svg";

type Props = {
    title: string;
    id: number;
    imageSrc: string;
    description: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

export const Card = ({
    title,
    id,
    imageSrc,
    description
    disabled,
    onClick,
    active,
}: Props) => {
    return (
        <div
            className={cn(
                "h-full min-h-[400px] min-w-[250px] rounded-xl border-2 border-b-4 active:border-b-2",
                disabled && "pointer-events-none opacity-50",
            )}
        >
            <div className="min-[24px] flex w-full items-center justify-end">
                {active && (
                    <div className="absolute z-10 flex items-center justify-center rounded-full bg-green-600 p-1.5">
                        <Check className="h-4 w-4 stroke-[4] text-white" />
                    </div>
                )}
            </div>
            <div className="relative z-0 mx-auto w-full rounded-t-xl bg-white">
                <Image
                    src={Imgfootball}
                    alt={title}
                    className="mx-auto w-full max-w-[250px] rounded-lg rounded-t-xl object-cover"
                />
            </div>
            <div className="mt-2 h-1/2 w-full gap-2 rounded-b-xl p-4">
                <h2 className="mt-2 font-bold text-neutral-700">{title}</h2>

                <p className="h-8">
                    {description}
                </p>

                <Button className="mt-8 w-full" onClick={() => onClick(id)}>
                    Começar
                </Button>
            </div>
        </div>
    );
};
