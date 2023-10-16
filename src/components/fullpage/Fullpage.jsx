import issue7 from '/cover_issue/backstagetalks_cover_issue_7.png'
import issue6 from '/cover_issue/backstagetalks_cover_issue_6.png'
import issue5 from '/cover_issue/backstagetalks_cover_issue_5.png'
import issue4 from '/cover_issue/backstagetalks_cover_issue_4.png'
import issue3 from '/cover_issue/backstagetalks_cover_issue_3.png'
import issue2 from '/cover_issue/backstagetalks_cover_issue_2.png'
import issue1 from '/cover_issue/backstagetalks_cover_issue_1.png'

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
    let issue = document.querySelectorAll('.issue');

    window.addEventListener('scroll', () => {
        issue.forEach(box => {
            if (
                box.getBoundingClientRect().top <= document.body.scrollTop
            ) {
                document.body.style.backgroundColor = box.dataset.color;
                console.log(box.dataset.color)
            }
        });
    });
    return (
        <>
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
        </>
    )
}

export default Fullpage
