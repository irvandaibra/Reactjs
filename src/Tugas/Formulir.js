import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Formulir = () => {
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <h3>Tambah Data</h3>
                    <hr />
                </Col>
            </Row>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tambah Buku</Form.Label>
                    <Form.Control type="text" name="nama" required placeholder="Isi Di Sini" />
                    <Form.Text className="text-muted">
                        Isi Minimal Satu
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="deskripsi">
                    <Form.Label>Deskirpsi</Form.Label>
                    <Form.Control as="textarea" rows="3" name="deskripsi" placeholder="Isi Di Sini" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Harga Buku</Form.Label>
                    <Form.Control type="number" name="harga" placeholder="Isi Di Sini" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="harga">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Formulir