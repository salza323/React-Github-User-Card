import React from 'react'
import './Followers.css'

class Followers extends React.Component {
    state = {
        followers: [],
    }

    componentDidMount() {
        this.fetchFollowers(this.state.followers)
    }

    fetchFollowers = (followers) => {
        fetch('https://api.github.com/users/salza323/followers')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                followers: data
            })
        })
        .catch((err) => console.log('error:', err))
    }

    render(){
        console.log(this.state.followers)
        return(
            <div>
                <h2>Sals Followers:</h2>               
                <div className = 'followers-cards'>   
                    {
                        this.state.followers.map((follower) => (
                            <div>
                                <img width="200px" src={follower.avatar_url} alt={follower.avatar_url} key={follower}/>
                                <h3>{follower.login}</h3>
                            </div>
                            ))                       
                    }
                </div>
            </div>
        )
    }

}

export default Followers