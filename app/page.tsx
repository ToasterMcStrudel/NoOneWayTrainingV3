import Image from 'next/image'
import Navbar from '../componets/Navbar'

export default function Home() {
  return (
    <div className='container-fluid py-2 fs-4 '>
            <div className='row' >
                <div className="col fs-2 fw-bold text-primary ">
                Home
                </div>
            </div>
            <div  className='row py-2'>
                <div className='col'>
                    <div className={"card shadow-sm border border-primary border-2 bg-black "}  >
                        <div className='card-body text-white'>
                        <div className='row pt-2'>
                            <div className='col' >
                            <Image 
                                  src="/images/Dogs/4DogsAndBabeCrop2.jpg"
                                  alt="MainDogPhoto"
                                  className='float-end shadow-sm '
                                  width={420}
                                  height={300}
                                     /> 


                                <div className='card-text' >Hi, my name is Anais Robertson and I would love to work with you and your dog! I graduated from Washington State University Summer
                                of 2022 with a B.S. in Wildlife Ecology & Conservation and a minor in Forestry.
                                </div> 
                                < div className='card-text' >
                                I have spent the last 10+ years working with my personal dogs as well as friends and 
                                family’s dogs in behavior modification and trick work. 
                                </div> 
                            
                               
                            
                            </div>
                        </div >
                        <div className='row py-3'>
                            <div className='col'>
                                <div className='card-text'>
                                During my college years I worked with a local dog daycare and training company and started working in a 
                                more professional capacity with dog training expanding my skills to running large group
                                classes from puppy to advanced training as well as assisting in Canine Good Citizen preparation and rally courses.
                                </div> 
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col'>
                            <Image 
                                    
                                    className='shadow-sm float-start'
                                    src="/images/Dogs/Nelly 8.JPG"
                                    alt="dog"
                                    width={340}
                                    height={300} />
                            
                             <div className='card-text' >
                                    My concentration was working one on one with clients to help them build a better relationship with their dogs, 
                                    all while gaining experience working with reactivity in dogs and confidence building with more fearful pups.
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='row py-2'>
                <div className='col'>
                    <div className={"card shadow-sm border border-primary border-2 bg-black "} >
                        <div className='card-body text-white'>
                        <div className='row'>
                            <div className='col'>
                            <Image 
                                    className='shadow-sm float-end'
                                    src="/images/Dogs/Finley 6.JPG"
                                    alt="dog2"
                                    width={305}
                                    height={300}
                                     />
                            <div className='card-text'>
                                    In between work and classes I worked with two service dog companies through the daycare and training company, 
                                    Canine Companions for Independence out of California and Autism Anchoring Dogs in Oregon to further the social 
                                    development of puppies from ages 8 weeks to 1.5years in extra exposure for their public access hours on college 
                                    campus grounds and stores. As well as working with Palouse Paws, a therapy program that utilizes pups to provide 
                                    comfort to those in need at hospitals, schools, and college campus events.
                                </div>
                            
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>      
            <div className='row py-2'>
                
                <div className='rol'>
                    <div className={"card shadow-sm border border-primary border-2 bg-black "} >
                        <div className='card-body text-white'>
                            <div className='row'>
                                <div className='col'>
                                <Image 
                                    className='shadow-sm float-start '
                                    src="/images/Wolf Images/image_6483441.JPG"
                                    width={500}
                                    height={300}
                                    alt="dog3"
                                     />
                                
                                <div className='card-text'>
                                    This summer I completed a 2-month internship in Indiana working with wolves, bison and foxes in operant 
                                    conditioning and positive reinforcement to promote advocacy for wolf reintroduction and education to help further 
                                    public knowledge and remove misconceptions about predator to prey relationships with humans.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
    </div>
  )
}
