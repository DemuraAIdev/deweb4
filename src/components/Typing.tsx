import React from 'react';
import Typed from 'typed.js';

export function Typing() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            stringsElement: '#bios',
            typeSpeed: 40,
            loop: true,
            smartBackspace: true,
            fadeOut: true,
            cursorChar: '|',
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <>
            <ul id="bios" className="hidden">
                <li>I live in indonesia.</li>
                <li>I love NODEJS.</li>
                <li>I love J-Core, EDM, DnB Liquid music.</li>
            </ul>
            <span ref={el} className="select-none text-lg text-neutral-900 dark:text-neutral-200" />
        </>
    );
}