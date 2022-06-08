import { useState } from "react";

const Form = ({ getdata, editData }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, SetEndDate] = useState();
  const [status, setStatus] = useState();
  const [formData, setFormData] = useState({});
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [mobileError, setMobileError] = useState(null);
  const [projectError, setProjectError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [dateError, setDateError] = useState(null);
  const [statusError, setStatusError] = useState(null);
  const [doc, setDoc] = useState("Upload Driver’s License");
  // const [docData,setDocData] = useState();
  // const [document, setDoc] = useState("DriversLicense");
  const handleSubmit = (e) => {
    const data = {};
    e.preventDefault();
    // Check empty value
    if (!name) {
      setNameError("name value cant be empty!");
    }
    if (!email) {
      setEmailError("Email cant be empty");
    }
    if (!mobileNumber) {
      setMobileError("Mobile Number cant be empty");
    }
    if (!projectName) {
      setProjectError("project Name cant be empty");
    }
    if (!description) {
      setDescriptionError("project Description cant be empty");
    }

    if (!startDate) {
      setDateError("Select Date");
    } else {
      data.startDate = startDate;
      console.log(data);
    }
    if (!endDate) {
      setDateError("Select Date");
    } else {
      data.endDate = endDate;
      console.log(data);
    }
    if (!status) {
      setStatusError("Select Status..");
    } else {
      data.status = status;
    }
    //Name validation
    if (!isNaN(name)) {
      setNameError("Name should Not containe numaric values");
    } else if (name.length < 3 || name.length > 20) {
      setNameError(
        "Name length should be greater than 3 and less thant 20 chars"
      );
    } else {
      data.name = name;
      console.log(data);
    }
    // Email validation
    if (!/\S+@\S+\.\S{2,3}/.test(email)) {
      setEmailError("Enter valid email.");
    } else {
      data.email = email;
      console.log(data);
    }

    // Mobile Nuber validation
    if (!/(0|91)?[7-9][0-9]{9}/.test(mobileNumber)) {
      setMobileError("Enter valid Mobile Number.");
    } else {
      data.mobileNumber = mobileNumber;
      console.log(data);
    }

    //Project Name validation
    if (
      !/^[a-zA-Z0-9]+$/.test(projectName) ||
      projectName.length < 3 ||
      projectName.length > 20
    ) {
      setProjectError("Enter valid project name");
    } else {
      data.projectName = projectName;
      console.log(data);
    }

    //Project Description validation
    if (description.length < 3 || description.length > 20) {
      setDescriptionError("Enter valid project Description");
    } else {
      data.description = description;
      console.log(data);
    }
    // Set Form Data
    if (Object.keys(data).length > 0) {
      getdata(Object.assign({ id: Date.now() }, data));
    }
  };
  // console.log("------------------>", formData);
  return (
    <div className="form-container">
      <h1 className="text-[28px] font-bold">Verify Your Identity</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="name">
          <input
            placeholder="Enter Person Name..."
            value={editData ? editData.name : name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {nameError && <span style={{ color: "red" }}>{nameError}</span>}
        </div>
        <div className="form-element-container">
          <div className="email">
            <input
              placeholder="Enter Valid Email..."
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>
          <div className="mobile">
            <input
              placeholder="Enter Mobile Number..."
              type="text"
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}
          </div>
        </div>
        <div className="name">
          <input
            placeholder="Enter Project Name..."
            value={projectName}
            type="text"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
          {projectError && <span style={{ color: "red" }}>{projectError}</span>}
        </div>
        <div className="name">
          <input
            placeholder="Enter Description..."
            value={description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {descriptionError && (
            <span style={{ color: "red" }}>{descriptionError}</span>
          )}
        </div>
        <div className="form-element-container">
          <div className="enddate">
            <label className="date" htmlFor="enddate">
              Start Date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            {dateError && <span style={{ color: "red" }}>{dateError}</span>}
          </div>
          <div className="enddate">
            <label className="date" htmlFor="enddate">
              End Date
            </label>
            <input
              id="enddate"
              type="date"
              onChange={(e) => {
                SetEndDate(e.target.value);
              }}
            />
            {dateError && <span style={{ color: "red" }}>{dateError}</span>}
          </div>
        </div>
        <div
          className="status"
          onChange={(e) => {
            setDoc(docData[e.target.id]);
            setStatus(e.target.id);
          }}
        >
          <h3>Task Status</h3>
          <div>
            <label htmlFor="DriversLicense">Driver’s License </label>
            <input type="radio" name="status" id="DriversLicense" />
          </div>
          <div>
            <label htmlFor="StateIssuedID">State-Issued ID</label>
            <input type="radio" name="status" id="StateIssuedID" />
          </div>
          <div>
            <label htmlFor="Passport">Passport </label>
            <input type="radio" name="status" id="Passport" />
          </div>
          {statusError && <span style={{ color: "red" }}>{statusError}</span>}
        </div>
        <div className="button-group">
          <div className="savebtn">
            <div className="btn-container">
              <button type="submit">Save</button>
            </div>
          </div>
          <div className="viewbtn">
            <div className="btn-container">
              <button type="viewbtn">View</button>
            </div>
          </div>
        </div>
        <SelectFile doc={doc} />
      </form>
    </div>
  );
};

const SelectFile = ({ doc }) => {
  return (
    <div className="m-7 p-7 flex flex-col text-sm rounded shadow border-dashed border-gray-300 border">
      <h3 className="font-bold text-black text-lg">{doc}</h3>
      <p>JPGs and PNGs. Max file size: [filesize]</p>
      <input
        type="file"
        className="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400"
      />
    </div>
  );
};

const docData = {
  StateIssuedID: "Upload State-Issued ID",
  DriversLicense: "Upload Driver’s License",
  Passport: "Upload  Passport",
};

export default Form;
