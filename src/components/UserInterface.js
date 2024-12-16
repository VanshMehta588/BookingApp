import React from 'react'

export const UserInterface = () => {
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
                <div className="row mb-4">
                    <div className="col-4">
                        <label htmlFor="name" className="mb-1 fw-bold">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control name"
                            placeholder="Enter full name"
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="name" className="mb-1 fw-bold">
                            Phone number
                        </label>
                        <input
                            type="text"
                            className="form-control name"
                            placeholder="Add contact number"
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="name" className="mb-1 fw-bold">
                            Email ID
                        </label>
                        <input
                            type="text"
                            className="form-control name"
                            placeholder="Enter email ID"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            I agree to the terms of service
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
