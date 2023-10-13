import issue7 from '/cover_issue/backstagetalks_cover_issue_7.png'
import issue6 from '/cover_issue/backstagetalks_cover_issue_6.png'
import issue5 from '/cover_issue/backstagetalks_cover_issue_5.png'
import issue4 from '/cover_issue/backstagetalks_cover_issue_4.png'
import issue3 from '/cover_issue/backstagetalks_cover_issue_3.png'
import issue2 from '/cover_issue/backstagetalks_cover_issue_2.png'
import issue1 from '/cover_issue/backstagetalks_cover_issue_1.png'

const issueData = [
    {
        id: 1,
        cover: issue7,
        issuenum: 7,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
    },
    {
        id: 2,
        cover: issue6,
        issuenum: 6,
    },
    {
        id: 3,
        cover: issue5,
        issuenum: 5,
    },
    {
        id: 4,
        cover: issue4,
        issuenum: 4,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
    },
    {
        id: 5,
        cover: issue3,
        issuenum: 3,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
    },
    {
        id: 6,
        cover: issue2,
        issuenum: 2,
    },
    {
        id: 7,
        cover: issue1,
        issuenum: 1,
        buy1: '(Europe)',
        buy2: '(UK & Overseas)',
    },

]

const Fullpage = () => {
    return (
        <>
            <div className="issues">
                {
                    issueData.map(item => (
                        <div key={item.id} className={item.issuenum}>
                            <div className="issue-info">
                                <div className="issue-cover">
                                    <img src={item.cover} alt={item.issuenum} />
                                </div>
                                <div className="issue-desc">
                                    <p>{item.issuenum}</p>
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
        </>
    )
}

export default Fullpage
