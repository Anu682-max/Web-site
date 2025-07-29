import "./Project.css";

const Project = () => {
  return (
    <ul className="project">
      <li className="project_content">
        <h2 className="project_title">Our Projects</h2>
        <p className="project_description">
          We take pride in our diverse portfolio of projects, ranging from residential buildings to commercial complexes. Our commitment to quality and innovation is evident in every project we undertake.
        </p>
        <ul className="project_list">
            <li className="project_item">
                <img
                src="/project1.jpg"
                alt="Residential Complex"
                className="project_image"
                />
              <h3 className="project_name">Residential Complex</h3>
              <p className="project_details">
                A modern residential complex featuring state-of-the-art amenities and sustainable design.
              </p>
            </li>
            <li className="project_item">
              <img
                src="/project2.jpg"
                alt="Commercial Building"
                className="project_image" 
                />
              <p className="project_details">
                A commercial building designed to meet the needs of businesses with flexible office spaces.
              </p>
            </li>
            <li className="project_item">
                <img
                    src="/project3.jpg"
                    alt="Industrial Facility"
                    className="project_image"
                    />  
              <h3 className="project_name">Industrial Facility</h3>
              <p className="project_details">
                An industrial facility built with advanced technology and safety standards.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    );
  
}

export default Project;
            

                        
                    
    
   