import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisiblity] = useState<boolean>(false);

    function changeVisibility() {
        setVisiblity(!visible);
    }

    return (
        <div>
            <Button onClick={changeVisibility}>Reveal Answer</Button>
            {visible && <div> 42 </div>}
        </div>
    );
}
