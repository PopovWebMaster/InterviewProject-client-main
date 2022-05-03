
export const ANIMATION_NAME = {
    SPAN_1: 'span-1',
    SPAN_2: 'span-2',
    SPAN_3: 'span-3',
};

export const SPEED_ANUMATION = 1600;

export const ID_NAME = 'dinamic';

export const CLASS_NAME_DINAMIC_SPANS = 'dinamic_spans';

export const CLASS_NAME = {
    SPAN_VOLUME_UP:   `${ANIMATION_NAME.SPAN_1} icon-volume-up`,
    SPAN_VOLUME_DOWN: `${ANIMATION_NAME.SPAN_2} icon-volume-down`,
    SPAN_VOLUME_OFF:  `${ANIMATION_NAME.SPAN_3} icon-volume-off`,

};

export const CLASS_NAME_DINAMIC_CIRCLES = 'dinamic_circles';

export const CERCLES = [
    {
        start_diameter: 0.9 , // коефициент
        magnification_factor: 2.3,   // коефициент
        color: '#b8e5f3',
        borderWidth: 1,             // px
        deley: SPEED_ANUMATION * 0.1, 
        speed: SPEED_ANUMATION * 0.4
    },
    {
        start_diameter: 0.6 , // коефициент
        magnification_factor: 2.5,   // коефициент
        color: '#b8e5f3',
        borderWidth: 1,             // px
        deley: SPEED_ANUMATION * 0.2, 
        speed: SPEED_ANUMATION * 0.8
    },

];





