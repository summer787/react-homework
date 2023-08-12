import styles from '/src/styles/Button.module.css'


function Disabledbutton({ label, text }) {
  return (
    <div>
    <button className={styles.disabledbtn} aria-label={ label }>{ text }</button>
    </div>
  )
}

export default Disabledbutton