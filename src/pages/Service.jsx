import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

export const Service = () => {
  const [datas, setDatas] = useState([]); // Change to an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://webservicerwalabackend11-0.onrender.com/api/service");
        if (response.status === 200) {
          console.log("service api response", response);
          setDatas(response.data); // Assuming the data is in response.data.data
          console.log("hello iam", response.data.data);
        }
      } catch (error) {
        console.log("service data fetch error :", error);
        setError(error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  return (
    <>
      {console.log("main data", datas)}
      <div className="main-blocks">
        {datas.map((item, index) => (
          <Cards
            key={index}
            service={item.Service}
            description={item.description}
            provider={item.provider}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};
