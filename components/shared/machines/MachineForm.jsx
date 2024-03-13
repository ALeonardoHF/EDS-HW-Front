import React from 'react';
import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc')
//Redux
import ToolTip from '../../shared/ToolTip'
import { useDispatch, useSelector } from 'react-redux';
import Required from '../../shared/Required'
//form
import { useForm } from "react-hook-form";
//actions
import { createMachineAction } from '@machineActions';

const MachineForm = (props) => {
    dayjs.extend(utc)
    const { setShow } = props;
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const processData = async (data) => {
        const finalData = {
            ...data,
            certificado: data?.certificado[0],
            foto_equipo: data?.foto_equipo[0],
            foto_etiqueta_calibracion: data?.foto_etiqueta_calibracion[0]
        }
        await dispatch(createMachineAction(finalData))
        setShow(false);
    }

    return (
        <div className='mx-2'>
            <form onSubmit={handleSubmit(processData)}>
                <div className="mb-3">
                    <Required />
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 me-2'>
                        <label className='input-label me-2'><span className="color-primary h5" >*</span>  Id</label>
                        <input name='id_maquina' type="text" placeholder='Id Maquina' className='form-control my-2' {...register("id_maquina", { required: { value: true, message: 'El Id obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.id_maquina?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Nombre</label>
                        <input name='nomMaquina' type="text" placeholder='Nombre Maquina' className='form-control my-2' {...register("nomMaquina", { required: { value: true, message: 'El Nombre es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.nomMaquina?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Serial</label>
                        <input name='serial' type="text" placeholder='Serial' className='form-control my-2' {...register("serial", { required: { value: true, message: 'El Serial es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.serial?.message}</span>
                    </div>
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Manufacturador</label>
                        <input name='manufacturador' type="text" placeholder='Manufacturador' className='form-control my-2' {...register("manufacturador", { required: { value: true, message: 'El Manufacturador es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.manufacturador?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Proveedor</label>
                        <input name='proveedor' type="text" placeholder='Proveedor' className='form-control my-2' {...register("proveedor", { required: { value: true, message: 'El Proveedor es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.proveedor?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Tipo</label>
                        <input name='type' type="text" placeholder='Tipo' className='form-control my-2' {...register("type", { required: { value: true, message: 'El Tipo de maquina es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.type?.message}</span>
                    </div>
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Loc1</label>
                        <input name='loc1' type="text" placeholder='Loc1' className='form-control my-2' {...register("loc1", { required: { value: true, message: 'El Loc1 es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.loc1?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Loc2</label>
                        <input name='loc2' type="text" placeholder='Loc2' className='form-control my-2' {...register("loc2", { required: { value: true, message: 'El Loc2 es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.loc2?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Loc3</label>
                        <input name='loc3' type="text" placeholder='Loc3' className='form-control my-2' {...register("loc3", { required: { value: true, message: 'El Loc3 de maquina es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.loc3?.message}</span>
                    </div>
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 me-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Última fecha de calibración</label>
                        <input name='last_calibration_date' type="date" placeholder='Última fecha de calibración' max={dayjs().utc().format('YYYY-MM-DD')} className='form-control my-2' {...register("last_calibration_date")} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.last_calibration_date?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Intervalo de calibración</label>
                        <input name='calibration_interval_define' type="text" placeholder='Intervalo de calibración' className='form-control my-2' {...register("calibration_interval_define", { required: { value: true, message: 'El Intervalo de calibración es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.calibration_interval_define?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Expira</label>
                        <input name='expira' type="date" placeholder='Expira' min={dayjs().utc().format('YYYY-MM-DD')} className='form-control my-2' {...register("expira")} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.expira?.message}</span>
                    </div>
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Rango de Trabajo</label>
                        <input name='rango_trabajo' type="text" placeholder='Rango de Trabajo' className='form-control my-2' {...register("rango_trabajo", { required: { value: true, message: 'El Rango de Trabajo es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.rango_trabajo?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className='input-label'><span className="color-primary h5">*</span>  Comentario</label>
                        <input name='comments' type="text" placeholder='Comentario' className='form-control my-2' {...register("comments", { required: { value: true, message: 'El Comentario es obligatorio' }, minLength: { value: 2, message: "Min lenght 2" } })} />
                        <span className='text-danger text-small d-block mb-2'>{errors?.comments?.message}</span>
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className="form-label">Subir Certificado</label>
                        <input name='certificado' type='file' className='form-control' {...register("certificado", { required: { value: true, message: 'El certificado es obligatorio' } })} />
                    </div>
                    
                </div>
                <div className='d-flex flex-between w-100'>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className="form-label">Subir Foto Equipo</label>
                        <input name='foto_equipo' type='file' className='form-control' {...register("foto_equipo", { required: { value: true, message: 'La Foto del equipo es obligatoris' } })} />
                    </div>
                    <div className='d-flex flex-column w-100 ms-2'>
                        <label className="form-label">Subir Foto Etiqueta Calibracion</label>
                        <input name='foto_etiqueta_calibracion' type='file' className='form-control' {...register("foto_etiqueta_calibracion", { required: { value: true, message: 'La foto de la etiqueta es obligatoria' } })} />
                    </div>
                    
                </div>
                <CreateButtons />
            </form>
        </div>
    )
}

function CreateButtons(props) {
    return (
        <div className='d-flex justify-content-end'>
            <button type="submit" className='btn btn-action-primary w-auto my-4'>Nueva Maquina</button>
        </div>
    )
}


export default MachineForm;