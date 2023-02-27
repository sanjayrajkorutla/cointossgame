// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_PIC = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_PIC = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {head: 0, tail: 0, resultImage: HEAD_PIC}

  onClickTossCoins = () => {
    const {head, tail} = this.state
    let countIncrementHeads = head
    let countDecrementTails = tail
    let tossImage = ''
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      tossImage = HEAD_PIC
      countIncrementHeads += 1
    } else {
      tossImage = TAIL_PIC
      countDecrementTails += 1
    }
    this.setState({
      resultImage: tossImage,
      head: countIncrementHeads,
      tail: countDecrementTails,
    })
  }

  render() {
    const {head, tail, resultImage} = this.state
    const totalCount = head + tail
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="head-tails-para">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="img-coins" />
          <button
            type="button"
            className="button-coin-toss"
            onClick={this.onClickTossCoins}
          >
            Toss Coin
          </button>
          <div className="container_count">
            <p className="count_show">Total:{totalCount}</p>
            <p className="count_show">Heads:{head}</p>
            <p className="count_show">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
