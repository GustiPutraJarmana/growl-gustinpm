import React, {useEffect} from 'react'

import './growl.css'

export const App = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? "active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
)

export function useGrowl(timeOut) {
    // state of the growl
    const [growlActive, setGrowlActive] = React.useState(false)

    useEffect(() => {
      if (growlActive) {
        setTimeout(() => {
          setGrowlActive(false)
        }, timeOut ? timeOut : 3000)
      }
    }, [growlActive, timeOut])

    return [
        // the first arg is the state
        growlActive, 

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active)
        },
    ]
}
