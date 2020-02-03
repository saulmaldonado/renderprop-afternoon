import React from 'react'

function CurrencyDisplay(props){
    return(
        <p>
            US Dollar ${props.amount} - {props.currencyData.name}{' '}
            {props.currencyData.symbol}
            {props.amount * props.currencyData.rate}
      </p>
    )
}

export default CurrencyDisplay