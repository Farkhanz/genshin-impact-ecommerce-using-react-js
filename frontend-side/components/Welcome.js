import React from 'react'

const Welcome = () => {
    return (
        <div className='container'>
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <center>
                        <h1 style={{ marginTop:80 }}>Welcome to Genshin Impact Guide Database</h1>
                        <img className='mt-4' src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/12/28/genshin-impact-24-release-date-20211228120732.jpg" alt="genshin impact banner" style={{flex:2}} />
                    </center>
                    {/* <img className='mt-6' src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/12/28/genshin-impact-24-release-date-20211228120732.jpg" alt="genshin impact banner" /> */}
                </div>
            </div>
        </div>
    )
}

export default Welcome