import React from 'react'
import styles from './card.module.css';

const Mobile = ({brand}) => {
  return (
   <>
       <div className={styles.flex}>
          <h3> {brand} - Mobile </h3>
          <span> <i class="fa-light fa-arrow-right"></i></span>
       </div>
   </>
  )
}

export default Mobile