/*
    Common Denominators
    
    You will have a list of rationals in the form
        { {numer_1, denom_1} , ... {numer_n, denom_n} } 
    or
        [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
    or
        [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
    where all numbers are positive ints.

    You have to produce a result in the form
        (N_1, D) ... (N_n, D) 
    or
        [ [N_1, D] ... [N_n, D] ] 
    or
        [ (N_1', D) , ... (N_n, D) ] 
    or
        {{N_1, D} ... {N_n, D}} 
    or
        "(N_1, D) ... (N_n, D)"
    depending on the language (See Example tests)
    in which D is as small as possible and N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
    Example: convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
*/

const convertFrac = lst => {
    let dm = lst.reduce((a, b) => a.concat(b), []).reduce((c, d) => c + d, 0);
    return lst.map(i => `(${i[0] * dm/i[1]},${i[1] * (dm/i[1])})`).join('');
}
