import styles from '/src/styles/Button.module.css'

function Defaultbutton({ label, text }) {
  return (
   
    <div>
    <button className={styles.defaultbtn} aria-label={ label }>{ text }</button>
    </div>
  )
}

export default Defaultbutton