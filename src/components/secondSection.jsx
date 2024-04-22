import egg from "../assets/images/egg-production.svg";
import field from "../assets/images/field-optimization.svg";
import financial from "../assets/images/financial-tracking.svg";
import flock from "../assets/images/flock-health.svg";

const SecondSection = () => {
    return (
        <secondSection>
            <div>
                <h1>Why Choose FRAM25</h1>
                <div>
                    <img src={flock} alt="flock" />
                    <img src={field} alt="field" />
                    <img src={egg} alt="egg" />
                    <img src={financial} alt="financial" />
                </div>
                <article>
                    
                </article>
            </div>
        </secondSection>
    )
}
export default SecondSection;