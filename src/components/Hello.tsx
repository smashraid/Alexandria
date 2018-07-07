import * as React from "react";

import { Test } from "./Test";
import { NameForm } from "./Form";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <div>
        Hello from {props.compiler} and {props.framework}
        <Test name="Saulo" email="saulo.tsuchida@cignium.com" />
        <NameForm />
    </div>
);