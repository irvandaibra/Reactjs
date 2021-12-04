import React from 'react'
import { Table, Card } from 'react-bootstrap'

const snacks = [
    {
        nama: 'Lays',
        qty: 85,
        harga: 8000

    },
    {
        nama: 'Chitato',
        qty: 125,
        harga: 7000
    },
    {
        nama: 'Doritoz',
        qty: 160,
        harga: 15000
    },
    {
        nama: 'Sukro',
        qty: 110,
        harga: 6000
    },
    {
        nama: 'Cheetos',
        qty: 190,
        harga: 11000
    },
    {
        nama: 'Malkis Abon',
        qty: 290,
        harga: 1000
    },
    {
        nama: 'Malkis Crackers',
        qty: 320,
        harga: 1000
    },
    {
        nama: 'Malkis Cokelat Kelapa',
        qty: 300,
        harga: 1000
    },
    {
        nama: 'Jetz',
        qty: 135,
        harga: 6000
    },
    {
        nama: 'Pringles',
        qty: 155,
        harga: 12000
    },
    {
        nama: 'krissbee',
        qty: 130,
        harga: 2000
    }
]

const total_bayar = snacks.reduce((total_harga, snack) => total_harga + snack.harga * snack.qty, 0)
const total_JM = snacks.reduce((total_harga, snack) => total_harga + snack.qty, 0)

const Tabel = () => {
    return (
        <div>
            <div>
                <Table striped bordered hover variant="dark">
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
                    {snacks.map((snack, index) => (
                        <tbody>

                            <tr>
                                <td>
                                    <p>{index + 1}</p>
                                </td>
                                <td>
                                    <p>{snack.nama}</p>
                                </td>
                                <td>
                                    <p>{'  Rp ' + snack.harga}</p>
                                </td>
                                <td>
                                    <p>{snack.qty}</p>
                                </td>
                                <td>
                                    <p>{'  Rp ' + snack.harga * snack.qty}</p>
                                </td>
                                <td><p><button>Delete</button></p>

                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
            <br />
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h3>Jumlah Keseluruhan Snack</h3>
                        <p>
                            <h4>
                                Jumlah Barang = {total_JM}
                            </h4></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h3>Jumlah Harga Keseluruhan Snack</h3>
                        <p><h4>
                            Total Bayar = {total_bayar}
                        </h4></p>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <Card>
                    <Card.Header as="h5">Note!</Card.Header>
                    <Card.Body>
                        <Card.Title>Daftar Snack Harga Di Atas 5.000</Card.Title>
                        <Card.Text>
                            {snacks.filter((snack) => snack.harga > 5000)
                                .map((snack, index) => (
                                    <p>{index + 1}. {snack.nama} : Harga {snack.harga}</p>
                                ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Tabel