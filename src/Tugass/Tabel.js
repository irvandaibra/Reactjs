import React from 'react'
import { Table } from 'react-bootstrap'

const Tabel = ({ merk, editData, hapusData }) => {

    return (
        <Table striped bordered hover color="88d8d8">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Snack</th>
                    <th>Harga</th>
                    <th>Jumlah Barang</th>
                    <th>Total Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {merk.map((snack, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{snack.nama}</td>
                            <td>{snack.harga}</td>
                            <td>{snack.jumlah}</td>
                            <td>{snack.jumlah * snack.harga}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => editData(snack.id)}>Edit</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => hapusData(snack.id)}>Hapus</button>
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        </Table>
    )
}

export default Tabel