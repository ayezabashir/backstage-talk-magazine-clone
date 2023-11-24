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
    },
    {
        id: 1,
        cover: issue6,
        issuenum: 6,
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
    },
    {
        id: 5,
        cover: issue2,
        issuenum: 2,
    },
    {
        id: 6,
        cover: issue1,
        issuenum: 1,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
    },

]

const Fullpage = () => {
    let items = document.querySelectorAll('.issue');
    let colors = ['#ff608c', '#ffffff', '#00c1b5', '#ff6519', '#ffbe00', '#1d3fbb', '#e30512'];
    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    const init = () => {
        for (let i = 0; i < items.length; i++) {
            items[i].style.minHeight = getRandom(100, 105) + 'vh';
            items[i].style.background = colors[i];
        }
    }
    init();
    return (
        <>
            <Header />
            <div className="issues" id='fullpage'>
                {
                    issueData.map(item => (
                        <div key={item.id} data-color={item.color} className={`issue ${item.issuenum}`} id={`issue${item.issuenum}`}>
                            <div className="issue-info">
                                <div className="issue-cover">
                                    <img className='img' src={item.cover} alt={item.issuenum} />
                                </div>
                                <div className="issue-desc">
                                    <p>Issue #{item.issuenum}</p>
                                    <p style={item.id === 2 ? { color: '#ff608c' } : { color: '#fff' }}>BUY HERE <span style={{ color: '#251d20' }}>{item.buy1}</span></p>
                                    {
                                        item.buy2 ? <p>BUY HERE {item.buy2}</p> : ''
                                    }
                                    <p>or in <span style={item.id === 2 ? { color: '#ff608c' } : { color: '#fff' }}>selected stores</span> </p>
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
