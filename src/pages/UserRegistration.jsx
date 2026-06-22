import React, { useEffect,useState,useRef} from "react";

import config from "../utils/config";
import { ImCross } from "react-icons/im";
const UserRegistration = () => {

  const [branches, setBranches] =
    useState([]);

  const [showOtpBox, setShowOtpBox] =
    useState(false);

  const [otp, setOtp] = useState("");
const idProofRef = useRef();
const dobProofRef = useRef();
const signatureRef = useRef();
const photoRef = useRef();
// const parentRef = useRef();
  const [errors, setErrors] =
    useState({});
const [timer, setTimer] = useState(60);
useEffect(() => {

  let interval;

  if (showOtpBox && timer > 0) {

    interval = setInterval(() => {

      setTimer((prev) => prev - 1);

    }, 1000);

  }

  return () => clearInterval(interval);

}, [showOtpBox, timer]);
const [fileResetKey, setFileResetKey] = useState(0);
  const [form, setForm] = useState({

    full_name: "",

    email: "",

    phone: "",

    address: "",

    dob: "",

    branch: "",

    aadhar_number: "",

    pan_number: "",

    account_type: "Regular",

    parent_name: "",

    relationship: "",

    parent_email: "",

    parent_phone: "",

    alternate_contact: "",

    parent_address: "",

    parent_occupation: "",

    parent_id_proof: "",

    applicant_signature: "",

    declaration_date: "",
declaration_accepted: false,
    // id_proof: null,

    // dob_proof: null,

    // signature: null,

    // photograph: null,
    is_minor: false,

  });

  useEffect(() => {

    loadBranches();

  }, []);

  const loadBranches = async () => {

    const res = await fetch(
      `${config.baseurl}/branches-list-assigned/`
    );

    const data = await res.json();

    setBranches(data);

  };

  const validateEmail = (email) =>
   /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const validatePhone = (phone) =>
    /^\d{10}$/.test(phone);

  const validateAadhar = (aadhar) =>
    /^\d{12}$/.test(aadhar);

  const validatePan = (pan) =>
    /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

 const checkExistingField = async (field, value) => {
  try {
    const res = await fetch(
      `${config.baseurl}/check-user-field/?field=${field}&value=${value}`
    );

    const data = await res.json();

    return data.exists;

  } catch (error) {

    console.log(error);

    return false;

  }
};

const handleChange = async (e) => {

  const { name, value, files, type, checked } = e.target;

  let updatedForm = {
    ...form,
    [name]:
      files ? files[0]
      : type === "checkbox"
      ? checked
      : value,
  };

  // setForm(updatedForm);

//  let fieldValue;

//   if (type === "file") {

//     fieldValue = files && files.length > 0
//       ? files[0]
//       : null;

//   } else if (type === "checkbox") {

//     fieldValue = checked;

//   } else {

//     fieldValue = value;

//   }

  // const updatedForm = {
  //   ...form,
  //   [name]: fieldValue,
  // };

  setForm(updatedForm);
  
  let errorMsg = "";

  if (name === "email") {

    if (!validateEmail(value)) {

      errorMsg ="Invalid Email Address (must end with @gmail.com)";

    } else {

      const exists = await checkExistingField(
        "email",
        value
      );

      if (exists) {

        errorMsg = "Email already exists";

      } else if (
        value &&
        updatedForm.parent_email &&
        value === updatedForm.parent_email
      ) {

        errorMsg =
          "User email and parent email cannot be same";

      }

    }

    setErrors((prev) => ({
      ...prev,
      email: errorMsg,
    }));
  }

  if (name === "parent_email") {

    if (value && !validateEmail(value)) {

      errorMsg = "Invalid Email Address (must end with @gmail.com)";

    } else {

      const exists = await checkExistingField(
        "parent_email",
        value
      );

      if (exists) {

        errorMsg =
          "Parent email already exists";

      } else if (
        value &&
        updatedForm.email &&
        value === updatedForm.email
      ) {

        errorMsg =
          "Parent email and user email cannot be same";

      }

    }

    setErrors((prev) => ({
      ...prev,
      parent_email: errorMsg,
    }));
  }


  if (name === "phone") {

    if (!validatePhone(value)) {

      errorMsg =
        "Phone must be 10 digits";

    } else {

      const exists = await checkExistingField(
        "phone",
        value
      );

      if (exists) {

        errorMsg =
          "Phone number already exists";

      } else if (
        value &&
        updatedForm.parent_phone &&
        value === updatedForm.parent_phone
      ) {

        errorMsg =
          "User phone and parent phone cannot be same";

      } else if (
        value &&
        updatedForm.alternate_contact &&
        value ===
          updatedForm.alternate_contact
      ) {

        errorMsg =
          "User phone and alternate phone cannot be same";

      }

    }

    setErrors((prev) => ({
      ...prev,
      phone: errorMsg,
    }));
  }

  if (name === "parent_phone") {

    if (
      value &&
      !validatePhone(value)
    ) {

      errorMsg =
        "Parent phone must be 10 digits";

    } else {

      const exists = await checkExistingField(
        "parent_phone",
        value
      );

      if (exists) {

        errorMsg =
          "Parent phone already exists";

      } else if (
        value &&
        updatedForm.phone &&
        value === updatedForm.phone
      ) {

        errorMsg =
          "Parent phone and user phone cannot be same";

      } else if (
        value &&
        updatedForm.alternate_contact &&
        value ===
          updatedForm.alternate_contact
      ) {

        errorMsg =
          "Parent phone and alternate phone cannot be same";

      }

    }

    setErrors((prev) => ({
      ...prev,
      parent_phone: errorMsg,
    }));
  }

  if (name === "alternate_contact") {

    if (
      value &&
      !validatePhone(value)
    ) {

      errorMsg =
        "Alternate phone must be 10 digits";

    } else {

      const exists = await checkExistingField(
        "alternate_contact",
        value
      );

      if (exists) {

        errorMsg =
          "Alternate phone already exists";

      } else if (
        value &&
        updatedForm.phone &&
        value === updatedForm.phone
      ) {

        errorMsg =
          "Alternate phone and user phone cannot be same";

      } else if (
        value &&
        updatedForm.parent_phone &&
        value ===
          updatedForm.parent_phone
      ) {

        errorMsg =
          "Alternate phone and parent phone cannot be same";

      }

    }

    setErrors((prev) => ({
      ...prev,
      alternate_contact: errorMsg,
    }));
  }

  if (name === "aadhar_number") {

    if (!validateAadhar(value)) {

      errorMsg =
        "Aadhar must be 12 digits";

    }
else {

    const exists = await checkExistingField(
      "aadhar_number",
      value
    );

    if (exists) {

      errorMsg = "Aadhar already exists";

    } 
  }
    setErrors((prev) => ({
      ...prev,
      aadhar_number: errorMsg,
    }));
  }

if (name === "pan_number") {

  if (
    value &&
    !validatePan(value)
  ) {

    errorMsg =
      "Invalid PAN Format (ABCDE1234F)";

  } else {

    const exists = await checkExistingField(
      "pan_number",
      value
    );

    if (exists) {

      errorMsg =
        "PAN already exists";

    }

  }

  setErrors((prev) => ({
    ...prev,
    pan_number: errorMsg,
  }));
}
};

const sendOtp = async (e) => {

  e.preventDefault();

  if (
    form.account_type == "Regular" &&
    !form.pan_number
  ) {

    alert("PAN Number Required");

    return;

  }

  if (
    !form.declaration_accepted
  ) {

    alert(
      "Declaration is not accepted"
    );

    return;

  }
const hasErrors = Object.values(errors).some(
  (err) => err
);

if (hasErrors) {

  alert(
    "Please fix validation errors"
  );

  return;

}
  const formData = new FormData();

  Object.keys(form).forEach((key) => {

    formData.append(
      key,
      form[key]
    );

  });

  try {

    const res = await fetch(
      `${config.baseurl}/send-user-otp/`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    alert(data.message);

    if (
      data.status === "success"
    ) {
      setTimer(60);

      setShowOtpBox(true);

    }

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

};


  const verifyOtp = async () => {

    const formData = new FormData();
  Object.keys(form).forEach((key) => {

    formData.append(key, form[key]);

  });
    formData.append(
  "id_proof",
  idProofRef.current.files[0]
);

formData.append(
  "dob_proof",
  dobProofRef.current.files[0]
);

formData.append(
  "signature",
  signatureRef.current.files[0]
);

formData.append(
  "photograph",
  photoRef.current.files[0]
);

    formData.append("otp", otp);

    const res = await fetch(
      `${config.baseurl}/verify-user-otp/`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    alert(data.message);

    if (data.status === "success") {

  setShowOtpBox(false);

  setOtp("");

  setErrors({});

  setTimer(60);

  setForm({

    full_name: "",

    email: "",

    phone: "",

    address: "",

    dob: "",

    branch: "",

    aadhar_number: "",

    pan_number: "",

    account_type: "Regular",

    parent_name: "",

    relationship: "",

    parent_email: "",

    parent_phone: "",

    alternate_contact: "",

    parent_address: "",

    parent_occupation: "",

    parent_id_proof: "",

    applicant_signature: "",

    declaration_date: "",

    declaration_accepted: false,

    // id_proof: null,

    // dob_proof: null,

    // signature: null,

    // photograph: null,
is_minor: false,
  });
 setFileResetKey(prev => prev + 1);
 if (idProofRef.current) {
  idProofRef.current.value = "";
}

if (dobProofRef.current) {
  dobProofRef.current.value = "";
}

if (signatureRef.current) {
  signatureRef.current.value = "";
}

if (photoRef.current) {
  photoRef.current.value = "";
}
}

  };

  return (

    <div className="p-5 bg-gray-100 min-h-screen bg-gradient-to-r from-blue-200 to-blue-300">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">

         User Registration

        </h2>

        <form onSubmit={sendOtp} >

          <h3 className="text-xl font-bold mb-3">

             Personal Details

          </h3>

        <div className="mb-4">
  <label className="block mb-1 font-medium text-gray-700">
    Full Name
  </label>

  <input
    type="text"
    name="full_name"
    placeholder="Enter Full Name"
    className="input"
    onChange={handleChange}
    value={form.full_name}
    required
  />
</div>
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    placeholder="Enter Email Address"
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.email
        ? "border-red-500"
        : "border-gray-300"
    }`}
    onChange={handleChange}
    value={form.email}
    required
  />

  {errors.email && (
    <p className="text-red-500 text-sm mt-1">
      {errors.email}
    </p>
  )}

</div>
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    Phone Number
  </label>

  <input
    type="text"
    name="phone"
    placeholder="Enter Phone Number"
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.phone
        ? "border-red-500"
        : "border-gray-300"
    }`}
    onChange={handleChange}
     maxLength={10}
     value={form.phone}
    required
  />

  {errors.phone && (
    <p className="text-red-500 text-sm mt-1">
      {errors.phone}
    </p>
  )}

</div>
<div className="mb-4">
  <label className="block mb-1 font-medium text-gray-700">
    Address
  </label>
  
        <textarea
            name="address"
            placeholder="Address"
          className="input "
            onChange={handleChange}
            required
            value={form.address}
          />
</div>
       
 <div className="mb-4">
  <label className="block mb-1 font-medium text-gray-700">
    Date of Birth
  </label>
  
        <input
            type="date"
            name="dob"
            className="input"
            onChange={handleChange}
            required
            value={form.dob}
          />
</div>     

      
<div className="mb-4">
  <label className="block mb-1 font-medium text-gray-700">
    Branch
  </label>
  
         <select
            name="branch"
            className="input "
            onChange={handleChange}
            required
             value={form.branch}
          >

            <option value="">
              Select Branch
            </option>

            {branches.map((b) => (

              <option className="text-black bg-wite"
                key={b.id}
                value={b.id}
              >
                {b.branch_name}
              </option>

            ))}

          </select>

</div>
       
<h3 className="text-xl font-bold mt-5 mb-3">
  Account Type
</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">

  {[
    "Regular",
    "Standard",
    "Gold",
    "Platinum",
    "Hike",
  ].map((type) => (

    <label
      key={type}
      className={`border rounded p-3 flex items-center gap-2 cursor-pointer
      ${
        form.account_type === type
          ? "bg-blue-100 border-blue-500"
          : "bg-white"
      }`}
    >

      <input
        type="checkbox"
        checked={
          form.account_type === type
        }
        onChange={() =>
          setForm({
            ...form,
            account_type: type,
          })
        }
      />

      <span>{type}</span>

    </label>

  ))}

</div>


          <h3 className="text-xl font-bold mt-5 mb-3">

          Identity Details

          </h3>
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
  Aadhar Number
  </label>
 <input
            type="text"
            name="aadhar_number"
            placeholder="Aadhar Number"
            value={form.aadhar_number}
           className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.aadhar_number
        ? "border-red-500"
        : "border-gray-300"
    }`}
            onChange={handleChange}
            required
          />

 
   {errors.aadhar_number && (
            <p className="error text-red-500">
              {errors.aadhar_number}
            </p>
          )}

</div>

         
       
        

            <>
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    PAN Number
  </label>

  <input
    type="text"
    name="pan_number"
    placeholder="Enter PAN Number"
    value={form.pan_number}
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.pan_number
        ? "border-red-500"
        : "border-gray-300"
    }`}
    onChange={handleChange}
    required
  />

  {errors.pan_number && (
    <p className="text-red-500 text-sm mt-1">
      {errors.pan_number}
    </p>
  )}

</div>
 </>

   {form.account_type === "Regular" && (
  <div className="mb-4 flex items-center gap-3">
    <input
      type="checkbox"
      name="is_minor"
      checked={form.is_minor}
      onChange={handleChange}
    />

    <label className="font-medium text-gray-700">
      Is Minor Account
    </label>
  </div>
)}
{form.is_minor && (
  <>
          <h3 className="text-xl font-bold mt-5 mb-3">

            Parent Details

          </h3>
<div className="mb-4">
  <label className="block mb-1 font-medium text-gray-700">
    Parent Name
  </label>
  
     <input
            type="text"
            name="parent_name"
            value={form.parent_name}
            placeholder="Parent Name"
            className="input"
            onChange={handleChange}
            required={form.is_minor}
          />
</div>
          
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    Parent Email Address
  </label>

  <input
    type="email"
    name="parent_email"
    placeholder="Enter Parent Email"
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.parent_email
        ? "border-red-500"
        : "border-gray-300"
    }`}
    onChange={handleChange}
    value={form.parent_email}
    required={form.is_minor}
  />

  {errors.parent_email && (
    <p className="text-red-500 text-sm mt-1">
      {errors.parent_email}
    </p>
  )}

</div>
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    Parent Phone Number
  </label>

  <input
    type="text"
    name="parent_phone"
    placeholder="Enter Parent Phone"
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.parent_phone
        ? "border-red-500"
        : "border-gray-300"
    }`}
     maxLength={10}
     value={form.parent_phone}
    onChange={handleChange}
    required={form.is_minor}
  />

  {errors.parent_phone && (
    <p className="text-red-500 text-sm mt-1">
      {errors.parent_phone}
    </p>
  )}

</div>
        
<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
    Alternate Phone Number
  </label>

  <input
    type="text"
    name="alternate_contact"
    placeholder="Enter Alternate Phone"
     maxLength={10}
    className={`w-full border rounded-lg p-2 outline-none
    ${
      errors.alternate_contact
        ? "border-red-500"
        : "border-gray-300"
    }`}
    value={form.alternate_contact}

    onChange={handleChange}
  />

  {errors.alternate_contact && (
    <p className="text-red-500 text-sm mt-1">
      {errors.alternate_contact}
    </p>
  )}

</div>

<div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
  Parent Address
  </label>

        <textarea
            name="parent_address"
            placeholder="Parent Address"
          className="input "
          value={form.parent_address}
            onChange={handleChange}
            required={form.is_minor}
          />
  
</div>
   <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
  Parent Occupation
  </label>

  <input
    type="parent_occupation"
            name="parent_occupation"
            placeholder="Parent Occupation"
    className={`w-full border rounded-lg p-2 outline-none`}
    onChange={handleChange}
    value={form.parent_occupation}
   required={form.is_minor}
  />

</div>  
 <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
parent ID Proof Number
  </label>

    <input
    type="text"
    name="parent_id_proof"
    placeholder="Enter Parent ID"
    value={form.parent_id_proof}
    className={`w-full border rounded-lg p-2 outline-none`}
    onChange={handleChange}
    required
  />
</div>
  </>
)}
 <h3 className="text-xl font-bold mt-5 mb-3">
 Upload Documents
