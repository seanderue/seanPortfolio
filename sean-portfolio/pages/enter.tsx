import Card from '../components/Card'
import Deck from '../components/Deck.jsx'
import SwipeTip from '../components/SwipeTip'

export default function EnterPage({}){
    return (
        <main id='canvas'>
            <section className='hero_wrapper'>
                <div className="hero_text_container">
                    <h1 className='hero_title'>Hello</h1>
                    <p className='hero_subtitle'>Thanks for stopping by. My name is Sean DeRue. I'm a marketer turned software engineer and here's my portfolio. </p>
                    <div>
                        <div className="linkedin-circled"></div>
                        <div className="github"></div>
                    </div>
                </div>
                <div className='hero_cards_container'>
                    <Deck />
                    <SwipeTip />
                </div>
            </section>
        </main>
    )
}