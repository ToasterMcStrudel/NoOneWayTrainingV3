import React from 'react'

function Philosophy() {
  return (
    <div className='container-fluid py-2'>
    <div className='row' >
        <div className="col fs-2 fw-bold text-primary ">
        Philosophy
        </div>
    </div>
    <div className='row py-2'>
        <div className='col'>
            <div className="card shadow-sm border border-primary border-2 bg-dark" >
                <div className='row'>
                    <div className='col'>
                        <div className='card-body text-white fs-4'>
                        <div className='card-text'>
                            I have been working with dogs for around 10 years now and the one thing that
                            I know is that every dog is a unique individual that learns in different ways
                            and at different paces. This is the building blocks of my philosophy to training.
                        </div>
                        <div className='card-text'>
                            Creating a well balanced working dog or pet dog with manners requires structure, 
                            consistency, and time but above all else it takes a foundation in relationship-based
                            training from owner to dog. It can take as little as 5 minutes to modify a behavior 
                            but it can take longer than 5 months to make it habit. At the end of the day I believe                                    
                            that each dog is a unique individual and that there is no one way to train your dog.                            
                          </div>
                        </div>    
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col'>
                    {/* <MyCarousel className="mytesting"/> */}
                    </ div>
                </div>  
            </div>
        </div>    
    </div>    
</div>
    
  )
}

export default Philosophy