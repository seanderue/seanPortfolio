import Card from '../components/Card'
import Deck from '../components/Deck.jsx'
import SwipeTip from '../components/SwipeTip'

export default function EnterPage({}){
    return (
       <main id='canvas'>
            <Deck />
            <SwipeTip />
        </main>
    )
}