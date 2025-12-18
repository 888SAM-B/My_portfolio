import fsd from '../assets/certificate-images/FSD.jpg'
const certifications = () => {
     const certificationsData = [
          {
               id: 1,
               image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1",
               alt: "Advanced Diploma in Python programming",
               title: "Full Stack Development",
               institution: "Simplar Academy"
          },
          {
               id: 2,
               image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
               alt: "Advanced Diploma in Python programming",
               title: "Advanced Diploma in Python programming",
               institution: "CSC Computer Education"
          },
          {
               id: 3,
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2--e-Zph01ygyKCOsb643hOkWeAm_IqPJg&s",
               alt: "Internship Certificate",
               title: "Internship on Authentication and CRUD Operation in MERN Stack",
               institution: "Livewire Software Trainiing Institute"
          }
     ];

     return (
          <>
               <h2>Certifications </h2>
               <div className="certifications">
                    {certificationsData.map((cert) => (
                         <div key={cert.id} className="certificate project-cards">
                              <img src={cert.image} alt={cert.alt} className='proj-img' />
                              <h2 className='certificateTitle'>{cert.title}</h2>
                              <h2 className='certificateInstitution'>{cert.institution}</h2>
                         </div>
                    ))}
               </div>
          </>
     )
}

export default certifications