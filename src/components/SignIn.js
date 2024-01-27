import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { IoMdLock } from "react-icons/io";

const SignIn = () => {
    return (
        <div>
            <form className=''>
                <input className='form-control mb-3' type="email" required placeholder="Email"></input>
                <div className=' position-relative'>
                    <input className='form-control' type="password" required placeholder="Password"></input>
                    <BiSolidShow className=" position-absolute top-50 end-0 translate-middle-y" style={{ fontSize: "16px" }} />
                    <BiSolidHide className="d-none" style={{ fontSize: "16px" }} />
                </div>
                <div className="d-flex justify-content-between mt-3 d-md-none">
                    <label>
                        <input className="me-2" type="checkbox"></input>
                        Remember Me
                    </label>
                    <div className="">
                        <span className="d-flex justify-content-between align-items-center">
                            <IoMdLock className=" text-secondary" style={{ fontSize: "24px"}} />
                            <span>Forgot Password?</span>
                        </span>
                    </div>
                </div>
                <button type="submit" className="btn w-100 btn-success mt-4 border-0" style={{backgroundColor: "#8064A2"}}>Continue</button>
            </form>
            <span className="d-flex justify-content-between fw-semibold mt-3 mb-3"><hr className=" bg-body-tertiary" style={{width: 80, borderWidth: "3px"}}/> Or connect with <hr className="" style={{width: 80, borderWidth: 3}}/></span>
            <div>
                <a className='border border-1 d-flex align-items-center py-2 text-dark rounded px-3 mb-3 text-decoration-none' style={{ borderColor: "#8064A2" }}>
                    <img className='' style={{ width: 20 }} src="./images/google.png"></img>
                    <p className=' m-0 m-auto fw-medium' style={{ fontSize: 14 }}>Continue with Google</p>
                </a>
                <a className='border border-1 text-dark d-flex align-items-center py-2 rounded px-3 mb-3 text-decoration-none' style={{borderColor: "#8064A2"}}>
                    <img className='' style={{ width: 20 }} src="./images/facebook.svg"></img>
                    <p className='m-auto fw-medium' style={{ fontSize: 14 }}>Continue with Google</p>
                </a>
            </div>
        </div >
    )
}

export default SignIn
