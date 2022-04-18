import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const NewEggContainer = (props) => {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of Eggs - {props.eggNum}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyEggFn(number)}>Buy {number} Egg</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        eggNum: state.egg.numOfEggs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyEggFn: (number) => dispatch(buyEgg(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEggContainer)