import { useState } from "react";
import axios from "axios";

export const Login = () => {
   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.get("http://localhost:8080/users").then((data) => {
         //  console.log(data.data);
         data.data.map((e) => {
            // console.log(e)
            if (
               e.username === formData.username &&
               e.pass === formData.password
            ) {
               console.log(e);
            }
         });
         // console.log(data.data)
      });
   };

   return (
      <div>
         <input
            onChange={handleChange}
            className="username"
            type="text"
            name="username"
            placeholder="Enter Username"
         />
         <input
            onChange={handleChange}
            className="password"
            type="password"
            name="password"
            placeholder="Enter password"
         />
         {/* On this button click make network req to find user with same username and password */}
         {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
         <button className="submit" onClick={handleSubmit}>
            Login
         </button>
      </div>
   );
};
