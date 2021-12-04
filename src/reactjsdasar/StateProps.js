import React from "react";
import Operan from "./Operan"

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Bakso',
            favorit: 'Makanan'
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.favorit}</h1>
                <p>{this.state.makanan}</p>
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} />
            </div>

        )
    }
}