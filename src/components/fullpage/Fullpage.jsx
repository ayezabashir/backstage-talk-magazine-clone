import { useEffect } from 'react';
import issue7 from '/cover_issue/backstagetalks_cover_issue_7.png'
import issue6 from '/cover_issue/backstagetalks_cover_issue_6.png'
import issue5 from '/cover_issue/backstagetalks_cover_issue_5.png'
import issue4 from '/cover_issue/backstagetalks_cover_issue_4.png'
import issue3 from '/cover_issue/backstagetalks_cover_issue_3.png'
import issue2 from '/cover_issue/backstagetalks_cover_issue_2.png'
import issue1 from '/cover_issue/backstagetalks_cover_issue_1.png'
import Header from '../header/Header'
import Footer from '../footer/Footer'
const issueData = [
    {
        id: 0,
        cover: issue7,
        issuenum: 7,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
        color: '#ff608c'
    },
    {
        id: 1,
        cover: issue6,
        issuenum: 6,
        color: '#ffffff'
    },
    {
        id: 2,
        cover: issue5,
        issuenum: 5,
        color: '#00c1b5'
    },
    {
        id: 3,
        cover: issue4,
        issuenum: 4,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
        color: '#ff6519'
    },
    {
        id: 4,
        cover: issue3,
        issuenum: 3,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
        color: '#ffbe00'
    },
    {
        id: 5,
        cover: issue2,
        issuenum: 2,
        color: '#1d3fbb'
    },
    {
        id: 6,
        cover: issue1,
        issuenum: 1,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
        color: '#e30512'
    },

]

const Fullpage = () => {
    document.body.style.background = '#ff608c';
    useEffect(() => {
        const scrollFunction = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate the positions of each issue
            const issuePositions = issueData.map(item => {
                const element = document.getElementById(`issue${item.issuenum}`);
                const rect = element.getBoundingClientRect();
                const top = rect.top + scrollTop;
                const bottom = rect.bottom + scrollTop;
                return { top, bottom, color: item.color };
            });
            // console.log('issuePositions:', issuePositions);

            // Check which issue is currently in view
            let currentIssue = null;
            for (let i = 0; i < issuePositions.length; i++) {
                if (issuePositions[i].top <= scrollTop + windowHeight / 2 && issuePositions[i].bottom >= scrollTop + windowHeight / 2) {
                    currentIssue = issuePositions[i];
                    break;
                }
            }
            if (currentIssue) {
                document.body.style.background = currentIssue.color;
                document.body.style.transition = '0.4s background ease-in';
            }

        };

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);
    return (
        <>
            <Header />
            <div className="issues" id='fullpage'>
                {
                    issueData.map(item => (
                        <div
                            key={item.id}
                            data-color={item.color}
                            className={`issue ${item.issuenum}`}
                            id={`issue${item.issuenum}`}
                        >
                            <div className="issue-info">
                                <div className="issue-cover">
                                    <img className='img' src={item.cover} alt={item.issuenum} />
                                </div>
                                <div className="issue-desc">
                                    <p className='issue-num'>Issue #{item.issuenum}</p>
                                    <p style={item.id === 1 ? { color: '#ff608c' } : { color: '#fff' }}>BUY HERE <span style={{ color: '#251d20' }}>{item.buy1}</span></p>
                                    {
                                        item.buy2 ? <p>BUY HERE {item.buy2}</p> : ''
                                    }
                                    <p>or in <span style={item.id === 1 ? { color: '#ff608c' } : { color: '#fff' }}>selected stores</span> </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default Fullpage
