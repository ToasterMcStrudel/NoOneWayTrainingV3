import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div className='container-fluid py-2 text-white fs-4'>
        <div className='row' >
            <div className="col fs-2 fw-bold text-primary " style={{textDecoration:"#b63854"}}>
            Services
            </div>
        </div>
        <div className='row'  >
            <div className="col p-2 " >
                <div className="card border border-primary border-2 bg-dark">
                    <div className='card-body'>
                            <div className="card-title border-bottom border-primary text-secondary fs-3">
                            <p>$10 first hour session meet and greet</p>
                            <p>$30 addional hour sessions within Boise</p>
                            <p>Additional fee based on commute distance</p>
                                    {/**add distance calculater */}
                        </div>
                        <div >
                        <p>
                        Private sessions tailored to each owner and dog’s specific needs.
                        Can book one or more sessions based on training needs.
                        All sessions will come with an overview of what was covered and the homework for the week.</p>
                        <p className="fw-bold">Available Saturday - Tuesday from 9am-7pm</p> 
                        <p className="fw-bold">Call, Text or Email for appointments</p>
                        <Image 
                                    
                                    className='shadow-sm float-center '
                                    src="/images/Dogs/Finley 4.JPG"
                                    alt="dog"
                                    width={300}
                                    height={300}
                                     />
                        
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='row'>
            <div className="col p-2 ">
                <div className="card border border-primary border-2 bg-dark">
                    <div className='card-body'>
                        <div className="card-title border-bottom border-primary text-secondary fs-3">
                        Board and Train – $1,000 for 2 weeks – *Coming soon*
                        </div>
                        <div className='card-text'>
                        In house board and train at trainer’s home, prefer 2-week minimum to better modify and solidify new behaviors. 
                        Your pup will get multiple training sessions throughout the day and will have the opportunity to go on an outside adventure (if the owner wishes, i.e., hiking). 
                        Daily/weekly updates that may consist of picture/video footage of your pups progress. 
                        </div>
                        <div className='card-text'>
                        Comprehensive list of all behaviors worked on will be given at the end of the two weeks. 
                        Highly recommend at least 3 follow up sessions with trainer after the pup completes board and train to reinforce new behaviors. 
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    
  )
}

export default Services