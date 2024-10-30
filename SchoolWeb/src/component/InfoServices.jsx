// src/pages/StudentInfo.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const InfoService = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    rollNo: "",
    name: "",
    class: "",
    address: "",
    fatherName : "",
    motherName : ""
  });

  // Fetching students from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Adding a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/students",
        newStudent
      );
      setStudents([...students, response.data]); // Add new student to the state
      setNewStudent({ rollNo: "", name: "", class: "",  fatherName : "",motherName : "", address: "" }); // Reset form
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); // Show alert if user already exists
      } else {
        console.error("Error adding student:", error);
      }
    }
  };

  return (
    <div className="flex w-full py-10">
  <div className="card flex-grow place-items-center">
    {/* Set fixed height for different screen sizes */}
    <h1 className="text-3xl text-gray-500 text-center py-5">Student Information</h1>
    <div className="overflow-x-auto overflow-y-auto h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 w-full">
      
      <table className="table table-xs table-pin-rows table-pin-cols min-w-full">
        
        <thead>
        
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Roll No
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Class
            </th>
            <th className="py-2 px-4 border-b border-gray-300 text-left">
              Address
            </th>
          </tr>
        </thead>
        <tbody className="text-xl text-black">
          {students.map((student) => (
            <tr key={student._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-300">
                {student.rollNo}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.class}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="card grid h-full flex-grow place-items-center">
    <br />
    <form
      onSubmit={handleAddStudent}
      className="w-11/12 md:w-96 mx-auto p-6 bg-gray-500 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Add Student
      </h2>

      <label className="block mb-4">
        <span className="text-white">Roll No</span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter Roll No"
          value={newStudent.rollNo}
          onChange={(e) =>
            setNewStudent({ ...newStudent, rollNo: e.target.value })
          }
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Name</span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-white">Class</span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter Class"
          value={newStudent.class}
          onChange={(e) =>
            setNewStudent({ ...newStudent, class: e.target.value })
          }
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-white">Father Name </span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter your father's name"
          value={newStudent.fatherName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, fatherName: e.target.value })
          }
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-white">Mother Name </span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter your mother's name"
          value={newStudent.motherName}
          onChange={(e) =>
            setNewStudent({ ...newStudent, motherName: e.target.value })
          }
          required
        />
      </label>

      <label className="block mb-6">
        <span className="text-white">Address</span>
        <input
          className="mt-1 block w-full h-12 p-3 border border-gray-300 rounded bg-transparent text-white placeholder-gray-400"
          type="text"
          placeholder="Enter Address"
          value={newStudent.address}
          onChange={(e) =>
            setNewStudent({ ...newStudent, address: e.target.value })
          }
          required
        />
      </label>

      <div className="flex justify-center">
        <button type="submit" className="btn btn-outline btn-info">
          Add Student
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default InfoService;
