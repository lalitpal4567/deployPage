import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const JoinIn = () => {
    return (
        <div>
            <form className=''>
                <input className='form-control mb-4' type="email" required placeholder="Email"></input>
                <div className=' position-relative'>
                    <input className='form-control' type="password" required placeholder="Password"></input>
                    <BiSolidShow className=" position-absolute top-0 end-0" style={{ fontSize: "16px" }} />
                    <BiSolidHide className="d-none" style={{ fontSize: "16px" }} />
                </div>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    <div className="d-flex justify-content-start column-gap-1">
                        <div className="bg-black" style={{width: 40, height: 4}}></div>
                        <div className="bg-black" style={{width: 40, height: 4}}></div>
                        <div className="bg-black" style={{width: 40, height: 4}}></div>
                    </div>
                    <div className="">
                        <span className="d-flex justify-content-between align-items-center fw-bolder    " style={{fontSize: 10}}>
                           Password Strength
                        </span>
                    </div>
                </div>
                <button type="submit" className="btn w-100 btn-success mt-4">Continue</button>
            </form>
            <span className="d-flex justify-content-between fw-semibold mt-3 mb-3"><hr className=" bg-body-tertiary" style={{ width: 80, borderWidth: "3px" }} /> Or connect with <hr className="" style={{ width: 80, borderWidth: 3 }} /></span>
            <div>
                <a className=' border border-1 d-flex align-items-center py-2 text-dark rounded px-3 mb-3 text-decoration-none' style={{ borderColor: "#8064A2" }}>
                    <img className='' style={{ width: 20 }} src="./images/google.png"></img>
                    <p className=' m-0 m-auto fw-medium' style={{ fontSize: 14 }}>Continue with Google</p>
                </a>
                <a className=' border border-1 border-dark text-dark d-flex align-items-center py-2 rounded px-3 mb-3 text-decoration-none'>
                    <img className='' style={{ width: 20 }} src="./images/facebook.svg"></img>
                    <p className='m-auto fw-medium' style={{ fontSize: 14 }}>Continue with Google</p>
                </a>
            </div>
        </div >
    )
}

export default JoinIn
