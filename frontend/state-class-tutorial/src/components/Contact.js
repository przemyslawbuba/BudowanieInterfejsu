import React, {Component} from 'react';

class Contract extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    render() {
        return (
            <form className="contractForm" onSubmit={this.contactSubmit.bind(this)}>
                <h2>Formularz kontaktowy</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Imię</label><br/>
                        <input type="text" className="form-control"
                               name="name" placeholder="Uzupełnij imię" onChange={this.handleChange.bind(this, "name")}
                               value={this.state.fields["name"]}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Nazwisko</label><br/>
                        <input type="text" className="form-control"
                               name="surname" placeholder="Uzupełnij nazwisko"
                               onChange={this.handleChange.bind(this, "surname")} value={this.state.fields["surname"]}/>
                        <span style={{color: "red"}}>{this.state.errors["surname"]}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Adres e-mail</label><br/>
                        <input type="text" className="form-control"
                               name="email" placeholder="Uzupełnij adres e-mail"
                               onChange={this.handleChange.bind(this, "email")}
                               value={this.state.fields["email"]}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div>
                        <label htmlFor="query">Treść pytania</label><br/>
                        <textarea onChange={this.handleChange.bind(this, "query")}
                                  placeholder={"Uzupełnij treść pytania"}></textarea>
                    </div>
                    <span style={{color: "red"}}>{this.state.errors["query"]}</span>
                </fieldset>

                <button type="submit" className="btn btn-primary">Wyślij</button>
            </form>
        )
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
            // wysylanie maila

        } else {
            alert("Form has errors.")
        }

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let isValid = true;

        //Name
        if (!fields["name"]) {
            isValid = false;
            errors["name"] = "Imię nie może być puste";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["name"] = "Only letters";
            }
        }
        //surname
        if (!fields["surname"]) {
            isValid = false;
            errors["surname"] = "Nazwisko nie może być puste";
        }

        if (typeof fields["surname"] !== "undefined") {
            if (!fields["surname"].match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["surname"] = "Only letters";
            }
        }
        //email
        if (!fields["email"]) {
            isValid = false;
            errors["email"] = "Adres kontaktowy nie może być pusty";
        }
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                isValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        //query
        if (!fields["query"]) {
            isValid = false;
            errors["query"] = "Treść pytania nie może być pusta";
        } else if (fields["query"].length < 20) {
            isValid = false;
            errors["query"] = 'Treść musi zawierać przynajmniej 20 znaków'
        }
        this.setState({errors: errors});
        return isValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }
}


export default Contract;