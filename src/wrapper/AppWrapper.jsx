import NavigationDots from "../components/NavigationDots"
import SocialMedia from "../components/SocialMedia" 
const AppWrapper = (Component, idname, classNames) => function HOC() {
    return (
        <div id={idname} className={`app__container ${classNames}`}>
            <SocialMedia />

            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright'>
                    <p className='p-text'>@2023 Bhaskar</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>

            <NavigationDots active={idname} />
        </div>
    )
}

export default AppWrapper