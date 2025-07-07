document.addEventListener("DOMContentLoaded", () => {
    // Sayfa yüklendiğinde alttan uçan kalpleri başlat
    startContinuousHearts()
    const envelope = document.getElementById("envelope")
    const letter = document.getElementById("letter")
    const clickInstruction = document.getElementById("clickInstruction")
    let isOpen = false

    envelope.addEventListener("click", () => {
        if (!isOpen) {
            envelope.classList.add("open")
            isOpen = true

            // Hide click instruction
            if (clickInstruction) {
                clickInstruction.style.opacity = "0"
                clickInstruction.style.transition = "opacity 0.5s ease"
            }

            // Add confetti and sparkle effects
            setTimeout(() => {
                createConfetti()
                createSparkles()
                createFlyingHearts()
            }, 800)
        }
    })

    // Create confetti effect when letter opens
    function createConfetti() {
        const colors = ["#ff6b9d", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff"]

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement("div")
                confetti.style.position = "fixed"
                confetti.style.left = Math.random() * window.innerWidth + "px"
                confetti.style.top = "-10px"
                confetti.style.width = Math.random() * 10 + 5 + "px"
                confetti.style.height = Math.random() * 10 + 5 + "px"
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
                confetti.style.pointerEvents = "none"
                confetti.style.zIndex = "1000"
                confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"
                confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s ease-out forwards`

                document.body.appendChild(confetti)

                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.remove()
                    }
                }, 5000)
            }, i * 50)
        }
    }

    // Create sparkle effect when letter opens
    function createSparkles() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const sparkle = document.createElement("div")
                sparkle.innerHTML = "✨"
                sparkle.style.position = "fixed"
                sparkle.style.left = Math.random() * window.innerWidth + "px"
                sparkle.style.top = Math.random() * window.innerHeight + "px"
                sparkle.style.fontSize = Math.random() * 20 + 15 + "px"
                sparkle.style.pointerEvents = "none"
                sparkle.style.zIndex = "1000"
                sparkle.style.animation = "sparkle 2s ease-out forwards"

                document.body.appendChild(sparkle)

                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.remove()
                    }
                }, 2000)
            }, i * 100)
        }
    }

    // Create flying hearts when letter opens
    function createFlyingHearts() {
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const heart = document.createElement("div")
                heart.innerHTML = "❤️"
                heart.style.position = "fixed"
                heart.style.left = Math.random() * window.innerWidth + "px"
                heart.style.top = window.innerHeight + "px"
                heart.style.fontSize = Math.random() * 25 + 20 + "px"
                heart.style.pointerEvents = "none"
                heart.style.zIndex = "999"
                heart.style.animation = `flyUp ${Math.random() * 4 + 3}s ease-out forwards`

                document.body.appendChild(heart)

                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.remove()
                    }
                }, 7000)
            }, i * 150)
        }
    }

    // Add more background hearts continuously
    setInterval(() => {
        const heart = document.createElement("div")
        heart.className = "floating-heart"
        heart.style.position = "fixed"
        heart.style.left = Math.random() * 100 + "%"
        heart.style.top = "100vh"
        heart.style.width = Math.random() * 15 + 15 + "px"
        heart.style.height = Math.random() * 15 + 15 + "px"
        heart.style.background = "#ff6b9d"
        heart.style.transform = "rotate(-45deg)"
        heart.style.opacity = "0.7"
        heart.style.pointerEvents = "none"
        heart.style.zIndex = "1"
        heart.style.animation = `floatUp ${Math.random() * 4 + 5}s ease-in-out forwards`

        // Create heart shape
        const heartBefore = document.createElement("div")
        heartBefore.style.position = "absolute"
        heartBefore.style.width = "100%"
        heartBefore.style.height = "100%"
        heartBefore.style.left = "50%"
        heartBefore.style.top = "0"
        heartBefore.style.background = "#ff6b9d"
        heartBefore.style.borderRadius = "50%"
        heartBefore.style.transform = "rotate(-45deg)"
        heartBefore.style.transformOrigin = "0 50%"

        const heartAfter = document.createElement("div")
        heartAfter.style.position = "absolute"
        heartAfter.style.width = "100%"
        heartAfter.style.height = "100%"
        heartAfter.style.left = "0"
        heartAfter.style.top = "0"
        heartAfter.style.background = "#ff6b9d"
        heartAfter.style.borderRadius = "50%"
        heartAfter.style.transform = "rotate(45deg)"
        heartAfter.style.transformOrigin = "50% 50%"

        heart.appendChild(heartBefore)
        heart.appendChild(heartAfter)

        document.body.appendChild(heart)

        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove()
            }
        }, 9000)
    }, 800)

    // Add dynamic CSS animations
    const style = document.createElement("style")
    style.textContent = `
        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }

        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }

        @keyframes flyUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }

        @keyframes floatUp {
            0% {
                transform: translateY(100vh) rotate(-45deg) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 0.7;
            }
            90% {
                opacity: 0.7;
            }
            100% {
                transform: translateY(-20px) rotate(-45deg) scale(1);
                opacity: 0;
            }
        }
    `
    document.head.appendChild(style)

    // Sayfa başladığında kalp efektleri
    function startContinuousHearts() {
        // Hemen alttan uçan kalpler başlasın
        createFlyingHeartsLoop()
    }

    // Sürekli alttan uçan kalpler
    function createFlyingHeartsLoop() {
        setInterval(() => {
            const heart = document.createElement("div")
            heart.innerHTML = "❤️"
            heart.style.position = "fixed"
            heart.style.left = Math.random() * window.innerWidth + "px"
            heart.style.top = window.innerHeight + "px"
            heart.style.fontSize = Math.random() * 25 + 20 + "px"
            heart.style.pointerEvents = "none"
            heart.style.zIndex = "999"
            heart.style.animation = `flyUp ${Math.random() * 4 + 3}s ease-out forwards`

            document.body.appendChild(heart)

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove()
                }
            }, 7000)
        }, 800) // Her 800ms'de bir kalp
    }
})
