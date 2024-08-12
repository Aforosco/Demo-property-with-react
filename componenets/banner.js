import styles from "./banner.module.css"
const Banner = (props) => {
    return(
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt= "Logo" className={styles.logo}/>
            </div>
            <div className="col-7 mt-5 ">
                <h3>{props.headerText}</h3>
            </div>

        </header>
    )
}
export default Banner;