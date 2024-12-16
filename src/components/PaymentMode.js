import React from 'react'

export const PaymentMode = () => {
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row mb-3">
                <div className="col">
                    <p className="fontsize-1 fw-bold">
                        Please provide details in the form below to proceed with booking.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="fontsize-1">
                        You selected to book{" "}
                        <span className="text-primary fontsize-1">Dr. Steve rogers</span> by{" "}
                        <span className="text-primary fontsize-1">clinic name</span> at{" "}
                        <span className="text-primary fontsize-1">3:45 PM</span> on{" "}
                        <span className="text-primary fontsize-1">October 23, 2024 Price</span>{" "}
                        for the service is &nbsp;
                        <span className="text-primary fontsize-1">$350.00</span>
                    </p>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="row mb-3">
                <div className="col">
                    <p className="fontsize-1 fw-bold">
                        Please tell us how you would like to pay:
                    </p>
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="radio1"
                        defaultValue=""
                        id="flexCheckChecked"
                        defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        I will pay locally
                    </label>
                    <br />
                    <input
                        className="form-check-input"
                        type="radio"
                        defaultValue=""
                        name="radio1"
                        id="flexCheckChecked2"
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked2">
                        I will pay now with PayPal &nbsp;&nbsp;{" "}
                        <img src="img/paypal.svg" alt="" />
                    </label>
                </div>
                <br />
                <hr />
                <br />
            </div>
            </div>
        </>

    )
}
