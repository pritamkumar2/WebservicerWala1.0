import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminContacts = () => {
  const [data, setData] = useState([]);
  const { AuthorizationToken } = useAuth();
  const getAllContact = async () => {
    const head = {
      headers: {
        Authorization: AuthorizationToken,
      },
    };
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/contacts",
        head
      );
      setData(response.data);
      console.log("get alluser", response.data);
    } catch (error) {
      console.log("Error getting getAllUsers", error.response);
    }
  };

  const mainDel = async (id) => {
    try {
      const head = {
        headers: {
          Authorization: AuthorizationToken,
        },
      };
      console.log("user table id", id);
      const response = await axios.delete(
        `http://localhost:3000/api/admin/contacts/delete/${id}`, // Include the id in the URL
        head
      );
      if (response.status === 200) {
        toast.success("contact delete successfully !", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getAllContact();
      }
    } catch (error) {
      console.log("admin contact delete error", error);
    }
  };

  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <>
      <h1 className="mt-10" style={{ color: "white", width: "100%" }}>
        contacts
      </h1>

      <div className="mt-10 main-contact-div text-white">
        {data.map((contact, index) => (
          <div className="main-contact bg-red-400" key={index}>
            <div className="block">username: {contact.username}</div>
            <div className="block">email: {contact.email}</div>
            <div className="block">phone: {contact.phone}</div>
            <div className="block">message: {contact.message}</div>
            <div className="blockdelete">
              <button
                onClick={() => {
                  mainDel(contact._id);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminContacts;
