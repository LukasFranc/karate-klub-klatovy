
function Hero({homepage}) {

    return (
        homepage ?
            <section className="section section--hero">
                <div className="section__content">
                    <div className="section__info">


                    </div>
                </div>
            </section>
        : ''
    )
}

export default Hero