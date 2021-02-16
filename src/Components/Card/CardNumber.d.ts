type AS = string
type JACK = string
type QUEEN = string
type KING = string

export default interface CardNumber extends Array<number | string>{
    0: AS,
    1: number,
    2: number,
    3: number,
    4: number;
    5: number,
    6: number,
    7: number,
    8: number,
    9: number,
    10: JACK,
    11: QUEEN,
    12: KING
}

