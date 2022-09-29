import Container from "../Container/Container";
import style from './Footer.module.css'
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PTIcon } from '../../img/pinterest.svg';
import { ReactComponent as SUIcon } from '../../img/stumbleupon.svg';

const Footer = () => (
    <footer className={ style.footer }>
        <Container>
            <div className={ style.wrapper }>
                <div className={ style.contacts }>
                    <p>Design: <a href="https://t.me/Mrshamallowww">Anastasia Ilina</a></p>
                    <p>Сoder: <a href="https://t.me/kostyu444enko">Igor Kostuchenko</a></p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={ style.social }>
                    <li className={ style.item }>
                        <a href="https://vk.com/kostyu444enko" className={ style.link }>
                            <VKIcon />
                        </a>
                    </li>

                    <li className={ style.item }>
                        <a href="https://t.me/kostyu444enko" className={ style.link }>
                            <TGIcon />
                        </a>
                    </li>

                    <li className={ style.item }>
                        <a href="https://pinterest.com" className={ style.link }>
                            <PTIcon />
                        </a>
                    </li>

                    <li className={ style.item }>
                        <a href="https://sturbleupon.com" className={ style.link }>
                            <SUIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer> 
);

export default Footer;