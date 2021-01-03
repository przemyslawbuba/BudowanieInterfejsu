import React, {Component} from 'react';

class AddOffer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {name:localStorage.getItem('offerName'), address:localStorage.getItem('offeraddress'), area:localStorage.getItem('offerArea'), price:localStorage.getItem('offerPrice')},
            errors: {}
        }
    }

    render() {
        return (
            <form className="contractForm" onSubmit={this.contactSubmit.bind(this)} id="contactForm" ref={(el) => this.myFormRef = el}>
                <h2>Dodawanie oferty</h2>
                <fieldset>
                    <div>
                        <label htmlFor="name">Nazwa</label><br/>
                        <input id="name" placeholder="Uzupełnij nazwe" onChange={this.handleChange.bind(this, "name")}
                               value={this.state.fields["name"]}/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </div>
                    <div>
                        <label htmlFor="address">Adres</label><br/>
                        <input id="address" placeholder="Uzupełnij adres" onChange={this.handleChange.bind(this, "address")}
                               value={this.state.fields["address"]}/>
                        <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                    </div>
                    <div>
                        <label htmlFor="area">Powierzchnia(m2)</label><br/>
                        <input id="area"  placeholder="Uzupełnij powierzchnie" onChange={this.handleChange.bind(this, "area")}
                               value={this.state.fields["area"]}/>
                        <span style={{color: "red"}}>{this.state.errors["area"]}</span>
                    </div>
                    <div>
                        <label htmlFor="name">Cena</label><br/>
                        <input id="price"  placeholder="Uzupełnij cene" onChange={this.handleChange.bind(this, "price")}
                               value={this.state.fields["price"]}/>
                        <span style={{color: "red"}}>{this.state.errors["price"]}</span>
                    </div>

                </fieldset>

                <button type="submit" className="btn btn-primary">Zapisz</button>
            </form>
        )
    }

    clearForm(){
        this.state.fields["name"] = '';
        this.state.fields["address"] = '';
        this.state.fields["area"] = '';
        this.state.fields["price"] = '';
        localStorage.setItem('offerName', '');
        localStorage.setItem('offeraddress', '');
        localStorage.setItem('offerArea', '');
        localStorage.setItem('offerPrice', '');
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

        // Nazwa
        if (!fields["name"]) {
            isValid = false;
            errors["name"] = "Nazwa nie może być pusta";
        }


        // //Adres
        if (!fields["address"]) {
            isValid = false;
            errors["address"] = "Adres nie może być pusty";
        }
        //Powierzchnia
        if (!fields["area"]) {
            isValid = false;
            errors["area"] = "Powierzchnia nie może być pusta";
        }

        if (typeof fields["area"] !== "undefined") {
            if (!fields["area"].match('^\\d*\\.?\\d*$')) {
                isValid = false;
                errors["area"] = "Niepoprawny znak";
            }
        }

        //Cena
        if (!fields["price"]) {
            isValid = false;
            errors["price"] = "Cena nie może być pusta";
        }

        if (typeof fields["price"] !== "undefined") {
            if (!fields["price"].match('^\\d*\\.?\\d*$')) {
                isValid = false;
                errors["price"] = "Niepoprawny znak";
            }
        }

        this.setState({errors: errors});


        if(isValid) {
            var name = fields["name"];
            var address = fields["address"];
            var area = fields["area"];
            var price = fields["price"];
            console.log(JSON.stringify({name, address, area, price}));
            saveOffer({name, address, area, price})
        }

        return isValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});

        if (fields["name"]) {
            localStorage.setItem('offerName', fields["name"])
        }
        if (fields["address"]) {
            localStorage.setItem('offeraddress', fields["address"])
        }
        if (fields["area"]) {
            localStorage.setItem('offerArea', fields["area"])
        }
        if (fields["price"]) {
            localStorage.setItem('offerPrice', fields["price"])
        }
    }
}

function saveOffer(offer) {
    return fetch('http://localhost:8080/offers/addOffer', {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('tokenKey'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(offer)
    })
        .then(response => {
                console.log(response);
                console.log('koniecZapisu');
                window.location.reload();
            return response;

        }).catch(err => err);
}

export default AddOffer;