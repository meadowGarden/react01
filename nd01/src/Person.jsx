import trecias from './assets/trecias.png'
import './Person.css'

function Person () {

    return (
        <> 
            <div className="container">

                <article className="left-panel">
                    <h3><span className='persons-details'>Justin Case</span></h3>
                    
                    <img className='profile-photo persons-details' src={trecias} alt="icon" />            

                    <h3><span className='persons-details'> 45 POSTS</span></h3>                    
                </article> 

                <div className="right-panel">
                    <h2 className='dark-text'>Bio</h2>
                    <p className='dark-text justify-text'>
                        Hello, my name is Justin. I am UI developer working with React on variety of
                        Jamstack projects. Part of my time is also dedicated to blogging and open source., 
                        location: Copenhagen, Denmark, technologies:
                    </p>

                    {/* [
                    "Javascript",
                    "React",
                    "Redux",
                    "Vue",
                    "Webpack",
                    "NodeJs",
                    "Webpack",
                    ], */}

                    <p className='dark-text date-text'>
                        creationDate: 01.01.2023,
                    </p> 
                </div>

            </div>
        </>
    );
}

export default Person;