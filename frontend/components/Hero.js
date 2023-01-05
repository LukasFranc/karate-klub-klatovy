import Link from 'next/link'
import Image from "next/image";
import Typewriter from 'typewriter-effect'

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