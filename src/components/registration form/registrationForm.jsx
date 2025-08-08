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
        employeeId: Yup.string()
            .matches(/^\d+$/, "Employee ID must be numeric")
            .required("Employee ID is required")
            .max(20, "Maximum character reached"),
        dateOfEmployment: Yup.string().required("Date of employment is required"),
        dateHired: Yup.string().required("Date hired is required"),
        departmentLocation: Yup.string().required("Department location is required"),
        scheduleTime: Yup.string().required("Schedule time is required"),
        position: Yup.string().required("Position is required").max(50, 'Maximum character reached'),
        managerName: Yup.string().required("Manager name is required").max(100, 'Maximum character reached'),
        employeeEmail: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
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
            setErrors({});
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
        <div className="flex flex-col min-h-screen bg-gray-50">
            
            {/* MAIN FORM */}
            <div className="flex-grow flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="p-6 space-y-6 bg-white rounded-lg shadow-md flex flex-col items-center"
                >

                    {/* NAME SECTION */}
                    <div className="flex gap-6">

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter Last Name"
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.lastName && <span className="text-red-500 text-[12px] mt-2">{errors.lastName}</span>}
                        </div>

                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter First Name"
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.firstName && <span className="text-red-500 text-[12px] mt-2">{errors.firstName}</span>}
                        </div>

                        {/* Middle Name */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Middle Name</label>
                            <input
                                type="text"
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleChange}
                                placeholder="Enter Middle Name"
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* EMPLOYEE DETAILS SECTION */}
                    <div className="flex gap-6">

                        {/* Employee ID */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Employee ID</label>
                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                placeholder="XXX-XXX-XXXX"
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.employeeId && <span className="text-red-500 text-[12px] mt-2">{errors.employeeId}</span>}
                        </div>

                        {/* Date of Employment */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Date of Employment</label>
                            <input
                                type="date"
                                name="dateOfEmployment"
                                value={formData.dateOfEmployment}
                                onChange={handleChange}
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.dateOfEmployment && <span className="text-red-500 text-[12px] mt-2">{errors.dateOfEmployment}</span>}
                        </div>

                        {/* Date Hired */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Date Hired</label>
                            <input
                                type="date"
                                name="dateHired"
                                value={formData.dateHired}
                                onChange={handleChange}
                                className="w-80 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.dateHired && <span className="text-red-500 text-[12px] mt-2">{errors.dateHired}</span>}
                        </div>
                    </div>

                    {/* COMPANY & DEPT */}
                    <div className="flex gap-6">

                        {/* Company */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                readOnly
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300"
                            />
                        </div>

                        {/* Dept/Loc */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Department/Location</label>
                            <select
                                name="departmentLocation"
                                value={formData.departmentLocation}
                                onChange={handleChange}
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>Select a department</option>
                                <option value="Dev">Dev</option>
                                <option value="ITPM">ITPM</option>
                                <option value="Marketing">Marketing</option>
                                <option value="N/A">N/A</option>
                            </select>
                            {errors.departmentLocation && <span className="text-red-500 text-[12px] mt-2">{errors.departmentLocation}</span>}
                        </div>
                    </div>

                    {/* SCHED TIME & POSITION */}
                    <div className="flex gap-6">

                        {/* Schedule Time */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Schedule Time</label>
                            <input
                                type="time"
                                name="scheduleTime"
                                value={formData.scheduleTime}
                                onChange={handleChange}
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.scheduleTime && <span className="text-red-500 text-[12px] mt-2">{errors.scheduleTime}</span>}
                        </div>

                        {/* Position */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Position</label>
                            <input
                                type="text"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                placeholder="Enter Position"
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.position && <span className="text-red-500 text-[12px] mt-2">{errors.position}</span>}
                        </div>
                    </div>

                    {/* MANAGER & EMAIL */}
                    <div className="flex gap-6">

                        {/* Manager's Name */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Manager's Name</label>
                            <input
                                type="text"
                                name="managerName"
                                value={formData.managerName}
                                onChange={handleChange}
                                placeholder="Enter Manager's Name"
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.managerName && <span className="text-red-500 text-[12px] mt-2">{errors.managerName}</span>}
                        </div>

                        {/* Employee Email */}
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium">Employee Email</label>
                            <input
                                type="text"
                                name="employeeEmail"
                                value={formData.employeeEmail}
                                onChange={handleChange}
                                placeholder="Enter Email Address"
                                className="w-120 p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.employeeEmail && <span className="text-red-500 text-[12px] mt-2">{errors.employeeEmail}</span>}
                        </div>
                    </div>

                    {/* SUBMIT BTN */}
                    <div className="flex justify-center w-full">
                        <button
                            type="submit"
                            className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-5 mt-4 rounded-sm">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* FOOTER */}
            <footer className="bg-black text-white p-4 text-center text-[12px] mt-2 shadow-md">
                &copy; {new Date().getFullYear()} E-Konek Pilipinas Inc.
            </footer>
        </div>
    );
}

export default RegistrationForm;