import React from "react";
import './style.css';

const AboutSection = () => {
    return (
        // About Section
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
            <h4><b>About Me</b></h4>
            <img src="./assets/images/headshot-pic.jpg" alt="Me" class="w3-image w3-padding-32" width="600" height="650" />
            <div class="w3-content w3-justify" style={{ maxWidth: 600 }}>
                <h4>Alexander Griep</h4>
                <p>
                    My name is Alexander Griep but you can call me Alex. I am a nerd and proud of it. I believe that we all should be who we are and like what we like. And if you don't like what I like and I don't like what you like, there should also be no problems between us.
                </p>
                <p> 
                    I was born in Burnsville, MN on October 15th, 1987. I grew up in St. Anthony, MN, a small suburb in NE Minneapolis, where I went to school from K to 12. From there, I went to the University of Minnesota - Morris to obtain my BS in English.
                </p>
                <p>    
                    After graduating from college, I traveled to China (Jiangmen and Jilin) to teach Oral English at the university level to Chinese students. After returning to the USA, I had a couple jobs for short periods of time until I landed at Medica for 1.5 years. After hiring way too many people to work in my department, I was let go and finally landed at Target Corporation as a Sr. Collections Specialist.
                </p>
                <p>    
                    From there, I started a web development bootcamp in order to try to move to a new position that I would be more excited about. The progress of the class is amazing and so much information seems to just be flowing into my head. I feel upon completion of the bootcamp, I will be ready to continue be able to work on my skills and advance further into my chosen new field.
                </p>
                <p><b>email: </b>alexgriep@gmail.com</p>
                <p><b>phone: </b>(612) 875-2026</p>
                <p><b>GitHub Profile Link: </b><a href="https://github.com/ZanderMate">github.com/ZanderMate</a></p>
                <p><b>LinkedIn Profile Link: </b><a href="https://www.linkedin.com/in/alexander-griep/">linkedin.com/in/alexander-griep</a></p>
                <p><b>My Résumé: </b><a href="./assets/pdf/alex-griep-resume.pdf">Read It Here</a></p>

            </div>
        </div>
    )
}

export default AboutSection;