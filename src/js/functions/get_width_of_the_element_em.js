export const get_width_of_the_element_em = ( elem ) => {

    let style = window.getComputedStyle( elem );

    let width =         Math.abs( Number( parseFloat( style.width ) ) );
    
    let borderLeft =    Math.abs( Number( parseFloat( style.borderLeftWidth ) ) );
    let borderRight =   Math.abs( Number( parseFloat( style.borderRightWidth ) ) );
    let paddingLeft =   Math.abs( Number( parseFloat( style.paddingLeft ) ) );
    let paddingRight =  Math.abs( Number( parseFloat( style.paddingRight ) ) );
    let marginLeft =    Math.abs( Number( parseFloat( style.marginLeft ) ) );
    let marginRight =   Math.abs( Number( parseFloat( style.marginRight ) ) );
    let fontSize =      Math.abs( Number( parseFloat( style.fontSize ) ) );

    let sum = width + borderLeft + borderRight + paddingLeft + paddingRight + marginLeft + marginRight;

    return sum/fontSize;
};