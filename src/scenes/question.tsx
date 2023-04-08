import { Circle, Img, Line, Rect } from '@motion-canvas/2d/lib/components';
import {zoomInTransition} from '@motion-canvas/core/lib/transitions';
import { Gradient } from '@motion-canvas/2d/lib/partials';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, sequence, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { easeInBack, easeInElastic, easeInOutBack, easeInOutCirc, easeOutBack, easeOutCirc, spring } from '@motion-canvas/core/lib/tweening';
import { Reference, createRef } from '@motion-canvas/core/lib/utils';
import { BBox } from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {
    const circle = createRef<Circle>();

    const point = createRef<Circle>();

    const point2 = createRef<Circle>();

    const line = createRef<Line>();

    // Add the circle
    view.add(
        <>
            <Circle
                ref={circle}
                stroke={"fff"}
                lineWidth={20}
                width={1000}
                height={1000}
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
                stroke={"#fff"}
                lineWidth={10}
                fill={"#0a0a0a"}
                width={70}
                height={70}
                x={1500}
                y={-500}
                scale={0}
            />,
            <Circle
                ref={point2}
                stroke={"#0f0"}
                lineWidth={10}
                fill={"#0a0a0a"}
                width={70}
                height={70}
                x={-52.7864045}
                y={-223.60679775}
                scale={0}
            />
        </>

    );

    yield* waitUntil("Begin")
    yield* all(
        circle().scale(1, 0.5, easeOutBack),
    );
    yield* waitUntil("Point")
    yield all( 
        point().scale(1, 1, easeOutBack),
        point().position.x(500, 0.5, easeInOutCirc),
        circle().position.x(-500, 0.5, easeInOutCirc),
    );
    yield* waitUntil("Line")
    yield* line().end(1, 1, easeInOutCirc);
    yield* waitUntil("Point2")
    yield* point2().scale(1, 0.5, easeOutBack);
    yield* waitUntil("Zoom");
});



