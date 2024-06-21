import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { useParams } from "react-router-dom";
import {
  useGetJobByIdQuery,
  useUpdateJobMutation,
} from "../../feature/job/jobApi";

const UpdateJob = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetJobByIdQuery(id);
  // console.log("idData", data);
  const [newData, setNewData] = useState("");
  useEffect(() => {
    if (data) {
      setNewData(data);
    }
  }, [data]);
  console.log(newData);

  const {
    position,
    companyName,
    location,
    employmentType,
    salaryRange,
    skills,
    overview,
    responsibilities,
    requirements,
    queries,
    _id,
    experience,
    workLevel,
  } = newData?.data || {};

  const { handleSubmit, register, control, reset } = useForm();

  const [updateJob, { isLoading }] = useUpdateJobMutation();

  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });

  const onSubmit = (data) => {
    updateJob(data);
    setNewData(data);
    // navigate("/jobs");
  };

  return (
    <div className="flex justify-center items-center overflow-auto p-10">
      <form
        className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="w-full text-2xl text-primary mb-5">Update Your Job</h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="position">
            Position
          </label>
          <input
            type="text"
            id="position"
            defaultValue={position}
            {...register("position")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            disabled
            className="cursor-not-allowed"
            type="text"
            id="companyName"
            defaultValue={companyName}
            {...register("companyName")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="experience">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            defaultValue={experience}
            {...register("experience")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="workLevel">
            Work Level
          </label>
          <input
            type="text"
            id="workLevel"
            defaultValue={workLevel}
            {...register("workLevel")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="employmentType">
            Employment Type
          </label>
          <input
            type="text"
            id="employmentType"
            defaultValue={employmentType}
            {...register("employmentType")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="salaryRange">
            Salary Range
          </label>
          <input
            type="text"
            id="salaryRange"
            defaultValue={salaryRange}
            {...register("salaryRange")}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            defaultValue={location}
            {...register("location")}
          />
        </div>
        <hr className="w-full mt-2 bg-black" />
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="overview">
            Overview
          </label>
          <textarea
            defaultValue={overview}
            rows={8}
            {...register("overview")}
            id="overview"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Skills</label>
          <div>
            <div>
              {skillFields.map((item, index) => {
                return (
                  <div key={item.key} className="flex items-center gap-3 mb-5">
                    <input
                      className="!w-full"
                      type="text"
                      defaultValue={skills}
                      {...register(`skills[${index}]`)}
                    />
                    <button
                      type="button"
                      onClick={() => skillRemove(index)}
                      className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                    >
                      <FiTrash
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => skillAppend("")}
                className="btn"
              >
                Add Skill
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Responsibilities</label>
          <div>
            <div>
              {resFields.map((item, index) => {
                return (
                  <div key={item.key} className=" mb-5 flex items-center gap-3">
                    <input
                      className="!w-full"
                      type="text"
                      defaultValue={responsibilities}
                      {...register(`responsibilities[${index}]`)}
                    />
                    <button
                      type="button"
                      onClick={() => resRemove(index)}
                      className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                    >
                      <FiTrash
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => resAppend("")}
                className="btn"
              >
                Add Responsibility
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Requirements</label>
          <div>
            <div>
              {reqFields.map((item, index) => {
                return (
                  <div key={item.key} className=" mb-5 flex items-center gap-3">
                    <input
                      className="!w-full"
                      type="text"
                      defaultValue={requirements}
                      {...register(`requirements[${index}]`)}
                    />
                    <button
                      type="button"
                      onClick={() => reqRemove(index)}
                      className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                    >
                      <FiTrash
                        className="text-red-500 group-hover:text-white transition-all"
                        size="20"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => reqAppend("")}
                className="btn"
              >
                Add Requirement
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-3">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;

// Position name
// Company name
// Experience
// Work Level
// Salary Range
// Employment Type
// Location
// Overview
// Responsibilities
// Requirements
// Skills
