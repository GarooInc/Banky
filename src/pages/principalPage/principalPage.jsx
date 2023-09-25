import React from "react"
import styles from "./principalPage.module.css"
import NavBar from "../../components/NavBar/NavBar"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import FormContent from "../../components/formContent/formContent"
import IconText from "../../components/IconText/IconText"
import { FaUserLock } from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {BiSolidBank} from "react-icons/bi"

const PrincipalPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.principalPage}>
                <section id='/' className={styles.home}>
                    <div className={styles.homecontainer}>
                        <div className={styles.homecontainer__text}>
                        <Textdescbutton
                            title1="Seamless banking through Whatsapp text."
                            title2="Anytime, Anywhere."
                            paragraph="Banky is a digital banking platform through WhatsApp available 24/7, offering seamless banking services anytime, anywhere."
                            fontsize="1.2rem"
                            textcolor={"#595959"}
                        />
                        <FormContent />
                        </div>
                        <img src="/images/phone.png" alt="phone" className={styles.homecontainer__img} />
                    </div>
                </section>
                <div className={styles.iconfeatures}>
                    <IconText icon={<FaUserLock  style={{ color: "#000" }} />} text="End to End encryption and 3-word passphrase ensure your information is always kept safe." />
                    <IconText icon={<BsWhatsapp  style={{ color: "#000" }} />} text="No need to download any apps, if you have WhatsApp you can have Banky." />
                    <IconText icon={<BiSolidBank  style={{ color: "#000" }} />} text="Seamless connection to your bank, to help you keep going with what matters the most." />
                </div>
            </div>
        </div>
    )
}

export default PrincipalPage