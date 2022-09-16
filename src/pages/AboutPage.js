import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          About Me
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
          I like exploring new things 🌟
            <br />
            <br/>
            I am looking for an opportunity where I can deploy my analytical skills,communication skills, and problem-solving skills📉
            <br />
            <br/>
            My main aim is to understand patterns of data and come up with better solutions 👨‍💻
            <br />
            <br/>
            Here are a few technologies I've been working with:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
             
              <p><h2>Programming</h2>Python, C++, Java, C, Scala</p>
              <p><h2>Data Science</h2>Pandas, Numpy, SQL, Matplotlib, Tableau </p>
              <p><h2>Machine Learning</h2>TensorFlow, Keras, PyTorch, SciKit-Learn</p>
              <p><h2>Cloud</h2>Azure ML, Databricks, Spark</p>
              
            </div>
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
