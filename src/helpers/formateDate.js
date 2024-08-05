export const dateFormator = (date) => {
    let difference = new Date() - date; // difference in milliseconds
    // if (difference < 1000) {
    // return 'right now'
    // }

    // let sec = Math.floor(difference / 1000);
    // if (sec < 60) {
    // return `${sec} sec. ago`
    // }

    let min = Math.floor(difference / 60000);
    if (min < 60) {
        return `${min} min. ago`;
    }

    let hour = Math.floor(difference / 3600000);
    if (hour < 24) {
        return `${hour} hr. ago`;
    }

    let day = Math.floor(difference / 86400000);
    if (day < 2) {
        return `yesterday`;
    } else if (day < 7) {
        return `${day} day. ago`;
    }

    let week = Math.floor(difference / 604800000);
    if (week < 4) {
        return `${week} wk. ago`;
    }

    let month = Math.floor(difference / 2419200000);
    if (month < 12) {
        return `${month} mth. ago`;
    }

    let year = Math.floor(difference / 29030400000);
    return `${year}yr. ago`;
}

