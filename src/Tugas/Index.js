import React from 'react'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends React.Component {
    render() {
        return (
            <div>
                < NavbarComponent />
                <div className="container mt-4"><Tabel /></div>
                <div className="container mt-4"><Formulir /></div>
                <h2>Martabak</h2>
            </div>
        )
    }
}