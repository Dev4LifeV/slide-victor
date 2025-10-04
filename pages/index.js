import { useEffect, useRef, useState } from 'react'

import Head from 'next/head'
import { usePageBottom } from './usePageBottom'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pongWinner, setPongWinner] = useState(null)
  const [userInput, setUserInput] = useState('')

  const [isAtBottom, setIsAtBottom] = useState(false)

  const isBottom = usePageBottom()

  const totalPages = 10

  const nextPage = () => {
    if (currentPage === 8 && userInput.length < 400) {
      alert('vagaubdo,mostra sneitmento e fala o que tu snetne envod essa iagme')
      return
    }
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePongWin = (winner) => {
    setPongWinner(winner)
    setCurrentPage(3)
  }

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (currentPage === 10) {
        e.preventDefault()
        e.returnValue = 'n fehca paoriveita a musica pora'
        return 'n fehca paoriveita a musica pora'
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [currentPage])

  // Separate useEffect for scroll detection on page 5
  useEffect(() => {
    setIsAtBottom(isBottom)
  }, [currentPage, isBottom])

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <h1> bem-vindo a &lt;insira sua apresentação aqui&gt;.hoje falaremos sobre</h1>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
            
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h2>Pong Game - Primeiro a 5 pontos!</h2>
            <PongGame onWin={handlePongWin} />
          </div>
        )
      case 3:
        return (
          <div>
            <h2>Resultado do Pong!</h2>
            {pongWinner === 1 ? (
              <p className="blink">Parabes.voce e o vecedor e o player 2 que vai continua aprensntano</p>
            ) : (
              <p className="blink">voce e bom. voce e tao bom player 2 q vai temrina de apresentar so slid</p>
            )}
          </div>
        )
      case 4:
        return (
          <div>
            <h2>Pensamento Profundo</h2>
            <p>O sapo não lava o pé mas lava a pata do cavalo que relincha no brejo da meia-noite enquanto as galinhas cantam ópera para as vacas leiteiras.</p>
          </div>
        )
      case 5:
        return (
          <div>
            <h2>Desça até o final...</h2>
            <div className="scroll-container">
              <div style={{ height: '1000000px' }}></div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#ff0000', color: '#ffffff' }}>
                <p>Finalmente você chegou ao fim! Agora pode continuar.</p>
              </div>
            </div>
          </div>
        )
      case 6:
        return (
          <div>
            <h2>Pergunta</h2>
            <div className="big-image">
              <img src="https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/df7/352f0ae6f28937f1ec549af56c8e039a.png" />
              <input 
                type="text"
                value={userInput}
                onChange={(e) => {
                 
                    setUserInput(e.target.value)
                  
                }}
                placeholder="Digite sua resposta aqui..."
                style={{ width: '80%', padding: '10px', margin: '20px 0' }}
              />
              <br />
            </div>
          </div>
        )
      case 7:
        return (
          <div>
            <h2>Onde está a navegação?</h2>
            <p>Tente encontrar os botões para continuar... eles estão em algum lugar...</p>
            <div style={{ height: '300px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '150px', left: '50px', opacity: '0.00' }}>
                <button onClick={nextPage}>Aqui?</button>
              </div>
              <div style={{ position: 'absolute', top: '50px', right: '100px', opacity: '0.00' }}>
                <button onClick={nextPage}>Ou aqui?</button>
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '200px', opacity: '0.00' }}>
                <button onClick={nextPage}>Talvez aqui?</button>
              </div>
              <div style={{ position: 'absolute', top: '200px', right: '20px', opacity: '0.00' }}>
                <button onClick={nextPage}>Quem sabe aqui?</button>
              </div>
            </div>
          </div>
        )
      case 8:
        return (
          <div>
            <h2>Escreva seus sentimentos</h2>
            <div className="big-image">
              <img src='https://scontent.cdninstagram.com/v/t51.82787-15/558921203_18032311856721513_327022619352338267_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzczNDkwMzIyOTA5MzAzNDA1MA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=NTdJH5CQbYsQ7kNvwH01pc1&_nc_oc=AdlBzmdGlLtMgYVQomoZnbJWteyeVB-TywRTBfXl2U5eMf6KxSnSy6PadlQeDNmqbNpxBogLbf9J0Rq2et55ZFUR&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=uKF6wIiP_f-JHwQ52ZaNlg&oh=00_AfdeDdSdYReHLHDjPYcuuqIk7tBlDf5RubMU6Nwp2XwBvA&oe=68E759F3'/>
            </div>
            <div style={{ marginTop: '20px' }}>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Escreva pelo menos 400 caracteres sobre o que você sente vendo esta imagem..."
                rows="6"
                style={{ width: '100%' }}
              />
 
              
            </div>
          </div>
        )
      case 9:
        return (
          <div>
            <h2>Quase lá!</h2>
            <p style={{ fontSize: '24px', textAlign: 'center', color: '#ff0000' }}>
              orbaigod move para o final tem mais um slid
            </p>
          </div>
        )
      case 10:
        return (
          <div>
            <h2>Última Página</h2>
            <div className="big-image">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MPNQgsVupKo?si=NHVjOdZ5kq_L-vR9&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <br />
              
            </div>
          </div>
        )
      default:
        return <h1>Página não encontrada!</h1>
    }
  }

  const canGoNext = () => {
    if (currentPage === 2 && !pongWinner) return false
    if (currentPage === 5 && !isAtBottom) return false
    if (currentPage === 6 && userInput !== '42') return false
    // if (currentPage === 8 && userInput.length < 400) return false
    return currentPage < totalPages
  }

  const canGoBack = () => {
    return currentPage > 1
  }

  return (
    <>
      <Head>
        <title>Apresentação Épica 2002</title>
        <meta name="description" content="A apresentação mais engraçada de 2002" />
      </Head>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1>Slide {currentPage} de {totalPages}</h1>
        </div>

        {renderPage()}

        <div className="navigation">
          <button onClick={prevPage} disabled={!canGoBack()}>
            ← Anterior
          </button>
          {currentPage === 7 ? null : <button 
            onClick={nextPage} 
            disabled={!canGoNext()}
            className={currentPage === 7 ? 'hidden-nav' : ''}
          >
            Próximo →
          </button>}
        </div>
      </div>
    </>
  )
}

