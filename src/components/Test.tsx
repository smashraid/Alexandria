import * as React from "react";

export interface TestProps {
    name: string;
    email: string;
    leftContent?: React.ReactNode
}

export interface TestState {
    title: string;
}

export class Test extends React.Component<TestProps, TestState> {
    nums: Array<number> = [1, 2, 3, 4, 5];

    constructor(props: TestProps) {
        super(props);
        this.state = {
            title: "Learning React!"
        };
        this.titleUpdate = this.titleUpdate.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    titleUpdate = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
        console.log(typeof (e.type));
        console.log(id);
        this.setState({
            title: "Learning State!"
        });
    }

    render(): React.ReactChild {
        return (
            <div>
                <h1>Hola mundo! {this.props.name}</h1>
                <h2>{this.state.title}</h2>
                <ul>
                    {this.nums.map((n, i) => <li key={n.toString() + i}>{n}</li>)}
                </ul>
                <button onClick={(e) => this.titleUpdate(e, 5)}>Click</button>
                <div>
                    {this.props.children}
                </div>
                <div>
                    {this.props.leftContent}
                </div>
            </div>
        );
    }
}
