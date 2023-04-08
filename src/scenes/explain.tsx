import { Circle, Img, Latex, Line, Rect } from '@motion-canvas/2d/lib/components';
import {zoomInTransition} from '@motion-canvas/core/lib/transitions';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, sequence, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { easeInBack, easeInElastic, easeInOutBack, easeInOutCirc, easeOutBack, linear, spring } from '@motion-canvas/core/lib/tweening';
import { createRef, finishScene } from '@motion-canvas/core/lib/utils';
import { BBox } from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {
  
    const bgcircle = createRef<Circle>();
    const circle = createRef<Circle>();
    const circleCoords = createRef<Latex>();
    const point = createRef<Circle>();
    const pointCoords = createRef<Latex>();
    const line = createRef<Line>();
    const dxLine = createRef<Line>();
    const dyLine = createRef<Line>();
    const dx = createRef<Latex>();
    const dy = createRef<Latex>();
    const gradient = createRef<Latex>();
    const unitCircle = createRef<Circle>();
    const uxLine = createRef<Line>();
    const calc = createRef<Latex>();
    const uyLine = createRef<Line>();
    const ux = createRef<Latex>();
    const uy = createRef<Latex>();
    const x2Line = createRef<Line>();
    const y2Line = createRef<Line>();
    const x2 = createRef<Latex>();
    const y2 = createRef<Latex>();
    const disclaimer = createRef<Latex>();
    const point2 = createRef<Circle>();
    const point2Coords = createRef<Latex>();

    const zoomPoint = new BBox(
        -52.7864045,
        -223.60679775,
        70,
        43.75,
    )

    view.add(
        <>
            <Circle
                ref={bgcircle}
                size={1960}
                fill={'#fff'}
            />,
            <Circle
                ref={circle}
                size={1000}
                stroke={'#0a0a0a'}
                lineWidth={20}
                scale={0}
            />,
            <Line
                ref={dxLine}
                stroke={"#af00d6"}
                lineWidth={10}
                points={[[-450,0], [500,0]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Line
                ref={dyLine}
                stroke={"#af00d6"}
                lineWidth={10}
                points={[[500,-50], [500,-450]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Latex
                ref={circleCoords}
                tex={'(100,100)'}
                y={50}
                x={-500}
                width={200}
                scale={0}
            />,
            <Latex
                ref={pointCoords}
                tex={'(200,150)'}
                y={-500}
                x={650}
                width={200}
                scale={0}
            />,
            <Latex
                ref={dx}
                tex={'100'}
                y={70}
                x={200}
                width={100}
                scale={0}
            />,
            <Latex
                ref={dy}
                tex={'50'}
                y={-250}
                x={600}
                width={70}
                scale={0}
            />,
            <Latex
                ref={gradient}
                tex={'112'}
                y={-375}
                x={100}
                width={100}
                scale={0}
                rotation={-25}
            />,
            <Circle
                ref={unitCircle}
                size={500}
                stroke={'#ffbd2e'}
                lineWidth={10}
                lineDash={[10, 10]}
                x={-500}
                fill={'#fff'}
                scale={0}
            />,
            <Line
                ref={uxLine}
                stroke={"#ffbd2e"}
                lineWidth={10}
                points={[[-500,0], [-300,0]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Line
                ref={uyLine}
                stroke={"#ffbd2e"}
                lineWidth={10}
                points={[[-290,0], [-290,-100]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Latex
                ref={ux}
                tex={'0.89'}
                y={50}
                x={-400}
                width={100}
                scale={0}
            />,
            <Latex
                ref={calc}
                tex={'c = \\sqrt{100^2 + 50^2} = 112'}
                y={500}
                x={750}
                width={500}
                scale={0}
            />,
            <Latex
                ref={disclaimer}
                tex={'(Not~to~scale)'}
                y={700}
                x={750}
                width={500}
                scale={0}
            />,
            <Latex
                ref={uy}
                tex={'0.45'}
                y={-50}
                x={-200}
                width={100}
                scale={0}
            />,
            <Line
                ref={x2Line}
                stroke={"#ffbd2e"}
                lineWidth={10}
                points={[[-500,0], [-50,0]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Line
                ref={y2Line}
                stroke={"#ffbd2e"}
                lineWidth={10}
                points={[[-50,-25], [-50,-200]]}
                endArrow
                radius={200}
                end={0}
            />,
            <Latex
                ref={x2}
                tex={'134.5'}
                y={50}
                x={-250}
                width={100}
                scale={0}
            />,
            <Latex
                ref={y2}
                tex={'122.5'}
                y={-120}
                x={-125}
                width={100}
                scale={0}
            />,
            <Line
                ref={line}
                stroke={"#ff6969"}
                lineWidth={10}
                points={[[-500,0], [500,-500]]}
                radius={200}
                end={0}
            />,
            <Circle
                ref={point}
                size={70}
                stroke={'#0a0a0a'}
                lineWidth={10}
                fill={'#fff'}
                x={1500}
                y={-500}
                scale={0}
            />,
            <Circle
                ref={point2}
                size={70}
                stroke={'#0a0a0a'}
                lineWidth={10}
                fill={'#fff'}
                x={-52.7864045}
                y={-223.60679775}
                scale={0}
            />,
            <Latex
                ref={point2Coords}
                tex={'(134.5,122.5)'}
                y={-200}
                x={150}
                width={300}
                scale={0}
            />,
        </>
    );

    yield zoomInTransition(zoomPoint, 0.5)

    yield* waitFor(0.4)
    yield* bgcircle().size(19600, 0.5)

    yield* waitUntil("Circle")
    yield* circle().scale(1, 0.5, easeOutBack)

    yield* waitUntil("Point")
    yield* all( 
        point().scale(1, 1, easeOutBack),
        point().position.x(500, 0.5, easeInOutCirc),
        circle().position.x(-500, 0.5, easeInOutCirc),
    );

    yield* waitUntil("Circle Coords")
    yield* circleCoords().scale(1, 0.5, easeOutBack)

    yield* waitUntil("Point Coords")
    yield* pointCoords().scale(1, 0.5, easeOutBack)

    yield* waitUntil("Line")
    yield* line().end(1, 0.5, easeInOutCirc)

    yield* waitUntil("dx")
    yield* dxLine().end(1, 0.5, easeInOutCirc)
    yield* dx().scale(1, 0.5, easeOutBack)

    yield* waitUntil("dy")
    yield* dyLine().end(1, 0.5, easeInOutCirc)
    yield* dy().scale(1, 0.5, easeOutBack)

    yield* waitUntil("Gradient length")
    yield* calc().scale(1, 0.5, easeOutBack)
    yield* waitFor(1)
    yield* gradient().scale(1, 0.5, easeOutBack)

    yield* waitUntil("Unit Circle")
    yield* all(
        unitCircle().scale(1, 0.5, easeOutBack),
        disclaimer().scale(1, 0.5, easeOutBack)
    );

    yield* waitUntil("ux")
    yield* calc().tex("ux = \\frac{100}{112} = 0.89", 0, easeInOutCirc)
    yield* waitFor(1)
    yield* any(
        uxLine().end(1, 0.5, easeInOutCirc),
        dxLine().start(1, 0.5, easeInOutCirc),
        dx().opacity(0, 0.5, easeInOutCirc),
    );
    yield* ux().scale(1, 0.5, easeOutBack)

    yield* waitUntil("uy")
    yield* calc().tex("uy = \\frac{50}{112} = 0.45", 0, easeInOutCirc)
    yield* waitFor(1)
    yield* waitFor(0.5)

    yield* any(
        uyLine().end(1, 0.5, easeInOutCirc),
        dyLine().start(1, 0.5, easeInOutCirc),
        dy().opacity(0, 0.5, easeInOutCirc),
    );
    yield* uy().scale(1, 0.5, easeOutBack)

    yield* waitUntil("x2")
    yield* calc().tex("x2 = 100 + 0.89 × 50 = 134.5", 0, easeInOutCirc)
    yield* waitFor(0.5)
    yield* any(
        unitCircle().opacity(0, 0.5, easeInOutCirc),
        circleCoords().opacity(0, 0, easeInOutCirc),
        ux().opacity(0, 0.5, easeInOutCirc),
        x2Line().end(1, 0.5, easeInOutCirc),
        x2().scale(1, 0.5, easeOutBack),
        uxLine().start(1, 0.2, easeInOutCirc),
    )

    yield* waitUntil("y2")
    yield* calc().tex("y2 = 100 + 0.45 × 50 = 122.5", 0, easeInOutCirc)
    yield* waitFor(0.5)
    yield* any(
        y2Line().end(1, 0.5, easeInOutCirc),
        y2().scale(1, 0.5, easeOutBack),
        uyLine().start(1, 0.5, easeInOutCirc),
        uy().opacity(0, 0.5, easeInOutCirc),
    );

    yield* waitUntil("Point 2")
    yield* any(
        x2Line().start(1, 0.5, easeInOutCirc),
        y2Line().start(1, 0.5, easeInOutCirc),
        x2().opacity(0, 0.5, easeInOutCirc),
        y2().opacity(0, 0.5, easeInOutCirc),
        gradient().opacity(0, 0.5, easeInOutCirc),
        calc().opacity(0, 0.5, easeInOutCirc),
        disclaimer().opacity(0, 0.5, easeInOutCirc),
        point2().scale(1, 0.5, easeOutBack),
        point2Coords().scale(1, 0.5, easeOutBack),
    );

    yield* waitUntil("END")
    yield* all(
        circle().opacity(0, 0.5, easeInOutCirc),
        point().opacity(0, 0.5, easeInOutCirc),
        point2().opacity(0, 0.5, easeInOutCirc),
        line().opacity(0, 0.5, easeInOutCirc),
        pointCoords().opacity(0, 0.5, easeInOutCirc),
        point2Coords().opacity(0, 0.5, easeInOutCirc),
        
    );
    yield bgcircle().size(1960, 0.5)
    yield* waitFor(0.4)        
});
