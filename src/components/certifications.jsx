import React from 'react'

const certifications = () => {
  return (
   <>
   <h2>Certifications Section</h2>
   <div className="certifications">
           <div className="certificate">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s"  alt="Advanced Diploma in Python programming" />
            <h2 className='certificateTitle'>Full Stack Development</h2>
            <h2 className='certificateInstitution'>Simplar Academy </h2>
       </div>
       <div className="certificate">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s"  alt="Advanced Diploma in Python programming" />
            <h2 className='certificateTitle'>Advanced Diploma in Python programming</h2>
            <h2 className='certificateInstitution'>CSC Computer Education</h2>
       </div>
   </div>
   </>
  )
}

export default certifications