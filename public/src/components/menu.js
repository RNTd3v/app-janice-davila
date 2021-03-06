import React from 'react';
import ActiveLink from '../utils/ActiveLink';
import SocialMedia from './social-media';

const Menu = ({language = 'en'}) => (
    <div className="nav">
        <nav className="menu">
            <ul>
                <li>
                    {
                        language === 'pt'
                        ?
                            <ActiveLink href="/pt/filmes" activeClassName="active">
                                <a>Filmes</a>
                            </ActiveLink>
                        :
                            <ActiveLink href="/" activeClassName="active">
                                <a>Films</a>
                            </ActiveLink>
                    }
                </li>
                <li>
                    {
                        language === 'pt'
                        ?
                            <ActiveLink href="/pt/bio" activeClassName="active">
                                <a>Bio</a>
                            </ActiveLink>
                        :
                            <ActiveLink href="/bio" activeClassName="active">
                                <a>Bio</a>
                            </ActiveLink>
                    }
                </li>
                <li>
                    {
                        language === 'pt'
                        ?
                            <ActiveLink href="/pt/reel" activeClassName="active">
                                <a>Reel</a>
                            </ActiveLink>
                        :
                            <ActiveLink href="/reel" activeClassName="active">
                                <a>Reel</a>
                            </ActiveLink>
                    }
                </li>
                <li>
                    {
                        language === 'pt'
                        ?
                            <ActiveLink href="/pt/contato" activeClassName="active">
                                <a>Contato</a>
                            </ActiveLink>
                        :
                            <ActiveLink href="/contact" activeClassName="active">
                                <a>Contact</a>
                            </ActiveLink>
                    }
                </li>
            </ul>
        </nav>
        <SocialMedia />
    </div>

);

export default Menu;
