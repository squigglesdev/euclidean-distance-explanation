import { Circle, Img, Line, Rect } from '@motion-canvas/2d/lib/components';
import {zoomOutTransition} from '@motion-canvas/core/lib/transitions';
import { Gradient } from '@motion-canvas/2d/lib/partials';
import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {all, any, sequence, waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import { easeInBack, easeInElastic, easeInOutBack, easeInOutCirc, easeOutBack, easeOutCirc, spring } from '@motion-canvas/core/lib/tweening';
import { Reference, createRef } from '@motion-canvas/core/lib/utils';
import { BBox } from '@motion-canvas/core/lib/types';

export default makeScene2D(function* (view) {

    const point2 = createRef<Circle>();
    const zoomPoint = new BBox(
        0,
        0,
        70,
        43.75,
    )
    view.add(

            <Circle
                ref={point2}
                stroke={"#0f0"}
                lineWidth={10}
                fill={"#0a0a0a"}
                width={70}
                height={70}
                
            />

    );

    yield* zoomOutTransition(zoomPoint, 0.5)
    yield* waitFor(0.5)
    yield* point2().scale(0, 0.5, easeInBack)
    yield* waitFor(1)
});



