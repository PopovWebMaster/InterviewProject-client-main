
export const get_height_of_the_element_em = ( elem ) => {

    let style = window.getComputedStyle( elem );

    let height =        Math.abs( Number( parseFloat( style.height ) ) );
    let borderTop =     Math.abs( Number( parseFloat( style.borderTopWidth ) ) );
    let borderBottom =  Math.abs( Number( parseFloat( style.borderBottomWidth ) ) );
    let paddingTop =    Math.abs( Number( parseFloat( style.paddingTop ) ) );
    let paddingBottom = Math.abs( Number( parseFloat( style.paddingBottom ) ) );
    let marginTop =     Math.abs( Number( parseFloat( style.marginTop ) ) );
    let marginBottom =  Math.abs( Number( parseFloat( style.marginBottom ) ) );
    let fontSize =      Math.abs( Number( parseFloat( style.fontSize ) ) );

    let sum = height + borderTop + borderBottom + paddingTop + paddingBottom + marginTop + marginBottom;

    return sum/fontSize;
};