interface PolarPoint {
    len: number,
    angle: number,
    computeX: () => number
    computeY: () => number
    getX: ()=> number
    getY: ()=> number
}

function newPolarPoint (len: number, angle: number): PolarPoint {
    return {
        len,
        angle,

        computeX: function (): number {
            return Math.round(len * Math.cos(angle))
        },

        computeY: function (): number {
            return Math.round(len * Math.sin(angle))
        },
        getX: function(): number{
            return this.computeX()
        },
        getY: function(): number{
            return this.computeY()
        }
    }
}

export { PolarPoint, newPolarPoint }