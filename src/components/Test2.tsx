import * as React from "react";

import { ThemeContext, UserContext, HelpContext } from "../util";

interface Test2Props {
    theme?: string;
    refAmount?: React.RefObject<HTMLLabelElement>;
    title?: string;
    content?: string;
}

interface Test2State {
    counter: number;
    error: string;
}

export const Card = React.forwardRef((props: Test2Props, ref: React.RefObject<HTMLDivElement>) => (
    <div ref={ref} className="row">
        <div className="card small">
            <div className="section">
                <h3>{props.title}</h3>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    </div>
));

export class Test2 extends React.Component<Test2Props, Test2State> {

    constructor(props: Test2Props) {
        super(props);
        this.state = {
            counter: 0,
            error: ""
        };
        this.onClick = this.onClick.bind(this);
        this.testRef = this.testRef.bind(this);

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps: Test2Props, prevState: Test2State): void {
        console.log("OLD", prevProps);
        console.log("NEW", prevState);
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("error", error);
        console.log("errorInfo", errorInfo);
    }

    handleClick = () => {
        try {
            // Do something that could throw
        } catch (error) {
            this.setState({ error });
        }
    }

    private onClick(): void {
        const newClicks = this.state.counter + 1;
        this.setState({ counter: newClicks });
        //this.props.refAmount!.current!.innerText = "Oh Gianfra!!";
    }

    testRef = (): void => {
        alert("This is a test ref");
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
                                    <label ref={this.props.refAmount}></label>
                                </div>
                            )}
                        </HelpContext.Consumer>
                        <div className="text-center">
                            <button className="tertiary" onClick={this.onClick} >Increase {this.state.counter}</button>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}