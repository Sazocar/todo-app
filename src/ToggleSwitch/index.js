import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({ theme, onToggle }) => {
  const moon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABbUlEQVRIie2Wvy8lYRRAz6yVrIQVhMSvbqNQKKlINmEbyZPtthGFRqPUq2yi0aj8BwrRakn0Ovs6dsVrtrWbII5i/HgzxrzxfO9F4ZQ3d+bce/PdmQ/eeWuoA80WjquHxpSaJV1Rr3zkazOkP01yon5otHTZp6w3Wjqq/s8QL4b0ZI1uDfiUEf/dMLE6AswVyQ0qBn7k5Abd47R4Mid3IqQ4gVrJOFT3nKstoVzpjjtzcvuB+VDiBOq/nI5V/6hdIVzpjk9r5A8B2+rH0OJygWdmgF3182vlD6hLNUZdTdkCfyu1TW1Px6NUUg9QAVpfUO8RsAPsA2fABTAIfAG+A6W72HAURZd5FW6+oOuiHKvRs9I7cbf6N6D0Rp0uNDv1m3oZSLxWSFolXzB5+6iHLeu5PKhT5n9Gn+NaXa1LWiXvVTfMvhykuVH31LFa780/ackC+ohXYxYYIV6ZDuL1KwMHwHYURb/q6vCdRnELPwnPSLAWcJ8AAAAASUVORK5CYII='
  const sun = 'https://img.icons8.com/ios-glyphs/30/000000/sun--v1.png'

  return (
    <>
      <img className='themeMode-icon' src={theme === 'light' ? sun : moon} />
      <label className='switch'>
        <input type='checkbox' onClick={onToggle} />
        <span className='slider round' />
      </label>
    </>
  )
}

export default ToggleSwitch
