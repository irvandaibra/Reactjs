import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000

    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 15000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    }
]

const total_bayar = makanans.reduce((total_harga, makanan) => total_harga + makanan.harga, 0)

const Map = () => {
    return (
        <div>
            <h2>Maping</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <p>{index + 1} {makanan.nama + ' : Rp ' + makanan.harga}</p>
                ))}
            </ul>
            <h3>
                Total Bayar = {total_bayar}
            </h3>
            <h2>Map Filter Harga yang lebih dari 11.000</h2>
            <ul>
                {makanans.filter((makanan) => makanan.harga > 11000)
                    .map((makanan, index) => (
                        <p>{index + 1}. {makanan.nama} : Harga {makanan.harga}</p>
                    ))}
            </ul>
        </div>
    )
}

export default Map