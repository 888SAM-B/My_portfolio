import fsd from '../assets/certificate-images/fsd.pdf'
import adpp from '../assets/certificate-images/adpp.pdf'
import intern from '../assets/certificate-images/internship.pdf'
import nptel from '../assets/certificate-images/nptel.pdf'
import fsdms from '../assets/certificate-images/fsdms.pdf'
import { ins } from 'motion/react-m'
const certifications = () => {
     const certificationsData = [
          {
               id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2--e-Zph01ygyKCOsb643hOkWeAm_IqPJg&s",
               alt: "Internship Certificate",
               title: "Internship on Authentication and CRUD Operation in MERN Stack",
               institution: "Livewire Software Trainiing Institute", previewCertificate: intern
          },
          {
               id: 2,
               image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
               alt: "Advanced Diploma in Python programming",
               title: "Advanced Diploma in Python programming",
               institution: "CSC Computer Education",
               previewCertificate: adpp
          },
          { id: 1, image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1", alt: "Advanced Diploma in Python programming", title: "Full Stack Development  (MERN_STACK)", institution: "Simplar Academy", previewCertificate: fsd },
          { id: 5, image: "https://www.gyansetu.in/wp-content/uploads/2024/02/image-8.png", title: "Full Stack Development Master Class", institution: "NoviTech R&D Private Limited", alt: "Full Stack Development Master Class", previewCertificate: fsdms, },
          { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_sRo5NEMP5zaR3_zi3vhtirpmKTSCHrGTw&s", alt: "Joy of Computing using Python - Elite + Gold", title: "The Joy of Computing using Python - Elite + Gold", institution: "Swayam -NPTEL", previewCertificate: nptel },
     ];

     return (
          <>
               <h2>Certifications </h2>
               <div className="certifications">
                    {certificationsData.map((cert) => (
                         <div key={cert.id} className="certificate project-cards">
                              <img src={cert.image} alt={cert.alt} className='proj-img' />
                              <h3 className='certificateTitle'>{cert.title}</h3>
                              <h4 className='certificateInstitution'>{cert.institution}</h4>
                              <a href={cert.previewCertificate} target='_blank' className='pre-certificate' >View Certificate</a>
                         </div>
                    ))}
               </div>
          </>
     )
}

export default certifications