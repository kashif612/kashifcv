import React from 'react'
import kashif from '../asset/kashif.png';
const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text: "By profession i am a full stack web developer here i will tell you my experince in different company."
    });
    const [state] = React.useState([
        { id: 1, title: 'Name:', text: 'Kashif Iqbal' },
        { id: 2, title: 'Email:', text: 'iqbal.kashif60@gmail.com' },
        { id: 3, title: 'Phone:', text: '+91 8744942356' },
        { id: 4, title: 'LinkedIn:', text: 'Kashif Iqbal' },

    ]);
    const [Name] = React.useState([
        {id: 1, 
        title:'Danik Bhaskar Experience', 
        // eslint-disable-next-line no-multi-str
        text: 'below my work experince in different company\n'+
    'Project Name: HomeOnline.com\n'+ 
'Company Name: Danik Bhaskar\n'+
'Location : Noida\n'+
'Working for : Danik Bhaskar Real Estate Portal Division\n'+
'Duration : 24/02/2020 To till Now\n'+
'Key Responsibility:\n'+
'➢ Integration of user-facing elements developed by front-end-developers with server side logic.\n'+
'➢ Implementing automated testing, unit test and functional tests.\n'+
'➢ Passion for emerging javascript Technologies\n'+
'➢ Integration of data storage solutions like Mongo, Redis,Sql.\n'+
'➢ Implementation of security and data protection.\n'+
'➢ User authentication and authorization between multiple systems, servers and environments.\n'+
'➢ Integration of multiple data sources and databases into one system.\n'
},
{
id:2,
title :'Times Of India Experinence',
text: 'Working As Junior Developer\n'+
'Project name : MagicBricks\n'+
'Location : Noida, India\n'+
'Working for: Magicbricks.com\n'+
'Duration: 2/03/2017 To 31/06/2019\n'+
'Key Responsibility :\n'+
'➢ Magicbricks software project management and practices such as pair programing and test-driven development.\n'+
'➢ Network and security protocols\n'+
'➢ Use and contribute code to open-sourceprojects.\n'+
'➢ C++ because node.js itself is written in it , as well as some core components of the app platform.\n'+
'➢ Node.js and javascript in general.\n'+
'➢ VS Code the most popular code editor for coding .\n'+
'➢ Micro-services architecture.\n'
},

{
id: 3,
title: 'Easy Pc Care Pvt Ltd',
text: 'Location: Noida\n'+
'Duration: 23/11/2015To 10Feb 2017 \n'+
'Key Responsibility :-\n'+
'➢ Involved in designing and developing the application using visual studio 2015, .Net framework 4.5 c#,Asp.net MVC, SQL SERVER 2014 , and Linq entityframework.\n'+
'➢ Designed the complete solution using N-Tier architecture model and applied design patterns mainly abstractfactory and oop.\n'+
'➢ Involved in the development of the web forms and web pages according to the specifications extensiveexperience Ajax, HTML, XTML, SAML, XML.\n'+
'➢ Created webpages(Web Form) for various works, streams by using Asp.Net ,AJAX, JavaScript , Jquery andCSS and connected them with business logic laye\n'+
'➢ Extensively used CSS3 and bootstrap for styling the html element, worked extensively with JavaScript framework\n'+
'➢ Designed dynamic and multi-browser compatible pages using Html , CSS, Jquery , javascript.\n'+
'➢ Worked with ADO.NET entity framework datasets through xml web service, Presenting the data from the xml by using exsit\n'
},
        
]);
    return (
        <div className="about">
        <div className="container">
               <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className ="Mainheading">{header.subHeader}</h1>
                <p className="MainText">{header.text}</p>
                <div className="commonBorder">
</div>
                </div>
                <div className="row h-650 alignCenter">
                <div className="col-4">
              <div className="about_img">
                  <img src={kashif} alt="main"/>
                  {state.map((info)=>(
                    <div className="info_content">
                
                     <strong>{info.title}</strong>
                <p>{info.text}</p>
            </div>
                  ))}
                 
                  
                  </div>
              </div>
          
                
              
       
           <div className="col-5">
                 <div className="services_box-bg">

                                     {Name.map((info)=>(
                                        <div className="about-info">
         
                         <h1>{info.title}</h1>
                         <div className = "about_info-p1">
                 {info.text}
</div>
                         </div>
                         

                     ))}

                    
                     </div>
                 </div>
                 </div>
              
                 </div>  
        </div>
        
    )
}

export default About
