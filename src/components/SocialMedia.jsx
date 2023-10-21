import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/BhaskarDey772' target='_blank' rel='noreferrer'>
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/bhaskar-dey-b78175184/' target='_blank' rel='noreferrer'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <FaFacebook />
            </div>
        </div>
    )
}

export default SocialMedia