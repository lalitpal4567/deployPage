import React, { useState } from 'react'
import SignIn from './SignIn'
import JoinIn from './JoinIn'

const Registration = () => {
    const [active, setActive] = useState(true);

    const handleChange = (event) => {
        if (event.target.name === "signin") {
            setActive(true);
        } else {
            setActive(false);
        }
    }

    return (
        <div className='d-md-flex flex-md-wrap justify-content-md-between'>
            <div className='' style={{ maxWidth: 710 }}>
                <p className='h5 fst-italic mb-3'>Explore your <span className='' style={{color: "#0096C8"}}>hobby</span> and <span className='' style={{color: "#8064A2"}}>passion</span></p>
                <p className=' mt-4 d-inline' style={{ fontSize: 14 }}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                    suppliers, classes, workshops, and places to practice, participate or perform.
                </p>
                <p className='d-none d-md-inline' style={{ fontSize: 14 }}>Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor, or outdoor activities.</p><br /><br />
                <p className='d-none d-md-block' style={{ fontSize: 14 }}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                <section className='d-flex justify-content-center  align-items-center mt-5 d-none d-xl-flex  d-xxl-flex'>
                    <div className='w-50' style={{ width: 151 }}>
                        <img className='w-100' src="./images/picture1.svg" />
                    </div>
                    <div className='w-50' style={{ width: 151 }}>
                        <img className='w-100' src="./images/picture2.svg" />
                    </div>
                </section>
            </div>
            <div className='order-md-2' style={{}}>
                <section className='d-flex justify-content-center column-gap-5 mb-3 d-'>
                    <button type='button' className='btn border-2 border-top-0 border-end-0 border-start-0 rounded-0 p-0' style={{color: "#8064A2", borderColor: "#8064A2"}} name="signin" onClick={handleChange}>Sign in</button>
                    <button type='button' className='btn border-2 border-top-0 border-end-0 border-start-0 rounded-0 p-0' style={{color: "#8064A2", borderColor: "#8064A2"}} name="joinin" onClick={handleChange}>Join In</button>
                </section>
                {active ? <SignIn /> : <JoinIn />}
            </div>
            <section className='d-flex justify-content-center  align-items-center order-md-2 mt-5 d-xl-none'>
                <div className='' style={{ width: 151 }}>
                    <img className='w-100' src="./images/picture1.svg" />
                </div>
                <div className='' style={{ width: 151 }}>
                    <img className='w-100' src="./images/picture2.svg" />
                </div>
            </section>
        </div>
    )
}

export default Registration