const PongGame = ({ onWin }) => {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [paddle1Y, setPaddle1Y] = useState(120)
  const [paddle2Y, setPaddle2Y] = useState(120)
  const [ballX, setBallX] = useState(200)
  const [ballY, setBallY] = useState(150)
  const [ballSpeedX, setBallSpeedX] = useState(3)
  const [ballSpeedY, setBallSpeedY] = useState(2)
  const [keys, setKeys] = useState({})
  const gameRef = useRef(null)
  const animationRef = useRef(null)
  const lastTimeRef = useRef(0)

  const PADDLE_HEIGHT = 60
  const PADDLE_WIDTH = 10
  const BALL_SIZE = 10
  const GAME_WIDTH = 400
  const GAME_HEIGHT = 300
  const PADDLE_SPEED = 8

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys(prev => ({ ...prev, [e.key]: true }))
    }

    const handleKeyUp = (e) => {
      setKeys(prev => ({ ...prev, [e.key]: false }))
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!gameStarted) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    const gameLoop = (timestamp) => {
      const deltaTime = timestamp - (lastTimeRef.current || timestamp)
      lastTimeRef.current = timestamp

      // Move paddles based on continuous key press
      if (keys['w'] || keys['W']) {
        setPaddle1Y(prev => Math.max(0, prev - PADDLE_SPEED))
      }
      if (keys['s'] || keys['S']) {
        setPaddle1Y(prev => Math.min(GAME_HEIGHT - PADDLE_HEIGHT, prev + PADDLE_SPEED))
      }
      if (keys['ArrowUp']) {
        setPaddle2Y(prev => Math.max(0, prev - PADDLE_SPEED))
      }
      if (keys['ArrowDown']) {
        setPaddle2Y(prev => Math.min(GAME_HEIGHT - PADDLE_HEIGHT, prev + PADDLE_SPEED))
      }

      // Move the ball with frame rate independence
      const speedFactor = deltaTime / 16
      setBallX(prev => prev + ballSpeedX * speedFactor)
      setBallY(prev => prev + ballSpeedY * speedFactor)

      // Ball collision with top and bottom
      if (ballY <= 0) {
        setBallY(0)
        setBallSpeedY(prev => Math.abs(prev))
      }
      if (ballY >= GAME_HEIGHT - BALL_SIZE) {
        setBallY(GAME_HEIGHT - BALL_SIZE)
        setBallSpeedY(prev => -Math.abs(prev))
      }

      // Ball collision with paddles - improved collision detection
      if (ballX <= PADDLE_WIDTH && ballX >= 0) {
        const ballCenterY = ballY + BALL_SIZE / 2
        const paddle1CenterY = paddle1Y + PADDLE_HEIGHT / 2
        
        if (ballCenterY >= paddle1Y && ballCenterY <= paddle1Y + PADDLE_HEIGHT) {
          setBallX(PADDLE_WIDTH)
          setBallSpeedX(prev => Math.abs(prev) + 0.2)
          
          // Add angle based on where the ball hits the paddle
          const hitPosition = (ballCenterY - paddle1CenterY) / (PADDLE_HEIGHT / 2)
          setBallSpeedY(prev => prev + hitPosition * 3)
        }
      }

      if (ballX >= GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE && ballX <= GAME_WIDTH) {
        const ballCenterY = ballY + BALL_SIZE / 2
        const paddle2CenterY = paddle2Y + PADDLE_HEIGHT / 2
        
        if (ballCenterY >= paddle2Y && ballCenterY <= paddle2Y + PADDLE_HEIGHT) {
          setBallX(GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE)
          setBallSpeedX(prev => -Math.abs(prev) - 0.2)
          
          // Add angle based on where the ball hits the paddle
          const hitPosition = (ballCenterY - paddle2CenterY) / (PADDLE_HEIGHT / 2)
          setBallSpeedY(prev => prev + hitPosition * 3)
        }
      }

      // Score points
      if (ballX < 0) {
        setScore2(prev => {
          const newScore = prev + 1
          if (newScore >= 5) onWin(2)
          return newScore
        })
        resetBall()
      }

      if (ballX > GAME_WIDTH) {
        setScore1(prev => {
          const newScore = prev + 1
          if (newScore >= 5) onWin(1)
          return newScore
        })
        resetBall()
      }

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    animationRef.current = requestAnimationFrame(gameLoop)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameStarted, ballSpeedX, ballSpeedY, paddle1Y, paddle2Y, onWin, keys])

  const resetBall = () => {
    setBallX(GAME_WIDTH / 2 - BALL_SIZE / 2)
    setBallY(GAME_HEIGHT / 2 - BALL_SIZE / 2)
    setBallSpeedX(Math.random() > 0.5 ? 3 : -3)
    setBallSpeedY((Math.random() - 0.5) * 2)
  }

  const startGame = () => {
    setGameStarted(true)
    resetBall()
    setScore1(0)
    setScore2(0)
    setKeys({})
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>Player 1: {score1} | Player 2: {score2}</h3>
        {!gameStarted && (
          <button onClick={startGame} style={{ backgroundColor: '#ff0000', color: '#ffffff' }}>
            Iniciar Jogo!
          </button>
        )}
      </div>
      
      <div 
        ref={gameRef}
        style={{ 
          width: `${GAME_WIDTH}px`, 
          height: `${GAME_HEIGHT}px`, 
          backgroundColor: '#000000', 
          margin: '0 auto', 
          position: 'relative',
          border: '2px solid #00ff00',
          overflow: 'hidden'
        }}
      >
        {/* Paddle 1 (Left) */}
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: `${paddle1Y}px`, 
          width: `${PADDLE_WIDTH}px`, 
          height: `${PADDLE_HEIGHT}px`, 
          backgroundColor: '#ffffff' 
        }}></div>
        
        {/* Paddle 2 (Right) */}
        <div style={{ 
          position: 'absolute', 
          right: '0', 
          top: `${paddle2Y}px`, 
          width: `${PADDLE_WIDTH}px`, 
          height: `${PADDLE_HEIGHT}px`, 
          backgroundColor: '#ffffff' 
        }}></div>
        
        {/* Ball */}
        <div style={{ 
          position: 'absolute', 
          left: `${ballX}px`, 
          top: `${ballY}px`, 
          width: `${BALL_SIZE}px`, 
          height: `${BALL_SIZE}px`, 
          backgroundColor: '#ffffff',
          borderRadius: '50%'
        }}></div>
        
        {/* Center line */}
        <div style={{ 
          position: 'absolute', 
          left: '50%', 
          top: '0', 
          width: '2px', 
          height: '100%', 
          backgroundColor: '#333333',
          transform: 'translateX(-1px)'
        }}></div>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffff00', border: '2px solid #000000' }}>
        <h4>Controles:</h4>
        <p><strong>Player 1:</strong> W (cima) S (baixo) - Segure para mover continuamente</p>
        <p><strong>Player 2:</strong> ↑ (cima) ↓ (baixo) - Segure para mover continuamente</p>
      </div>

      {gameStarted && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => {
            setGameStarted(false)
            setScore1(0)
            setScore2(0)
            setKeys({})
          }}>
            Parar Jogo
          </button>
        </div>
      )}
    </div>
  )
}