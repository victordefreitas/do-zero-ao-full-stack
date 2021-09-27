import React from 'react'
import { Modal, Button } from 'react-bootstrap'
const Dialog = ({ show, setShow, currentAction, slug, children }) => {
    const handerAction = () => {
        currentAction.callback(slug, children[1].props)
        setShow(false)
    }
    return (
        <div>
            <Modal
                animation={false}
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {currentAction.header} {slug}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShow(false)}>SAIR</Button>
                    <Button variant={currentAction.bntVariant} onClick={() => handerAction()} >{currentAction.bntLabel}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Dialog