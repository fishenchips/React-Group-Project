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
    },
    end: {
        when: "beforeChildren",
        staggerChildren: 3
    },
}

export const pChild = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 2
        }
    }
}

export const inputHover = {
    hover: {
        scale: 1.2,
        transition: {
            type: "spring", 
            stiffness: 300}
    }
}

export const button = {
    hover: {
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(245, 245, 245)",
        textShadow: "0px 0px 8px rgb(245, 245, 245)",
    },
    press: {
        backgroundColor: "rgb(245, 245, 245)",
        color: "rgb(107, 143, 36)",
        textShadow: "0px 0px 8px rgb(107, 143, 36)",
    }
}

export const checkout = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.2
        }
    }
}
