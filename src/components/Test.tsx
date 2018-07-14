import * as React from "react";

import { ThemeContext, UserContext } from "../util";

import { Test2 } from "./Test2";

export interface TestProps {
    name: string;
    email: string;
    leftContent?: React.ReactNode;
}

export interface TestState {
    title: string;
}


export class Test extends React.Component<TestProps, TestState> {
    nums: Array<number> = [1, 2, 3, 4, 5];
    step: React.RefObject<HTMLInputElement>;

    constructor(props: TestProps) {
        super(props);
        this.state = {
            title: "Learning React!"
        };
        this.titleUpdate = this.titleUpdate.bind(this);
        this.jump = this.jump.bind(this);
        this.step = React.createRef();
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    jump() {
        this.step.current!.value = "Oh Peralta";
    }

    titleUpdate = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
        console.log(typeof (e.type));
        console.log(id);
        this.setState({
            title: "Learning State!"
        });
        this.jump();
    }

    render(): React.ReactChild {
        return (
            <ThemeContext.Provider value="dark">
                <UserContext.Provider value="peraltin" >
                    <div>
                        <h1>Hola mundo! {this.props.name}</h1>
                        <h2>{this.state.title}</h2>
                        <ul>
                            {this.nums.map((n, i) => <li key={n.toString() + i}>{n}</li>)}
                        </ul>
                        <input type="text" name="step" id="step" ref={this.step} />
                        <button onClick={(e) => this.titleUpdate(e, 5)}>Click</button>
                        <div>
                            {this.props.children}
                        </div>
                        <div>
                            {this.props.leftContent}
                        </div>
                        <Test2 theme={this.state.title} />
                    </div>
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}
