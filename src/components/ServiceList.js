import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoBagCheckSharp } from "react-icons/io5";
import { BiSolidNotepad } from "react-icons/bi";
import Service from './Service';

const services = [
    {
        id: 1,
        service: "People",
        icon: IoIosPeople,
        color: "#8064A2",
        details: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
        button: "Connect",
    },
    {
        id: 2,
        service: "Place",
        icon: FaLocationDot,
        color: "#77933C",
        details: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
        button: "Meet up",
    },
    {
        id: 3,
        service: "Product",
        icon: IoBagCheckSharp,
        color: "#C0504D",
        details: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
        button: "Get it",
    },
    {
        id: 4,
        service: "Program",
        icon: BiSolidNotepad,
        color: "#0096C8",
        details: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
        button: "Attend"
    },
]

const ServiceList = () => {
  return (
    <div className='d-flex flex-wrap justify-content-evenly column-gap-1 row-gap-3 mt-4'>
      {
        services.map((item) =>{
            return <Service key={item.id} items={item}/>
        })
      }
    </div>
  )
}

export default ServiceList
