import React from 'react'

export default class Sublifecycle extends React.Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }
    render() {
        return (
            <div>
                <h2>Component Sub Lifecycle</h2>
            </div>
        )
    }
}