import React from 'react'

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

const Snacks = () => {
    return (
        <div>
            <center>
                <h2>Snack</h2>
            </center>
            <div>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Snack</th>
                            <th>qty</th>
                            <th>Harga</th>
                            <th>Total Harga</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{
                                snacks.map((snack, index) => (
                                    <p>{index + 1}</p>
                                ))
                            }</td>
                            <td>{
                                snacks.map((snack, index) => (
                                    <p>{snack.nama}</p>
                                ))
                            }</td>
                            <td>{
                                snacks.map((snack, index) => (
                                    <p>{snack.qty}</p>
                                ))
                            }</td>
                            <td>{
                                snacks.map((snack, index) => (
                                    <p>{'  Rp ' + snack.harga}</p>
                                ))
                            }</td>
                            <td>{
                                snacks.map((snack, index) => (
                                    <p>{'  Rp ' + snack.harga * snack.qty}</p>
                                ))
                            }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>
                Total Bayar = {total_bayar}
            </h3>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold"><h2>Harga yang lebih dari 5.000</h2></h1>
                    <ul class="col-md-8 fs-4">{snacks.filter((snack) => snack.harga > 5000)
                        .map((snack, index) => (
                            <p>{index + 1}. {snack.nama} : Harga {snack.harga}</p>
                        ))}</ul>
                </div>
            </div>
        </div>
    )
}

export default Snacks
