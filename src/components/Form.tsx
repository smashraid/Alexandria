import * as React from "react";

interface FormProps {

}

interface FormState {
    value: string;
    description: string;
    flavor: string;
}

export class NameForm extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
            value: "",
            description: "",
            flavor: "lime"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
        this.setState({ value: e.target.value.toUpperCase() });
    }

    handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.name, e.target.value)
        this.setState({ description: e.target.value.toUpperCase() });
    }

    handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.name, e.target.value)
        this.setState({ flavor: e.target.value.toUpperCase() });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        alert(`form was submitted: ${JSON.stringify(this.state)}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <label>Name:</label>
                    </div>
                    <div className="col-sm-12 col-md">
                        <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <label>Description:</label>
                    </div>
                    <div className="col-sm-12 col-md">
                        <textarea name="description" value={this.state.description} onChange={this.handleTextAreaChange} ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <label>Pick your favorite flavor:</label>
                    </div>
                    <div className="col-sm-12 col-md">
                        <select name="flavor" value={this.state.flavor} onChange={this.handleSelectChange} >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                </div>
                <input type="submit" className="primary" value="Submit" />
            </form>
        );
    }
}