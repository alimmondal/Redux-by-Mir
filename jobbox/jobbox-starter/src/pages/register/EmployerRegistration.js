import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../feature/auth/authApi";

const EmployerRegistration = () => {
  const [countries, setCountries] = useState([]);
  const {
    user: { email },
  } = useSelector((state) => state.auth);

  const { handleSubmit, register, control } = useForm({
    defaultValues: { email },
  });

  const term = useWatch({ control, name: "term" });
  // console.log(term);
  const navigate = useNavigate();
  const [postUser, { isLoading, isError }] = useRegisterMutation();

  const businessCategory = [
    "Automotive",
    "Business support & Supplies",
    "Computers & Electronics",
    "Constructions & Contractor",
    "Design Agency",
    "Education",
    "Food & Dining",
    "Health & Medicine",
    "Home & Gardening",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale, Distribution",
    "Merchant (Retail)",
    "Miscellaneous",
    "Personal Care & Service",
    "Real State",
    "Travel & Transportation",
  ];

  const employeeRange = ["1-10", "11-50", "51-100", "Above 100"];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data) => {
    // console.log(data);
    postUser({ ...data, role: "employer" });
  };

  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="cursor-pointer w-fit mt-5 flex items-center"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex justify-center items-center overflow-auto p-10">
        <form
          className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">Employer</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              disabled
              className="cursor-not-allowed"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" htmlFor="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="country">
              Country
            </label>
            <select {...register("country")} id="country">
              {countries
                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                .map(({ name }) => (
                  <option key={name.common} value={name.common}>
                    {name.common}
                  </option>
                ))}
            </select>
          </div>
          <hr className="" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company's name
            </label>
            <input type="text" {...register("companyName")} id="companyName" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="employeeRange">
              Number of Employee
            </label>
            <select {...register("employeeRange")} id="employeeRange">
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyCategory">
              Company's Category
            </label>
            <select {...register("companyCategory")} id="companyCategory">
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="roleInCompany">
              Your role in the company
            </label>
            <input
              type="text"
              {...register("roleInCompany")}
              id="roleInCompany"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex  w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
