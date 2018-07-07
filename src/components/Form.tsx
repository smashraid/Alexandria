import * as React from "react";

interface FormProps {

}

interface FormState {
    value: string;
    description: string;
}

export class NameForm extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
            value: "",
            description: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target);
        this.setState({ value: e.target.value.toUpperCase() });
    }

    handleTexAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.name, e.target.value)
        this.setState({ description: e.target.value.toUpperCase() });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert("a name was submitted: " + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Description
                    <textarea name="description" value={this.state.description} onChange={this.handleTexAreaChange} ></textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}