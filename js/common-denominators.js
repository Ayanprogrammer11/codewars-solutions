const convertFrac = lst => {
    let dm = lst.reduce((a, b) => a.concat(b), []).reduce((c, d) => c + d, 0);
    return lst.map(i => `(${i[0] * dm/i[1]},${i[1] * (dm/i[1])})`).join('');
}
