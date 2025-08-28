import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import routes from "../constants/routes";
import { cn } from "../lib/utils";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { FaCode } from 'react-icons/fa';

export default function Rfx() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div
            className={cn(
                "fixed left-0 top-1/2 -translate-y-1/2 z-50"
            )}
            aria-label="Quick route switch"
        >
            <ToggleGroup
                type="single"
                value={pathname}
                onValueChange={(val) => val && navigate(val)}
                orientation="vertical"
                className={cn(
                    "flex flex-col gap-1 rounded-2xl border bg-background/80 backdrop-blur p-1 shadow-lg"
                )}
            >
                {routes.map((r) => (
                    <ToggleGroupItem
                        key={r.path}
                        value={r.path}
                        aria-label={r.label}
                        className={cn(
                            "rounded-xl h-10 px-3 justify-start gap-2",
                            "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        )}
                    >
                        <span className="text-sm font-medium">{r.label}</span>
                    </ToggleGroupItem>
                ))}
                <a href="https://github.dev/LarryLeNW/rfx-lebatrinh">
                    <ToggleGroupItem
                        value="code"
                        className={cn(
                            "rounded-xl h-10 px-3 justify-start gap-2",
                            "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        )}
                    >
                        <FaCode></FaCode>
                    </ToggleGroupItem>
                </a>

            </ToggleGroup>
        </div>
    );
}
