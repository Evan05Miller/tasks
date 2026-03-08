import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🐰" | "🍀";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    const nextAlphabet: Record<Holiday, Holiday> = {
        "🐰": "🎄",
        "🎄": "🎃",
        "🎃": "🎆",
        "🎆": "🍀",
        "🍀": "🐰",
    };

    const nextYear: Record<Holiday, Holiday> = {
        "🐰": "🍀",
        "🍀": "🎆",
        "🎆": "🎃",
        "🎃": "🎄",
        "🎄": "🐰",
    };

    function advanceAlphabet() {
        setHoliday(nextAlphabet[holiday]);
    }

    function advanceYear() {
        setHoliday(nextYear[holiday]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>

            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>

            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
