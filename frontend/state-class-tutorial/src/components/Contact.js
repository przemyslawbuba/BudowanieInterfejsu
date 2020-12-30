import React, {Component} from 'react';

class Contract extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {name:localStorage.getItem('contactName'), surname:localStorage.getItem('contactSurname'), email:localStorage.getItem('contactEmail'), query:localStorage.getItem('contactQuery')},
            errors: {}
        }
    }

    render() {
        return (
            <form className="contractForm" onSubmit={this.contactSubmit.bind(this)} id="contactForm" ref={(el) => this.myFormRef = el}>
                <h2>Formularz kontaktowy</h2>
                <fieldset>
                    <div>
                        <label htmlFor="name">Imię</label><br/>
                        <input id="name" placeholder="Uzupełnij imię" onChange={this.handleChange.bind(this, "name")}
                               value={this.state.fields["name"]}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>
                    <div>
                        <label htmlFor="surname">Nazwisko</label><br/>
                        <input id="surname" placeholder="Uzupełnij nazwisko"
                               onChange={this.handleChange.bind(this, "surname")} value={this.state.fields["surname"]}/>
                        <span style={{color: "red"}}>{this.state.errors["surname"]}</span>
                    </div>
                    <div>
                        <label htmlFor="email">Adres e-mail</label><br/>
                        <input id="email" placeholder="Uzupełnij adres e-mail"
                               onChange={this.handleChange.bind(this, "email")}
                               value={this.state.fields["email"]}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div>
                        <label htmlFor="query">Treść pytania</label><br/>
                        <textarea id="query" onChange={this.handleChange.bind(this, "query")}
                                  placeholder={"Uzupełnij treść pytania"}></textarea>
                    </div>
                    <span style={{color: "red"}}>{this.state.errors["query"]}</span>
                </fieldset>

                <button type="submit" className="btn btn-primary">Wyślij</button>
                {/*<button onClick={this.clearForm()}>Wyczyść</button>*/}
            </form>
        )
    }

    clearForm(){
        this.state.fields["email"] = '';
        this.state.fields["name"] = '';
        this.state.fields["surname"] = '';
        this.state.fields["query"] = '';
        localStorage.setItem('contactName', '');
        localStorage.setItem('contactSurname', '');
        localStorage.setItem('contactEmail', '');
        localStorage.setItem('contactQuery', '');
        document.getElementById('query').value  = '';
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.Validation()) {
            this.clearForm();
        } else {
            // alert("Form has errors.")
        }

    }

    Validation() {
        let fields = this.state.fields;
        let errors = {};
        let isValid = true;

        //Name
        if (!fields["name"]) {
            isValid = false;
            errors["name"] = "Imię nie może być puste";
        }

        if (typeof fields["name"] !== "undefined") {
            // if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            if (!fields["name"].match(/^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+$/)) {
                isValid = false;
                errors["name"] = "Niepoprawny znak";
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
                errors["surname"] = "Niepoprawny znak";
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
                errors["email"] = "Niepoprawny adres mailowy";
            }
        }
        // query
        if (!fields["query"]) {
            isValid = false;
            errors["query"] = "Treść pytania nie może być pusta";
        } else if (fields["query"].length < 20) {
            isValid = false;
            errors["query"] = 'Treść musi zawierać przynajmniej 20 znaków'
        }
        this.setState({errors: errors});

        if(isValid) {
            var mail = fields["email"];
            var surname = fields["surname"];
            var name = fields["name"];
            var query = fields["query"];
            console.log(JSON.stringify({mail, surname, name, query}));
            sendMail({mail, surname, name, query})
        }

        return isValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});

        if (fields["name"]) {
            localStorage.setItem('contactName', fields["name"])
        }
        if (fields["surname"]) {
            localStorage.setItem('contactSurname', fields["surname"])
        }
        if (fields["email"]) {
            localStorage.setItem('contactEmail', fields["email"])
        }
        if (fields["query"]) {
            localStorage.setItem('contactQuery', fields["query"])
        }

    }



}

function sendMail(contactMail) {
    return fetch('http://localhost:8080/mail/sendMail', {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('tokenKey'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactMail)
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
                console.log(response);
                window.location.reload();
            } else {
                console.log('Somthing happened wrong');
            }
        }).catch(err => err);
}


export default Contract;