import React from "react";
import CountUp from "react-countup";

export const Counter = ()=>{
return<>
            <div className="bg-gray-200 p-4 rounded-md mb-8 w-full">
          <div className="flex justify-around">
            <div className="rounded-md overflow-hidden bg-white p-4 md:p-6 lg:p-8">
              <h3>
                <CountUp start={0} end={50} duration={3} separator="+" />+
              </h3>
              <p>Register</p>
            </div>
            <div className="rounded-md overflow-hidden bg-white p-4 md:p-6 lg:p-8">
              <h3>
                <CountUp start={0} end={10000} duration={4} />+
              </h3>
              <p>Happy Clients</p>
            </div>
            <div className="rounded-md overflow-hidden bg-white p-4 md:p-6 lg:p-8">
              <h3>
                <CountUp start={0} end={500} duration={2} />+
              </h3>
              <p>Well-Known Developers</p>
            </div>
            <div className="rounded-md overflow-hidden bg-white p-4 md:p-6 lg:p-8">
              <h3>
                <CountUp start={0} end={24} duration={1.5} separator="+" />
                /7
              </h3>
              <p>24/7 Service</p>
            </div>
          </div>
        </div>
</>
}