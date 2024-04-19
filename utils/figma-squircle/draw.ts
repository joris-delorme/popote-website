interface CornerPathParams {
    a: number
    b: number
    c: number
    d: number
    p: number
    cornerRadius: number
    arcSectionLength: number
}

interface CornerParams {
    cornerRadius: number
    cornerSmoothing: number
    preserveSmoothing: boolean
    roundingAndSmoothingBudget: number
}

export function getPathParamsForCorner({
    cornerRadius,
    cornerSmoothing,
    preserveSmoothing,
    roundingAndSmoothingBudget,
}: CornerParams): CornerPathParams {
    let p = (1 + cornerSmoothing) * cornerRadius

    if (!preserveSmoothing) {
        const maxCornerSmoothing = roundingAndSmoothingBudget / cornerRadius - 1
        cornerSmoothing = Math.min(cornerSmoothing, maxCornerSmoothing)
        p = Math.min(p, roundingAndSmoothingBudget)
    }

    const arcMeasure = 90 * (1 - cornerSmoothing)
    const arcSectionLength =
        Math.sin(toRadians(arcMeasure / 2)) * cornerRadius * Math.sqrt(2)

    const angleAlpha = (90 - arcMeasure) / 2
    const p3ToP4Distance = cornerRadius * Math.tan(toRadians(angleAlpha / 2))

    const angleBeta = 45 * cornerSmoothing
    const c = p3ToP4Distance * Math.cos(toRadians(angleBeta))
    const d = c * Math.tan(toRadians(angleBeta))

    let b = (p - arcSectionLength - c - d) / 3
    let a = 2 * b

    if (preserveSmoothing && p > roundingAndSmoothingBudget) {
        const p1ToP3MaxDistance =
            roundingAndSmoothingBudget - d - arcSectionLength - c

        const minA = p1ToP3MaxDistance / 6
        const maxB = p1ToP3MaxDistance - minA

        b = Math.min(b, maxB)
        a = p1ToP3MaxDistance - b
        p = Math.min(p, roundingAndSmoothingBudget)
    }

    return {
        a,
        b,
        c,
        d,
        p,
        arcSectionLength,
        cornerRadius,
    }
}

interface SVGPathInput {
    width: number
    height: number
    topRightPathParams: CornerPathParams
    bottomRightPathParams: CornerPathParams
    bottomLeftPathParams: CornerPathParams
    topLeftPathParams: CornerPathParams
}

export function getSVGPathFromPathParams({
    width,
    height,
    topLeftPathParams,
    topRightPathParams,
    bottomLeftPathParams,
    bottomRightPathParams,
}: SVGPathInput) {
    return `
      M ${width - topRightPathParams.p} 0
      ${drawTopRightPath(topRightPathParams)}
      L ${width} ${height - bottomRightPathParams.p}
      ${drawBottomRightPath(bottomRightPathParams)}
      L ${bottomLeftPathParams.p} ${height}
      ${drawBottomLeftPath(bottomLeftPathParams)}
      L 0 ${topLeftPathParams.p}
      ${drawTopLeftPath(topLeftPathParams)}
      Z
    `
        .replace(/[\t\s\n]+/g, ' ')
        .trim()
}

function drawTopRightPath({
    cornerRadius,
    a,
    b,
    c,
    d,
    p,
    arcSectionLength,
}: CornerPathParams) {
    if (cornerRadius) {
        return rounded`
      c ${a} 0 ${a + b} 0 ${a + b + c} ${d}
      a ${cornerRadius} ${cornerRadius} 0 0 1 ${arcSectionLength} ${arcSectionLength}
      c ${d} ${c}
          ${d} ${b + c}
          ${d} ${a + b + c}`
    } else {
        return rounded`l ${p} 0`
    }
}

function drawBottomRightPath({
    cornerRadius,
    a,
    b,
    c,
    d,
    p,
    arcSectionLength,
}: CornerPathParams) {
    if (cornerRadius) {
        return rounded`
      c 0 ${a}
        0 ${a + b}
        ${-d} ${a + b + c}
      a ${cornerRadius} ${cornerRadius} 0 0 1 -${arcSectionLength} ${arcSectionLength}
      c ${-c} ${d}
        ${-(b + c)} ${d}
        ${-(a + b + c)} ${d}`
    } else {
        return rounded`l 0 ${p}`
    }
}

function drawBottomLeftPath({
    cornerRadius,
    a,
    b,
    c,
    d,
    p,
    arcSectionLength,
}: CornerPathParams) {
    if (cornerRadius) {
        return rounded`
      c ${-a} 0
        ${-(a + b)} 0
        ${-(a + b + c)} ${-d}
      a ${cornerRadius} ${cornerRadius} 0 0 1 -${arcSectionLength} -${arcSectionLength}
      c ${-d} ${-c}
        ${-d} ${-(b + c)}
        ${-d} ${-(a + b + c)}`
    } else {
        return rounded`l ${-p} 0`
    }
}

function drawTopLeftPath({
    cornerRadius,
    a,
    b,
    c,
    d,
    p,
    arcSectionLength,
}: CornerPathParams) {
    if (cornerRadius) {
        return rounded`
      c 0 ${-a}
        0 ${-(a + b)}
        ${d} ${-(a + b + c)}
      a ${cornerRadius} ${cornerRadius} 0 0 1 ${arcSectionLength} -${arcSectionLength}
      c ${c} ${-d}
        ${b + c} ${-d}
        ${a + b + c} ${-d}`
    } else {
        return rounded`l 0 ${-p}`
    }
}

function toRadians(degrees: number) {
    return (degrees * Math.PI) / 180
}

function rounded(strings: TemplateStringsArray, ...values: any[]): string {
    return strings.reduce((acc, str, i) => {
        let value = values[i]

        if (typeof value === 'number') {
            return acc + str + value.toFixed(4)
        } else {
            return acc + str + (value ?? '')
        }
    }, '')
}