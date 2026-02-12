import React from "react";
import "./App.css";
import doggo from "./doggo.webp";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="App">
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript
                        </header>
                        <h1>This is a header</h1>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. This is Evan Miller Hello
                            World!
                        </p>

                        <img
                            src={doggo}
                            alt="Picture of doggo staring at the camera"
                        />
                        <div
                            style={{
                                width: "200px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>

                        <ul>
                            <li>First Item</li>
                            <li>Second Item</li>
                            <li>Third Item</li>
                        </ul>

                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </div>
                </Col>

                <Col>
                    <p>This is a second col</p>
                    <div
                        style={{
                            width: "200px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
