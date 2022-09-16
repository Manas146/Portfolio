// import working from '../img/character 10.svg';


const FeaturedProjects = () => {
  return (
    <section className='projects' id='projects'>
      <h2 className='section-title' data-aos='zoom-in' data-aos-duration='1500'>
        Some Things I've Built
      </h2>

      <div className='section-content'>
        

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Billing System</h3>
          <p className='section-text'>
          A digital way to manage the billing of electronics good orders and payment system.
          </p>
          <div className='technologies'>
            <p>Python</p>
            <p>Tkinter</p>
          </div>
          
        </div>
        {/* End of Project */}

        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1200'
        >
          <h3>Hand Gesture Classifier With Tensorflow</h3>
          <p className='section-text'>
          A browser based Rock,Paper and Scissor hand gestures classifier.
          </p>
          <div className='technologies'>
            <p>Python</p>
            <p>TensorFlow</p>
          
          </div>
          
        </div>
        {/* End of Project */}
          {/* Project */}
          <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Autism Detection using Faces</h3>
          <p className='section-text'>
         Detecting Autism Spectrum Disorder with Computer Vision.
          </p>
          <div className='technologies'>
            <p>Computer Vision</p>
          </div>
          
        </div>
        {/* End of Project */}
          {/* Project */}
          <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Face Mask Detection And Recongnition App</h3>
          <p className='section-text'>
          An application to detect face masks in the smartphone.The application works in the real-time.
          </p>
          <div className='technologies'>
            <p>Python</p>
            <p>TensorFlow</p>
          </div>
          
        </div>
        {/* End of Project */}
        {/* Project */}
        <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='800'
        >
          <h3>Online Voting System</h3>
          <p className='section-text'>
          A centralized Database creaed in MySQL,managed by PHP and user-friendly Web Inteface created in HTML,CSS and JavaScript.
          </p>
          <div className='technologies'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>MySQL</p>
            <p>PHP</p>
          </div>
          
        </div>
        {/* End of Project */}
          {/* Project */}
          <div
          className='featured-project'
          data-aos='flip-left'
          data-aos-duration='1000'
        >
          <h3>Resume Builder</h3>
          <p className='section-text'>
          A digital way to manage the billing of electronics good orders and payment system.
          </p>
          <div className='technologies'>
          <p>HTML</p>
          <p>SCSS</p>
            <p>React</p>
            
          </div>
          
        </div>
        {/* End of Project */}
      </div>
    </section>
  );
};

export default FeaturedProjects;
