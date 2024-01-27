import React from 'react'
import { IoIosPeople } from "react-icons/io";


const Service = ({items}) => {
    if (!items || !items.icon || !items.service || !items.details || !items.button) {
        return null;
    }
    const Icon = items.icon;
    return (
        <div className=' px-4 py-4 border border-1 rounded-2' style={{borderColor: "#CED4DA", width: 360}}>
            <div className='d-flex justify-content-center align-items-center column-gap-2 justify-content-md-start'>
                <Icon style={{ fontSize: 32, color: `${items.color}`}} />
                <p className='m-0 fw-bold'>{items.service}</p>
            </div>
            <p className=' lh-lg py-3 fw-medium m-0' style={{ fontSize: 12 , color: ""}}>{items.details}</p>
            <button type="button" className='btn border-1 rounded-3 w-100 btn-light fw-medium d-md-none' style={{ fontSize: 12, borderColor: "#8064A2", color: "#8064A2" }}>{items.button}</button>
        </div>
    )
}

export default Service
