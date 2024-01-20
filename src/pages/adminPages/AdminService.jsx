import { useState } from "react";

const AdminService = () => {
const [data , setData]= useState({

});

const handleSubmit=()=>{

}
const handleChange=()=>{

}
  return (
    <>
      <div className="mt-2 text-black">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
          <h1 className="text-white">Add Service</h1>
          <div className="flex flex-col">
            <label className="text-white mb-2">Name</label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              id="username"
              name="username"
              type="text"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2">Email</label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-2" htmlFor="phone">
              Phone No.
            </label>
            <input
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300"
              type="number"
              value={data.phone}
              name="phone"
              id="phone"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 w-full"
          >
            update
          </button>
        </form>
      </div>
    </>
  );
};
export default AdminService;
