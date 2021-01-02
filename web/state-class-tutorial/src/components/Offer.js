import React from 'react';
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getRole} from "dom-accessibility-api";

class Offer extends React.Component {
    role;

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        }

        this.loadOffers();
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nazwa nieruchomości</TableCell>
                            <TableCell align="right">Adres</TableCell>
                            <TableCell align="right">Powierzchnia(m2)</TableCell>
                            <TableCell align="right">Cena(zł)</TableCell>
                            <TableCell  align="right"><p hidden={!this.isAdmin()}>Akcje</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.offers.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.area}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right"><button onClick={() => this.deleteOffer(row.id)} hidden={!this.isAdmin()}>Usuń ofertę</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    isAdmin() {
        if (localStorage.getItem('role') === 'ROLE_ADMIN'){
            return true;
        }else {
            return false;
        }
    }


    loadOffers() {
        const context = this;
        axios.get('http://localhost:8080/offers', {
            headers: {
                Authorization: localStorage.getItem('tokenKey')
            }
        }).then(function (response) {
            context.setState({offers: response.data});
        }).catch(function () {
            alert('Nie pobrano danych');
        });
    }

    deleteOffer(id) {
        return fetch('http://localhost:8080/offers/delete/' + id, {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem('tokenKey'),
                'Content-Type': 'application/json'
            }
            }).then(window.location.reload())
            .catch(err => err);
    }

}

export default Offer;