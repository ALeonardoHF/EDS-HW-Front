import React, { useState, useEffect } from 'react'
// import UserForm from './UserForm'
import MachineForm from './MachineForm'
import Paginator from '@components/shared/Paginator'
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUserListAction } from "@userActions"

import Modal from '../../shared/Modal'
const MachineHeader = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false)

    return (
        <div className='mb-4'>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-between'>
                    <h2><b></b>Maquinas</h2>
                    <button className='btn btn-action-primary' onClick={() => setShow(!show)}>Nueva Maquina</button>
                </div>
            </div>
            <Modal title="Nuevo Empleado" show={show} setShow={setShow}>
                <MachineForm setShow={setShow} />
            </Modal>
        </div>
    )
}

export default MachineHeader;
