import main from "../assets/images/main.jpg";

const FirstSection = () => {
    return (
        <firstSection>
            <div className="flex">
                <div>
                    <h1>Get meaningful feedbacks on your code</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et cupiditate sequi deserunt magnam iste aliquam labore similique.</h4>
                    <button id="button-1">Shop Now</button>
                    <button id="button-2">Button CTA</button>
                    <article>
                        <article>
                            <h2>2943</h2>
                            <span>Crates Delivered</span>
                        </article>
                        <article>
                            <h2>$1M+</h2>
                            <span>Transaction Completed</span>
                        </article>
                    </article>
                </div>
                <div>
                    <img src={main} alt="mainImg" />
                </div>
            </div>

        </firstSection>

    )
}
export default FirstSection;