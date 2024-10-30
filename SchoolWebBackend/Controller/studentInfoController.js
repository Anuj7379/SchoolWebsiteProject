// import Student from "../Model/studentInfo"

// // Example: Creating a new student
// const createStudent = async (req, res) => {
//   try {
//     const { rollNo, name, class: className, address } = req.body;

//     const newStudent = new Student({
//       rollNo,
//       name,
//       class: className,
//       address
      
//     });

//     const savedStudent = await newStudent.save();
//     res.status(201).json(savedStudent);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// module.exports = { createStudent };
