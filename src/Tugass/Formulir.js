import React from 'react'
import { Form, Row, Col, Button, InputGroup, FormControl, } from 'react-bootstrap'

const Formulir = ({ nama, harga, jumlah, handleChange, handleSubmit, id }) => {
    return (
        <div>
            <div className="mt-3">
                <Row>
                    <Col>

                        <h3>{id ? "Edit Data" : "Tambah Data"} &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                        </svg></h3>
                        <hr />
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tambah Nama Produk Snack</Form.Label>
                        <Form.Control required placeholder="Isi Di Sini" type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
                        <Form.Text className="text-muted">
                            Isi Minimal Satu
                        </Form.Text>
                    </Form.Group>

                    <Form.Label>Harga</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>Rp</InputGroup.Text>
                        <FormControl type="number" id="inlineFormInputGroup" name="harga" placeholder="harga" value={harga} onChange={(event) => handleChange(event)} required />
                        <span class="input-group-text">,00</span>
                    </InputGroup>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Jumlah Barang</Form.Label>
                        <Form.Control required type="number" name="jumlah" placeholder="Isi Di Sini" value={jumlah} onChange={(event) => handleChange(event)} />
                    </Form.Group>

                    <Button variant="outline-success" type="submit">
                        Tambah
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Formulir
