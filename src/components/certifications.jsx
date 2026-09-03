import React from 'react';
import fsd from '../assets/certificate-images/fsd.pdf';
import adpp from '../assets/certificate-images/adpp.pdf';
import intern from '../assets/certificate-images/internship.pdf';
import nptel from '../assets/certificate-images/nptel.pdf';
import fsdms from '../assets/certificate-images/fsdms.pdf';

const Certifications = () => {
     const certificationsData = [
          {
               id: 1,
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2--e-Zph01ygyKCOsb643hOkWeAm_IqPJg&s",
               alt: "Internship Certificate",
               title: "Authentication & CRUD in MERN Stack",
               institution: "Livewire Software Training Institute",
               previewCertificate: intern
          },
          {
               id: 2,
               image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1",
               alt: "Full Stack Development MERN Stack",
               title: "Full Stack Development (MERN Stack)",
               institution: "Simplar Academy",
               previewCertificate: fsd
          },
          {
               id: 3,
               image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
               alt: "Advanced Diploma in Python programming",
               title: "Advanced Diploma in Python Programming",
               institution: "CSC Computer Education",
               previewCertificate: adpp
          },
          {
               id: 4,
               image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_sRo5NEMP5zaR3_zi3vhtirpmKTSCHrGTw&s",
               alt: "Joy of Computing using Python - Elite + Gold",
               title: "The Joy of Computing using Python (Elite + Gold)",
               institution: "Swayam - NPTEL",
               previewCertificate: nptel
          },
          {
               id: 5,
               image: "https://www.gyansetu.in/wp-content/uploads/2024/02/image-8.png",
               alt: "Full Stack Development Master Class",
               title: "Full Stack Development Master Class",
               institution: "NoviTech R&D Private Limited",
               previewCertificate: fsdms
          }
     ];

     return (
          <div className="section-block">
               <div className="section-header">
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">Verified credentials and professional training achievements</p>
               </div>
               <div className="certifications-grid">
                    {certificationsData.map((cert) => (
                         <div key={cert.id} className="certification-card">
                              <div className="cert-img-wrapper">
                                   <img src={cert.image} alt={cert.alt} className="cert-img" />
                              </div>
                              <div className="cert-content">
                                   <h3 className="certificateTitle">{cert.title}</h3>
                                   <h4 className="certificateInstitution">{cert.institution}</h4>
                                   <a
                                        href={cert.previewCertificate}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pre-certificate"
                                   >
                                        View Certificate ↗
                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Certifications;