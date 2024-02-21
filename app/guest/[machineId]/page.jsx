'use client'
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import { Check } from 'react-bootstrap/Form';
import dayjs from 'dayjs'
const utc = require('dayjs/plugin/utc')
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import MachineGuestImages from '../../../components/shared/machines/MachineImagesGuest'
import MachineGuestTagImage from '../../../components/shared/machines/MachineTagImageGuest'
import { getMachineImage, getMachineTag, getMachineByIdNoAuth, getMachineImageNoAuth, getMachineTagNoAuth } from '../../../api/machine';
import { setCurrentMachineAction } from '@machineActions'
import Loading from '@components/shared/Loading'
import Modal from "@components/shared/Modal"
import FileDownload from 'js-file-download'

const MachineId = ({params}) => {
  dayjs.extend(utc)
  const dispatch = useDispatch();
  const [currentMachine, setCurrentMachine] = useState({})
  const [machineImg, setMachineImg] = useState({})
  const [machineTagImg, setMachineTagImg] = useState({})
  const [error, setError] = useState(null);
  const isLoading = useSelector(state => state.machine.isLoadingCurrentMachine)

  useEffect(() => {
    
        const fetchData = async () => {
          const response = await getMachineByIdNoAuth(params.machineId);
          setCurrentMachine(response);
          
        console.log(response)
        }
        fetchData();
}, [])
  
  console.log('currentMachine.nomMaquina :>> ', currentMachine.nomMaquina);
  return (
    <div className='mx-5 mt-3'>
      <h2 className=''><b>Detalles</b></h2>
      {isLoading ?
        <Loading /> :
        <Card className='card shadow'>
          <div className='d-flex flex-column flex-md-row justify-content-center'>
              <div>
                <MachineGuestImages alt={currentMachine.nomMaquina} getImage={getMachineImageNoAuth} param={currentMachine?._id} status={currentMachine?.foto_equipo ? true : false} width={'550px'} height={'350px'} />
              </div>
            <div className='mx-5'>
              <MachineGuestTagImage alt={currentMachine.nomMaquina} getImage={getMachineTagNoAuth} param={currentMachine?._id} status={currentMachine?.foto_etiqueta_calibracion ? true : false} width={'550px'} height={'350px'} />
            </div>
          </div>
          <Card.Body>
            <Card.Title>Nombre Maquina: <strong>{currentMachine.nomMaquina}</strong></Card.Title>
            <Card.Text>{currentMachine.comments}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item >Id Maquina: {currentMachine.id_maquina}</ListGroup.Item>
            <ListGroup.Item >Serial: {currentMachine.serial}</ListGroup.Item>
            <ListGroup.Item >Manufacturador: {currentMachine.manufacturador}</ListGroup.Item>
            <ListGroup.Item >Proveedor: {currentMachine.proveedor}</ListGroup.Item>
            <ListGroup.Item>Activo: {currentMachine.state ? 'Activo' : 'Inactivo'} </ListGroup.Item>
            <ListGroup.Item >Type: {currentMachine.type}</ListGroup.Item>
            <ListGroup.Item >Loc 1: {currentMachine.loc1}</ListGroup.Item>
            <ListGroup.Item >Loc 2: {currentMachine.loc2}</ListGroup.Item>
            <ListGroup.Item >Loc 3: {currentMachine.loc3}</ListGroup.Item>
            <ListGroup.Item >Última fecha calibración: <strong><u>{dayjs(currentMachine?.last_calibration_date).format("DD MMM YYYY")}</u></strong></ListGroup.Item>
            <ListGroup.Item >Expira: <strong><u>{dayjs(currentMachine?.expira).format("DD MMM YYYY")}</u></strong></ListGroup.Item>
            <ListGroup.Item >Intervalo tiempo calibración: {currentMachine.calibration_interval_define}</ListGroup.Item>
            <ListGroup.Item >Rango de Trabajo : {currentMachine.rango_trabajo}</ListGroup.Item>
          </ListGroup>
        </Card>

      }
    </div>
  )
}

export default MachineId