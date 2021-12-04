import React from 'react'
// import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'
import Formulir from './Formulir'

export default class Crud extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            merk: [],
            nama: "",
            harga: "",
            jumlah: "",
            id: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
                merk: [
                    ...this.state.merk,
                    {
                        id: this.state.merk.length + 1,
                        nama: this.state.nama,
                        harga: this.state.harga,
                        jumlah: this.state.jumlah
                    },
                ],
            });
        }
        else {
            const snackYangSelainDiPilih = this.state.merk
                .filter((snack) => snack.id !== this.state.id)
                .map((filterSnack) => {
                    return filterSnack
                });

            this.setState({
                merk: [
                    ...snackYangSelainDiPilih,
                    {
                        id: this.state.merk.length + 1,
                        nama: this.state.nama,
                        harga: this.state.harga,
                        jumlah: this.state.jumlah
                    },
                ],
            });
        }

        this.setState({
            nama: "",
            harga: "",
            jumlah: "0",
            id: "",
        })
    }

    editData = (id) => {
        console.log("ID: ", id);

    }

    editData = (id) => {
        const snackYangDiPilih = this.state.merk
            .filter((snack) => snack.id === id)
            .map((filterSnack) => {
                return filterSnack;
            });

        this.setState({
            nama: snackYangDiPilih[0].nama,
            harga: snackYangDiPilih[0].harga,
            jumlah: snackYangDiPilih[0].jumlah,
            id: snackYangDiPilih[0].id,
        })
    }

    hapusData = (id) => {
        const snackBaru = this.state.merk.filter((snack) => snack.id !== id).map((filterSnack) => {
            return filterSnack;
        });

        this.setState({
            merk: snackBaru
        })
    }
    render() {
        console.log(this.state.merk)
        return (
            <div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,256L24,229.3C48,203,96,149,144,149.3C192,149,240,203,288,197.3C336,192,384,128,432,112C480,96,528,128,576,133.3C624,139,672,117,720,128C768,139,816,181,864,186.7C912,192,960,160,1008,154.7C1056,149,1104,171,1152,181.3C1200,192,1248,192,1296,202.7C1344,213,1392,235,1416,245.3L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg> */}
                {/* < NavbarComponent /> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2e5699" fill-opacity="1" d="M0,192L40,170.7C80,149,160,107,240,101.3C320,96,400,128,480,144C560,160,640,160,720,138.7C800,117,880,75,960,90.7C1040,107,1120,181,1200,218.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                <br />
                <br />
                <br />
                <div class="cover-container text-center w-100 h-100 p-3 mx-auto flex-column">
                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 class="display-4 fw-normal">Snackkk.</h1>

                    </div>
                </div>
                <div>
                    <div class="row align-items-md-stretch">

                        <div class="col-md-6">
                            <div class="h-100 p-5  rounded-3">
                                <div class="shadow p-3 mb-5 bg-white rounded">
                                    <div className="container mt-4"><Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100">
                                <div className="container mt-4"><Tabel merk={this.state.merk} editData={this.editData} hapusData={this.hapusData} /></div>
                            </div>
                        </div>
                        <div class=" p-3 pb-md-4 mx-auto text-center">
                            <h4 class="display-4 fw-normal">Terimakasih</h4>
                            <p class="fs-5 text-muted">Atas Kepercayaan Anda Dengan Belanja Di Snackkk, Ayo Berlangganan Dan Dapatkan Potongan Harga & Cashback Sebesar 99%.</p>
                        </div>
                        <footer style={{ backgroundColor: "#2d3b72", color: "white", textAlign: "center" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,170.7C320,181,400,203,480,213.3C560,224,640,224,720,202.7C800,181,880,139,960,138.7C1040,139,1120,181,1200,213.3C1280,245,1360,267,1400,277.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                        </footer>
                    </div>
                    <div></div>

                    {/* <div className="container mt-4"><Tabel merk={this.state.merk} /></div>
                <div className="container mt-4"><Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /></div> */}
                </div>

            </div>
        )
    }
}

