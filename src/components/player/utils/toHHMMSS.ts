function toHHMMSS(sec_num: number) {
    var minutes = Math.floor((sec_num - Math.floor(sec_num / 3600) * 3600) / 60);
    var seconds = sec_num - Math.floor(sec_num / 3600) * 3600 - minutes * 60;

    let minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();
    let secondsString = seconds < 10 ? `0${seconds}` : seconds.toString();
    return `${minutesString}:${secondsString}`;
}

export { toHHMMSS }