        // gsap.timeline({
        //     default: {
        //         ease: 'power4'
        //     }
        //     .to('.text', {
        //         y: '0%',
        //         duration: 1
        //     })
        //     .to('.landing', {
        //         y: '-100%',
        //         duration: 0.5
        //     })
        // })


        const tl = gsap.timeline({ default: { ease: 'power4' } })
        const tl2 = gsap.timeline({ default: { duration: 10 } })

        tl.to('.landing-text1', { y: '0%', duration: 0.7 })
        tl.to('.intro2', { x: '0%', duration: 1, delay: 0.7 })
        tl.to('.landing-text2', { y: '0%', duration: 0.9 })
        tl.to('.intro', { y: '-100%', duration: 0.5 })
        tl.to('.intro2', { y: '-100%', duration: 1 })

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".box",
                    start: "center center",
                    end: "bottom top",
                    // markers: true,
                    scrub: true,
                    pin: true
                }
            })
            .from(".box", {
                opacity: 0
            })
            .from(".text1", {
                x: innerWidth * 1
            })
            .from(".text2", {
                x: innerWidth * -1
            })
            .from(".text3", {
                x: innerWidth * 1
            })
            .from(".text4", {
                x: innerWidth * -1
            })

        gsap.timeline({
                scrollTrigger: {
                    trigger: ".box2",
                    start: "center center",
                    end: "bottom top",
                    // markers: true,
                    scrub: true,
                    pin: true
                }
            })
            .from(".text5", {
                y: innerHeight * -1
            })
            .from(".text6", {
                x: innerWidth * -1
            })
            .from(".text7", {
                x: innerWidth * 1
            })
            .from(".text8", {
                y: innerHeight * 1
            })