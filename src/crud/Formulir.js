import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h3>{id ? "Edit Data" : "Tambah Data"}</h3>
                    <hr />
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tambah Buku</Form.Label>
                    <Form.Control required placeholder="Isi Di Sini" type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
                    <Form.Text className="text-muted">
                        Isi Minimal Satu
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="deskripsi">
                    <Form.Label>Deskirpsi</Form.Label>
                    <Form.Control required as="textarea" rows="3" name="deskripsi" placeholder="Isi Di Sini" value={deskripsi} onChange={(event) => handleChange(event)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Harga Buku</Form.Label>
                    <Form.Control required type="number" name="harga" placeholder="Isi Di Sini" value={harga} onChange={(event) => handleChange(event)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Formulir