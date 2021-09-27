export const pagesAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}
/*export const TitleAnimation = {
    hidden: {
        y: 270
    },
    show: {
        transition: {
            duration: 0.75,
            ease: 'easeout'
        }
    }
}*/