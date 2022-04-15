import React from 'react'
import { connect } from 'react-redux'
import { buyEgg } from '../redux/egg/eggActions'

const EggContainer = (props) => {
    return (
        <div>
            <h2>Number of Eggs - {props.eggNum}</h2>
            <button onClick={props.buyEggFn}>Buy Egg</button>
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
        buyEggFn: () => dispatch(buyEgg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer)