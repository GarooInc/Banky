import styles from "./Form.module.css"
import Button from '../Button/Button'
import Input from '../Input/Input'

const Form = () => {
    return (
        <div className={styles.formContent}>
            <p className={styles.formContent__paragraph}>Enter your name and mobile phone to get early access to Banky!</p>
            <form className={styles.formContent__form}>
                <Input type="text" placeholder="Name" className={styles.formContent__input}/>
                <Input type="text" placeholder="Last Name" className={styles.formContent__input}/>
                <Input type="text" placeholder="Phone Number" className={styles.formContent__input}/>
            </form>
            <Button text="Get Early Access" backgroundcolor="#485ACE" colortext="#FFF"/>
        </div>
    )
}

export default Form
