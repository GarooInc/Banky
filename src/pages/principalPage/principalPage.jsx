import React from "react"
import styles from "./principalPage.module.css"
import NavBar from "../../components/NavBar/NavBar"
import Textdescbutton from "../../components/Textdescbutton/Textdescbutton"
import Form from "../../components/Form/Form"
import IconText from "../../components/IconText/IconText"
import { FaUserLock } from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {BiSolidBank,BiWorld} from "react-icons/bi"
import {PiNumberSquareOneFill,PiNumberSquareTwoFill, PiNumberSquareThreeFill, PiNumberSquareFourFill, PiNumberSquareFiveFill, PiNumberSixFill} from "react-icons/pi"
import Tittle from "../../components/Title/Title"
import continents from "../../network"
import Testimonials from "../../components/Testimonials/Testimonials"
import Footer from "../../components/Footer/Footer"

const PrincipalPage = () => {

    const featuresItems = [
        {
            icon: <PiNumberSquareOneFill  style={{ color: "#485ace" }} />,
            tittle: "Account to account transfers",
            text: "Simply text Banky the amount you want to transfer and specify the sending account and receiving account for the transaction."
        },
        {
            icon: <PiNumberSquareTwoFill  style={{ color: "#485ace" }} />,
            tittle: "Pay your credit card",
            text: "Just send a text to Banky, and it will handle your credit card payment effortlessly."
        },
        {
            icon: <PiNumberSquareThreeFill  style={{ color: "#485ace" }} />,
            tittle: "Check your accounts balance",
            text: "Simply request Banky to provide your account balances, and it will promptly text you back the balances for all your different accounts."
        },
        {
            icon: <PiNumberSquareFourFill  style={{ color: "#485ace" }} />,
            tittle: "Pay your services",
            text: "When you ask Banky to pay your electric bill, rest assured that Banky will take care of the entire process for you."
        },
        {
            icon: <PiNumberSquareFiveFill  style={{ color: "#485ace" }} />,
            tittle: "Transfer to other users",
            text: "Simply text Banky the amount you want to transfer and specify the receiving account for the transaction."
        },
        {
            icon: <PiNumberSixFill  style={{ color: "#485ace" }} />,
            tittle: "Set reminders for payments",
            text: "Similar to a personal assistant, you can ask Banky to set payment reminders for you. Once reminded, you can instantly make the payments Banky prompted you about."
        }
    ]


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
                        <Form />
                        </div>
                        <img src="/images/phone.png" alt="phone" className={styles.homecontainer__img} />
                    </div>
                </section>
                <div className={styles.iconfeatures}>
                    <IconText icon={<FaUserLock  style={{ color: "#000" }} />} text="End to End encryption and 3-word passphrase ensure your information is always kept safe." />
                    <IconText icon={<BsWhatsapp  style={{ color: "#000" }} />} text="No need to download any apps, if you have WhatsApp you can have Banky." />
                    <IconText icon={<BiSolidBank  style={{ color: "#000" }} />} text="Seamless connection to your bank, to help you keep going with what matters the most." />
                </div>
                <section id='features' className={styles.features}>
                    <Tittle title1="Features" color={"#000"} />
                    <div className={styles.featurescontainer}>
                        {
                            featuresItems.map((item, index) =>
                            <div key={index} className={styles.featurescontainer__item}>
                                <IconText icon={item.icon} tittle={item.tittle} text={item.text} />
                            </div>
                            )
                        }
                    </div>
                </section>
                <section id='network' className={styles.network}>
                    <Tittle title1="Network" color={"#000"} />
                        <BiWorld size={100} style={{ color: "#000" }} />
                        <div className={styles.networkcontainer}>
                            {
                            continents.map(continent => (
                                <div key={continent.title}>
                                    <h2>{continent.title}</h2>
                                    <ul>
                                    {continent.countries.map(country => <li key={country}>{country}</li>)}
                                    </ul>
                                </div>
                                ))
                            }
                        </div>
                </section>
                <section id='testimonials' className={styles.testimonials}>
                    <Tittle title1="Testimonials" color={"#000"} />
                    <Testimonials />
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default PrincipalPage