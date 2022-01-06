function formatDate(aaaa,mm,jj) {
    var d = new Date(aaaa,mm,jj),
    aaaa = d.getFullYear(),
    mm = d.getMonth(),
    jj = d.getDate();
    return jj + "-" + mm + "-" + aaaa;
}
console.log(formatDate(2012,06,12));