import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {

    return (
        <div id="about">
            <section class="hero section" style={{ 
                minHeight: 'calc(100vh - 200px)',
                flexDirection: 'row',
                alignItems: 'center'
                }}>
                <div class="container has-text-centered">
                        <div class="columns is-8 is-variable ">
                            <div class="column is-two-thirds has-text-left">
                                <h1 class="title is-2">Contact Us</h1>
                                <p class="is-size-4">ติดต่อผม หากต้องการร่วมงานกัน <br />ยินดีให้คำปรึกษาการพัฒนาเว็บไซต์และระบบ</p>
                                <table>
                                    <tr>
                                        <td>e-mail</td>
                                        <td className="pad-text">pinpong.tp@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>โทรเลย</td>
                                        <td className="pad-text">081-5967897 (ปิ่น)</td>
                                    </tr>
                                </table>
                                <br />
                                <div class="social-media">
                                    <a href="https://facebook.com" target="_blank" class="button pad-margin-right is-light"><FontAwesomeIcon className="pad-text" icon={faFacebookSquare} /></a>
                                    <a href="https://instagram.com" target="_blank" class="button pad-margin-right is-light"><FontAwesomeIcon className="pad-text" icon={faInstagram} /></a>
                                    <a href="https://twitter.com" target="_blank" class="button pad-margin-right is-light"><FontAwesomeIcon className="pad-text" icon={faTwitter} /></a>
                                    <a href="https://twitter.com" target="_blank" class="button pad-margin-right is-light"><FontAwesomeIcon className="pad-text" icon={faGithub} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}


export default Contact

