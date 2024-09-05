import React, { useState } from "react";
import "./StartupRegistrationForm.css";

function StartupRegistrationForm2({ onSubmit }: { onSubmit: any}) {
  const [formData, setFormData] = useState({
    businessModelType: "",
    targetGroup: "",
    industry: "",
    revenueStream: "",
    numberOfFounders: "",
    fundingRaised: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form 2 Data Submitted:", formData);
    onSubmit(formData); 
  };

  return (
    <div className="form-container">
      <h2 className="text-3xl">Startup Registration - Step 2</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
          <label htmlFor="businessModelType">Business Model Type</label>
          <input
            type="text"
            id="businessModelType"
            name="businessModelType"
            value={formData.businessModelType}
            onChange={handleChange}
            required
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Business Model Type</span>
          </div>
          <input
            type="text"
            id="businessModelType"
            name="businessModelType"
            value={formData.businessModelType}
            onChange={handleChange}
            required
            className="input input-bordered bg-white"
          />
        </label>
        
        {/* <div className="form-group">
          <label htmlFor="targetGroup">Target Group</label>
          <input
            type="text"
            id="targetGroup"
            name="targetGroup"
            value={formData.targetGroup}
            onChange={handleChange}
            required
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Target Group</span>
          </div>
          <input
            type="text"
            id="targetGroup"
            name="targetGroup"
            value={formData.targetGroup}
            onChange={handleChange}
            required
            className="input input-bordered bg-white"
          />
        </label>
        {/* <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Industry</span>
          </div>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="input input-bordered bg-white"
          />
        </label>
        {/* <div className="form-group">
          <label htmlFor="revenueStream">Revenue Stream</label>
          <input
            type="text"
            id="revenueStream"
            name="revenueStream"
            value={formData.revenueStream}
            onChange={handleChange}
            required
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Revenue Stream</span>
          </div>
          <input
            type="text"
            id="revenueStream"
            name="revenueStream"
            value={formData.revenueStream}
            onChange={handleChange}
            required
            className="input input-bordered bg-white"
          />
        </label>
        {/* <div className="form-group">
          <label htmlFor="numberOfFounders">Number of Founders (Max 3)</label>
          <input
            type="number"
            id="numberOfFounders"
            name="numberOfFounders"
            value={formData.numberOfFounders}
            onChange={handleChange}
            required
            max="3"
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Number of Founders (Max 3)</span>
          </div>
          <input
            type="number"
            id="numberOfFounders"
            name="numberOfFounders"
            value={formData.numberOfFounders}
            onChange={handleChange}
            required
            max="3"
            className="input input-bordered bg-white"
          />
        </label>
        {/* <div className="form-group">
          <label htmlFor="fundingRaised">Funding Raised</label>
          <input
            type="number"
            id="fundingRaised"
            name="fundingRaised"
            value={formData.fundingRaised}
            onChange={handleChange}
            required
          />
        </div> */}
         <label className="form-group form-control w-full">
          <div className="label">
            <span className="label-text text-black text-xl">Funding Raised</span>
          </div>
          <input
            type="number"
            id="fundingRaised"
            name="fundingRaised"
            value={formData.fundingRaised}
            onChange={handleChange}
            required
            className="input input-bordered bg-white"
          />
        </label>
        <div className="form-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StartupRegistrationForm2;
