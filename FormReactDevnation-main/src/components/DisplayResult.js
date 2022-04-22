import React from "react";

const DisplayResult = ({ dataProp }) => {
  // const [email,password]=dataProp
  console.log("=====>", dataProp);

  return (
    <div className="display">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">First</th>
          </tr>
        </thead>
        <tbody>
          {dataProp.map((item) => {
            return (
              <tr>
                <td colSpan="2">{item.email}</td>
                <td colSpan="4">{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayResult;
