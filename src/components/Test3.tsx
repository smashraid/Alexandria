import * as React from "react";

import { Card } from "./Test2";

export interface TestProps {
    name: string;
    email: string;
    leftContent?: React.ReactNode;
}

export interface TestState {
    title: string;
}

export class Test extends React.Component<TestProps, TestState> {
    panel: React.RefObject<HTMLDivElement>;

    constructor(props: TestProps) {
        super(props);
        this.state = {
            title: "Blog"
        };

        this.panel = React.createRef();
    }

    render(): React.ReactNode {
        return (
            <Card ref={this.panel} title="Card1" content="This is a basic card with some sample content." />
        );
    }
}
