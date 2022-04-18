import React from 'react'
import { connect } from 'react-redux'
import { buyChicken } from '../redux/chicken/chickenActions'
import { buyEgg } from '../redux/egg/eggActions'

const ItemContainer = (props) => {
    return (
        <>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.egg ? state.egg.numOfEggs : state.chicken.numOfChickens

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFn = ownProps.egg ? () => dispatch(buyEgg()) : () => dispatch(buyChicken());

    return {
        buyItem: dispatchFn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)