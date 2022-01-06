
function formatDate(aaaa,mm,jj) {
    const aaaa = aaaa.getFullYear();
    const mm = mm.getMonth();
    const jj = jj.getDate();
    return jj + "-" + mm + "-" + aaaa;
}
console.log(formatDate(aaaa,mm,jj));