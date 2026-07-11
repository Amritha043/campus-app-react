import React from 'react'

const AddRegistration = () => {
  return (
    <div>
         <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label"><b>  Registratio Number</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                             <label htmlFor="" className="form-label"> <b>Full Name</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                             <label htmlFor="" className="form-label"><b>  Aadhar Number</b> </label>
<input type="text" className="form-control" />
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1"><b>Email Address</b> </label>
                               <input type="text" className="form-control" />
                            </div>
                            

                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label"><b> Phone Number</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1"><b>Branch/Department</b>   </label>
                                <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label me-3 ms-1"><b> SSLC
Mark (%)</b></label>
                            <input type="text" className="form-control" />
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> <b>Plus Two Mark (%)</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"> <b> UG Degree Name and Mark (%)</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b> PG Degree Name and Mark
(%) </b></label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark"><b>SUBMIT</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRegistration