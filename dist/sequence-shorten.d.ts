export default class SequenceShorten<T> {
    private readonly charset;
    private readonly base;
    private readonly lookup;
    private readonly _indexOne;
    private readonly _indexTwo;
    private readonly _indexThree;
    private readonly _a;
    private readonly _A;
    private readonly _0;
    private readonly _z;
    private readonly _Z;
    private readonly _9;
    constructor();
    private _lookUpCharset;
    encode(seqNum: number): string;
    decode(hashSeqNum: string): number;
}
