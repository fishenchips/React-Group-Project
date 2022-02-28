export const headerSlide = {
    start: {
        y: "-10vh",
        scale: 0.1
    },
    end: {
        y: 0,
        scale: 1.7,
        transition : {duration: 2}
    }  
}

export const imgSlide = {
    start: {
        x: "-35vw",
        scale:0.1
    },
    end: {
        x: 0,
        scale: 1,
        transition : {duration: 2}
    }  
}

export const asideSlide = {
    start: {
        x: "45vw",
        scale:0.1
    },
    end: {
        x: 0,
        scale: 1,
        transition : {duration: 2}
    }  
}

export const infoSlide = {
    start: {
        y: "30vw",
        scale: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3 
    },
    end: {
        y: 0,
        scale: 1,
        transition: {
            duration: 2,
            when: "beforeChildren",
            staggerChildren: 0.3 
        } // need help with this one
    },
}