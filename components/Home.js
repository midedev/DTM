import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';





const Signin = () => {

    const [ passeddate, setpasseddate ] = useState()
    const [ tabledata, settabledata ] = useState([])


    async function getData(){
        let response;
        let data;
        console.log(passeddate)
        try{
            response = await fetch(`https://vast-bastion-98389.herokuapp.com/https://missingmigrants.iom.int/mediterranean-figures/${passeddate}/json`,{
            method:"GET",
            headers:{
                'Content-Type':"application/json"
            }
        })
    
        data = await response.json()
        console.log(data)
        settabledata(data)



        } catch(error){
            return
        }
    }

    const submitData = ( e)=> {
        console.log(e.target.value)
        
        let date = e.target.value
        setpasseddate(date.substring(0,4))
        getData()
    }
    

    return (
        <Fragment>
          
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                    <label style={{marginTop:"40px"}}>Select a date</label>
                    <input onChange={submitData}  type="date" />


                    <p style={{marginTop:"40px"}}>Table Data</p>
                    
                             {/* TABLE HEAD */}
                             <div className="row">
                        <div className="col-md-2">
                        <p >Number of children</p>
                     </div>

                     <div className="col-md-2">
                        <p >Source Quality</p>
                     </div>

                     <div className="col-md-2">
                        <p >Latitude</p>
                     </div>

                     <div className="col-md-2">
                        <p >Cause of death</p>
                     </div>

                     <div className="col-md-2">
                        <p >Number Missing</p>
                     </div>

                     <div className="col-md-2">
                        <p >Report Date</p>
                     </div>


                     </div>
                            {/* TABLE HEAD */}

                         {
                            tabledata.map((item) =>
                            (
                            <>
                    <div className="row">
                        <div className="col-md-2">
                        <p> {item.number_of_children}</p>
                     </div>

                     <div className="col-md-2">
                        <p>{item.source_quality}</p>
                     </div>

                     <div className="col-md-2">
                        <p>{item.latitude}</p>
                     </div>

                     <div className="col-md-2">
                        <p>{item.cause_of_death}</p>
                     </div>

                     <div className="col-md-2">
                        <p>{item.number_missing}</p>
                     </div>

                     <div className="col-md-2">
                        <p>{item.report_date}</p>
                     </div>

                     </div>
                            </>
                            ))
                    }
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
         
        </Fragment>
        
    )
}

export default Signin