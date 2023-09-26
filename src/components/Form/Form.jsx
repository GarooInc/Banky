import styles from "./Form.module.css"
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useState,useEffect } from "react"

const Form = () => {

    const [showPopup, setShowPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")


    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        phone: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(formData)

        const contacto = {contacto: formData }
        console.log(contacto)

        try {
            const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            console.log(response)

            if (response.ok) {
                setPopupMessage("Formulario enviado exitosamente!")
                setShowPopup(true)
            } else {
                setPopupMessage("Error al enviar el formulario. Inténtalo de nuevo.");
                setShowPopup(true)
            }
        } catch (error) {
            console.error("Hubo un error:", error)
        }
    }

    return (
        <div className={styles.formContent}>
            {showPopup && (
                <div className={styles.popup}>
                    <p>{popupMessage}</p>
                    <button onClick={() => {
                        setShowPopup(false)
                    }}>Ok</button>
                </div>
            )}
            <p className={styles.formContent__paragraph}>Enter your name and mobile phone to get early access to Banky!</p>
            <form className={styles.formContent__form}>
                <Input type="text" placeholder="Name" className={styles.formContent__input} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                <Input type="text" placeholder="Last Name" className={styles.formContent__input} value={formData.lastname} onChange={(e) => setFormData({...formData, lastname: e.target.value})}/>
                <Input type="tel" placeholder="Phone Number" className={styles.formContent__input} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
            </form>
            <Button text="Get Early Access" backgroundcolor="#485ACE" colortext="#FFF" handleClick={handleSubmit}/>
        </div>
    )
}

export default Form
