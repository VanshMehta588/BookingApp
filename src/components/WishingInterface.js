import React from 'react'
import '../styles/WishingInterface.css';
import Wish from '../assets/done.svg';

export const WishingInterface = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row mb-3">
                    <div className="col">
                        <p className="fontsize-1 customfont">Thank you</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <p className="fontsize-1 fw-bold">
                            Your booking is complete. An{" "}
                            <span className="text-primary fontsize-1">
                                email with details of your booking
                            </span>{" "}
                            has been sent to you.
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <img src={Wish} alt="" />
                        <br />
                        <hr />
                        <br />
                    </div>
                </div>
            </div>
        </>

    )
}
