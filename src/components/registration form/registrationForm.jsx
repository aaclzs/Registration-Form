import React from "react";
import { useState } from "react";
import * as Yup from "yup";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        employeeId: "",
        dateOfEmployment: "",
        dateHired: "",
        company: "E-Konek Pilipinas Inc.",
        departmentLocation: "",
        scheduleTime: "",
        position: "",
        managerName: "",
        employeeEmail: "",
    });

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object().shape({
        lastName: Yup.string().required("Last name is required").max(50, 'Maximum character reached'),
        firstName: Yup.string().required("First name is required").max(50, 'Maximum character reached'),
        middleName: Yup.string().max(50, 'Maximum character reached'),
        employeeId: Yup.string().required("Employee ID is required").max(20, 'Maximum character reached'),
        dateOfEmployment: Yup.date().required("Date of employment is required"),
        dateHired: Yup.date().required("Date hired is required"),
        departmentLocation: Yup.string().required("Department location is required"),
        scheduleTime: Yup.string().required("Schedule time is required"),
        position: Yup.string().required("Position is required").max(50, 'Maximum character reached'),
        managerName: Yup.string().required("Manager name is required").max(100, 'Maximum character reached'),
        employeeEmail: Yup.string().email("Invalid email format").required("Email is required"),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("Form submitted successfully", formData);

        } catch (err) {
            if (err.name === "ValidationError") {
                const newErrors = {};
                err.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                });

                setErrors(newErrors);
                //alert("ERRORRRRRRRRRRRRRRRRRRR");
            }

            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name Section */}
            <div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>

                <div>
                    <label>Middle Name</label>
                    <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        placeholder="Enter Middle Name (optional)"
                    />
                </div>
            </div>


            {/* Employee Details Section */}
            <div>
                <div>
                    <label>Employee ID</label>
                    <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        placeholder="XXX XXX XXXX"
                    />
                    {errors.employeeId && <span className="error">{errors.employeeId}</span>}
                </div>

                <div>
                    <label>Date of Employment</label>
                    <input
                        type="date"
                        name="dateOfEmployment"
                        value={formData.dateOfEmployment}
                        onChange={handleChange}
                    />
                    {errors.dateOfEmployment && <span className="error">{errors.dateOfEmployment}</span>}
                </div>

                <div>
                    <label>Date Hired</label>
                    <input
                        type="date"
                        name="dateHired"
                        value={formData.dateHired}
                        onChange={handleChange}
                    />
                    {errors.dateHired && <span className="error">{errors.dateHired}</span>}
                </div>
            </div>


            {/* Company & Department */}
            <div>
                <div>
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        placeholder="E-Konek Pilipinas Inc."
                        readOnly
                    />
                </div>

                <div>
                    <label>Department/Location</label>
                    <select name="departmentLocation" value={formData.departmentLocation} onChange={handleChange}>
                        <option value="" disabled>Select a department</option>
                        <option value="Dev">Dev</option>
                        <option value="ITPM">ITPM</option>
                        <option value="Marketing">Marketing</option>
                        <option value="N/A">N/A</option>
                    </select>
                    {errors.departmentLocation && <span className="error">{errors.departmentLocation}</span>}
                </div>
            </div>


            {/* Schedule & Position */}
            <div>
                <div>
                    <label>Schedule Time</label>
                    <input
                        type="time"
                        name="scheduleTime"
                        value={formData.scheduleTime}
                        onChange={handleChange}
                        set="60"
                    />
                    {errors.scheduleTime && <span className="error">{errors.scheduleTime}</span>}
                </div>

                <div>
                    <label>Position</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Enter Position"
                    />
                    {errors.position && <span className="error">{errors.position}</span>}
                </div>
            </div>


            {/* Manager Name & Employee Email */}
            <div>
                <div>
                    <label>Manager's Name</label>
                    <input
                        type="text"
                        name="managerName"
                        value={formData.managerName}
                        onChange={handleChange}
                        placeholder="Enter Manager's Name"
                    />
                    {errors.managerName && <span className="error">{errors.managerName}</span>}
                </div>

                <div>
                    <label>Employee Email</label>
                    <input
                        type="text"
                        name="employeeEmail"
                        value={formData.employeeEmail}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                    />
                    {errors.employeeEmail && <span className="error">{errors.employeeEmail}</span>}
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;