</h3>
 <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
  ID Proof
  </label>

  <input
ref={idProofRef}
  type="file"
  name="id_proof"
  className="input"
  onChange={handleChange}
  required
/>

</div>

 <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
  Date of Birth Proof
  </label>

 <input
  ref={dobProofRef}
  type="file"
  name="dob_proof"
  className="input"
  onChange={handleChange}
  required
/>


</div>
 <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
Signature
  </label>

   <input
 ref={signatureRef}
  type="file"
  name="signature"
  className="input"
  onChange={handleChange}
 
  required
/>
</div>
 <div className="mb-4">

  <label className="block mb-2 font-medium text-gray-700">
Photo
  </label>

   <input
 ref={photoRef}
  type="file"
  name="photograph"
  className="input"
  onChange={handleChange}
 
  required
/>
</div>
        
<h3 className="text-xl font-bold mt-5 mb-3">

  Declaration

</h3>

<div className="border rounded p-4 bg-gray-50 mb-4">

  <label className="flex items-start gap-3 cursor-pointer">

    <input
      type="checkbox"
      name="declaration_accepted"
      checked={
        form.declaration_accepted
      }
      onChange={handleChange}
      className="mt-1"
    />

    <span className="text-gray-700">

      I hereby declare that all the
      information provided is true
      and correct to the best of my
      knowledge.

    </span>

  </label>

</div>

<input
  type="date"
  name="declaration_date"
  value={form.declaration_date}
  className="input"
  onChange={handleChange}
  required
/>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded mt-5"
          >

            Send OTP

          </button>

        </form>
      {showOtpBox && (

  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

     <div className="bg-white p-5 rounded w-96 relative">
  <button
        onClick={() => {
          setShowOtpBox(false);
          setOtp("");
        }}
        className="absolute top-3 right-3 text-red-500 hover:text-red-600"
      >

      <ImCross size={14} />

      </button>

      <h2 className="text-2xl font-bold mb-2">

        Enter OTP

      </h2>

      <p className="text-sm text-gray-600 mb-3">

        OTP expires in:
        <span className="font-bold text-red-600">
          {" "}
          {timer}s
        </span>

      </p>

      <input
        type="text"
        placeholder="Enter OTP"
        className="input"
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value)
        }
      />

      <button
        onClick={verifyOtp}
        disabled={timer === 0}
        className={`px-4 py-2 rounded mt-4 w-full text-white
        ${
          timer === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600"
        }`}
      >

        {timer === 0
          ? "OTP Expired"
          : "Verify OTP"}

      </button>

    </div>

  </div>

)}

      </div>

  
    </div>

  );

};

export default UserRegistration;