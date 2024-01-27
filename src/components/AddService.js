import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const AddService = () => {
    return (
        <div className=' px-4 py-4 border border-1 border-dark rounded-2'>
            <div className='d-flex justify-content-center align-items-center column-gap-2 justify-content-md-start'>
                <IoMdAddCircle className='' style={{fontSize: 40, color: "#0096C8"}}/>
                <p className='m-0 fw-bold'>Add your own</p>
            </div>
            <p className=' lh-lg py-3 fw-medium' style={{ fontSize: 12 }}>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets?
                Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
            </p>
            <button type="button" className='btn border-1 rounded-3 d-block fw-semibold d-md-inline' style={{ fontSize: 12, borderColor: "#8064A2" }}>Add new</button>
        </div>
    )
}

export default AddService
