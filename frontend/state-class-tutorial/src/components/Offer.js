import React from 'react';
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Offer extends React.Component {

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
                                <button onClick={() => this.deleteOffer(row.id)}>Usuń{row.id}</button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
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