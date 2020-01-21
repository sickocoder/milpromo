import React from "react";

import { 
    Container, 
    ThreandingSection, 
    ThreandingItem,
    AllMusicSection,
    Music,
    Pages,
    PageItem,
    PageButton,
    PageLastItem
} from "./style";

import drakeImage from "./../../assets/drake.png";
import davidoImage from "./../../assets/davido.jpg";

export default function Content({ match }) {

    const { page } = match.params;

    let pages = [];
    for(var i = 1; i <= 5; i++)
        if (i === 5) pages[i] =  (`${i}` === page) ? (<PageLastItem className="selectedPageItem" key={i}>{i}</PageLastItem>) : (<PageLastItem key={i}>{i}</PageLastItem>);
        else
            pages[i] = (`${i}` === page) ? (<PageItem className="selectedPageItem" key={i}>{i}</PageItem>) : (<PageItem key={i}>{i}</PageItem>);

    if (page === undefined) {
        pages[1] = (<PageItem className="selectedPageItem" key={1}>1</PageItem>)
    }

    return (
        <div>
            { threandingList() }
            <Container>
                <div className="sectionTitle">Todas as músicas...</div>
                <AllMusicSection>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    
                </AllMusicSection>

                <Pages style={{marginTop: 32}}>
                    <PageButton>Anterior</PageButton>
                    {pages.map(item => item)}
                    <PageButton>Próximo</PageButton>
                </Pages>

                <div className="sectionTitle" style={{marginTop: 100}}>Todos os vídeos...</div>
                <AllMusicSection>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    <Music>
                        <img src={drakeImage} alt="sddf" />
                        <footer>
                            <strong>Drake - Money in the grave (ft. Rick Ross)</strong>
                            <span>ha 2d</span>
                        </footer>
                    </Music>
                    
                </AllMusicSection>

            </Container>
        </div>
    );

    function threandingList() {
        return (
            <ThreandingSection>
                <ThreandingItem image={drakeImage}>
                    <footer>
                        <div>
                            <strong>Drake - Passionfruit</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={davidoImage}>
                    <footer>
                        <div>
                            <strong>Davido - Blow my mind (ft. Chris Brown)</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={drakeImage}>
                    <footer>
                        <div>
                            <strong>Drake - Passionfruit</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={davidoImage}>
                    <footer>
                        <div>
                            <strong>Davido - Blow my mind (ft. Chris Brown)</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={drakeImage}>
                    <footer>
                        <div>
                            <strong>Drake - Passionfruit</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={davidoImage}>
                    <footer>
                        <div>
                            <strong>Davido - Blow my mind (ft. Chris Brown)</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={drakeImage}>
                    <footer>
                        <div>
                            <strong>Drake - Passionfruit</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={davidoImage}>
                    <footer>
                        <div>
                            <strong>Davido - Blow my mind (ft. Chris Brown)</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={drakeImage}>
                    <footer>
                        <div>
                            <strong>Drake - Passionfruit</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
                <ThreandingItem image={davidoImage}>
                    <footer>
                        <div>
                            <strong>Davido - Blow my mind (ft. Chris Brown)</strong>
                            <span>Há 2h</span>
                        </div>
                    </footer>
                </ThreandingItem>
            </ThreandingSection>
        );
    }

}