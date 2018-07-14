import * as React from "react";

import { ThemeContext, UserContext, HelpContext } from "../util";

interface Test2Props {
    theme?: string;
}

interface Test2State {
    counter: number;
}

export class Test2 extends React.Component<Test2Props, Test2State> {
    constructor(props: Test2Props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps: Test2Props, prevState: Test2State): void {
        console.log("OLD", prevProps);
        console.log("NEW", prevState);
    }

    private onClick(): void {
        const newClicks = this.state.counter + 1;
        this.setState({ counter: newClicks });
    }

    render(): React.ReactNode {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={"collapse " + theme} >
                        <input type="checkbox" id="collapse-section1" aria-hidden="true" />
                        <label htmlFor="collapse-section1" aria-hidden="true">Collapse section 1</label>
                        <UserContext.Consumer>
                            {user => (
                                <div>
                                    <p>This is the first section of the collapse {theme} - {user}</p>
                                </div>
                            )}
                        </UserContext.Consumer>
                        <input type="checkbox" id="collapse-section2" aria-hidden="true" />
                        <label htmlFor="collapse-section2" aria-hidden="true">Collapse section 2</label>
                        <HelpContext.Consumer>
                            {help => (
                                <div>
                                    <p>This is the second section of the collapse {theme} - {help.state}</p>
                                    <a href="#" onClick={e => help.update(e, "helptest")}>Click me</a>
                                </div>
                            )}
                        </HelpContext.Consumer>
                        <button onClick={this.onClick} >Increase</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}