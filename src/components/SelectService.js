import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/SelectService.module.css';
import { DateContext } from '../useContext/DateContext';
import category1 from '../assets/category1.svg';
import category2 from '../assets/category2.svg';
import category3 from '../assets/category3.svg';
import treatment1 from '../assets/treatment1.svg';
import treatment2 from '../assets/treatment2.svg';
import treatment3 from '../assets/treatment3.svg';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';

const doctors = [
    { id: 'doctor1', name: 'Dr. Steve rogers', image: doctor1 },
    { id: 'doctor2', name: 'Dr. Robert downey jr', image: doctor2 },
    { id: 'doctor3', name: 'Dr. Steven strange', image: doctor3 },
];

const categories = [
    { value: 'General Consultation', label: 'General Consultation', image: category1 },
    { value: 'Specialist Consultation', label: 'Specialist Consultation', image: category2 },
    { value: 'Dental Care', label: 'Dental Care', image: category3 },
];

const categories2 = [
    { value: 'Regular Checkup', label: 'Regular Checkup', image: treatment1 },
    { value: 'Consultation', label: 'Consultation', image: treatment2 },
    { value: 'Medical Procedure', label: 'Medical Procedure', image: treatment3 },
];

export const SelectService = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTreatment, setSelectedTreatment] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('doctor1');
    const { availableDate, setAvailableDate } = useContext(DateContext);  // Use the context correctly
    const todayDate = new Date().toISOString().split('T')[0];

    const handleAvailableDateChange = (e) => {
        setAvailableDate(new Date(e.target.value));
    };



    const handleCategorySelect = (value, image) => {
        setSelectedCategory(value);
        document.getElementById('selected-image').innerHTML = `<img src="${image}" alt="Selected Image" width="51">`;
    };

    const handleTreatmentSelect = (value, image) => {
        setSelectedTreatment(value);
        document.getElementById('selected-image2').innerHTML = `<img src="${image}" alt="Selected Image" width="51">`;
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="row mb-2">
                        <DropdownSelector
                            label="Choose Category"
                            options={categories}
                            onSelect={handleCategorySelect}
                            selectedValue={selectedCategory}
                            buttonTextId="languageButtonText1"
                            selectedImageId="selected-image"
                        />
                        <DropdownSelector
                            label="Choose Treatment"
                            options={categories2}
                            onSelect={handleTreatmentSelect}
                            selectedValue={selectedTreatment}
                            buttonTextId="languageButtonText2"
                            selectedImageId="selected-image2"
                        />
                    </div>

                    <br />
                    <hr /><br />

                    <h6 className={`${styles.head1} mb-4 fw-bold ${styles['fontsize-1']}`}>Select Doctor</h6>
                    <DoctorSelect doctors={doctors} selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />

                    <br />
                    <hr /><br />

                    <h6 className={`${styles.head1} mb-4 fw-bold ${styles['fontsize-1']}`}>I'm available on or after:</h6>
                    <div className="mb-4 w-25">
                        <input
                            type="date"
                            className="form-control"
                            value={availableDate instanceof Date && !isNaN(availableDate)
                                ? availableDate.toISOString().split('T')[0]
                                : todayDate // Set today's date as default value
                            }
                            min={todayDate}
                            onChange={handleAvailableDateChange} // Update date on change
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


function DropdownSelector({ label, options, onSelect, selectedValue, buttonTextId, selectedImageId }) {
    return (
        <div className="col-md-6 mb-3">
            <div className="clearfix">
                <label className="form-label fw-bold">{label}</label>
            </div>
            <div style={{ float: 'left' }}>
                <div className="dropdown">
                    <button className="btn btn-light" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <div id={buttonTextId} className={styles['icon-link']}>{selectedValue || `Select ${label.toLowerCase()}`}</div>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {options.map((option) => (
                            <li key={option.value}>
                                <a className="dropdown-item" href="#" onClick={() => onSelect(option.value, option.image)}>
                                    <img src={option.image} alt={option.label} className={styles['img-dropdown']} />
                                    {option.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ float: 'left' }}>
                <div id={selectedImageId} style={{ alignItems: 'center', display: 'flex', marginLeft: '5px' }}></div>
            </div>
        </div>
    );
}

function DoctorSelect({ doctors, selectedDoctor, setSelectedDoctor }) {
    return (
        <div className={styles['doctor-select']}>
            {doctors.map((doctor) => (
                <div key={doctor.id} className={styles['doctor-option']}>
                    <input
                        type="radio"
                        name="doctor"
                        id={doctor.id}
                        checked={selectedDoctor === doctor.id}
                        onChange={() => setSelectedDoctor(doctor.id)}
                    />
                    <label htmlFor={doctor.id}>
                        <img src={doctor.image} alt={doctor.name} className={styles['doctor-image']} />
                        {doctor.name}
                    </label>
                </div>
            ))}
        </div>
    );
}

